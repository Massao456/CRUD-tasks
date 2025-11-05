import { randomUUID } from "crypto";

export class Task {
    id: string;
    title: string;
    description: string;
    done: boolean;

    constructor() {
        this.id = randomUUID();
    }
}

