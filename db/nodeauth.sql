-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3325
-- Generation Time: Nov 01, 2018 at 04:56 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodeauth`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(20) NOT NULL,
  `name` varchar(60) NOT NULL,
  `registration` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `year` varchar(60) NOT NULL,
  `cgpa` varchar(60) NOT NULL,
  `percentage` varchar(20) NOT NULL,
  `mark` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `registration`, `password`, `year`, `cgpa`, `percentage`, `mark`) VALUES
(3, 'infosys', '12', '$2a$10$D7/ULdyhL3e.C', '1998', '6', '67', '56');

-- --------------------------------------------------------

--
-- Table structure for table `companyregistration`
--

CREATE TABLE `companyregistration` (
  `id` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('T4tD05l7uVceVdK-mKqIKQMq92a3305Q', 1541171047, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"teacherregistration_id\":1}}}');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `usn` varchar(60) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phoneno` varchar(60) NOT NULL,
  `dob` varchar(60) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `section` varchar(20) NOT NULL,
  `branch` varchar(20) NOT NULL,
  `year_of_passing` varchar(20) NOT NULL,
  `backlog` varchar(20) NOT NULL,
  `cgpa` varchar(20) NOT NULL,
  `percentage` varchar(20) NOT NULL,
  `mark` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `usn`, `email`, `password`, `phoneno`, `dob`, `sex`, `section`, `branch`, `year_of_passing`, `backlog`, `cgpa`, `percentage`, `mark`) VALUES
(3, 'bikash thapa', '1st16cs710', 'thapa@gmail.com', '$2a$10$qpRGNd2eVZzEh', '8660448710', '15/2/1996', 'male', 'A', 'cse', '2018', 'A', '8', '53', '56'),
(4, 'hari', '1st16cs720', 'hari@gmail.com', '$2a$10$A7NIUahIZWVOD', '8660448710', '15/2/1996', 'male', 'A', 'cse', '2018', 'A', '4', '34', '56'),
(5, 'sanjip mehta', '1st16cs723', 'abhin@gmail.com', '$2a$10$oEGbhxl9DByZZ', '8660448710', '15/2/1996', 'male', 'A', 'ise', '2017', 'A', '7', '54', '65'),
(6, 'aditi guleria', '1st16cs702', 'aditi@gmail.com', '$2a$10$.mYDs0k6gBJPq', '8660448710', '15/2/1996', 'female', 'A', 'cse', '2020', 'A', '8', '45', '667'),
(7, 'anappa kuredekar', '1st16cs703', 'anapp@gmail.com', '$2a$10$emfI187g218se', '8660448710', '15/2/1996', 'male', 'A', 'civil', '2016', 'A', '6', '89', '98'),
(8, 'anup jung sah', '1st16cs709', 'anup@gmail.com', '$2a$10$AMUAOKAsVTbt9', '7536', '15/2/1996', 'male', 'B', 'me', '2017', 'D', '6', '56', '98'),
(9, 'saurav raj', '1st16cs730', 'saurav@gmail.com', '$2a$10$SqtUuwYPYaSYD', '9548787183', '15/8/1998', 'male', 'B', 'ece', '2023', 'A', '7', '56', '33'),
(10, 'shiva devesh', '1st16cs743', 'shiva@gmail.com', '$2a$10$8kpGKQFww5Ir3', '9709506541', '15/8/1997', 'male', 'A', 'cse', '2019', 'A', '7', '80', '79');

-- --------------------------------------------------------

--
-- Table structure for table `studentregistration`
--

CREATE TABLE `studentregistration` (
  `id` int(20) NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentregistration`
--

INSERT INTO `studentregistration` (`id`, `username`, `email`, `password`) VALUES
(1, 'abhinav singh', 'abhibgs@gmail.com', '$2a$10$.QyFSId9PjuvB1uC8iWs9Oy8Lbf7i98sTI.KHAlGeKy0PWEJXkPG2'),
(2, 'rahul', 'dkrk@gmail.com', '$2a$10$LvzHbXH2q1ADspneZHYLseHVXxXfXAstNILIoLl31chQPqo1IlDlW'),
(3, 'abhinav singh', 'abhibgs@gmail.com', '$2a$10$XkHdqLCAENLrDQpxvH6E1.zPUa5pAI5eS5DGLOQjf5jDLA12sI8S.'),
(4, 'abhinav', 'abhin@gmail.com', '$2a$10$XR0qwjbJtcSyKRa1aT/gfOUlZnUPsAB215Fm5KNXoByNCThqTxguC');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `tid` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `department` varchar(60) NOT NULL,
  `age` varchar(60) NOT NULL,
  `sex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `tid`, `password`, `department`, `age`, `sex`) VALUES
(1, 'abhinav singh', '44', '$2a$10$1Tz4w89cYl9xz', 'ise', '24', 'male'),
(2, 'anubhav kumar', '48', '$2a$10$alngLXxxaFvpn', 'me', '34', 'male'),
(3, 'earana', '67', '$2a$10$iqvWQ30j4XTjl', 'cse', '54', 'male'),
(4, 'gubbal', '78', '$2a$10$gmFfioYqIR3uN', 'me', '30', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `teacherregistration`
--

CREATE TABLE `teacherregistration` (
  `id` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacherregistration`
--

INSERT INTO `teacherregistration` (`id`, `username`, `email`, `password`) VALUES
(1, 'abhinav singh', 'abhibgs@gmail.com', '$2a$10$WhpMB0yb1htxh5nSYYN1Q.3GoOadWgwzK1hdWRLvBUtMkIbwEdRxC');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` mediumint(9) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` binary(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(1, 'hari kumar', 'dkrk@gmail.com', 0x243261243130247246795761376866507a6b48384a556e2e70534d4e2e7a474b424f4c48434a4e705959762f5656773565314559576e6a654a744c61),
(2, 'hari kumar', 'dkrk@gmail.com', 0x24326124313024494e4966664a5077776c5561646f5642626d5a3952756e586a745742436754393252754542586444557a454755476c4c6670735975),
(3, 'hari kumar', 'dkrk@gmail.com', 0x24326124313024336a4f534858714b7a304c78424f68452f59694f6c4f36415834726b664932646946396a4f4c2e726d7561716b46504977564b442e),
(4, 'abhin', 'anu@gmail.com', 0x2432612431302443462e447933456451747053654a4d636c2e51694d4f376b6565366a5870304b3678574f364f2e557270726b536c765971424d7632),
(5, 'hari kumar', 'dkrk@gmail.com', 0x243261243130246b6a64356e647a6d7661677731454f31485033466b2e6a36426336464f49696a3149516d564778564d6c614877577470346d6a552e);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companyregistration`
--
ALTER TABLE `companyregistration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentregistration`
--
ALTER TABLE `studentregistration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacherregistration`
--
ALTER TABLE `teacherregistration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `companyregistration`
--
ALTER TABLE `companyregistration`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `studentregistration`
--
ALTER TABLE `studentregistration`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `teacherregistration`
--
ALTER TABLE `teacherregistration`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
