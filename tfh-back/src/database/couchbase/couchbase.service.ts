import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cluster, Bucket, Collection, connect } from 'couchbase';

@Injectable()
export class CouchbaseService implements OnModuleInit {
  private cluster: Cluster;
  private bucket: Bucket;

  async onModuleInit() {
    await this.init();
  }

  async init() {
    this.cluster = await connect('couchbase://127.0.0.1', {
      username: 'Administrator',
      password: 'admin123',
    });
    this.bucket = this.cluster.bucket('The-Foodyssey-Haven');
  }

  getCollection(_collectionName: string): Collection {
    if (!this.bucket) {
      throw new Error('Couchbase bucket is not initialized');
    }
    return this.bucket.scope('App').collection(_collectionName);
  }

  async query(statement: string, options?: any) {
    return this.cluster.query(statement, options); 
  }

  async executeQuery(query: string, params?: any) {
    const options = { 
      parameters: params, 
      timeout: 10000 // Timeout after 10 seconds
    };
  
    try {
      return await this.cluster.query(query, options);
    } catch (error) {
      console.error('Query failed:', error);
      throw new Error('Query execution failed');
    }
  }
}
