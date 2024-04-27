ALTER TABLE `users` RENAME COLUMN `username` TO `email`;--> statement-breakpoint
DROP INDEX IF EXISTS `users_github_id_unique`;--> statement-breakpoint
ALTER TABLE users ADD `password` text;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `github_id`;