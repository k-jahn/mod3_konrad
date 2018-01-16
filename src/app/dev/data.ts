// test data for dev display

import { Team } from '../class/team';
import { Event } from '../class/event';
import { Game } from '../class/game';

export const GAMES: Game[] = [
    {
        id: 0,
        name: 'Game 1',
        date: 'August 20',
        time: '5 PM',
        location: 'Yeager Elementary',
        team1Id: 1,
        team2Id: 3,
        referee: 'Jane Goodall',
    },
    {
        id: 1,
        name: 'Game 2',
        date: 'August 22',
        time: '3 PM',
        location: 'North Elementary',
        team1Id: 2,
        team2Id: 5,
        referee: 'Jane Goodall',
    },
    {
        id: 2,
        name: 'Game 3',
        date: 'August 26',
        time: '`11:30 AM',
        location: 'South Elementary',
        team1Id: 3,
        team2Id: 2,
        referee: 'Albert Einstein ',
    },
    {
        id: 3,
        name: 'Game 4',
        date: 'August 28',
        time: '2 PM',
        location: 'Hart Elementary',
        team1Id: 4,
        team2Id: 1,
        referee: 'Antonie van Leeuwenhoek',
    },
    {
        id: 4,
        name: 'Game 5',
        date: 'August 31',
        time: '3:30 PM',
        location: 'South Elementary',
        team1Id: 4,
        team2Id: 1,
        referee: 'Paul Hund',
    },
    {
        id: 5,
        name: 'Game 6',
        date: 'September 1',
        time: '6 PM',
        location: 'Hart Elementary',
        team1Id: 4,
        team2Id: 1,
        referee: 'Francis Crick',
    },
    {
        id: 6,
        name: 'Semi-Final A',
        date: 'September 10',
        time: '6 PM',
        location: 'South Elementary',
        team1Id: 0,
        team2Id: 0,
        referee: 'Kurt Gödel',
    },
    {
        id: 7,
        name: 'Semi-Final B',
        date: 'September 12',
        time: '6 PM',
        location: 'AW Cox Elementary',
        team1Id: 0,
        team2Id: 0,
        referee: 'Antoine Lavoisier',
    },
    {
        id: 8,
        name: 'Final',
        date: 'September 15',
        time: '6 PM',
        location: 'E Adams Elementary',
        team1Id: 0,
        team2Id: 0,
        referee: 'M.C. Escher',
    },


];

export const EVENTS: Event[] = [
    {
        date: 'August 04',
        description: 'NYSL Fundraiser',
    },
    {
        date: 'August 16',
        description: 'Season Kick - off: Meet the Teams',
    },
    {
        date: 'September 1',
        description: 'First Game of the Season(Check Game Schedule for details)',
    },
];
export const TEAMS: Team[] = [
    {
        id: 0,
        name: 'TBD',
        rank: null,
        win: null,
        loss: null,
        coach: null,
        goals_scored: null,
        goals_taken: null,
        home: null
    },
    {
        id: 1,
        name: 'U1',
        rank: 2,
        win: 2,
        loss: 0,
        coach: 'Jake Krzepek',
        goals_scored: 12,
        goals_taken: 3,
        home: 'Yeager Elementary'
    },
    {
        id: 2,
        name: 'U2',
        rank: 3,
        win: 1,
        loss: 1,
        coach: 'Karen Kapernik',
        goals_scored: 8,
        goals_taken: 7,
        home: 'North Elementary'
    },
    {
        id: 3,
        name: 'U3',
        rank: 1,
        win: 2,
        loss: 0,
        coach: 'Lauren Poe',
        goals_scored: 15,
        goals_taken: 2,
        home: 'South Elementary'
    },
    {
        id: 4,
        name: 'U4',
        rank: 4,
        win: 0,
        loss: 2,
        coach: 'Mike Goodman',
        goals_scored: 6,
        goals_taken: 10,
        home: 'Hart Elementary'
    },
    {
        id: 5,
        name: 'U5',
        rank: 5,
        win: 0,
        loss: 2,
        coach: 'Nimrod Schmidt',
        goals_scored: 2,
        goals_taken: 12,
        home: 'Whatever Elementary'
    },
];

