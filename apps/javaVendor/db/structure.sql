CREATE TABLE IF NOT EXISTS cloudhavens (
    cloudhaven_id serial PRIMARY KEY,
    auth_token VARCHAR ( 50 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS forms (
    column1 datatype(length) column_contraint,
    column2 datatype(length) column_contraint,
    column3 datatype(length) column_contraint,
    table_constraints
);

CREATE TABLE IF NOT EXISTS tables (
    column1 datatype(length) column_contraint,
    column2 datatype(length) column_contraint,
    column3 datatype(length) column_contraint,
    table_constraints
);

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    cloudhaven_id int FOREIGN KEY (cloudhavens),
    password VARCHAR ( 50 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
    table_constraints
);