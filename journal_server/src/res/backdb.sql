-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: my_journal
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Journal`
--

DROP TABLE IF EXISTS `Journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Journal` (
  `journal_id` int NOT NULL AUTO_INCREMENT,
  `collect_id` int NOT NULL,
  `url` varchar(45) DEFAULT NULL,
  `count_click` int DEFAULT NULL,
  `publish_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`journal_id`),
  UNIQUE KEY `journal_id_UNIQUE` (`journal_id`),
  UNIQUE KEY `url_UNIQUE` (`url`),
  KEY `collect_id_idx` (`collect_id`),
  CONSTRAINT `collect_id` FOREIGN KEY (`collect_id`) REFERENCES `JournalSeries` (`collect_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Journal`
--

LOCK TABLES `Journal` WRITE;
/*!40000 ALTER TABLE `Journal` DISABLE KEYS */;
INSERT INTO `Journal` VALUES (3,1,'Vogue-CN-202109.webp',45,'2021-09'),(4,1,'Vogue-CN-202112.webp',33,'2021-12'),(5,3,'Vogue-JP-202205.webp',18,'2022-05'),(6,3,'Vogue-JP-202206.webp',5,'2022-06'),(7,2,'Vogue-NL-202206.webp',7,'2022-06'),(8,4,'HarvardBusinessReview202204.webp',3,'2022-04'),(9,4,'HarvardBusinessReview202205.webp',4,'2022-05'),(10,5,'3D-World-202006.webp',9,'2020-06'),(11,5,'3D-World-UK-201705.webp',4,'2017-05'),(12,6,'Cycle-Sports-202205.webp',3,'2022-05'),(13,6,'Cycle-Sports-202206.webp',8,'2022-06');
/*!40000 ALTER TABLE `Journal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `JournalSeries`
--

DROP TABLE IF EXISTS `JournalSeries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `JournalSeries` (
  `collect_id` int NOT NULL AUTO_INCREMENT,
  `journal_name` varchar(45) NOT NULL,
  `kind_id` varchar(45) NOT NULL,
  `journal_type` varchar(45) DEFAULT NULL,
  `description` varchar(120) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `kind_name` varchar(45) DEFAULT NULL,
  `kind_nameCN` varchar(45) DEFAULT NULL,
  `journal_type_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`collect_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `JournalSeries`
--

LOCK TABLES `JournalSeries` WRITE;
/*!40000 ALTER TABLE `JournalSeries` DISABLE KEYS */;
INSERT INTO `JournalSeries` VALUES (1,'Vogue','1','2','《服饰与美容VOGUE》创刊于2005年，是中国内地杂志《服饰与美容》与美国康泰纳仕出版集团《VOGUE》版权合作的时尚类杂志，在中国内地出版发行。','CHINA','famous fansion journal','CH','5','fansion','时尚生活','月刊'),(2,'Vogue','1','2','知名Vogue杂志','NETHLAND','famous fansion journal','DU','5','fansion','时尚生活','月刊'),(3,'Vogue','1','2','日本版Vogue杂志','JAPAN','famous fansion journal','JA','3','fansion','时尚生活','月刊'),(4,'HarvardBusinessReview','2','2','《哈佛商业评论（Harvard Business Review，简称HBR）是1922年社会科学文献出版社出版的杂志，是哈佛商学院的标志性杂志。建立之初，它的使命就是致力于改进管理实践。','USA','business comments journal','CH','4','economic','财经管理','月刊'),(5,'3Dworld','4','2','3D World is designed for all CG artists, covering animation, VFX, games and arch-viz. Every month, enjoy new tutorials','UK','game journal','EN','6','game','电子游戏','月刊'),(6,'CycleSports','3','2','一起来骑行吧！','JAPAN','cycling sport journal','JA','2','sport','运动健康','月刊'),(11,'Peaks','3','2','一起来登山','JAPAN','climbing sport journal','JA','6','sport','运动健康','月刊');
/*!40000 ALTER TABLE `JournalSeries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) DEFAULT NULL,
  `userAccount` varchar(45) NOT NULL,
  `userPassword` varchar(45) NOT NULL,
  `userStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userAccount_UNIQUE` (`userAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (14,'','18553523055@163.com','123456',1),(20,'','312092898@qq.com','123456',1),(23,'','4455234131@163.com','123456',1),(24,'','3132131231@mm.com','12345678',1),(25,'','32432131231@123.com','12345678',1),(26,'','66553523055@163.com','1234567',1),(28,'','15253523100@163.com','1234567',1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-09 22:28:06
