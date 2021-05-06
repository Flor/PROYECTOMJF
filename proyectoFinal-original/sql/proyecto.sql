-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 26-04-2021 a las 17:53:43
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `proyectoFinal`
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
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_usuario`, `id_producto`, `comentario`, `fecha`) VALUES
(0, 2, 0, 'Comodisimo!', '2008-04-21'),
(1, 1, 0, 'Se me descoloro con el lavado', '2003-11-22'),
(2, 7, 1, 'Se elastiza', '2011-01-30'),
(3, 4, 2, 'Se confundieron de talle', '2020-04-08'),
(4, 6, 3, 'Super', '2010-11-12'),
(5, 2, 4, 'Todo terreno', '2020-07-24'),
(6, 8, 5, 'Muy apretado', '2019-03-22'),
(7, 3, 6, 'Colores super\'', '2017-06-28'),
(8, 2, 7, 'Comodisimo y muy calentito', '2006-05-01'),
(9, 6, 7, 'El talle me apreto', '2009-11-11'),
(10, 5, 8, 'Se me achico con el lavado', '2021-02-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `imagen` text NOT NULL,
  `marca` text NOT NULL,
  `modelo` text NOT NULL,
  `talle` varchar(10) NOT NULL,
  `fecha_publicacion` date NOT NULL,
  `descripcion` text NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `marca`, `modelo`, `talle`, `fecha_publicacion`, `descripcion`, `id_usuario`) VALUES
(0, '/images/buzoadidass.jpg\"', 'Adidas', 'Original 3 stripes', 'M,L', '2019-07-02', 'Buzo Negro Adidas Originals 3-Stripes Crew. Tela Algodón|Polyester|Lino|Viscosa Composición	77% algodón – 23% poliéster', 3),
(1, '/images/allsaintsbuzo.jpg', 'AllSaints', 'Grey confy', 'S,M,L', '2020-05-12', 'Buzo escote redondo y manga ranglan. Color gris. Cintura y puños elastizados. Talle de prenda de la foto: L\",\r\n        ', 5),
(2, '/images/buzofila.jpg', 'Fila', 'Capucha tres colores', 'S,M', '2008-12-12', 'Buzo rojo Fila net. Super comodo. Es abrigado', 2),
(3, '/images/gucci2buzo.jpg', 'Gucci', 'Cierre con sigla G', 'S,L', '2020-01-28', 'Buzo blanco con detalles originales Gucci.', 1),
(4, 'images/hm2buzo.jpg', 'HM', 'Bicolor con capucha', 'S', '2005-03-19', 'Sudadera en mezcla de algodón con capucha cruzada con forro de punto y cordón de ajuste, un bolsillo canguro y puños y bajo en punto elástico de canalé. Tejido cepillado suave en el interior', 4),
(5, 'images/prada2buzo.jpg', 'Prada', 'Bicolor sin capucha', 'M', '2015-11-02', 'Sudadera Prada bicolor: negro y azul. Tiene detalles en el dorso', 2),
(6, '/images/nikebuzo.jpg', 'Nike', 'Bicolor contra lluvia', 'S,L', '2018-12-24', 'Buzo sin capucha. Material poliester. Super comodo', 8),
(7, '/images/zarabuzo.jpg', 'Zara', 'Bicolor sin capucha amarillo', 'M', '2018-08-21', 'Buzo sin capucha. Material poliester. Super comodo y abrigado. Colores unicos', 1),
(8, '/images/hollisterbuzo.jpg', 'Hollister', 'Bicolor con capucha', 'L,XL', '2017-08-11', 'Comodo buzo cerrado en tela de suave, capucha con cordón ajustable, estampa de logo, bolsillo delantero', 7),
(9, '/images/abercrombiebuzo.jpg', 'Abercrombie', 'Mangas azules', 'S,XL', '2004-04-01', 'Buzo con capucha informal, confeccionada en tela de mezclilla de algodón cómoda, diseñada con dobladillo ancho. ', 5),
(10, '/images/armanitbuzo.jpg', 'Armani', 'CrewNeck Sweatshirt - Navy blue', 'M,L', '2001-12-15', 'Manga larga buzco con estampa original sin capucha', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `dni` int(4) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `fecha_nacimiento`, `dni`, `email`, `password`, `username`) VALUES
(1, 'Martina', 'Sanchez', '2000-09-24', 43444555, 'martina@gmail.com', 'martina123', 'martinasanchez'),
(2, 'Florencia', 'Martinez', '1999-04-05', 42786213, 'florencia@gmail.com', 'florencia123', 'flormartinez'),
(3, 'Joaquin', 'Gonzalez', '2002-03-20', 44987123, 'joaquin@gmail.com', 'joaquin123', 'joaquingonzalez'),
(4, 'Maria', 'Gomez', '2003-04-21', 45123123, 'maria@gmail.com', 'maria123', 'mariagomez'),
(5, 'Gonzalo', 'Echeverria', '1980-10-12', 34678123, 'gonzalo@gmail.com', 'gonzalo123', 'gonzaloecheverria'),
(6, 'Emilia', 'Aramburu', '1993-02-27', 38473928, 'emilia@gmail.com', 'emilia123', 'emiliaaramburu'),
(7, 'Mia', 'Luro', '1976-08-22', 28763456, 'mialuro@gmail.com', 'miamia', 'mialuro'),
(8, 'Luz', 'Mirlo', '2008-11-29', 54762983, 'luzmirlo@hotmail.com', 'luz123', 'luz1luz');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD UNIQUE KEY `id` (`id`),
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
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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