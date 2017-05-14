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
  `Pregunta` varchar(60) DEFAULT NULL COMMENT 'nombrePregunta',
  PRIMARY KEY (`idPreg`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
INSERT INTO `preguntasidentificacion` (idPreg, Pregunta)
value(1, `Cual es su numero de Cedula`);
value(2, `Cual es la sede donde estudia`);
value(3, `Cual es su codigo`);
value(4, `Numero de Cedula`);
value(5, `Cual es su estado civil`);
value(6, `Cual es su fecha de nacimiento`);
value(7, `Cual es su primer nombre`);
value(8, `Cual es su primer apellido`);
value(9, `Cual es su segundo apellido`);
value(10, `Cual es su direccion de residencia`);
value(11, `Cual es el usuario del Politecnico Grancolombiano asigndo`);
value(12, `Cual es el programa academico que cursa actualmente`);

--
-- Volcar la base de datos para la tabla `PreguntasIdentificacion`
--

