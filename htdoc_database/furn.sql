-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2023 at 06:18 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furn`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `msg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `mobile`, `subject`, `msg`) VALUES
(1, 'Aviha', 'aviha@gmail.com', '0183757557', 'hi', ''),
(2, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(3, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', '', ''),
(4, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(5, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', '', ''),
(6, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(7, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(8, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'fjjlskdfkj', ''),
(9, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(10, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'fjjlskdfkj', ''),
(11, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(12, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(13, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(14, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'hi', ''),
(15, 'arabi hamid', 'ashkaiser@gmail.com', '0183757557', 'wlcm', '');

-- --------------------------------------------------------

--
-- Table structure for table `fproduct`
--

CREATE TABLE `fproduct` (
  `id` int(11) NOT NULL,
  `fimage` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `fmoney` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fproduct`
--

INSERT INTO `fproduct` (`id`, `fimage`, `fname`, `fmoney`) VALUES
(2, 'assets/images/features/f2.jpg', 'dinning table', '200.00'),
(3, 'assets/images/features/f3.jpg', 'chair and table', '100.00'),
(4, 'assets/images/features/f4.jpg', 'modern arm chair', '299.00'),
(5, 'assets/images/features/f1.jpg\r\n', 'Designed Sofa', '350.00');

-- --------------------------------------------------------

--
-- Table structure for table `latestblog`
--

CREATE TABLE `latestblog` (
  `id` int(11) NOT NULL,
  `lbimage` varchar(255) NOT NULL,
  `lbheading` varchar(255) NOT NULL,
  `lbname` varchar(255) NOT NULL,
  `lbdate` date NOT NULL,
  `lbdescription` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `latestblog`
--

INSERT INTO `latestblog` (`id`, `lbimage`, `lbheading`, `lbname`, `lbdate`, `lbdescription`) VALUES
(1, 'assets/images/blog/b1.jpg', 'Why Brands are Looking at Local Language', 'By Robert Norby /', '2018-03-18', 'Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....'),
(2, 'assets/images/blog/b2.jpg', 'Why Brands are Looking at Local Language', 'By Robert Norby /', '2018-09-19', 'Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....'),
(3, 'assets/images/blog/b3.jpg', 'Why Brands are Looking at Local Language', 'By Robert Norby /', '2019-09-10', 'Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....');

-- --------------------------------------------------------

--
-- Table structure for table `narrival`
--

CREATE TABLE `narrival` (
  `id` int(255) NOT NULL,
  `nimage` varchar(255) NOT NULL,
  `nname` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `narrival`
--

INSERT INTO `narrival` (`id`, `nimage`, `nname`, `price`) VALUES
(1, 'assets/images/collection/arrivals1.png', 'wooden chair', '65.00'),
(2, 'assets/images/collection/arrivals2.png', 'single armchair', '80.00'),
(3, 'assets/images/collection/arrivals3.png', 'wooden armchair', '40.00'),
(4, 'assets/images/collection/arrivals4.png', 'stylish chair', '100.00'),
(5, 'assets/images/collection/arrivals5.png', 'modern chair', '120.00'),
(6, 'assets/images/collection/arrivals6.png', 'mapple wood dinning table', '140.00'),
(7, 'assets/images/collection/arrivals7.png', 'arm chair', '90.00'),
(8, 'assets/images/collection/arrivals8.png', 'wooden bed', '140.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `image`) VALUES
(1, 'Kamal', 'kamal@yahoo.com', '123', '144asdfas4df4as2df1asdfkahsdiufuy8w745934432', ''),
(3, 'Noman Hossain', 'noman@yahoo.com', '123', '1695538135823noman@yahoo.com', ''),
(4, 'Rabiul Hossein', 'rabiul@gmail.com', '123', '1695538315581f68564f048190f8768f82b0cfe10670e', ''),
(5, 'Arabi', 'isdbstudent@gmail.com', '', '1695626806264c4a54e2e481d149a60c6e8a56479a30e', ''),
(9, 'arabi hamid', 'isdbstudent@gmail.com', '', '1695626896583c4a54e2e481d149a60c6e8a56479a30e', ''),
(10, 'jasim', 'jasimuddinm180@gmail.com', '', '1695627040560b2a8d5b4c727bc53859faf9c75293112', ''),
(11, 'arabi hamid', 'jasimuddinm180@gmail.com', '123', '1695627479548b2a8d5b4c727bc53859faf9c75293112', ''),
(12, 'Aviha', 'aviha@gmail.com', '321', '1695627650492d097825fe271e8e1258ef74ab485606e', ''),
(13, 'arabi hamid', 'aviha@gmail.com', '987', '1695628259120d097825fe271e8e1258ef74ab485606e', ''),
(14, 'SAfira', 'safira@gamil.com', '1235678', '16956677353347cbbc8a5c05ce76148148cccc1ae51d3', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fproduct`
--
ALTER TABLE `fproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `latestblog`
--
ALTER TABLE `latestblog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `fproduct`
--
ALTER TABLE `fproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `latestblog`
--
ALTER TABLE `latestblog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
