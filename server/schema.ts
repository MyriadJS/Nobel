import { mysqlTable, mysqlSchema, AnyMySqlColumn, mysqlEnum, datetime, primaryKey, unique, int, varchar, timestamp } from "drizzle-orm/mysql-core"
import { sql, relations } from "drizzle-orm"

export const users = mysqlTable("users", {
  id: varchar("id", { length: 50 }).primaryKey().notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  avatar: int("file_id").notNull(),
  role: mysqlEnum("role", ["admin", "user"]).notNull().default("user"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const files = mysqlTable("files", {
	id: varchar("id", { length: 50 }).primaryKey().notNull(),
	url: varchar("url", { length: 255 }).notNull(),
	createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	userId: varchar("user_id", { length: 50 }).notNull(),
	postId: varchar("post_id", { length: 50 }).notNull(),
});

export const usersRelations = relations(users, ({ one, many }) => ({
	avatar: one(users, {
		fields: [files.userId],
		references: [users.id],
	})
}));

export const post = mysqlTable("post", {
	id: varchar("id", { length: 50 }).primaryKey().notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }).notNull(),
	createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: datetime("updated_at").default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`).notNull(),
	userId: varchar("user_id", { length: 50 }).notNull(),
});


export const usersx = mysqlTable('users', {
	id: varchar("id", { length: 50 }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});
 
export const usersxRelations = relations(usersx, ({ one, many }) => ({
	profileInfo: one(usersx, {
		fields: [profileInfo.userId],
		references: [users.id],
	}),
}));
 
export const profileInfo = mysqlTable('profile_info', {
	id: varchar("id", { length: 50 }).primaryKey().notNull(),
	userId: varchar("id", { length: 50 }),
	metadata: varchar("url", { length: 255 }),
});