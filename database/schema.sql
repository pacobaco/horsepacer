CREATE TABLE users(

id TEXT PRIMARY KEY,
name TEXT,
email TEXT,
credits INTEGER
);

CREATE TABLE tasks(

id INTEGER PRIMARY KEY,
title TEXT,
description TEXT,
price INTEGER
);

CREATE TABLE steps(

id INTEGER PRIMARY KEY,
taskId INTEGER,
content TEXT
);

CREATE TABLE unlocks(

userId TEXT,
taskId INTEGER
);

CREATE TABLE coaches(

userId TEXT,
bio TEXT
);

