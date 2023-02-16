CREATE TABLE IF NOT EXISTS teams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(255) NOT NULL,
    team_skill_factor DECIMAL(4, 2) NOT NULL
);
INSERT INTO teams (team_name, team_skill_factor)
VALUES ('Red Bull Racing', 3),
    ('Ferrari', 4),
    ('Mercedes', 7),
    ('Alpine', 10),
    ('McLaren', 11),
    ('Alfa Romeo', 16),
    ('Aston Martin', 18),
    ('Haas F1 Team', 30),
    ('AlphaTauri', 22),
    ('Williams', 40);

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
VALUES ('Max', 'Verstappen', 2, 1),
    ('Sergio', 'Perez', 8, 1),
    ('Charles', 'Leclerc', 3, 2),
    ('Carlos', 'Sainz', 5, 2),
    ('Lewis', 'Hamilton', 10, 3),
    ('George', 'Russel', 9, 3),
    ('Esteban', 'Ocon', 16, 4),
    ('Fernando', 'Alonso', 10, 4),
    ('Lando', 'Norris', 13, 5),
    ('Daniel', 'Ricciardo', 23, 5),
    ('Valtteri', 'Bottas', 19, 6),
    ('Zhou', 'Guanyu', 22, 6),
    ('Lance', 'Stroll', 50, 7),
    ('Sebastian', 'Vettel', 25, 7),
    ('Kevin', 'Magnussen', 40, 8),
    ('Mick', 'Schumacher', 55, 8),
    ('Pierre', 'Gasly', 27, 9),
    ('Yuki', 'Tsunoda', 46, 9),
    ('Nicholas', 'Latifi', 70, 10),
    ('Alexander', 'Albon', 51, 10);
    
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

CREATE TABLE IF NOT EXISTS comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    content VARCHAR(1000) NOT NULL,
    submitted TIMESTAMP NOT NULL,
    track_id INT,
    FOREIGN KEY(track_id) REFERENCES tracks(id)
);

INSERT INTO comments (author, content, submitted, track_id)
VALUES ('RacingFan23', 'Bahrain International Circuit never fails to deliver some amazing racing action. I was on the edge of my seat the entire time!', CURRENT_TIMESTAMP(), 1),
        ('F1FeverDream', 'The Bahrain International Circuit race is always a highlight of the season. I cant wait to see what happens next year.', CURRENT_TIMESTAMP(), 1),
        ('F1Addict99', 'Theres something special about the way the Bahrain International Circuit track is designed. It creates an amazing spectacle for fans and drivers alike.', CURRENT_TIMESTAMP(), 1),
        ('CrazyRacer', 'Congrats to all the drivers who gave it their all at Bahrain International Circuit. The level of competition was truly inspiring.', CURRENT_TIMESTAMP(), 1),
        ('F1Admirer01', 'Watching the drivers who made it onto the podium at Bahrain International Circuit was a real thrill. They earned it through hard work and determination.', CURRENT_TIMESTAMP(), 1),
        ('Expert', 'Bahrain International Circuit is a true test of skill and strategy for F1 teams. Its always fascinating to see how different drivers approach it.', CURRENT_TIMESTAMP(), 1),
        ('AceDriver', 'You can see the level of concentration on the drivers faces as they tackle the Bahrain International Circuit track. Its truly impressive.', CURRENT_TIMESTAMP(), 1),
        ('F1PartyAnimal', 'The atmosphere at Bahrain International Circuit during the race weekend is incredible. Theres a real party vibe that I love.', CURRENT_TIMESTAMP(), 1);