// test data for dev display

import { Team } from '../class/team';
import { Event } from '../class/event';
import { Game } from '../class/game';

export const GAMES: Game[] = [
    {
        id: 0,
        date: 'August 20',
        time: '5 PM',
        location: 'Yeager Elementary',
        team1Id: 1,
        team2Id: 3,
    },
    {
        id: 1,
        date: 'August 22',
        time: '3 PM',
        location: 'North Elementary',
        team1Id: 2,
        team2Id: 5,
    },
    {
        id: 2,
        date: 'August 26',
        time: '`11:30 AM',
        location: 'South Elementary',
        team1Id: 3,
        team2Id: 2,
    },
    {
        id: 3,
        date: 'August 28',
        time: '2 PM',
        location: 'Hart Elementary',
        team1Id: 4,
        team2Id: 1,
    },
    {
        id: 4,
        date: 'August 31',
        time: '3:30 PM',
        location: 'South Elementary',
        team1Id: 4,
        team2Id: 1,
    },
    {
        id: 5,
        date: 'September 1',
        time: '6 PM',
        location: 'Hart Elementary',
        team1Id: 4,
        team2Id: 1,
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
        id: 1,
        name: 'U1',
        rank: 2,
        win: 2,
        loss: 0,
        coach: 'Jake Krzepek',
        age: 'b',
    },
    {
        id: 2,
        name: 'U2',
        rank: 3,
        win: 1,
        loss: 1,
        coach: 'Karen Kapernik',
        age: 'b',
    },
    {
        id: 3,
        name: 'U3',
        rank: 1,
        win: 2,
        loss: 0,
        coach: 'Lauren Poe',
        age: 'b',
    },
    {
        id: 4,
        name: 'U4',
        rank: 4,
        win: 0,
        loss: 2,
        coach: 'Mike Goodman',
        age: 'b',
    },
    {
        id: 5,
        name: 'U5',
        rank: 5,
        win: 0,
        loss: 2,
        coach: 'Nimrod Schmidt',
        age: 'b',
    },
];

