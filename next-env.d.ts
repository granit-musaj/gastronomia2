/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This project is scaffolded without installed Node dependencies.
// This module shim allows TypeScript tooling to work until you run `npm install`.
declare module "@prisma/client" {
  export class PrismaClient {
    constructor(options?: unknown);
    menuCategory: any;
    menuItem: any;
    order: any;
    orderItem: any;
    reservation: any;
    service: any;
    galleryImage: any;
    siteContent: any;
    adminUser: any;
    $disconnect(): Promise<void>;
  }

  export enum OrderStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
  }

  export enum ReservationStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED"
  }

  export enum GalleryCategory {
    FOOD = "FOOD",
    INTERIOR = "INTERIOR",
    EVENTS = "EVENTS"
  }
}

