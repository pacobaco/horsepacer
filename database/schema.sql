
CREATE TABLE users(

id SERIAL PRIMARY KEY,

email TEXT,

password TEXT,

role TEXT,

points INT DEFAULT 0

);



CREATE TABLE tasks(

id SERIAL PRIMARY KEY,

title TEXT,

description TEXT,

coach_id INT

);



CREATE TABLE steps(

id SERIAL PRIMARY KEY,

task_id INT,

step_number INT,

price INT,

instructions TEXT,

video_url TEXT

);



CREATE TABLE purchases(

id SERIAL PRIMARY KEY,

user_id INT,

step_id INT

);
