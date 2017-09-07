CREATE TABLE IF NOT EXISTS `BannedEmail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `banned_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `banned_email` (`banned_email`),
  UNIQUE KEY `BannedEmail_banned_email_unique` (`banned_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Choice` (
  `id_choice` int(11) NOT NULL AUTO_INCREMENT,
  `choice` varchar(50) NOT NULL,
  `number_of_votes` int(11) DEFAULT '0',
  `PollIdPoll` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_choice`),
  KEY `PollIdPoll` (`PollIdPoll`),
  CONSTRAINT `Choice_ibfk_1` FOREIGN KEY (`PollIdPoll`) REFERENCES `Poll` (`id_poll`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Poll` (
  `id_poll` int(11) NOT NULL AUTO_INCREMENT,
  `poll` varchar(50) NOT NULL,
  `votes` int(11) DEFAULT '0',
  `created_date` datetime DEFAULT NULL,
  `closed_at` datetime DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `show_username` tinyint(1) DEFAULT '1',
  `UserIdUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_poll`),
  UNIQUE KEY `poll` (`poll`),
  UNIQUE KEY `Poll_poll_unique` (`poll`),
  KEY `UserIdUser` (`UserIdUser`),
  CONSTRAINT `Poll_ibfk_1` FOREIGN KEY (`UserIdUser`) REFERENCES `User` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Role` (
  `id_role` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`id_role`),
  UNIQUE KEY `role` (`role`),
  UNIQUE KEY `Role_role_unique` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Sessions` (
  `sid` varchar(32) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Token` (
  `id_token` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `UserIdUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_token`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `Token_token_unique` (`token`),
  KEY `UserIdUser` (`UserIdUser`),
  CONSTRAINT `Token_ibfk_1` FOREIGN KEY (`UserIdUser`) REFERENCES `User` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `User` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `register_date` datetime DEFAULT NULL,
  `is_activated` tinyint(1) DEFAULT '0',
  `password_change_date` datetime DEFAULT NULL,
  `username_change_date` datetime DEFAULT NULL,
  `RoleIdRole` int(11) DEFAULT '1',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `User_username_unique` (`username`),
  KEY `RoleIdRole` (`RoleIdRole`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`RoleIdRole`) REFERENCES `Role` (`id_role`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `UserPoll` (
  `vote_date` datetime DEFAULT NULL,
  `PollIdPoll` int(11) NOT NULL,
  `UserIdUser` int(11) NOT NULL,
  `ChoiceIdChoice` int(11) DEFAULT NULL,
  PRIMARY KEY (`PollIdPoll`,`UserIdUser`),
  KEY `UserIdUser` (`UserIdUser`),
  KEY `ChoiceIdChoice` (`ChoiceIdChoice`),
  CONSTRAINT `UserPoll_ibfk_1` FOREIGN KEY (`PollIdPoll`) REFERENCES `Poll` (`id_poll`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserPoll_ibfk_2` FOREIGN KEY (`UserIdUser`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserPoll_ibfk_3` FOREIGN KEY (`ChoiceIdChoice`) REFERENCES `Choice` (`id_choice`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `Choice` (`id_choice`,`choice`,`number_of_votes`,`PollIdPoll`) VALUES (1,'kreksadasd',1,1);
INSERT INTO `Choice` (`id_choice`,`choice`,`number_of_votes`,`PollIdPoll`) VALUES (2,'meowzasda',0,1);

INSERT INTO `Poll` (`id_poll`,`poll`,`votes`,`created_date`,`closed_at`,`is_active`,`show_username`,`UserIdUser`) VALUES (1,'asdqwesdsad',1,'2017-08-08 12:53:26.000',NULL,1,1,1);

INSERT INTO `Role` (`id_role`,`role`) VALUES (2,'admin');
INSERT INTO `Role` (`id_role`,`role`) VALUES (1,'user');

INSERT INTO `Sessions` (`sid`,`expires`,`data`,`createdAt`,`updatedAt`) VALUES ('thWxwYd_8THAJE5nhPhszRTbxvO1dmhf','2017-08-12 20:01:03.000','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}','2017-08-11 15:36:21.000','2017-08-11 20:01:03.000');
INSERT INTO `Sessions` (`sid`,`expires`,`data`,`createdAt`,`updatedAt`) VALUES ('T_pQMzSsnCaI1nz3A5wE3M1zSxUJqv8w','2017-08-12 14:50:28.000','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}','2017-08-11 14:49:54.000','2017-08-11 14:50:28.000');
INSERT INTO `Sessions` (`sid`,`expires`,`data`,`createdAt`,`updatedAt`) VALUES ('VKKd-5RNdqU3FtF-N3g_wWubw3-jvhQs','2017-08-13 13:56:27.000','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}','2017-08-12 09:11:54.000','2017-08-12 13:56:27.000');
INSERT INTO `Sessions` (`sid`,`expires`,`data`,`createdAt`,`updatedAt`) VALUES ('Y7xL9vEgX-d-2weQv5Dux9P4ZKSZjyFk','2017-08-13 13:50:54.000','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":2}}','2017-08-12 11:47:05.000','2017-08-12 13:50:54.000');



INSERT INTO `User` (`id_user`,`username`,`password`,`email`,`register_date`,`is_activated`,`password_change_date`,`username_change_date`,`RoleIdRole`) VALUES (1,'djole','$2a$12$JLu528orey06sqYqweI8MuB8fuD9fQQGKnnFt1.oYM7p6I80rQD6S','djolescarface@gmail.com','2017-08-08 12:52:34.000',1,NULL,NULL,2);
INSERT INTO `User` (`id_user`,`username`,`password`,`email`,`register_date`,`is_activated`,`password_change_date`,`username_change_date`,`RoleIdRole`) VALUES (2,'kvek','$2a$12$ey956aejTFCH5vqSzx3T0.bcCG367c.1064ufWqDD8dJNuGnXnK1a','kvek@gmail.com','2017-08-08 12:52:35.000',1,NULL,NULL,2);
INSERT INTO `User` (`id_user`,`username`,`password`,`email`,`register_date`,`is_activated`,`password_change_date`,`username_change_date`,`RoleIdRole`) VALUES (3,'macka','$2a$12$sojHbSJ4x71ny7UfeMzj5eW8KFfRWgHG/d0C4CA.4.fjRA9EgC7ay','macka@gmail.com','2017-08-08 17:19:47.000',1,NULL,NULL,1);

INSERT INTO `UserPoll` (`vote_date`,`PollIdPoll`,`UserIdUser`,`ChoiceIdChoice`) VALUES ('2017-08-08 12:53:37.000',1,1,1);