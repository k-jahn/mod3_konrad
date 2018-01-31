// Game class definintion
export class Game {
    id: number;
    name: string;
    month: number;
    day: number;
    time: string;
    location: string;
    team1Id: number;
    team2Id: number;
    referee: string;
    played: boolean;
    team1goals: number;
    team2goals: number;
    constructor(data: object) {
        for (const key in data) {
            this[key] = data[key];
        }
    }
}
