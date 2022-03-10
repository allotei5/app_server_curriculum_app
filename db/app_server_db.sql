-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 08, 2022 at 03:14 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_server_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_server_application`
--

CREATE TABLE `app_server_application` (
  `app_id` int(11) NOT NULL,
  `app_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_server_application`
--

INSERT INTO `app_server_application` (`app_id`, `app_name`) VALUES
(1, 'administrator');

-- --------------------------------------------------------

--
-- Table structure for table `app_server_department`
--

CREATE TABLE `app_server_department` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `department_code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_server_department`
--

INSERT INTO `app_server_department` (`department_id`, `department_name`, `department_code`) VALUES
(1, 'Computer Science & Information Systems', 'CSIS'),
(2, 'Humanities & Social Sciences', 'HSS'),
(3, 'Business Administration', 'BA'),
(4, 'Engineering', 'ENG');

-- --------------------------------------------------------

--
-- Table structure for table `app_server_major`
--

CREATE TABLE `app_server_major` (
  `major_id` int(11) NOT NULL,
  `major_name` varchar(50) NOT NULL,
  `major_code` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_server_major`
--

INSERT INTO `app_server_major` (`major_id`, `major_name`, `major_code`) VALUES
(1, 'BSc. Computer Science', 'CS'),
(2, 'BSc. Management Information Systems', 'MIS'),
(3, 'BSc. Business Administration', 'BA'),
(4, 'BSc. Computer Engineering', 'CE'),
(5, 'BSc. Electrical & Electronic Engineering', 'EE'),
(6, 'BSc. Mechanical Engineering', 'ME');

-- --------------------------------------------------------

--
-- Table structure for table `app_server_permission`
--

