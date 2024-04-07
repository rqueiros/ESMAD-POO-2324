// 3. Create an object literal to store information about:

// a. Person’s personal data such as: name, address, birthday and local of birth, contacts (phone and email) and profession.

const person = {
    name: 'John Doe',
    address: '1234 Elm Street',
    birthday: '01/01/1970',
    placeOfBirth: 'Springfield',
    contacts: {
        phone: '123-456-7890',
        email: 'aaa@domain'
    },
    profession: 'Software Developer'
};

// b. Information about a soccer game. The object must allow a function (not to implement) be capable of showing the final score of the game, the name of the teams, the authors of the goals, the stadium name and the date and time of the game.

const game = {
    team1: 'Arsenal',
    team2: 'Man City',
    stadium: 'Emirates Stadium',
    date: '2023-02-15',
    time: '19:30',
    goals: [
        {
            team: 'team2',
            player: 'Kevin De Bruyne',
            time: '24:00',
        },
        {
            team: 'team1',
            player: 'Bukayo Saka',
            time: '42:00',
        },
        {
            team: 'team2',
            player: 'Jack Grealish',
            time: '72:00',
        },
        {
            team: 'team2',
            player: 'Erling Haaland',
            time: '82:00',
        },
    ],
    score() {
        // method not implemented
        return true;
    },
};