import { EventType } from "../models/enums";
import Event from "../models/event";
import eventDatastore from "../services/datastore/event";

const addEvent = async (event: Event): Promise<string> => {
  return eventDatastore.addEvent(event);
};

const getEventsOfType = async (eventType: EventType): Promise<Event[]> => {
  return eventDatastore.getEventsOfType(eventType);
};

const getAllEvents = async (): Promise<Event[]> => {
  return eventDatastore.getAllEvents();
};

export default {
  addEvent,
  getEventsOfType,
  getAllEvents,
};
