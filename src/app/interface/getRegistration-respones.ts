export interface GetRegistrationRespones {
    patientPesel: string;
    patientName: string;
    patientSurname: string;
    registrations: { registrations?: string[], registration?: string};
}