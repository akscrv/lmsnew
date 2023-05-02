-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 12:11 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `django_lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `authtoken_token`
--

CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authtoken_token`
--

INSERT INTO `authtoken_token` (`key`, `created`, `user_id`) VALUES
('e8197511bf17b7a2f9acd72369877fec9e632331', '2023-04-05 19:56:27.540679', 1);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add student', 7, 'add_student'),
(26, 'Can change student', 7, 'change_student'),
(27, 'Can delete student', 7, 'delete_student'),
(28, 'Can view student', 7, 'view_student'),
(29, 'Can add teacher', 8, 'add_teacher'),
(30, 'Can change teacher', 8, 'change_teacher'),
(31, 'Can delete teacher', 8, 'delete_teacher'),
(32, 'Can view teacher', 8, 'view_teacher'),
(33, 'Can add Token', 9, 'add_token'),
(34, 'Can change Token', 9, 'change_token'),
(35, 'Can delete Token', 9, 'delete_token'),
(36, 'Can view Token', 9, 'view_token'),
(37, 'Can add token', 10, 'add_tokenproxy'),
(38, 'Can change token', 10, 'change_tokenproxy'),
(39, 'Can delete token', 10, 'delete_tokenproxy'),
(40, 'Can view token', 10, 'view_tokenproxy'),
(41, 'Can add quiz questions', 11, 'add_quizquestions'),
(42, 'Can change quiz questions', 11, 'change_quizquestions'),
(43, 'Can delete quiz questions', 11, 'delete_quizquestions'),
(44, 'Can view quiz questions', 11, 'view_quizquestions'),
(45, 'Can add quiz', 12, 'add_quiz'),
(46, 'Can change quiz', 12, 'change_quiz'),
(47, 'Can delete quiz', 12, 'delete_quiz'),
(48, 'Can view quiz', 12, 'view_quiz'),
(49, 'Can add result', 13, 'add_result'),
(50, 'Can change result', 13, 'change_result'),
(51, 'Can delete result', 13, 'delete_result'),
(52, 'Can view result', 13, 'view_result'),
(53, 'Can add resultx', 14, 'add_resultx'),
(54, 'Can change resultx', 14, 'change_resultx'),
(55, 'Can delete resultx', 14, 'delete_resultx'),
(56, 'Can view resultx', 14, 'view_resultx');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$4jYq9yTBmL7Q4kb9ov7C9T$/U3z1c9BgsV8uQMlT1U3EFKaIp0l73cFT0gLlRf8szE=', '2023-04-24 04:40:24.948659', 1, 'admin', '', '', '', 1, 1, '2023-04-05 08:09:33.842434');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-04-06 01:47:50.965965', '1', 'Quiz object (1)', 1, '[{\"added\": {}}]', 12, 1),
(2, '2023-04-06 01:47:57.226183', '1', 'Quiz object (1)', 2, '[]', 12, 1),
(3, '2023-04-06 01:49:53.112674', '1', 'QuizQuestions object (1)', 1, '[{\"added\": {}}]', 11, 1),
(4, '2023-04-09 09:48:29.837183', '3', 'Resultx object (3)', 3, '', 14, 1),
(5, '2023-04-09 09:48:34.077306', '2', 'Resultx object (2)', 3, '', 14, 1),
(6, '2023-04-24 04:40:38.139512', '6', 'Quiz object (6)', 2, '[]', 12, 1),
(7, '2023-04-24 04:40:49.984138', '13', 'Quiz object (13)', 2, '[{\"changed\": {\"fields\": [\"Title\"]}}]', 12, 1),
(8, '2023-04-24 04:40:57.129061', '14', 'Quiz object (14)', 2, '[{\"changed\": {\"fields\": [\"Title\"]}}]', 12, 1),
(9, '2023-04-24 04:41:17.602429', '15', 'Quiz object (15)', 2, '[{\"changed\": {\"fields\": [\"Title\"]}}]', 12, 1),
(10, '2023-04-24 04:41:28.895620', '16', 'Quiz object (16)', 2, '[{\"changed\": {\"fields\": [\"Title\", \"Detail\"]}}]', 12, 1),
(11, '2023-04-24 04:41:42.548660', '17', 'Quiz object (17)', 2, '[{\"changed\": {\"fields\": [\"Title\", \"Detail\"]}}]', 12, 1),
(12, '2023-04-24 04:41:55.731671', '18', 'Quiz object (18)', 2, '[{\"changed\": {\"fields\": [\"Title\"]}}]', 12, 1),
(13, '2023-04-24 04:41:58.776881', '17', 'Quiz object (17)', 2, '[]', 12, 1),
(14, '2023-04-24 04:42:18.470081', '19', 'Quiz object (19)', 2, '[{\"changed\": {\"fields\": [\"Title\", \"Detail\"]}}]', 12, 1),
(15, '2023-04-24 04:42:21.228589', '18', 'Quiz object (18)', 2, '[]', 12, 1),
(16, '2023-04-24 04:42:23.346314', '18', 'Quiz object (18)', 2, '[]', 12, 1),
(17, '2023-04-24 04:42:26.336110', '19', 'Quiz object (19)', 2, '[]', 12, 1),
(18, '2023-04-24 04:42:36.803353', '20', 'Quiz object (20)', 2, '[{\"changed\": {\"fields\": [\"Title\", \"Detail\"]}}]', 12, 1),
(19, '2023-04-24 04:42:40.570114', '20', 'Quiz object (20)', 2, '[]', 12, 1),
(20, '2023-04-24 04:42:47.043577', '21', 'Quiz object (21)', 3, '', 12, 1),
(21, '2023-04-24 04:42:51.376525', '20', 'Quiz object (20)', 2, '[]', 12, 1),
(22, '2023-04-24 04:42:55.936619', '22', 'Quiz object (22)', 3, '', 12, 1),
(23, '2023-04-24 04:43:34.351730', '31', 'Quiz object (31)', 2, '[{\"changed\": {\"fields\": [\"Title\", \"Detail\"]}}]', 12, 1),
(24, '2023-04-24 04:43:40.134612', '31', 'Quiz object (31)', 2, '[]', 12, 1),
(25, '2023-04-24 04:43:52.403710', '30', 'Quiz object (30)', 2, '[{\"changed\": {\"fields\": [\"Title\"]}}]', 12, 1),
(26, '2023-04-24 04:43:57.432397', '29', 'Quiz object (29)', 3, '', 12, 1),
(27, '2023-04-24 04:44:01.156540', '27', 'Quiz object (27)', 3, '', 12, 1),
(28, '2023-04-24 04:44:04.836607', '28', 'Quiz object (28)', 3, '', 12, 1),
(29, '2023-04-24 04:44:09.703316', '25', 'Quiz object (25)', 3, '', 12, 1),
(30, '2023-04-24 04:44:14.151207', '26', 'Quiz object (26)', 2, '[]', 12, 1),
(31, '2023-04-24 04:44:17.057140', '30', 'Quiz object (30)', 2, '[]', 12, 1),
(32, '2023-04-24 04:46:32.017891', '24', 'Quiz object (24)', 3, '', 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(9, 'authtoken', 'token'),
(10, 'authtoken', 'tokenproxy'),
(5, 'contenttypes', 'contenttype'),
(12, 'main', 'quiz'),
(11, 'main', 'quizquestions'),
(13, 'main', 'result'),
(14, 'main', 'resultx'),
(7, 'main', 'student'),
(8, 'main', 'teacher'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-04-05 07:22:18.213158'),
(2, 'auth', '0001_initial', '2023-04-05 07:22:18.551284'),
(3, 'admin', '0001_initial', '2023-04-05 07:22:18.636820'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-04-05 07:22:18.653823'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-04-05 07:22:18.661946'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-04-05 07:22:18.714865'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-04-05 07:22:18.751867'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-04-05 07:22:18.764873'),
(9, 'auth', '0004_alter_user_username_opts', '2023-04-05 07:22:18.771874'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-04-05 07:22:18.803031'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-04-05 07:22:18.806027'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-04-05 07:22:18.812027'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-04-05 07:22:18.825030'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-04-05 07:22:18.838629'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-04-05 07:22:18.850627'),
(16, 'auth', '0011_update_proxy_permissions', '2023-04-05 07:22:18.858628'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-04-05 07:22:18.870701'),
(18, 'sessions', '0001_initial', '2023-04-05 07:22:18.895683'),
(19, 'main', '0001_initial', '2023-04-05 08:03:11.135623'),
(20, 'authtoken', '0001_initial', '2023-04-05 19:54:42.817017'),
(21, 'authtoken', '0002_auto_20160226_1747', '2023-04-05 19:54:42.833016'),
(22, 'authtoken', '0003_tokenproxy', '2023-04-05 19:54:42.836369'),
(23, 'main', '0002_quiz_quizquestions', '2023-04-06 01:39:54.495386'),
(24, 'main', '0003_alter_quiz_options_alter_quizquestions_options', '2023-04-06 01:43:27.624004'),
(25, 'main', '0004_result', '2023-04-08 20:30:09.312796'),
(26, 'main', '0005_result_attempted', '2023-04-08 20:42:55.249137'),
(27, 'main', '0006_resultx', '2023-04-08 21:25:11.858829');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('4vmo5k5nj3dh6yzrjnbmybnr7j49959i', '.eJxVjEEOwiAQRe_C2hBooYBL9z0DGYYZqRqalHZlvLtt0oVu_3vvv0WEbS1xa7TEKYur0OLyuyXAJ9UD5AfU-yxxrusyJXko8qRNjnOm1-10_w4KtLLXQWXuk4eOldeJ0PietfPoFCqwGdmEznFgPwwZEwcLaCxYol0ja4L4fAH6-jio:1pqo00:P8N--G1bslHJoCma3Pd7lXvF6_tvWVMeD6sHpmV1Y9g', '2023-05-08 04:40:24.950658'),
('7l74r6j20jig0i42vi8pejqsah46suez', '.eJxVjDsOwjAQBe_iGll2Fv8o6TmDtfaucQA5UpxUiLuTSCmgnZn33iLiutS4dp7jSOIitDj9soT5yW0X9MB2n2Se2jKPSe6JPGyXt4n4dT3av4OKvW5rX8Cz48FaGwiYXdZGsyetSIXzoBJBCMVkR4wBLKJWUBDAlA0mQPH5AuJSODk:1pk9tp:_15AOQdUqQPVSkquVUSy2ALK9qe9dNs9TJLSANCltAg', '2023-04-19 20:38:33.715466'),
('r606dhp973s8xdxpxm6718ghhpzij3dm', '.eJxVjEEOgjAQRe_StWkKdDrVpXvO0Mx0poIaSCisjHdXEha6_e-9_zKJtnVIW9UljWIupjGn340pP3Tagdxpus02z9O6jGx3xR602n4WfV4P9-9goDp8a41FgQlD2xIACPqMhI1XdhA4RnGZ2y54IY_soSB1UYS5cHBwBjXvD_HTOGY:1pmsTA:HHXLY01m6WFGmMXomswsvB1YltR_spFyJiP5gDs9z7U', '2023-04-27 08:38:16.998508');

-- --------------------------------------------------------

--
-- Table structure for table `main_quiz`
--

CREATE TABLE `main_quiz` (
  `id` bigint(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `detail` longtext NOT NULL,
  `add_time` datetime(6) NOT NULL,
  `teacher_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main_quiz`
--

INSERT INTO `main_quiz` (`id`, `title`, `detail`, `add_time`, `teacher_id`) VALUES
(6, 'Python', 'Attempt all the questions', '2023-04-07 09:48:18.023949', 7),
(13, 'c++', 'attempt all', '2023-04-07 22:24:14.272961', 1),
(14, 'java', 'Attempt all', '2023-04-08 08:41:43.566438', 8),
(15, 'maths', 'attemp all', '2023-04-08 11:37:11.353544', 1),
(16, 'physics', 'attempt all', '2023-04-08 22:46:22.799089', 1),
(17, 'Hindi', 'attempt all', '2023-04-09 12:13:28.945281', 5),
(18, 'Maths', 'attempt all the question', '2023-04-10 05:35:46.032339', 9),
(19, 'Python Easy', 'attempt all the questions', '2023-04-13 09:29:43.814693', 1),
(20, 'Node Js', 'Attempt all', '2023-04-16 10:47:40.556384', 1),
(23, 'Dell', 'All questions data', '2023-04-16 22:29:17.891457', 1),
(26, 'maths', 'all 12 th class important questions', '2023-04-16 22:46:13.819372', 10),
(30, 'Accounts Quiz', 'attempt all', '2023-04-18 10:14:11.580444', 1),
(31, 'Easy English Quiz', 'Attempt all', '2023-04-18 19:52:01.502438', 1);

-- --------------------------------------------------------

--
-- Table structure for table `main_quizquestions`
--

CREATE TABLE `main_quizquestions` (
  `id` bigint(20) NOT NULL,
  `question` varchar(100) NOT NULL,
  `and1` varchar(100) NOT NULL,
  `and2` varchar(100) NOT NULL,
  `and3` varchar(100) NOT NULL,
  `and4` varchar(100) NOT NULL,
  `right_ans` varchar(100) NOT NULL,
  `add_time` datetime(6) NOT NULL,
  `quiz_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main_quizquestions`
--

INSERT INTO `main_quizquestions` (`id`, `question`, `and1`, `and2`, `and3`, `and4`, `right_ans`, `add_time`, `quiz_id`) VALUES
(9, 'Who developed Python Programming Language?', 'a) Wick van Rossum', 'b) Rasmus Lerdorf', 'c) Guido van Rossum', 'd) Niene Stom', 'c) Guido van Rossum', '2023-04-07 22:25:47.340524', 13),
(11, 'All keywords in Python are in _________', 'a) Capitalized', 'b) lower case', 'c) UPPER CASE', 'd) None of the mentioned', 'd) None of the mentioned', '2023-04-07 22:26:51.969768', 13),
(12, 'Which language is used in Django?', 'jhgvjkhmvhg', 'bgvc ghn', 'jhgvbhj', 'jhgbjh', 'jhgbjh', '2023-04-08 05:37:56.233405', 13),
(13, 'Which is operator', '+', 'o', 'y', 'x', '+', '2023-04-08 08:42:31.874473', 14),
(15, 'dfgsdfg gfdsg', 'fgfsdgs', 'dfgsdfg', 'sdfgdsfg', 'dfgfds', 'dfgfds', '2023-04-08 22:46:55.801759', 13),
(16, 'This ia attempted by viscounty', 'trye', '==false', 'no', 'yes', 'yes', '2023-04-09 12:14:02.405299', 17),
(17, 'power of 2 of 2', '1', '2', '3', '4', '4', '2023-04-10 05:36:07.779490', 18),
(18, 'jkdshfjk', 'kjdfjdks', 'dfnjkgnjk', 'jnfdjkn', 'grkjdhjk', 'jkgfehrkjg', '2023-04-16 10:48:12.374559', 20),
(19, 'This is sample question', 'first', 'second', 'third', 'fourth', 'second', '2023-04-18 19:48:26.051984', 16),
(20, 'This is question with correct option is 4', '1', '2', '32', '4', '4', '2023-04-18 20:56:02.299094', 15),
(21, 'This is question with correct option is 3', 'dfsj', 'djkfsh', 'jsdfjk', 'dgsa', 'jsdfjk', '2023-04-18 20:56:29.942174', 15),
(22, 'This is question with correct option is 4', '1', '2', '3', '4', '4', '2023-04-18 20:56:46.567747', 15),
(23, 'This is question with correct option is 4', '25', '25', '25', '25', '25', '2023-04-18 20:57:06.104429', 16),
(24, 'This is question with correct option is 4', 'hasjkd', 'hnddjkh', 'kjfd', '4', '4', '2023-04-18 20:57:40.406513', 19),
(25, 'This is question with correct option is 4', 'dgdsag', 'gasdg', 'asdgasd', 'agasg', 'agasg', '2023-04-18 20:58:29.291441', 23),
(26, 'This is question with correct option is 4', 'dfshh', 'sdhgdfs', 'fdhfsdh', 'sdfhsdfh', 'sdfhsdfh', '2023-04-18 20:58:41.575159', 23),
(27, 'This is question with correct option is 3', 'dfhggh', 'dfghdf', 'dfsghsdf', 'fdhgdfsh', 'dfsghsdf', '2023-04-18 20:58:53.599093', 23);

-- --------------------------------------------------------

--
-- Table structure for table `main_result`
--

CREATE TABLE `main_result` (
  `id` bigint(20) NOT NULL,
  `score` varchar(100) NOT NULL,
  `add_time` datetime(6) NOT NULL,
  `quiz_id` bigint(20) DEFAULT NULL,
  `student_id` bigint(20) DEFAULT NULL,
  `attempted` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `main_resultx`
--

CREATE TABLE `main_resultx` (
  `id` bigint(20) NOT NULL,
  `score` varchar(100) NOT NULL,
  `attempted` varchar(100) NOT NULL,
  `add_time` datetime(6) NOT NULL,
  `quiz_id` bigint(20) DEFAULT NULL,
  `student_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main_resultx`
--

INSERT INTO `main_resultx` (`id`, `score`, `attempted`, `add_time`, `quiz_id`, `student_id`) VALUES
(1, '8', '34234', '2023-04-08 21:52:09.609515', 13, 1),
(4, '0', '2626262', '2023-04-09 10:22:19.818955', 15, 1),
(5, '2', '2626262', '2023-04-09 11:38:14.524630', 13, 2),
(6, '1', '2626262', '2023-04-09 12:15:41.944159', 17, 2),
(7, '4', '2626262', '2023-04-10 03:41:08.935794', 13, 3),
(8, '0', '2626262', '2023-04-10 04:36:07.476591', 14, 3),
(9, '1', '2626262', '2023-04-10 04:38:45.660421', 17, 3),
(10, '1', '2626262', '2023-04-10 04:39:30.446679', 15, 3),
(11, '1', '2626262', '2023-04-10 05:38:06.636820', 18, 4),
(12, '0', '2626262', '2023-04-16 10:50:27.397648', 20, 3),
(13, '0', '2626262', '2023-04-16 22:22:49.156417', 17, 6),
(14, '0', '2626262', '2023-04-16 22:24:49.196373', 17, 6),
(15, '3', '2626262', '2023-04-18 21:00:52.554851', 13, 2),
(16, '2', '2626262', '2023-04-18 21:01:05.344816', 15, 2),
(17, '1', '2626262', '2023-04-18 21:01:12.268718', 16, 2),
(18, '0', '2626262', '2023-04-18 21:01:17.802384', 20, 2),
(19, '2', '2626262', '2023-04-18 21:01:34.688784', 23, 2),
(20, '0', '2626262', '2023-04-18 21:01:42.368944', 30, 2),
(21, '2', '2626262', '2023-04-18 21:02:16.535622', 13, 6),
(22, '3', '2626262', '2023-04-18 21:02:23.662740', 15, 6),
(23, '1', '2626262', '2023-04-18 21:02:29.440792', 16, 6),
(24, '1', '2626262', '2023-04-18 21:02:35.593793', 19, 6),
(25, '0', '2626262', '2023-04-18 21:02:45.469474', 20, 6),
(26, '3', '2626262', '2023-04-18 21:02:55.521882', 23, 6),
(27, '1', '2626262', '2023-04-24 05:00:54.419761', 14, 2),
(28, '2', '2626262', '2023-04-25 23:41:45.727143', 13, 2);

-- --------------------------------------------------------

--
-- Table structure for table `main_student`
--

CREATE TABLE `main_student` (
  `id` bigint(20) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `intrest_field` varchar(100) NOT NULL,
  `qulification` varchar(100) NOT NULL,
  `mobile_no` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main_student`
--

INSERT INTO `main_student` (`id`, `full_name`, `email`, `intrest_field`, `qulification`, `mobile_no`, `password`) VALUES
(1, 'Student', 'student@26', 'learning', '8class', '9038493029', 'Student'),
(2, 'Studentx', 'studentx@gmail.com', '34', 'dfjdos', '98989898', 'Studentx'),
(3, 'Indrajit Kumar', 'Indra@26', '10', 'School', '9667384874', 'Indra@26'),
(4, 'stud', 'stud@gmail.com', '8', 'school', '989898', 'stud'),
(5, 'Amarjeet Kumar', 'workformonuprajapat@gmail.com', 'learning', 'hfsdijhfn', '9996105221', 'monodfoisdfoi@dfhsakjd'),
(6, 'Monu Prajapat', 'monuprajapat6270@gmail.com', 'learning', 'B.E.', '9518299752', 'Monu@123');

-- --------------------------------------------------------

--
-- Table structure for table `main_teacher`
--

CREATE TABLE `main_teacher` (
  `id` bigint(20) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `qulification` varchar(100) NOT NULL,
  `mobile_no` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main_teacher`
--

INSERT INTO `main_teacher` (`id`, `full_name`, `email`, `subject`, `qulification`, `mobile_no`, `password`) VALUES
(1, 'Amarjeet Kumar', 'amarjeetblack@gmail.com', 'maths', 'B.E.', '9811722501', 'Akscrv@26'),
(2, 'Indrajit Kumar', 'indrajitblack@gmail.com', 'Hindi', 'BSC', '9667384874', 'Ikscrv@26'),
(4, 'Visconti Rachel', 'viscontirachel@gmail.com', 'Cricket', 'undefined', '2159489637', 'viscontirachel'),
(5, 'Visconti Rachel', 'viscontirachel@gmail.com', 'jhsdjka', 'undefined', '2159489637', 'viscounty@26'),
(6, 'Virat Kohli', 'virat@icici.com', 'Cricket', 'undefined', '858596963', 'Virat@26'),
(7, 'Keshav', 'keshav@26', 'Maths', 'undefined', '9876543210', 'keshav@26'),
(8, 'Kanak Rana', 'kanak@gmail.com', 'Hindi', 'undefined', '8700943247', 'Kanak@26'),
(9, 'example', 'example@gmail.com', 'maths', 'undefined', '7878787878', 'example'),
(10, 'check1', 'check1@gmail.com', 'maths', 'undefined', '9898989898', 'check1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `main_quiz`
--
ALTER TABLE `main_quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_quiz_teacher_id_8901358e_fk_main_teacher_id` (`teacher_id`);

--
-- Indexes for table `main_quizquestions`
--
ALTER TABLE `main_quizquestions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_quizquestions_quiz_id_bddb7bdd_fk_main_quiz_id` (`quiz_id`);

--
-- Indexes for table `main_result`
--
ALTER TABLE `main_result`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_result_quiz_id_1c9763bc_fk_main_quiz_id` (`quiz_id`),
  ADD KEY `main_result_student_id_31c3c71a_fk_main_student_id` (`student_id`);

--
-- Indexes for table `main_resultx`
--
ALTER TABLE `main_resultx`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_resultx_quiz_id_11fb126b_fk_main_quiz_id` (`quiz_id`),
  ADD KEY `main_resultx_student_id_1c2ef15f_fk_main_student_id` (`student_id`);

--
-- Indexes for table `main_student`
--
ALTER TABLE `main_student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_teacher`
--
ALTER TABLE `main_teacher`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `main_quiz`
--
ALTER TABLE `main_quiz`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `main_quizquestions`
--
ALTER TABLE `main_quizquestions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `main_result`
--
ALTER TABLE `main_result`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `main_resultx`
--
ALTER TABLE `main_resultx`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `main_student`
--
ALTER TABLE `main_student`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `main_teacher`
--
ALTER TABLE `main_teacher`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD CONSTRAINT `authtoken_token_user_id_35299eff_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `main_quiz`
--
ALTER TABLE `main_quiz`
  ADD CONSTRAINT `main_quiz_teacher_id_8901358e_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`);

--
-- Constraints for table `main_quizquestions`
--
ALTER TABLE `main_quizquestions`
  ADD CONSTRAINT `main_quizquestions_quiz_id_bddb7bdd_fk_main_quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `main_quiz` (`id`);

--
-- Constraints for table `main_result`
--
ALTER TABLE `main_result`
  ADD CONSTRAINT `main_result_quiz_id_1c9763bc_fk_main_quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `main_quiz` (`id`),
  ADD CONSTRAINT `main_result_student_id_31c3c71a_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`);

--
-- Constraints for table `main_resultx`
--
ALTER TABLE `main_resultx`
  ADD CONSTRAINT `main_resultx_quiz_id_11fb126b_fk_main_quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `main_quiz` (`id`),
  ADD CONSTRAINT `main_resultx_student_id_1c2ef15f_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
