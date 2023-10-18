import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, int, varchar, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authors = mysqlTable("authors", {
	id: int("id").autoincrement().notNull(),
	email: varchar("email", { length: 255 }).notNull(),
},
(table) => {
	return {
		authorsId: primaryKey(table.id),
		author: unique("author").on(table.email),
	}
});

export const files = mysqlTable("files", {
	id: int("id").autoincrement().notNull(),
	file: varchar("file", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	postId: int("post_id"),
	avatarId: int("avatar_id"),
},
(table) => {
	return {
		filesId: primaryKey(table.id),
		url: unique("url").on(table.file),
	}
});

export const post = mysqlTable("post", {
	id: varchar("id", { length: 50 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		postId: primaryKey(table.id),
		title: unique("title").on(table.title),
	}
});