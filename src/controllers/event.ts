import { EventType } from "../models/enums";
import Event from "../models/event";
import eventDatastore from "../services/datastore/event";

const addEvent = async (event: Event) => {
  return eventDatastore.addEvent(event);
};

const getEventsOfType = async (eventType: EventType) => {
  return eventDatastore.getEventsOfType(eventType);
};

const getAllEvents = async () => {
  return eventDatastore.getAllEvents();
};

export default {
  addEvent,
  getEventsOfType,
  getAllEvents,
};
