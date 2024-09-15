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

INSERT INTO user (user_type, mail, password, first_name, last_name, country, postal_code)
VALUES ("musicien", "ramon@gmail.com", "plataoplomo", "ramon", "sanchez", "spain", 45432),
("groupe", "lestaraudeurs@live.fr", "dzijofzhf", "jean-luc", "delastreet", "france", 20240),
("musicien", "beber@hotmail.com", "carbocream", "bernard", "grodar", "france", 34654);