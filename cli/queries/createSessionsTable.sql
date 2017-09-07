CREATE TABLE IF NOT EXISTS `Sessions` (
  `sid` VARCHAR(32) , 
  `expires` DATETIME, 
  `data` TEXT, 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`sid`)
) ENGINE=InnoDB;