import { Clinic } from "./clinic";
import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { VisitDate } from "./visitDate";

export interface Registration {
    registrationID: number;
    doctor: Doctor;
    patient: Patient;
    visitDate: VisitDate;
    clinic: Clinic;
    cancelled: boolean;
}