-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3325
-- Generation Time: Nov 09, 2018 at 04:24 PM
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
(NULL, 'ESCAPE INC', '0001', '2019', '8.0', '75', '60');

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
(1, 'bikash11', 'bikash@gmail.com', 0x24326124313024765542366545794c6b774336554a5378466363304a2e6d6a41332f66354b6b724d7173414b61526630303278462f3972774a4f7453, 0, 1, 0, 0, 0),
(2, 'bikash12', 'bikash@gmail.com', 0x243261243130244c2f674d344a7a69485630304c756e2f4562426577757375517045424b4e6f6f64444e50342f684d77504b3154765544555833482e, 0, 1, 0, 0, 0),
(3, 'bikash13', 'b@mail.com', 0x243261243130246c7567644d4c4d75766d366a36424549467a724459756a457750644d707a317766733632795a67537453463639474278594d696436, 0, 1, 0, 0, 0),
(4, 'bikash14', 'b@gmail.com', 0x243261243130244d6665756a3546792e4237373155564970657852317544797155514b5531664c796a70507659766363316f5579505048697979516d, 0, 1, 0, 0, 0),
(5, 'bikash112', 't@gmail.com', 0x243261243130246b627736754846564e6966344b54674c47726570334f41696b6648475231585049534a4a69496741554f397577573630476f587243, 0, 1, 0, 0, 0),
(6, 'teacher11', 't@gmail.com', 0x24326124313024435376555a2e6267647a71456b55746559526a314e654e7a38793667717a735a6b663279614353666d71735a566f57494139623447, 0, 0, 0, 1, 0),
(7, 'teach', 't@gmail.com', 0x243261243130246c357031567a6b4157646e64344c4b30323056493775554864353358674862736735756f4d36635361566c52524d6a326a4e315543, 0, 0, 0, 1, 0),
(8, 'teach11', 'f@gmail.com', 0x2432612431302465594c334375474b35314e4658507a6d2f452f6d424f70415134366958374b646d2f636a2e315970594b7a3836717a524465305175, 0, 0, 0, 1, 0),
(9, 'teach12', 'teach@gmail.com', 0x243261243130247443742e5455633567457166484734383531584c6c6556674c774b513546702f792e66433935564c7178312e7454513234376f4947, 0, 0, 0, 1, 0),
(10, 'bikash16', 'b@gmail.com', 0x243261243130247362764a4b4b684f59644265627865696f52626e7875314a2f586d4a794a41625148365162724a3979646d786a3665315852766579, 0, 1, 0, 0, 0),
(12, 'bikash20', 'b@gmail.com', 0x2432612431302434545635727331587443776833496e502f6a4f39397552436b6a66634b305a782e622f3444524a41426c724c35783851326139444f, 0, 1, 0, 0, 0);

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
('DfCN1zMIk4Rz6XEQWmdq_Hhd6FgVeRJo', 1541774591, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"main_id\":4}}}'),
('EzRVqHJh8_6h0p0A2Gy2657BGafEQUZj', 1541343905, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"studentregistration_id\":2}}}'),
('qFmj_-fBrk-_NzpfS8YEYD18BMD7odU4', 1541863267, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"main_id\":12}}}');

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

--
-- Indexes for dumped tables
--

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `main`
--
ALTER TABLE `main`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`id`) REFERENCES `main` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
