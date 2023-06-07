-- \i /Users/ericlee/HackReactor/MVP/database/schema.sql;
\c temp;
DROP DATABASE IF EXISTS gems;
CREATE DATABASE gems;

\c gems;
DROP TABLE IF EXISTS initial;
DROP TABLE IF EXISTS gem_weight;
CREATE TABLE initial (
  id SERIAL PRIMARY KEY,
  name TEXT,
  type TEXT,
  weight INT
);

CREATE TABLE gem_weight (
  id SERIAL PRIMARY KEY,
  name TEXT,
  superior INT DEFAULT 0,
  anomalous INT DEFAULT 0,
  divergent INT DEFAULT 0,
  phantasmal INT DEFAULT 0
);

COPY initial(id, name, type, weight)
FROM '/Users/ericlee/HackReactor/MVP/gems.csv'
DELIMITER ','
CSV HEADER;

INSERT INTO gem_weight (name)
SELECT DISTINCT name FROM initial;

