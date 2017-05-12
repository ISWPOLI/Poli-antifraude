-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2017 a las 19:38:54
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
-- Estructura de tabla para la tabla `registroestudiante`
--

CREATE TABLE IF NOT EXISTS `registroestudiante` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'llave campo',
  `Modalidad` varchar(20) DEFAULT NULL COMMENT 'P/V',
  `Sede` varchar(20) DEFAULT NULL COMMENT 'ubicación',
  `Codigo` int(10) DEFAULT NULL COMMENT 'Idpoli',
  `Cedula` int(10) DEFAULT NULL COMMENT 'idpais',
  `LibrMili` int(10) DEFAULT NULL COMMENT 'ippolicia',
  `IdEstaCivi` int(4) DEFAULT NULL COMMENT 'S,C,S,V',
  `Sexo` varchar(10) DEFAULT NULL COMMENT 'M,F',
  `FechNaci` date DEFAULT NULL COMMENT 'dd,mm,aaa',
  `Nombres` varchar(10) DEFAULT NULL COMMENT 'completos',
  `Apellido1` varchar(10) DEFAULT NULL COMMENT 'completos',
  `Apellido2` varchar(10) CHARACTER SET utf32 DEFAULT NULL COMMENT 'completos',
  `Direccion` varchar(20) CHARACTER SET utf32 DEFAULT NULL COMMENT 'sin formato',
  `Ciudad` varchar(10) DEFAULT NULL COMMENT 'medellín, bogota',
  `Telefono` int(10) DEFAULT NULL COMMENT 'fijo personal',
  `UsuarioPoli` varchar(10) DEFAULT NULL COMMENT 'Ispoli',
  `IdPrograma` int(5) DEFAULT NULL COMMENT '97 programas',
  `Programa` varchar(15) DEFAULT NULL COMMENT 'nombreprogrma',
  `Facultad` varchar(15) DEFAULT NULL COMMENT 'nombreFaculta',
  `Jornada` varchar(10) DEFAULT NULL COMMENT 'jornada N/D',
  `AñoGrado` int(6) DEFAULT NULL COMMENT 'AñoActual',
  `PeriodoActa` int(6) DEFAULT NULL COMMENT 'Periodo',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcar la base de datos para la tabla `registroestudiante`
--

INSERT INTO `registroestudiante` (`id`, `Modalidad`, `Sede`, `Codigo`, `Cedula`, `LibrMili`, `IdEstaCivi`, `Sexo`, `FechNaci`, `Nombres`, `Apellido1`, `Apellido2`, `Direccion`, `Ciudad`, `Telefono`, `UsuarioPoli`, `IdPrograma`, `Programa`, `Facultad`, `Jornada`, `AñoGrado`, `PeriodoActa`) VALUES
(1, 'Presencial', 'Politecnico Bogota', 811047597, 1019040715, 1019040715, 0, 'M', '1985-12-26', 'Julio Erne', 'Rodriguez', 'Rincon', 'Cr 136A # 145 31', 'Bogota', 2147483647, 'jerodri', 41, 'Ingeniería de S', 'Ingenieria y Ci', 'Nocturna', 2017, 1);
