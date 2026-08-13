CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`name` text NOT NULL,
	`contact` text NOT NULL,
	`origin` text DEFAULT '' NOT NULL,
	`interest` text DEFAULT '' NOT NULL,
	`place_name` text DEFAULT '' NOT NULL,
	`category` text DEFAULT '' NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
