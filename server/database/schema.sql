create table user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  mail VARCHAR(155) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(55) NOT NULL,
  last_name VARCHAR(55) NOT NULL,
  country VARCHAR(100) NOT NULL,
  postal_code INT NOT NULL,
  instrument VARCHAR(155) NOT NULL,
  intent_level ENUM("débutant", "confirmé", "expert") NOT NULL,
  public_performed VARCHAR(155),
  description TEXT NOT NULL,
  influences TEXT Not Null
);

create table announce (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  search_title VARCHAR(155) NOT NULL,
  instrument VARCHAR(155) NOT NULL,
  location VARCHAR(155) NOT NULL,
  description TEXT NOT NULL,
  name VARCHAR(55) NOT NULL, 
  image TEXT
);

create table band (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  stage_name VARCHAR(55) not null,
  date_creation VARCHAR(25),
  intent_level ENUM("débutant", "confirmé", "expert", "professionel") NOT NULL,
  public_performed VARCHAR(155),
  description TEXT NOT NULL,
  styles TEXT,
  influences TEXT Not Null
);


INSERT INTO user (mail, password, first_name, last_name, country, postal_code, instrument, intent_level, public_performed, description, influences)
VALUES ("ramon@gmail.com", "plataoplomo", "ramon", "sanchez", "spain", 45432, "guitar", "débutant", "je ne me suis jamais produit sur scène", "je suis un guitariste debutant et dispo pour n'importe quoi", "yuri buenaventura est mon père spirituel"),
("lestaraudeurs@live.fr", "dzijofzhf", "jean-luc", "delastreet", "france", 20240, "batterie", "confirmé", "De nombreux concert durant l'été", "Je suis batteur professionel depuis 13 ans est dispo durant la saison éstival", "Grand fan de nirvana , je pratique la batterie depuis cette époque"),
("beber@hotmail.com", "carbocream", "bernard", "grodar", "france", 34654, "saxophne et trompette", "expert", "J'étais membre de la choral des furieux de mulhouse, j'ai pu participé à de nombreux évenement en public", "Actuellement à la recherche d'un groupe pour me produire de manière ponctuel le week-end exclusiement", "J'aime beaucoup ce que fait aujourd'hui Jimmy Sax" );

INSERT INTO announce (search_title, instrument, location, description, name, image)
VALUES ("LF GUITAR HERO", "Guitare Electrique", "Nouillorc", "Viens t'allumer les phalanges", "POO ON SYSTEM", "metal.png"),
       ("à la recherche d'un batteur", "Batterie", "Los Argeles", "Viens tabasser ta batterie et uniquement ta batterie", "TROLLING STONEZ", "rock.png"),
       ("un Percutioniste", "Darbuka", "Boulogne-sur-mer", "Si tu es chaud et dispo pour faire danser de la latine onfire", "CALOR ULTIMA", "latino.png"),
       ("Besoin URGENT", "saxophoniste", "Marseille", "si tu es dispo pour un Concert le 11 décembre", "PRIVATE TEACHER", "accoustic.png"),
       ("Hi cow boy", "Harmonica", "Rennes", "Besoin d'un joueur d'harmonica pour la saison 2025", "NRA LOVERS", "country.png"),
       ("Tournée en Louisiane", "Trompette", "Lafayette", "6 mois en tournée en Louisiane et possibilité de visa", "CAJUN SPICES", "jazz.png"),
       ("Festival lover", "Tuba", "Metz", "Amateur de festival rejoins-nous", "FOHK BABYLONE", "psy.png"),
       ("Rock californien", "Basse", "Lilles", "On n'est pas payé mais on rigole bien", "ANARSHIT", "test.png");


INSERT INTO band (stage_name, date_creation, intent_level, public_performed, description, styles, influences)
VALUES ("BIG CROTE ON WALL STREET", "2006", "professionel", "En tournée permanente", "Sex Drogue et rock n roll sans le sex malheureusement", "Hard rock", "N'importe quel groupe de hard qui se lave pas tout les jours !"),
("Saveur latine", "2014", "confirmé", "Seulement l'été", "La magie de faire danser les corps jusqu'à ce que du feu apparaisse", "batchata", "Dans la lignée d'aventura");