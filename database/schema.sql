DROP DATABASE IF EXISTS gems;
CREATE DATABASE gems;

\c gems;

DROP TABLE IF EXISTS gem_weight

CREATE TABLE gem_weight (
  id SERIAL PRIMARY KEY,
  base TEXT,
  superior INT,
  anomalous INT,
  divergent INT,
  phantasmal INT
);