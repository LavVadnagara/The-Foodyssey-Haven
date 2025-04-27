// src/user-rl/user-rl.service.ts
import { Injectable, ConflictException, NotFoundException, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { CouchbaseService } from 'src/database/couchbase/couchbase.service';

@Injectable()
export class UserRlService {
  constructor(private readonly couchbaseService: CouchbaseService) {}

  async registerUser(createUserDto: CreateUserDto) {
    const { username, email, number, password } = createUserDto;
    const collection = this.couchbaseService.getCollection('users');

    if ([username, email, number, password].some(f => !f || f.trim() === '')) {
      throw new ConflictException('All fields are required');
    }

    try {
      const query = `
        SELECT META().id
        FROM \`The-Foodyssey-Haven\`
        WHERE email = $email
        LIMIT 1
      `;
      const result = await this.couchbaseService.query(query, {
        parameters: { email },
      });

      if (result.rows.length > 0) {
        throw new ConflictException('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const id = uuidv4();
      const newUser = {
        username,
        email,
        number,
        password: hashedPassword,
        createdAt: new Date(),
      };

      await collection.insert(id, newUser);

      return {
        message: 'User created successfully',
        data: { id, ...newUser },
      };
    } catch (error) {
      console.error('Error in registerUser:', error);
      throw new InternalServerErrorException('Failed to register user');
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    if (!email || !password) {
      throw new ConflictException('Email and password are required');
    }

    try {
      const query = `
        SELECT META().id, username, email, \`number\`, \`password\`
        FROM \`The-Foodyssey-Haven\`.\`App\`.\`Users\`
        WHERE email = $email
        LIMIT 1
      `;
      const result = await this.couchbaseService.query(query, {
        parameters: { email },
      });

      if (result.rows.length === 0) {
        throw new NotFoundException('User not found');
      }

      const user = result.rows[0];

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid password');
      }

      return {
        message: `Login for ${email} successful`,
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          number: user.number,
        },
      };
    } catch (error) {
      console.error('Error in loginUser:', error);
      throw new InternalServerErrorException('Failed to login user');
    }
  }

  async findByEmail(email: string) {
    try {
      const query = `
        SELECT META().id, username, email, number, password
        FROM \`The-Foodyssey-Haven\`
        WHERE email = $email
        LIMIT 1
      `;

      const result = await this.couchbaseService.executeQuery(query, { email });

      if (result.rows.length === 0) {
        return null;
      }

      const userDoc = result.rows[0];
      return {
        id: userDoc.id,
        username: userDoc.username,
        email: userDoc.email,
        number: userDoc.number,
        password: userDoc.password,
      };
    } catch (error) {
      console.error('Error in findByEmail:', error);
      throw new InternalServerErrorException('Failed to find user by email');
    }
  }
}
