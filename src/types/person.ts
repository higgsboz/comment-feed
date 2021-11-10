export interface Person {
    firstName: string;
    lastName: string;
    occupation: string;
    location: {
        state: string;
        country: string;
    }
}