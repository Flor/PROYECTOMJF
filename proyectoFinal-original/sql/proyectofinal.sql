-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 22:58:59
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectofinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `comentario` text NOT NULL,
  `fecha` date NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_usuario`, `id_producto`, `comentario`, `fecha`, `createdAt`, `updatedAt`) VALUES
(1, 1, 0, 'Se me descoloro con el lavado', '2003-11-22', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(2, 7, 1, 'Se elastiza', '2011-01-30', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(3, 4, 2, 'Se confundieron de talle', '2020-04-08', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(4, 6, 3, 'Super', '2010-11-12', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(5, 2, 4, 'Todo terreno', '2020-07-24', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(6, 8, 5, 'Muy apretado', '2019-03-22', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(7, 3, 6, 'Colores super\'', '2017-06-28', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(8, 2, 7, 'Comodisimo y muy calentito', '2006-05-01', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(9, 6, 7, 'El talle me apreto', '2009-11-11', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(10, 5, 8, 'Se me achico con el lavado', '2021-02-13', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(11, 1, 1, 'Gran buzo!', '2021-05-18', '2021-06-14 21:14:54', '2021-06-14 21:14:54'),
(12, 5, 12, 'Hermoso! Calza perfecto', '2021-06-16', '2021-06-24 19:24:10', '2021-06-24 19:24:10'),
(13, 8, 12, 'Me quedo un poco grande', '2021-06-05', '2021-06-24 19:24:55', '2021-06-24 19:24:55'),
(14, 14, 4, 'Se estira', '2021-06-02', '2021-06-24 19:28:31', '2021-06-24 19:28:31'),
(15, 5, 4, 'Colores magnificos', '2021-06-04', '2021-06-24 19:28:47', '2021-06-24 19:28:47'),
(16, 11, 4, 'Wow! Muy comodo', '2021-06-14', '2021-06-24 19:29:17', '2021-06-24 19:29:17'),
(17, 10, 1, 'Muy canchero y muy buena tela', '2021-06-05', '2021-06-24 19:31:18', '2021-06-24 19:31:18'),
(18, 20, 1, 'hola', '0000-00-00', '2021-06-27 00:00:34', '2021-06-27 00:00:34'),
(19, 20, 11, 'Lo quiero!', '0000-00-00', '2021-06-27 00:29:48', '2021-06-27 00:29:48'),
(20, 20, 12, 'Es super suave', '0000-00-00', '2021-06-27 00:35:02', '2021-06-27 00:35:02'),
(21, 20, 11, 'Esta barbaro!', '0000-00-00', '2021-06-27 21:42:11', '2021-06-27 21:42:11'),
(22, 20, 12, 'Me llego! Gracias', '0000-00-00', '2021-06-27 21:56:01', '2021-06-27 21:56:01'),
(23, 21, 6, 'Va con todo', '0000-00-00', '2021-06-27 23:34:02', '2021-06-27 23:34:02'),
(24, 21, 8, 'Hacen envíos al interior?', '0000-00-00', '2021-06-27 23:34:56', '2021-06-27 23:34:56'),
(25, 20, 3, 'Feo', '0000-00-00', '2021-06-27 23:43:30', '2021-06-27 23:43:30'),
(26, 20, 3, 'Lo quiero devolver porfavor', '0000-00-00', '2021-06-27 23:44:20', '2021-06-27 23:44:20'),
(27, 21, 1, 'Lo tienen en color negro?', '0000-00-00', '2021-06-27 23:46:19', '2021-06-27 23:46:19'),
(28, 21, 12, 'De que tela es??', '0000-00-00', '2021-06-27 23:46:51', '2021-06-27 23:46:51'),
(29, 22, 6, 'Lo estoy buscando hace años!!!!!!', '0000-00-00', '2021-06-27 23:50:11', '2021-06-27 23:50:11'),
(30, 22, 6, 'Puedo pagar con tarjeta?', '0000-00-00', '2021-06-27 23:50:22', '2021-06-27 23:50:22'),
(31, 23, 12, 'Recomiendo!', '0000-00-00', '2021-06-28 02:45:34', '2021-06-28 02:45:34'),
(32, 20, 12, 'Me encanto!', '0000-00-00', '2021-06-28 16:40:24', '2021-06-28 16:40:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `foto_producto` text NOT NULL,
  `marca` text DEFAULT NULL,
  `modelo` text DEFAULT NULL,
  `talle` varchar(10) DEFAULT NULL,
  `fecha_publicacion` date NOT NULL,
  `descripcion` text NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `cantidad_comentarios` tinyint(4) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `foto_producto`, `marca`, `modelo`, `talle`, `fecha_publicacion`, `descripcion`, `id_usuario`, `cantidad_comentarios`, `createdAt`, `updatedAt`) VALUES
(0, '/images/buzoadidass.jpg', 'Adidas', 'Original 3 stripes', 'M,L', '2019-07-02', 'Buzo Negro Adidas Originals 3-Stripes Crew. Tela Algodón|Polyester|Lino|Viscosa Composición	77% algodón – 23% poliéster', 3, 1, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(1, '/images/allsaintsbuzo.jpg', 'AllSaints', 'DarkGrey confy style', 'S,M,L', '2020-05-12', 'Buzo escote redondo y manga ranglan. Color gris. Cintura y puños elastizados. Talle de prenda de la foto: L\",\r\n        ', 5, 2, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(2, '/images/buzofila.jpg', 'Fila', 'Capucha tres colores', 'S,M', '2008-12-12', 'Buzo rojo Fila net. Super comodo. Es abrigado', 2, 3, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(3, '/images/gucci2buzo.jpg', 'Gucci', 'Cierre con sigla G', 'S,L', '2020-01-28', 'Buzo blanco con detalles originales Gucci.', 1, 4, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(4, '/images/hm2buzo.jpg', 'HM', 'Bicolor con capucha', 'S', '2005-03-19', 'Sudadera en mezcla de algodón con capucha cruzada con forro de punto y cordón de ajuste, un bolsillo canguro y puños y bajo en punto elástico de canalé. Tejido cepillado suave en el interior', 4, 5, '2021-06-27 23:41:14', '2021-06-27 23:41:14'),
(5, '/images/prada2buzo.jpg', 'Prada', 'Bicolor sin capucha', 'M', '2015-11-02', 'Sudadera Prada bicolor: negro y azul. Tiene detalles en el dorso', 2, 6, '2021-06-27 23:41:10', '2021-06-27 23:41:10'),
(6, '/images/nikebuzo.jpg', 'Nike', 'Bicolor contra lluvia', 'S,L', '2018-12-24', 'Buzo sin capucha. Material poliester. Super comodo', 8, 7, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(7, '/images/zarabuzo.jpg', 'Zara', 'Bicolor sin capucha amarillo', 'M', '2018-08-21', 'Buzo sin capucha. Material poliester. Super comodo y abrigado. Colores unicos', 1, 13, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(8, '/images/hollisterbuzo.jpg', 'Hollister', 'Bicolor con capucha', 'L,XL', '2017-08-11', 'Comodo buzo cerrado en tela de suave, capucha con cordón ajustable, estampa de logo, bolsillo delantero', 7, 8, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(9, '/images/abercrombiebuzo.jpg', 'Abercrombie', 'Mangas azules', 'S,XL', '2004-04-01', 'Buzo con capucha informal, confeccionada en tela de mezclilla de algodón cómoda, diseñada con dobladillo ancho. ', 5, 14, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(10, '/images/buzoarmani.jpg', 'Armani', 'CrewNeck - Navy blue', 'M,L', '2001-12-15', 'Manga larga buzco con estampa original tricolor con capucha', 2, 9, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(11, '/images/1624546371792foto_producto-.jpg', 'Diesel', 'Negro con capucha', 'L', '2021-06-24', 'Buzo frisa color negro con estampado', 14, NULL, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(12, '/images/1624546467900foto_producto-.jpg', 'Nasty Gal', 'Suave mangas apretadas', 'M,L', '2021-06-23', 'Buzo colorado tela suave con mangas apretadas estilo europeo', 1, NULL, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(13, '/images/1624561350571foto_producto-.jpg', 'Louis Vuitton', 'Red label ', 'S,L,M', '2017-10-25', 'Buzo colorado con las siglas impresas', 1, NULL, '2021-06-27 22:08:45', '2021-06-27 22:08:45'),
(16, '/images/1624845981048foto_producto-.jpg', 'nike', 'Collage', 'M', '0000-00-00', 'Colores', 20, NULL, '2021-06-29 01:37:13', '2021-06-29 01:37:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `dni` int(4) DEFAULT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `fotodeperfil` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `fecha_nacimiento`, `dni`, `email`, `password`, `fotodeperfil`, `createdAt`, `updatedAt`) VALUES
(1, 'Martina', 'Sanchez', '2000-09-24', 43444555, 'martina@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', '271417_147629578646806_7741057_o.jpg\r\n', '2021-06-14 20:59:53', '2021-06-25 23:58:03'),
(2, 'Florencia', 'Martinez', '1999-04-05', 42786213, 'florencia@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'florMartinez.jpg', '2021-06-14 20:59:53', '2021-06-25 23:57:28'),
(3, 'Joaquin', 'Gonzalez', '2002-03-20', 44987123, 'joaquin@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'DSC02693.jpg', '2021-06-14 20:59:53', '2021-06-25 23:58:25'),
(4, 'Maria', 'Gomez', '2003-04-21', 45123123, 'maria@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'mariaGomez.jpg', '2021-06-14 20:59:53', '2021-06-25 23:58:52'),
(5, 'Gonzalo', 'Echeverria', '1980-10-12', 34678123, 'gonzalo@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'gonzaloEcheverria.jpg', '2021-06-14 20:59:53', '2021-06-25 23:59:10'),
(6, 'Emilia', 'Aramburu', '1993-02-27', 38473928, 'emilia@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'emiliaAramburu.jpg', '2021-06-14 20:59:53', '2021-06-25 23:59:32'),
(7, 'Mia', 'Luro', '1976-08-22', 28763456, 'mialuro@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'miaLuro.jpg', '2021-06-14 20:59:53', '2021-06-25 23:59:55'),
(8, 'Luz', 'Mirlo', '2008-11-29', 54762983, 'luzmirlo@hotmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'luz1luz.jpg', '2021-06-14 20:59:53', '2021-06-26 00:00:21'),
(9, 'Juan', 'Carlos', '1970-10-21', 21613122, 'juancarlos@gmail.com', '$2a$10$Zv/UR9cDLXrBSpfs5tGGe.My.8ve3HVjc6Yx4DsVVrEd2.lnOzKhC', 'joaquingonzalez.jpg', '2021-06-14 20:59:53', '2021-06-26 00:01:20'),
(10, 'flor', 'Alarcon', NULL, NULL, '', '$2a$10$WFmzwv3oLXm9xseCbNhmAuBK1GcgNRh2r7fQZN0CjU18exLq1FyGa', 'edited.jpg', '2021-06-14 20:59:53', '2021-06-27 23:37:03'),
(11, 'Clara', 'Funes', '1999-10-17', 42222222, 'clara@gmail.com', '', '289973_404815202928241_45497987_o.jpg', '2021-06-14 20:59:53', '2021-06-29 20:58:31'),
(12, 'clara', 'diez', NULL, 43557123, 'claradiez@gmai.com', '$2a$10$H3CRo9Mhzms/QPJoZBbezOM2SoiRZYvqZTaTfKvDNp2nv6FCuoTAO', '1623702319953fotodeperfil-.jpg', '2021-06-14 20:59:53', '2021-06-14 21:00:14'),
(13, 'Pia', 'Martinez', NULL, 536712832, 'pia@gmail.com', '$2a$10$YY4gO75kiHzMgLz.yr7h/OTjyLMvhY75wwLgw/zQig3McwBi6OSgq', '1624307301889-fotodeperfil.jpg', '2021-06-21 20:28:22', '2021-06-21 20:28:22'),
(14, 'Renata', 'Pagani', NULL, 54673892, 'renata@gmail.com', '$2a$10$xgcK2rAvj9Cj5IWMB.A1FuPmS06.p7r48.h//KhuOEImNXeUA3Nay', '1624546062342-fotodeperfil.jpg', '2021-06-24 14:47:42', '2021-06-25 20:42:44'),
(16, 'flor', 'riera', NULL, 21613132, 'florbridge@gmail.com', '$2a$10$fvfPyDBncWkBaFD6lP0wkuuj4tg3UKhVuY6MwuSTiJSM.7slUaoQW', '1624646463124-fotodeperfil.jpg', '2021-06-25 18:41:03', '2021-06-25 18:41:03'),
(17, 'flor', 'aguirre', NULL, 42249250, 'martina@gmail.com', '$2a$10$dv2wcH1NKm/NDDHR9Yj3fOO4vFkKsaKse5vxEBv34p5exKeT4gXJ2', '1624660913236-fotodeperfil.jpg', '2021-06-25 22:41:53', '2021-06-25 22:41:53'),
(18, 'flor', 'aguirre', NULL, 42249250, 'martina@gmail.com', '$2a$10$3F4bM/TTShFQ1d.lyb7QaeTdzhmdWtNo7oTjGOobAoj5iNbK4KY76', '1624660998703-fotodeperfil.jpg', '2021-06-25 22:43:18', '2021-06-25 22:43:18'),
(20, 'Lia', 'Aguirre Riera', NULL, 21613132, 'lia@gmail.com', '', 'florylia.jpg', '2021-06-25 22:52:43', '2021-06-29 01:46:01'),
(21, 'Matias', 'Bensadon', NULL, 11268555, 'matiasbensadon@gmail.com', '', '1624836752600-fotodeperfil.JPG', '2021-06-27 23:32:34', '2021-06-29 20:58:22'),
(22, 'Florencia', 'Aguirre', NULL, 42249250, 'florcita.aguirre2510@gmail.com', '', '1624837752876-fotodeperfil.jpg', '2021-06-27 23:49:13', '2021-06-29 20:58:26'),
(23, 'Azul', 'Amar', NULL, 43038633, 'azul@gmail.com', '$2a$10$jQmME2qnow8nZoAVTIgwKudTHqXOJAUMt8FN541n2rSdUkE9EAod2', '1624848158698-fotodeperfil.jpg', '2021-06-28 02:42:38', '2021-06-28 02:42:38'),
(24, 'Cristobal', 'Zemborain', NULL, 10566987, 'cristobal@gmail.com', '$2a$10$Ol0HbA/eF6jr5YhJxFXF8OoKh/x6vciBtJ0HPjgWrYMx7cU79.yhq', '1624897668375-fotodeperfil.jpg', '2021-06-28 16:27:48', '2021-06-28 16:27:48'),
(25, 'manuel', 'riera', NULL, 11258596, 'manuel@gmail.com', '$2a$10$tDhnh7o5GIMXwdY5lOwr4.GTQXeztBwTIedJCfz3XHpmn87n2C5ha', '1624898501994-fotodeperfil.jpg', '2021-06-28 16:41:43', '2021-06-28 16:41:43');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `usuario_id` (`id_usuario`),
  ADD KEY `producto_id` (`id_producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD UNIQUE KEY `ID` (`id`),
  ADD KEY `usuarios_id` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD UNIQUE KEY `ID` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `producto_id` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `usuarios_id` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
