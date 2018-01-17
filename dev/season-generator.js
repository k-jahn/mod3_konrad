// season-generator.js ===============================================================


// external code --------------------------------------------------------
// array shuffle function, taken from stackoverflow
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// round robin generator, taken from npm package roundrobin
function roundrobin(n, ps) {  // n = num players
    const DUMMY = -1;
    var rs = [];                  // rs = round array
    if (!ps) {
        ps = [];
        for (var k = 1; k <= n; k += 1) {
            ps.push(k);
        }
    } else {
        ps = ps.slice();
    }

    if (n % 2 === 1) {
        ps.push(DUMMY); // so we can match algorithm for even numbers
        n += 1;
    }
    for (var j = 0; j < n - 1; j += 1) {
        rs[j] = []; // create inner match array for round j
        for (var i = 0; i < n / 2; i += 1) {
            if (ps[i] !== DUMMY && ps[n - 1 - i] !== DUMMY) {
                rs[j].push([ps[i], ps[n - 1 - i]]); // insert pair as a match
            }
        }
        ps.splice(1, 0, ps.pop()); // permutate for next round
    }
    return rs;
};

// definitions ---------------------------------------------------------

// variables
let teamsNr;
let gamesNr;
let gamesPlayed = 5;
let gamesPerSunday = 2;
let p_goal = 0.6;

// constants
const schools = [
    {
        id: 'katz',
        name: 'AJ Katzenmaier',
        mapUrl: ''
    },
    {
        id: 'green',
        name: 'Greenbay',
        mapUrl: ''
    },
    {
        id: 'yeag',
        name: 'Howard A Yeager',
        mapUrl: ''
    },
    {
        id: 'hart',
        name: 'Marjorie P Hart',
        mapUrl: ''
    },
    {
        id: 'north',
        name: 'North',
        mapUrl: ''
    },
    {
        id: 'south',
        name: 'South',
        mapUrl: ''
    },
];
const referees = [
    'Francene Finnen',
    'Chung Cousineau',
    'Deshawn Denton',
    'Estrella Eldreth',
    'Palmer Plasse',
    'Merle Marcellus',
    'Sook Stiefel',
    'Earnest Ebersole',
    'Dani Diedrich',
    'Shawn Schrader',
    'Ena Erben',
    'Sergio Shimp',
    'Earl Eveland',
    'Brandie Bounds',
    'Mozelle Mcgibbon',
    'Desire Dotson',
    'Patrick Palmateer',
    'Kirstie Killoran',
    'Nicholle Nickelson',
    'Tad Tejera'
]
const coaches = shuffle([
    'Henry Howser',
    'Gregg Grooms',
    'Kerstin Knarr',
    'Benito Barbara',
    'Margareta Muma',
    'Elda Enright',
    'Cleo Corsi',
    'Samara Strong',
    'Huey Hartshorn',
    'Noble Nester',
    'Allegra Ashurst',
    'Wallace Winger',
    'Inocencia Ito',
    'Jacinto Johnstone',
    'Ethyl Eckman',
    'Magaret Mccumber',
    'Merlene Muraoka',
    'Lai Lawyer',
    'Jayson Jilek',
    'Wanita Woodham'
])

// functions
function fillSelect(id, from, to) {
    var options = []
    for (let i = from; i <= to; i++) {
        options.push(
            $('<option>', { text: i, value: i })
        );
    }
    $(id).html('').append(options)
}
function teamsChange() {
    teamsNr = $('#teams').val()
    gamesNr = teamsNr * (teamsNr - 1) / 2
    $('#games').html(gamesNr)
    fillSelect('#gamesPlayed', 0, gamesNr);
    $('#gamesPlayed').val('6');
}
function generate() {
    // seed teams
    let seed = roundrobin(+teamsNr).reduce((x,y) => x.concat(y),[]);
    // generate games-
    let games = [];
    for (let i=0; i<gamesNr+3; i++) {
        games.push({
            id: i+1,
            date: new Date(2018,8,2+7*Math.floor(i / gamesPerSunday), [11 , 20, 16 ][i % gamesPerSunday],0,0,0),
            name: 'Game ' + (i+1),
            team1Id: i<gamesNr? seed[i][0] : 0,
            team2Id: i < gamesNr ? seed[i][1] : 0,
            location: schools[i%schools.length].id,
            referee: referees[Math.floor(Math.random() * referees.length)],
            played: false,
            team1goals: 0,
            team2goals: 0,
        });
        if (i>=gamesNr) {
            games[i].name = ['Semi A', 'Semi B', 'Final'][i-gamesNr];
            games[i].date = new Date(2018, 8, 2 + 7 * (Math.floor(gamesNr / gamesPerSunday) + i - gamesNr), 20, 0, 0, 0);
        }
    }
    // generate teams
    let teams = [];
    for (let i = 0; i < (+teamsNr + 1); i++) {
        teams.push({
            id: i,
            name: i?'U'+(i+1):'TBD',
            home: i?schools[i % schools.length].id:'',
            coach: i?coaches[i]:'',
            goals: 0,
            goals_taken: 0,
            win: 0,
            loss: 0,
            tie: 0,
            mp: 0,
        });
    }
    // simulate season
    for (let i=0; i<gamesPlayed; i++) {
        let g1 = 0, g2 = 0;
        // random goals
        while(Math.random() < p_goal) g1++
        while(Math.random() < p_goal) g2++
        // update game
        games[i].played = true;
        games[i].team1goals += g1;
        games[i].team2goals += g2;
        // update teams
        for (team of [games[i].team1Id, games[i].team2Id]){
            teams[team].goals += g1
            teams[team].goals_taken += g2
            if (g1>g2) {
                teams[team].win++;
                teams[team].mp += 3;
            } else if (g1=g2) {
                teams[team].tie++;
                teams[team].mp += 1;
            } else {
                teams[team].loss++
            }
        }
    }
    // show stuff
    $('#gamesOut').val(JSON.stringify(games, null, 2))
    $('#teamsOut').val(JSON.stringify(teams, null, 2))
    $('#schoolsOut').val(JSON.stringify(schools, null, 2))
}

// on dom load, do stuff! -------------------------------------------------
$(function () {
    // set bind event listeners
    $('#teams').on('change',() => teamsChange());
    $('#gamesPlayed').on('change', () => gamesPlayed = $('#gamesPlayed').val());
    $('#gamesPerSunday').on('change', () => gamesPerSunday = $('#gamesPerSunday').val());
    $('#pGoal').on('change', () => p_goal = +$('#pGoal').val());
    $('#generate').on('click',() => generate())
    // fill #teams select
    fillSelect('#teams', 5, 15);
    // set initial values
    teamsChange();
});
