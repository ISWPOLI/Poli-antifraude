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
-- query para la cargar las preguntas
--

select (`Pregunta`)
from `preguntasidentificacion`;

--
-- query para la validacion de las respuestas, los campos de select son valiables que son actualizadas en la aplicacion
--
select (codigoEstudiante, respuesta)
from `registroestudiante`;
