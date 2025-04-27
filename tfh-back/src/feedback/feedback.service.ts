// src/feedback/feedback.service.ts
import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { CouchbaseService } from 'src/database/couchbase/couchbase.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly couchbaseService: CouchbaseService) {}

  async submitFeedback(createFeedbackDto: CreateFeedbackDto) {
    const collection = this.couchbaseService.getCollection('feedback');

    const { username, email, message } = createFeedbackDto;

    if ([username, email, message].some(field => !field || field.trim() === '')) {
      throw new ConflictException('All fields are required');
    }

    try {
      // Check if a document with the same email exists
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
        throw new ConflictException('Feedback with this email already exists');
      }

      // Insert new Feedback
      const id = uuidv4();
      const document = {
        username,
        email,
        message,
        createdAt: new Date(),
      };

      await collection.insert(id, document);

      return {
        message: 'Feedback submitted successfully',
        success: true,
        data: { id, ...document },
      };
    } catch (error) {
      console.error('Error in FeedbackService:', error);
      throw new InternalServerErrorException('Failed to submit feedback');
    }
  }
}
