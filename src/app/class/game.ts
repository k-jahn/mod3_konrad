// Game class definintion
export interface Game {
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
}
