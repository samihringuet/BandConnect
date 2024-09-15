create table user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_type ENUM("musicien", "groupe") NOT NULL,
  mail VARCHAR(155) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(55) NOT NULL,
  last_name VARCHAR(55) NOT NULL,
  country VARCHAR(100) NOT NULL,
  postal_code INT NOT NULL
);

create table announce (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  search_title VARCHAR(155) NOT NULL,
  user_type ENUM("musicien", "groupe") NOT NULL,
  instrument VARCHAR(155) NOT NULL,
  location VARCHAR(155) NOT NULL,
  description TEXT NOT NULL,
  name VARCHAR(55) NOT NULL
);


INSERT INTO user (user_type, mail, password, first_name, last_name, country, postal_code)
VALUES ("musicien", "ramon@gmail.com", "plataoplomo", "ramon", "sanchez", "spain", 45432),
("groupe", "lestaraudeurs@live.fr", "dzijofzhf", "jean-luc", "delastreet", "france", 20240),
("musicien", "beber@hotmail.com", "carbocream", "bernard", "grodar", "france", 34654);

INSERT INTO announce (search_title, user_type, instrument, location, description, name)
VALUES ("LF GUITAR HERO", "groupe", "guitare electrique", "nouillorc", "Nous recherchons un guitariste pour notre groupe , si possible qui aime faire hurler son materiel et s'arracher les phalanges", "POO ON SYSTEM"),
("à la recherche d'un batteur", "groupe", "batterie", "los argeles", "si tu aimes tabasser ta batterie et uniquement ta batterie, tu es le bienvenue", "kawapunka"),
("seek groupe latino", "musicien", "guitar", "lens", "chaud et dispo pour faire danser de la latine enervé", "johnny gimenez");