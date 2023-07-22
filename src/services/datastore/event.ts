import datastoreHelper from "./helper";
import Event from "../../models/event";
import { EventType } from "../../models/enums";

const eventCollection = "events";

const addEvent = async (event: Event): Promise<string> => {
  const document = { ...event, createdAt: new Date() };
  const response = await datastoreHelper.post(eventCollection, document);
  return response.data.insertedId;
};

const getEventsOfType = async (eventType: EventType): Promise<Event[]> => {
  const filter = { eventType: eventType.enumKey };
  const sort = { createdAt: 1 };
  const response = await datastoreHelper.get(eventCollection, filter, sort);
  return response.data.documents;
};

const getAllEvents = async (): Promise<Event[]> => {
  const filter = {};
  const sort = { createdAt: 1 };
  const response = await datastoreHelper.get(eventCollection, filter, sort);
  return response.data.documents;
};

export default {
  addEvent,
  getEventsOfType,
  getAllEvents,
};
