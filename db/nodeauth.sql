-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3325
-- Generation Time: Nov 29, 2018 at 09:29 AM
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
-- Table structure for table `applied`
--

CREATE TABLE `applied` (
  `id` int(11) NOT NULL,
  `cid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `branch` varchar(255) NOT NULL,
  `section` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `registration` varchar(255) DEFAULT NULL,
  `year` varchar(5) DEFAULT NULL,
  `cgpa` varchar(10) DEFAULT NULL,
  `percentage` varchar(10) DEFAULT NULL,
  `mark` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `registration`, `year`, `cgpa`, `percentage`, `mark`) VALUES
(37, 'google', '23', '2018', '9', '68', '79'),
(39, 'infosys', '23', '2018', '8', '67', '90');

-- --------------------------------------------------------

--
-- Table structure for table `main`
--

CREATE TABLE `main` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` binary(60) NOT NULL,
  `is_admin` int(1) NOT NULL DEFAULT '0',
  `is_student` int(1) NOT NULL DEFAULT '0',
  `is_company` int(1) NOT NULL DEFAULT '0',
  `is_teacher` int(1) NOT NULL DEFAULT '0',
  `is_complete` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `main`
--

INSERT INTO `main` (`id`, `username`, `email`, `password`, `is_admin`, `is_student`, `is_company`, `is_teacher`, `is_complete`) VALUES
(31, 'bikash1112', 'b@mail.com', 0x2432612431302452436b63356a7a656c67576d645756497751686d5375466c4332736651747750352f50463639504941394a58736b304c7876413432, 0, 1, 0, 0, 0),
(32, 'bikash', 'thapa@gmail.com', 0x243261243130244e346e506d78636d4b6f7642324f6b694644775a3275716341754b796452764c5655656e5a4a5552676d34492e422f457146544447, 0, 1, 0, 0, 0),
(33, 'admin', 'admin@mail.com', 0x2432612431302452436b63356a7a656c67576d645756497751686d5375466c4332736651747750352f50463639504941394a58736b304c7876413432, 1, 0, 0, 0, 0),
(34, 'rahul', 'dkrk@gmail.com', 0x243261243130244c7173507046685767454c6e58764b7834374467642e336b594f527a355a567635336a366a576a75762e393332696e436962367075, 0, 1, 0, 0, 0),
(35, 'akshay', 'akki@gmail.com', 0x243261243130245a6247384d5577486f474a6b584e70672f316b58322e7965557444635434546b6570635656752f464c64437a5865625a5130706e61, 0, 1, 0, 0, 0),
(36, 'abhinav', 'abhibgs@gmail.com', 0x243261243130244d793962314a3769796379544833715a562f454d774f4b654c6175644d30672f4658666b564c6a493532716179634f79413054324b, 0, 0, 0, 1, 0),
(37, 'google', 'google@gmail.com', 0x2432612431302463737564334978344738476c6177757946456a507675355832514c36747a6c30616c7a576d7978637a7875746a4a4f4a37626f7957, 0, 0, 1, 0, 0),
(38, 'rahul', 'dkrk@gmail.com', 0x2432612431302478736e7337565676696a656762346b79425059304c4f6d67574158687a515230796f4e75666952444646537a694346764134656761, 0, 1, 0, 0, 0),
(39, 'infosys', 'info@gmail.com', 0x2432612431302450584c5866735645576f4d546a52484f724876426c655a6964464445586b59676e677353516d5532526c6b32367941455a546c362e, 0, 0, 1, 0, 0),
(40, 'hari123', 'Hari@gmail.com', 0x2432612431302431655045423442324266454168504e5041723754752e5a3634694849537545724e4f524e5a50667a4a346b42752f7a56664e766953, 0, 1, 0, 0, 0),
(41, 'bikash44', 'b@thapa.com', 0x24326124313024664b5732423635643069775348457a534470396945656a4475614f4254755639483034446c4d5764767136756c4c31355247686c36, 0, 1, 0, 0, 0),
(42, 'bikash212', 'thaa@gmail.com', 0x243261243130244b5068396f576b6c63716c57307254706e33396b464f386e647366636f526a726171496b62646f55443663454d62796c4467536853, 0, 1, 0, 0, 0),
(43, 'hari111', 'hari@gmail.com', 0x24326124313024634c746243547a4675712f56305937325532445831656d396c364b707a6d6f396b6869625377486f35335775582e786f6d31333836, 0, 1, 0, 0, 0),
(44, 'anubhav', 'anu@gmail.com', 0x2432612431302444646a4a42526c7a49504a567a71396f6f31794b4265446730396574637a446a476532633671516f75397961476e4c4a4f57447636, 0, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `placed`
--

CREATE TABLE `placed` (
  `sid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `section` varchar(11) DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `cname` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `placed`
--

INSERT INTO `placed` (`sid`, `name`, `cid`, `section`, `department`, `cname`, `status`) VALUES
(32, 'bikash thapa', 37, 'A', 'cse', 'google', 0),
(43, 'Hari Shankar', 37, 'A', 'cse', 'google', 0),
(32, 'bikash thapa', 37, 'A', 'cse', 'google', 0),
(32, 'bikash thapa', 39, 'A', 'cse', 'infosys', 0),
(43, 'Hari Shankar', 39, 'A', 'cse', 'infosys', 1),
(32, 'bikash thapa', 39, 'A', 'cse', 'infosys', 1),
(44, 'anubhav kumar', 37, 'A', 'cse', 'google', 1);

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
('tpm5GO_8U7XH8yxhQ3KDbjC2friFChJm', 1543566457, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"main_id\":33,\"is_admin\":1,\"is_student\":0,\"is_teacher\":0,\"is_company\":0}}}'),
('yrNbak7xhWQsSsSSVpRsrxNwtzgH7ybf', 1543516790, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"main_id\":33,\"is_admin\":1,\"is_student\":0,\"is_teacher\":0,\"is_company\":0}}}');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `usn` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneno` varchar(10) DEFAULT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `section` varchar(10) DEFAULT NULL,
  `branch` varchar(10) DEFAULT NULL,
  `year_of_passing` varchar(10) DEFAULT NULL,
  `backlog` varchar(10) DEFAULT NULL,
  `cgpa` varchar(10) DEFAULT NULL,
  `percentage` varchar(10) DEFAULT NULL,
  `mark` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `usn`, `email`, `phoneno`, `dob`, `sex`, `section`, `branch`, `year_of_passing`, `backlog`, `cgpa`, `percentage`, `mark`) VALUES
(32, 'bikash thapa', '1st16cs710', 'thapa@gmail.com', '0888498740', '15/2/2000', 'male', 'A', 'cse', '2012', 'A', '22', '222', '22'),
(35, 'akshay kumar', '1st16cs714', 'akki@gmail.com', '0888498740', '15/2/2000', 'male', 'A', 'cse', '2014', 'A', '8', '67', '79'),
(42, 'BIkash', 'Thapa', 'thapabikash48@gmail.com', '89898', '12/34/54', 'male', 'A', 'cse', '2202', 'A', '22', '22', '22'),
(43, 'Hari Shankar', '1st16cs716', 'hari@gmail.com', '498989', '12/34/54', 'male', 'A', 'cse', '220', 'A', '12', '12', '12'),
(44, 'anubhav kumar', '1st16cs710', '2xdiscounts@gmail.com', '8792626018', '12/34/54', 'male', 'A', 'cse', '2018', 'A', '12', '12', '12');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `age` varchar(5) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `department`, `age`, `sex`) VALUES
(36, 'abhinav singh', 'cse', '32', 'male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applied`
--
ALTER TABLE `applied`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD KEY `id` (`id`);

--
-- Indexes for table `main`
--
ALTER TABLE `main`
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
  ADD KEY `id` (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applied`
--
ALTER TABLE `applied`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `main`
--
ALTER TABLE `main`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`id`) REFERENCES `main` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`id`) REFERENCES `main` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`id`) REFERENCES `main` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
