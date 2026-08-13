import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(), name: text("name").notNull(), contact: text("contact").notNull(),
  origin: text("origin").notNull().default(""), interest: text("interest").notNull().default(""),
  placeName: text("place_name").notNull().default(""), category: text("category").notNull().default(""),
  note: text("note").notNull().default(""), status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
