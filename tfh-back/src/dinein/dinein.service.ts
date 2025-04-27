import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateDineInDto } from './dto/create-dinein.dto';
import { CouchbaseService } from 'src/database/couchbase/couchbase.service';

@Injectable()
export class DineInService {
  constructor(private readonly couchbaseService: CouchbaseService) {}

  async submitDineIn(createDineInDto: CreateDineInDto) {
    await this.couchbaseService.init();
    const collection = this.couchbaseService.getCollection('dinein'); // ⬅️ Getting collection "dinein"

    try {
      // Check if a DineIn with the same email already exists
      const query = `
        SELECT META(d).id
        FROM \`The-Foodyssey-Haven\`.App.dinein d
        WHERE d.email = $email
        LIMIT 1
      `;
      const result = await this.couchbaseService.query(query, {
        parameters: { email: createDineInDto.email },
      });

      if (result.rows.length > 0) {
        throw new ConflictException('DineIn with this email already exists');
      }

      // Insert new DineIn
      const id = `dinein::${uuidv4()}`;
      const document = {
        ...createDineInDto,
        createdAt: new Date(),
      };

      await collection.insert(id, document);

      return {
        message: 'DineIn submitted successfully',
        data: { id, ...document },
      };
    } catch (error) {
      console.error('Error in DineInService:', error);
      throw new InternalServerErrorException('Failed to submit DineIn');
    }
  }
}
