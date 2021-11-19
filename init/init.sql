CREATE TABLE user (
  id varchar(20) NOT NULL,
  nickname varchar(20) NOT NULL,
  password varchar(64) NOT NULL,
  number int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (number),
  UNIQUE KEY id_UNIQUE (id)
);
