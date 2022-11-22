CREATE TABLE IF NOT EXISTS teams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(255) NOT NULL,
    team_skill_factor DECIMAL(4, 2) NOT NULL
);
INSERT INTO teams (team_name, team_skill_factor)
VALUES ('Red Bull Racing', 1),
    ('Ferrari', 1),
    ('Mercedes', 1),
    ('Alpine', 1),
    ('McLaren', 1),
    ('Alfa Romeo', 1),
    ('Aston Martin', 1),
    ('Haas F1 Team', 1),
    ('AlphaTauri', 1),
    ('Williams', 1);

CREATE TABLE IF NOT EXISTS drivers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    driver_skill_factor DECIMAL(4, 2) NOT NULL,
    points INT DEFAULT 0,
    team_id INT,
    FOREIGN KEY(team_id) REFERENCES teams(id)
);
INSERT INTO drivers (
        fname,
        lname,
        driver_skill_factor,
        team_id
    )
VALUES ('Max', 'Verstappen', 1, 1),
    ('Sergio', 'Perez', 1, 1),
    ('Charles', 'Leclerc', 1, 2),
    ('Carlos', 'Sainz', 1, 2),
    ('Lewis', 'Hamilton', 1, 3),
    ('George', 'Russel', 1, 3),
    ('Esteban', 'Ocon', 1, 4),
    ('Fernando', 'Alonso', 1, 4),
    ('Lando', 'Norris', 1, 5),
    ('Daniel', 'Ricciardo', 1, 5),
    ('Valtteri', 'Bottas', 1, 6),
    ('Zhou', 'Guanyu', 1, 6),
    ('Lance', 'Stroll', 1, 7),
    ('Sebastian', 'Vettel', 1, 7),
    ('Kevin', 'Magnussen', 1, 8),
    ('Mick', 'Schumacher', 1, 8),
    ('Pierre', 'Gasly', 1, 9),
    ('Yuki', 'Tsunoda', 1, 9),
    ('Nicholas', 'Latifi', 1, 10),
    ('Alexander', 'Albon', 1, 10);
    
CREATE TABLE IF NOT EXISTS tracks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    track_name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    img_filename VARCHAR(255),
    result JSON
);
INSERT INTO tracks (track_name, country, img_filename)
VALUES ('Bahrain International Circuit', 'Bahrain', 'Bahrain.png'),
    ('Jeddah Corniche Circuit', 'Saudi Arabia', 'Jeddah.png'),
    ('Albert Park Circuit', 'Australia', 'Australia.png'),
    ('Autodromo Enzo e Dino Ferrari', 'Italy', 'Imola.png'),
    ('Miami International Autodrome', 'United States', 'Miami.png'),
    ('Circuit de Barcelona-Catalunya', 'Spain', 'Barcelona.png'),
    ('Circuit de Monaco', 'Monaco', 'Monaco.png'),
    ('Baku City Circuit', 'Azerbaijan', 'Baku.png'),
    ('Circuit Gilles-Villeneuve', 'Canada', 'Canada.png'),
    ('Silverstone Circuit', 'Great Britain', 'Silverstone.png'),
    ('Red Bull Ring', 'Austria', 'Austria.png'),
    ('Circuit Paul Ricard', 'France', 'France.png'),
    ('Hungaroring', 'Hungary', 'Hungaroring.png'),
    ('Circuit de Spa-Francorchamps', 'Belgium', 'Spa.png'),
    ('Circuit Zandvoort', 'Netherlands', 'Zandvoort.png'),
    ('Autodromo Nazionale Monza', 'Italy', 'Monza.png'),
    ('Marina Bay Street Circuit', 'Singapore', 'Singapore.png'),
    ('Suzuka International Racing Course', 'Japan', 'Suzuka.png'),
    ('Circuit of The Americas', 'United States', 'Austin.png'),
    ('Autodromo Hermanos Rodríguez', 'Mexico', 'Mexico.png'),
    ('Autodromo José Carlos Pace', 'Brazil', 'Brazil.png'),
    ('Yas Marina Circuit', 'Abu Dhabi', 'AbuDhabi.png');