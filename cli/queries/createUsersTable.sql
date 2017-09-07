CREATE TABLE IF NOT EXISTS `User`(
  `id_user` INTEGER auto_increment,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `register_date` DATETIME, 
  `is_activated` TINYINT(1) DEFAULT false,
  `password_change_date` DATETIME DEFAULT NULL,
  `username_change_date` DATETIME DEFAULT NULL, 
  `RoleIdRole` INTEGER DEFAULT 1, UNIQUE `User_username_unique` (`username`),
  PRIMARY KEY (`id_user`), FOREIGN KEY (`RoleIdRole`) REFERENCES `Role` (`id_role`) 
  ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;