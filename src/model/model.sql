CREATE DATABASE building;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE company (
  company_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_name varchar(64) not null
);


CREATE TABLE complex (
  complex_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  compex_name varchar(64) not null,
  company_id uuid REFERENCES company(company_id)
);


CREATE TABLE house (
  house_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  overall_size integer not null,
  house_rooms integer not null,
  house_price_1kv integer not null,
  house_location varchar(32) not null,
  complex_id uuid not null,
    FOREIGN KEY(complex_id)
    REFERENCES complex(complex_id)
    ON DELETE CASCADE
);

CREATE TABLE bank (
  bank_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  bank_name text not null,
  mortgage_duration integer not null,
  starting_payment varchar(64) not null,
  bank_service varchar(32) not null
);


SELECT 
    (overall_size * house_price_1kv) AS house_price,
    ((overall_size * house_price_1kv) / 100 * 17) AS starting_payment,
    ((overall_size * house_price_1kv) - (overall_size * house_price_1kv) / 100 * 17) / 120 AS monthly_payment
    FROM
 house 
  WHERE house_id = '76bc64de-a570-4c94-adb3-1a203b7fc5c7'
  ORDER BY house_id asc;

