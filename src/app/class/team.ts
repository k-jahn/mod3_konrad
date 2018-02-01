// Team class definintion
export class Team {
    id: number;
    name: string;
    coach: string;
    home: string;
    rank: number;
    mp: number;
    win: number;
    loss: number;
    tie: number;
    goal_scored: number;
    goal_taken: number;
    constructor(data: object) {
        for (const key of Object.getOwnPropertyNames(data)) {
            this[key] = data[key];
        }
    }
}
