-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: foodbox
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `food_items`
--

DROP TABLE IF EXISTS `food_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_items` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(100) DEFAULT NULL,
  `food_price` int DEFAULT NULL,
  `cuisine_id` int DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `is_available` varchar(45) DEFAULT NULL,
  `image_path` varchar(100) DEFAULT NULL,
  `available_quantity` int DEFAULT NULL,
  PRIMARY KEY (`food_id`),
  KEY `fk_cuisine_id_idx` (`cuisine_id`),
  CONSTRAINT `fk_cuisine_id` FOREIGN KEY (`cuisine_id`) REFERENCES `cuisines` (`cuisine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_items`
--

LOCK TABLES `food_items` WRITE;
/*!40000 ALTER TABLE `food_items` DISABLE KEYS */;
INSERT INTO `food_items` VALUES (1,'Chicken Tikka Masala',299,2,'Delicious chicken tikka masala. Serves upto 4','yes','/assets/ctikka.jpg',50),(4,'Chicken Biryani',400,2,'Delicious Chicken Biryani. Serves 2','yes','/assets/cbiryani.jpg',125),(5,'Pasta',399,5,'Delicious Pasta. Serves 1','yes','/assets/pasta.jpg',70),(6,'Turkey Sandwich',99,1,'Delicious sandwichhh. Serves 1','yes','/assets/tsandwich.jpg',100),(7,'Burritto',225,10,'Tasty chicken burritto with guacamole','yes','/assets/burrito.jpg',100),(10,'Egg Chowmein',399,3,'Tasty egg Chowmein with veggies. Serves 2','no','/assets/eggchowmein.jpg',120);
/*!40000 ALTER TABLE `food_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-14  9:18:39
