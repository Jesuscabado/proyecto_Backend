use mitienda;

INSERT INTO productos (nombre, descripcion, precio, imagen, stock, create_date) VALUES
('Aventura Z: Vol. 1 Lovecraft', 'Aventura Z Lovecraft es un juego narrativo para una o dos personas en el que os pondréis en la piel de los investigadores para resolver un caso. Un caso nada fácil ya que en éste están implicados poderes ocultos más allá del conocimiento humano, inspirados en la literatura de H.P. Lovecraft. ¡Adéntrate en Aventura Z!. Esta segunda edición incluye el manual revisado y separado del libro de misiones', '25.95', ' ', '100', '2015-03-22' ),
('Munchkin', 'En Munchkin baja al Dungeon. Mata todo lo que encuentres. Apuñala a tus amigos y quédate con sus cosas. Toma el tesoro y corre. Admítelo. Te encanta.', '13.50', '', '200', '2005-02-13' ), 
('Aventura Z: Vol. 2 Héroes', 'es un juego narrativo para una o dos personas en el que os pondréis en la piel de los protagonistas y os adentraréis en dos aventuras con temática de espada y brujería. Te esperan 40 mapas con distintas mecánicas para resolver y múltiples finales que dependen solo de vuestras decisiones.', '25.95', ' ', '4300', '2016-01-01' ), 
('Exit El Señor de los Anillos: Sombras Sobre la Tierra Media', 'Consigue salvar a la Tierra Media junto a Frodo y sus amigos en "Exit El Señor de los Anillos: Sombras sobre la Tierra Media".', '13.50', ' ', '1100', '2019-02-13' ), 
('Virus', 'Virus es un juego de cartas contagioso. No podrás jugar solo una partida y querrás llevarlo a todas partes contigo. Consigue tener un cuerpo sano y vigoroso mientras contagias con virus los órganos de los demás. El pique y la diversión están garantizados.', '13.46', ' ', '30', '2020-03-12' ), 
('Exploding Kittens', 'Exploding Kittens es un juego de cartas rápido y divertido, ideal para grupos amantes de los gatos y explosiones. Elimina al resto de los jugadores hasta que consigas ser la única persona que ha sobrevivido al temible ataque de los gatos explosivos.', '19.99', ' ', '0', '2017-03-22' ), 
('Catan El Duelo', 'Catan El Duelo es una nueva versión de Los Príncipes de Catan mejorada. La mejor forma de vivir la experiencia de Catan a 2 jugadores. ¡Y es ideal para llevar de viaje!',  '22.50', ' ', '1400', '2020-12-12' ),  
('BANG!', 'Bang! es un juego de cartas en el que nadie será tu amigo. Una calle polvorienta. Una zarza rueda de un lado a otro. Dos hombres de pie, frente a frente. Uno de ellos va armado con una pistola. El otro le apunta con su Winchester.', '19.50', ' ', '333', '2019-03-22' ), 
('SUSHI GO', 'Sushi Go es un juego de cartas en el que tendréis que intentar comer vuestra comida favorita: sushi. Combina las cartas de la mejor forma posible y consigue más puntos que los demás. Pero, esto no es tan fácil porque... ¡las cartas pasarán de una persona a otra! Recuerda las cartas y fíjate en las que colocan los demás para elegir bien a cada turno.', '8.95', ' ', '666', '2021-07-22' ),  ('Mini Express', '"Mini Express" es un juego de tablero en el que, con una adecuada estrategia, podrás extender el imperio ferroviario por los Estados Unidos.', '35.95', ' ', '221', '2014-04-22' ),  
('Sí, Señor Oscuro - Caja Roja', 'Juego de cartas donde demostrar la capacidad de improvisación y de ingenio, buscando las excusas adecuadas.', '19.95', ' ', '421', '2017-09-12' ), 
('Trivial Pursuit Edición Clasica', 'Para los amantes del Trivial que quieren demostrar lo listos que son.  Esta edición incluye 3.000 preguntas completamente nuevas que pondrán a prueba hasta el más experimentado de los jugadores de Trivial.', '30.95', ' ', '21', '2004-09-22' ),  
('Juego de Tronos: básico', 'Una nueva expansión para Juego de Tronos: El juego de tablero, con el que disfrutarás al máximo de la Madre de Dragones.', '39.95', ' ', '211', '2018-09-22' ),  
('Los Hombres Lobo de Castronegro', 'En lo más profundo del bosque, la pequeña aldea de Castronegro es desde hace algún tiempo presa del ataque de los Hombres Lobo. Los aldeanos deben superar su miedo para poder erradicar esta plaga venida de la noche de los tiempos, antes de que la aldea pierda sus últimos habitantes...', '9.95', ' ', '321', '2014-09-22' ),  
('Dragon Ball Memoarrr!', 'Dragon Ball Memoarrr! es una nueva versión del juego de memoria basado en el maravilloso mundo de Akira Toriyama: Bola de Dragón.¡Juega durante siete rondas memorizando lo que va saliendo en las cartas para poder llevarte la victoria!', '17.95', ' ', '0', '1999-09-22' ), 
('Monopoly Deadpool', 'vuelve el monopoly con tu personaje favorito','44.95', ' ', '1', '2015-03-02' ), 
('Juego del Uno', 'Líbrate de todas las cartas antes que tus rivales ... pero no te olvides de avisar cuando solo te quede UNA.', '11.02', ' ', '345', '2011-09-14' ),  
('D&D Essentials: Heroes de las Tierras Caidas', 'Este reglamento esencial de Dungeons & Dragons contiene detalles sobre las clases clérigo, guerrero, mago y pícaro, junto con reglas para personajes eladrines, enanos, elfos, humanos y medianos.  Además, proporciona una amplia variedad de dotes, armas, armaduras y equipo aventurero, así como un resumen básico de las reglas de juego.', '24.04', ' ', '321', '1995-09-12' ),   ('Pajarracos', 'Pajarracos es un juego de estrategia, de 3 a 6 jugadores, apto para todos los miembros de la familia. ¡Consigue más frutas que tus rivales y sé el ganador de este divertido juego!', '8.00', ' ', '97', '2013-09-22' ),  
('24h', '24h es un juego de múltiples escenarios donde podrás participar en diferentes aventuras. Además, gracias a las dos pantallas que trae el juego, se pueden jugar simultáneamente dos partidas diferentes a la vez.', '24.00', ' ', '24', '2014-02-24' );


INSERT INTO usuarios (nombre, email, direccion, ciudad, codigo_postal) VALUES
('María', 'maria.garcia@example.com', 'Calle de la Paz 15', 'Madrid', '28003'),
('David', 'david.fernandez@example.com', 'Avenida del Mediterráneo 56', 'Valencia', '46010'),
('Ana', 'ana.lopez@example.com', 'Calle del Generalísimo 23', 'Logroño', '26002'),
('José', 'jose.martinez@example.com', 'Calle de la Catedral 7', 'Sevilla', '41001'),
('Sara', 'sara.perez@example.com', 'Calle de la Virgen 21', 'Zaragoza', '50005'),
('Juan', 'juan.ruiz@example.com', 'Plaza de España 14', 'Córdoba', '14001'),
('Elena', 'elena.sanchez@example.com', 'Calle del Sol 10', 'Valladolid', '47004'),
('Carlos', 'carlos.gomez@example.com', 'Avenida de la Constitución 30', 'Granada', '18001'),
('Laura', 'laura.torres@example.com', 'Calle de la Palma 13', 'Barcelona', '08003'),
('Miguel', 'miguel.garcia@example.com', 'Calle del Prado 5', 'Murcia', '30002');


