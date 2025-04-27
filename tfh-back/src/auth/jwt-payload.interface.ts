// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
    username: string;
    sub: string; // This will be the user's ID
  }
  