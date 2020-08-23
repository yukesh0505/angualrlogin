-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 23, 2020 at 07:29 PM
-- Server version: 5.7.31-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `address1` text,
  `address2` text,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `created_by`, `name`, `email`, `phone`, `address1`, `address2`, `created_at`, `updated_at`) VALUES
(1, 2, 'aaa', 'yukesharavind008@gmail.com', NULL, NULL, NULL, '2020-08-22 20:47:00', '2020-08-22 15:17:00'),
(2, 2, 'aaa', 'yukesharavind0078@gmail.com', NULL, NULL, NULL, '2020-08-22 20:48:22', '2020-08-22 15:18:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `token` text,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `token`, `created_at`, `updated_at`) VALUES
(1, 'yukesh', '81dc9bdb52d04dc20036dbd8313ed055', 'yukesharavind007@gmail.com', '70a8be51d7524db2b71c19d0ae3f5f16', '2020-08-17 19:17:15', '2020-08-23 12:10:20'),
(2, 'ramesh', '81dc9bdb52d04dc20036dbd8313ed055', 'yukesharavind008@gmail.com', '2a79beef13d4b2236a42b88c852e55c0', '2020-08-22 19:27:30', '2020-08-23 09:04:10'),
(3, 'balu', '81dc9bdb52d04dc20036dbd8313ed055', 'balu@gmail.com', NULL, '2020-08-23 17:30:02', '2020-08-23 12:00:02'),
(4, 'sdfsdf', '81dc9bdb52d04dc20036dbd8313ed055', 'sdfsdf@sadasd.com', NULL, '2020-08-23 17:34:50', '2020-08-23 12:04:50'),
(5, 'dasd', '81dc9bdb52d04dc20036dbd8313ed055', 'asdasd@gmail.com', NULL, '2020-08-23 17:35:55', '2020-08-23 12:05:55'),
(6, 'sdfsf', '81dc9bdb52d04dc20036dbd8313ed055', 'sdfsdfgfgfdfg@gmail.com', NULL, '2020-08-23 17:40:04', '2020-08-23 12:10:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
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
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
