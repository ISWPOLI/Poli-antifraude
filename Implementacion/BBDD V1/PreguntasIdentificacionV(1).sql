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
-- Estructura de tabla para la tabla `PreguntasIdentificacion`
--

CREATE TABLE IF NOT EXISTS `preguntasidentificacion` (
  `idPreg` int(5) NOT NULL AUTO_INCREMENT COMMENT 'accceso',
  `Pregunta` varchar(40) DEFAULT NULL COMMENT 'nombrePregunta',
  `Categoria` varchar(20) DEFAULT NULL COMMENT 'Familiar, estudio, personal',
  `Tipo` varchar(10) NOT NULL COMMENT 'A/C',
  PRIMARY KEY (`idPreg`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `PreguntasIdentificacion`
--

