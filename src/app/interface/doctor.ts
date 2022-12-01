import { Specialization } from "./specialization";

export interface Doctor {
    doctorID: number;
    yearsOfExperience: number;
    name: string;
    surname: string;
    specialization: Specialization;
}