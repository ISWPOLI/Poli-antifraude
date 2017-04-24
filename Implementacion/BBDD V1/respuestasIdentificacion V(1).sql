-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2017 a las 20:57:14
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `poliantifraude`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestasIdentificacion`
--

CREATE TABLE IF NOT EXISTS `respuestasidentificacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'llave campo',
  `codigo` int(10) DEFAULT NULL COMMENT 'llave estudiante',
  `idPreg` int(10) DEFAULT NULL COMMENT 'llave pregunta',
  `respuesta` varchar(30) DEFAULT NULL COMMENT 'texto rta',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Rta de los estudiantes' AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `respuestasIdentificacion`
--

