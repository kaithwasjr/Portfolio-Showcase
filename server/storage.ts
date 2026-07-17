import { db } from "./db";
import { desc } from "drizzle-orm";
import {
  messages,
  type InsertMessage,
  type Message
} from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  listMessages(): Promise<Message[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async listMessages(): Promise<Message[]> {
    return await db.select().from(messages).orderBy(desc(messages.createdAt));
  }
}

export const storage = new DatabaseStorage();