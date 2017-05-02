ALTER TABLE Pessoa ADD COLUMN NomeCompleto VARCHAR(255) NULL;

UPDATE Pessoa SET NomeCompleto = CONCAT(PrimeiroNome," ",UltimoNome);

ALTER TABLE Pessoa MODIFY NomeCompleto VARCHAR(255) NOT NULL;
