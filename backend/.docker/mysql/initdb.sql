CREATE DATABASE IF NOT EXISTS micro_mapping;
CREATE TABLE IF NOT EXISTS `micro_mapping`.`orders` (
  `id` VARCHAR(255) NOT NULL,
  `driver_name` VARCHAR(255) NOT NULL,
  `location_id` SMALLINT NOT NULL,
  `location_geo` VARCHAR(255) NOT NULL,
  `status` SMALLINT NOT NULL,
  PRIMARY KEY (`id`)
);
