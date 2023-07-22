import { EventType } from "./enums";

export default class Event {
  userId: string;
  eventType: EventType;
  amount: number;
  bondId: string;
  createdAt?: Date;
}