CREATE TABLE `app_server_permission` (
  `permission_id` int(11) NOT NULL,
  `permission_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_server_permission`
--

INSERT INTO `app_server_permission` (`permission_id`, `permission_name`) VALUES
(1, 'read'),
(2, 'write'),
(3, 'execute');

-- --------------------------------------------------------

--
-- Table structure for table `app_server_role`
--

CREATE TABLE `app_server_role` (
  `user_role_id` int(11) NOT NULL,
  `user_role_name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_server_role`
--

INSERT INTO `app_server_role` (`user_role_id`, `user_role_name`) VALUES
(1, 'faculty'),
(2, 'staff'),
(3, 'faculty intern'),
(4, 'student'),
(5, 'alumni');

-- --------------------------------------------------------

--
-- Table structure for table `app_server_status`
--

CREATE TABLE `app_server_status` (
  `user_status_id` int(11) NOT NULL,
  `status_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_server_status`
--

INSERT INTO `app_server_status` (`user_status_id`, `status_name`) VALUES
(1, 'active'),
(2, 'pending'),
(3, 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `app_server_users`
--

CREATE TABLE `app_server_users` (
  `user_id` int(11) NOT NULL,
  `user_fname` varchar(20) NOT NULL,
  `user_lname` varchar(20) NOT NULL,
  `user_gender` varchar(10) NOT NULL,
  `user_image` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_pass` varchar(200) NOT NULL,
  `user_role` int(11) NOT NULL,
  `user_status` int(11) NOT NULL,
  `date_added` date NOT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `date_modified` date DEFAULT NULL,
  `loginattempt` int(11) DEFAULT NULL,
  `loginattemptdate` date DEFAULT NULL,
  `lastlogindate` datetime DEFAULT NULL,
  `pass_expiry_attempt` int(11) DEFAULT NULL,
  `pass_reset_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_server_user_permission`
--

CREATE TABLE `app_server_user_permission` (
  `permission_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `user_permission_id` int(11) NOT NULL,
  `permission_status` int(11) NOT NULL,
  `date_requested` datetime NOT NULL,
  `date_approved` datetime DEFAULT NULL,
  `approved_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_server_user_phone`
--

CREATE TABLE `app_server_user_phone` (
  `user_id` int(11) NOT NULL,
  `user_phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_server_year_group`
--

CREATE TABLE `app_server_year_group` (
  `year_group_id` int(11) NOT NULL,
  `year_group_name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_server_application`
--
ALTER TABLE `app_server_application`
  ADD PRIMARY KEY (`app_id`);

--
-- Indexes for table `app_server_department`
--
ALTER TABLE `app_server_department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `app_server_major`
--
ALTER TABLE `app_server_major`
  ADD PRIMARY KEY (`major_id`);

--
-- Indexes for table `app_server_permission`
--
ALTER TABLE `app_server_permission`
  ADD PRIMARY KEY (`permission_id`);

--
-- Indexes for table `app_server_role`
--
ALTER TABLE `app_server_role`
  ADD PRIMARY KEY (`user_role_id`);

--
-- Indexes for table `app_server_status`
--
ALTER TABLE `app_server_status`
  ADD PRIMARY KEY (`user_status_id`);

--
-- Indexes for table `app_server_users`
--
ALTER TABLE `app_server_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD KEY `modified_by` (`modified_by`),
  ADD KEY `user_role` (`user_role`),
  ADD KEY `user_status` (`user_status`);

--
-- Indexes for table `app_server_user_permission`
--
ALTER TABLE `app_server_user_permission`
  ADD PRIMARY KEY (`permission_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `application_id` (`application_id`),
  ADD KEY `approved_by` (`approved_by`),
  ADD KEY `user_permission_id` (`user_permission_id`),
  ADD KEY `permission_status` (`permission_status`);

--
-- Indexes for table `app_server_user_phone`
--
ALTER TABLE `app_server_user_phone`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `app_server_year_group`
--
ALTER TABLE `app_server_year_group`
  ADD PRIMARY KEY (`year_group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_server_application`
--
ALTER TABLE `app_server_application`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `app_server_department`
--
ALTER TABLE `app_server_department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `app_server_major`
--
ALTER TABLE `app_server_major`
  MODIFY `major_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `app_server_permission`
--
ALTER TABLE `app_server_permission`
  MODIFY `permission_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `app_server_role`
--
ALTER TABLE `app_server_role`
  MODIFY `user_role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `app_server_status`
--
ALTER TABLE `app_server_status`
  MODIFY `user_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `app_server_users`
--
ALTER TABLE `app_server_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_server_user_permission`
--
ALTER TABLE `app_server_user_permission`
  MODIFY `permission_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_server_year_group`
--
ALTER TABLE `app_server_year_group`
  MODIFY `year_group_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_server_users`
--
ALTER TABLE `app_server_users`
  ADD CONSTRAINT `app_server_users_ibfk_1` FOREIGN KEY (`modified_by`) REFERENCES `app_server_users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `app_server_users_ibfk_2` FOREIGN KEY (`user_role`) REFERENCES `app_server_role` (`user_role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `app_server_users_ibfk_3` FOREIGN KEY (`user_status`) REFERENCES `app_server_status` (`user_status_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `app_server_user_permission`
--
ALTER TABLE `app_server_user_permission`
  ADD CONSTRAINT `app_server_user_permission_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `app_server_users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `app_server_user_permission_ibfk_2` FOREIGN KEY (`application_id`) REFERENCES `app_server_application` (`app_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `app_server_user_permission_ibfk_3` FOREIGN KEY (`approved_by`) REFERENCES `app_server_users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `app_server_user_permission_ibfk_4` FOREIGN KEY (`user_permission_id`) REFERENCES `app_server_permission` (`permission_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `app_server_user_permission_ibfk_5` FOREIGN KEY (`permission_status`) REFERENCES `app_server_status` (`user_status_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `app_server_user_phone`
--
ALTER TABLE `app_server_user_phone`
  ADD CONSTRAINT `app_server_user_phone_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `app_server_users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
