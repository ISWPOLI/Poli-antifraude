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
  `Codigo` int(10) DEFAULT NULL COMMENT 'Idpoli',
  `Modalidad` varchar(20) DEFAULT NULL COMMENT 'P/V',
  `Sede` varchar(20) DEFAULT NULL COMMENT 'ubicación',
  `Cedula` int(10) DEFAULT NULL COMMENT 'idpais',
  `IdEstaCivi` int(4) DEFAULT NULL COMMENT 'S,C,S,V',
  `Sexo` varchar(10) DEFAULT NULL COMMENT 'M,F',
  `FechNaci` date DEFAULT NULL COMMENT 'dd,mm,aaa',
  `Nombres` varchar(10) DEFAULT NULL COMMENT 'completos',
  `Apellido1` varchar(10) DEFAULT NULL COMMENT 'completos',
  `Apellido2` varchar(10) CHARACTER SET utf32 DEFAULT NULL COMMENT 'completos',
  `Direccion` varchar(20) CHARACTER SET utf32 DEFAULT NULL COMMENT 'sin formato',
  `Ciudad` varchar(10) DEFAULT NULL COMMENT 'ciudad',
  `Telefono` int(10) DEFAULT NULL COMMENT 'fijo personal',
  `Celular` int(10) DEFAULT NULL COMMENT 'Celular personal',
  `UsuarioPoli` varchar(10) DEFAULT NULL COMMENT 'Ispoli',
  `IdPrograma` int(5) DEFAULT NULL COMMENT '97 programas',
  `Programa` int(2) DEFAULT NULL COMMENT 'nombreprogrma',
  `Facultad` int(2) DEFAULT NULL COMMENT 'nombreFaculta',
  `Jornada` varchar(10) DEFAULT NULL COMMENT 'jornada N/D',
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Volcar la base de datos para la tabla `registroestudiante`
--

INSERT INTO `registroestudiante`(`Codigo`, `Modalidad`, `Sede`, `Cedula`, `IdEstaCivi`, `Sexo`, `FechNaci`, `Nombres`, `Apellido1`, `Apellido2`, `Direccion`, `Ciudad`, `Telefono`, `UsuarioPoli`, `IdPrograma`, `Programa`, `Facultad`, `Jornada`, `AñoGrado`, `PeriodoActa`) 
VALUES (1110013086, 'Presencial', 'Politecnico Bogota', 1070010650, 0, 'M', '1991-06-20', 'Sebastian', 'Canastero', 'Lesmes', 'Cr 136A # 145 31', 'Cajica', 4717100, 3103296631, 'secanastero',1, 1, 'Nocturna');
VALUES (1010015417, 'Presencial', 'Politecnico Bogota', 1019004237, 0, 'M', '1986-04-19', 'Andres', 'Buitrago', 'Diaz', 'Cll 152b # 72 - 91', 'Bogota', 4717706, 3102199997, 'aebuitrago',1, 1, 'Nocturna');
VALUES (1020011670, 'Presencial', 'Politecnico Bogota', 1015424062, 0, 'M', '1991-06-29', 'Alejandro', 'Daza', 'Trunque', 'cra 20 # 182 - 60', 'Bogota', 4717158, 3108011284, 'aldazatr',1, 1, 'Nocturna');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registropadresDeFamilia`
--

CREATE TABLE IF NOT EXISTS `registroPadre` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'llave campo',
  `Codigo` int(11) NOT DEFAULT NULL COMMENT 'Codigo Estudiante',
  `padre` varchar(5) NOT DEFAULT NULL COMMENT 'Padre, madre',
  `Cedula` int(10) DEFAULT NULL COMMENT 'idCedula',
  `Sexo` varchar(10) DEFAULT NULL COMMENT 'M,F',
  `FechNaci` date DEFAULT NULL COMMENT 'dd,mm,aaa',
  `Nombres` varchar(10) DEFAULT NULL COMMENT 'completos',
  `Apellido1` varchar(10) DEFAULT NULL COMMENT 'completos',
  `Apellido2` varchar(10) CHARACTER SET utf32 DEFAULT NULL COMMENT 'completos',
  `Direccion` varchar(20) CHARACTER SET utf32 DEFAULT NULL COMMENT 'sin formato',
  `CiudadResidencia` varchar(10) DEFAULT NULL COMMENT 'Ciudad donde recide',
  `Telefono` int(10) DEFAULT NULL COMMENT 'fijo personal',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcar la base de datos para la tabla `registropadresDeFamilia`
--

INSERT INTO `registroPadre` (`id`, `idEstudiante`, `padre`,`Cedula`, `Sexo`, `FechNaci`, `Nombres`, `Apellido1`, `Apellido2`, `Direccion`, `CiudadResidencia`, `Telefono`) VALUES
(1, '3', 'Padre', 811047597, 1019040715, 'M', '1985-12-26', 'Pedro', 'Daza', 'Lesmes', 'Cr 136A # 145 31', 'Bogota', 12345678);
