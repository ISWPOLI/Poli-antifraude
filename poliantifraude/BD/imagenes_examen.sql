	-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2017 a las 06:34:21
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `PoliAntifraude`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen`
--
	
REATE TABLE IF NOT EXISTS `respuestasidentificacion` (
  `idEvaluacion` int(11) NOT NULL AUTO_INCREMENT COMMENT 'llave campo',
  `codigoEstudiante` int(10) DEFAULT NULL COMMENT 'llave estudiante',
  `img_id` int(10) DEFAULT NULL COMMENT 'llave imagen',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Rta de los estudiantes' AUTO_INCREMENT=1 ;


--
-- Base de datos: `PoliAntifraude`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `img_id` mediumint(9) NOT NULL auto_increment,
  `img_file` varchar(13) NOT NULL default '',
  `img_type` enum('JPG','PNG') NOT NULL default 'JPG',
  `img_height` smallint(6) NOT NULL default '0',
  `img_width` smallint(6) NOT NULL default '0',
  `img_bytes` mediumint(9) NOT NULL default '0',
  `img_title` tinytext NOT NULL,
  `img_descr` mediumtext NOT NULL,
  `img_alt` tinytext NOT NULL,
  PRIMARY KEY  (img_id)
) TYPE=MyISAM;