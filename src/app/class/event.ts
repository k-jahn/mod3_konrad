// event class definintion
export class Event {
    date: string;
    description: string;
    constructor(data: object) {
        for (const key in data) {
            this[key] = data[key];
        }
    }
}
