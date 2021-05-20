-- import extension to generate random UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- drop the tables we're seeding
DROP TABLE IF EXISTS
    cloudhavens,
    forms,
    users
CASCADE;

-- start creating the tables we're seeding
CREATE TABLE IF NOT EXISTS cloudhavens (
    cloudhaven_id SERIAL PRIMARY KEY,
    instance_name VARCHAR ( 50 ) UNIQUE NOT NULL,
    auth_token VARCHAR ( 50 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    cloudhaven_id integer FOREIGN KEY (cloudhavens),
    first_name VARCHAR ( 50 ) NOT NULL,
    last_name VARCHAR ( 50 ) NOT NULL,
    birthday DATE NOT NULL,
    phone VARCHAR ( 15 ) NOT NULL,
    address VARCHAR ( 50 ) NOT NULL,
    city VARCHAR ( 50 ) NOT NULL,
    state_abbreviation VARCHAR ( 3 ) NOT NULL,
    zip_code VARCHAR ( 10 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    identifier UUID DEFAULT uuid_generate_v4(),
    ssn UUID NOT NULL,
    created_on TIMESTAMP DEFAULT Now(),
    last_login TIMESTAMP DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS forms (
    form_id SERIAL PRIMARY KEY,
    cloudhaven_id integer FOREIGN KEY (cloudhavens),
    user_id integer FOREIGN KEY (users),
);

CREATE TABLE IF NOT EXISTS form_data (
    data_id SERIAL PRIMARY KEY,
    form_id integer FOREIGN KEY (forms),
    label VARCHAR ( 50 )
);

-- Seed cloudhaven instances
INSERT INTO
    cloudhavens (instance_name, password)
VALUES
    ('Demo Instance','demo'),
    ('Test Instance 1','test1'),
    ('Test Instance 2','test2')
;

INSERT INTO
    cloudhavens (instance_name, password)
VALUES
    ('Demo Instance','demo'),
    ('Test Instance 1','test1'),
    ('Test Instance 2','test2')
;

INSERT INTO
    users (cloudhaven_id, first_name, last_name, birthday, phone, address, city, state_abbreviation, zip_code, email, ssn)
VALUES
    (1, 'Jane', 'Mustang', date '2001-09-28', '805-756-2345', '1 Grand Ave', 'San Luis Obispo', 'CA', '93407', 'jmustang@calpoly.edu', '123456789')
    (1, 'Maurice', 'Smith', date '1980-05-16', '123-456-7891', '123 Canyon Circle', 'San Luis Obispo', 'CA', '93410', 'msmith@test.com', '987654321')
    (1, 'Jack', 'Johnson', date '1998-07-23', '987-456-7891', '5050 Canyon Crest', 'Santa Clara', 'CA', '98765', 'jj@email.com', '198273465')
;

INSERT INTO
    forms (cloudhaven_id, user_id)
VALUES
    (1, 1),
    (1, 1),
    (1, 2)
;

INSERT INTO
    forms_data (form_id, label)
VALUES
    (1, 'Favorite Color'),
    (2, 'Name')
    (2, 'Address')
    (3, 'Name')
    (3, 'Address')
    (3, 'Email')
;