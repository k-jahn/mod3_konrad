// event class definintion
export class Event {
    date: string;
    description: string;
    constructor(data: object) {
        for (const key of Object.getOwnPropertyNames(data)) {
            this[key] = data[key];
        }
    }
}
