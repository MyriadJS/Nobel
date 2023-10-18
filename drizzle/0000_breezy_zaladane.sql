-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `authors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `authors_id` PRIMARY KEY(`id`),
	CONSTRAINT `author` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `files` (
	`id` int AUTO_INCREMENT NOT NULL,
	`file` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT now(),
	`post_id` int,
	`avatar_id` int,
	CONSTRAINT `files_id` PRIMARY KEY(`id`),
	CONSTRAINT `url` UNIQUE(`file`)
);
--> statement-breakpoint
CREATE TABLE `post` (
	`id` varchar(50) NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT now(),
	`updated_at` timestamp NOT NULL DEFAULT now(),
	CONSTRAINT `post_id` PRIMARY KEY(`id`),
	CONSTRAINT `title` UNIQUE(`title`)
);

*/