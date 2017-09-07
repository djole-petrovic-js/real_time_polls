CREATE TABLE IF NOT EXISTS `Role` (
   `id_role` INTEGER auto_increment , 
   `role` VARCHAR(20) NOT NULL UNIQUE, 
   UNIQUE `Role_role_unique` (`role`), PRIMARY KEY (`id_role`)
) ENGINE=InnoDB;