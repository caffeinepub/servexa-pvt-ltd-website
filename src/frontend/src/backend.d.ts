import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    id: bigint;
    customerName: string;
    status: Status;
    serviceCategory: string;
    address: string;
    timestamp: Time;
    phoneNumber: string;
}
export type Time = bigint;
export enum Status {
    pending = "pending",
    completed = "completed"
}
export interface backendInterface {
    getAllBookings(): Promise<Array<Booking>>;
    getBooking(id: bigint): Promise<Booking>;
    submitBooking(customerName: string, phoneNumber: string, serviceCategory: string, address: string): Promise<void>;
    toggleBookingStatus(id: bigint): Promise<Status>;
    updateBookingStatus(id: bigint, status: Status): Promise<void>;
}
