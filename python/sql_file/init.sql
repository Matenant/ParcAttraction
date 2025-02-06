DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id integer PRIMARY KEY ASC ,
    nom text not null,
    description text not null,
    difficulte integer,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id integer primary key ASC,
    name text not null,
    password text not null
);