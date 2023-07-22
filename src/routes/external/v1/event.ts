import express, { Request, Response, Router } from "express";
import eventController from "../../../controllers/event";
import Event from "../../../models/event";
import { EventType } from "../../../models/enums";

const event: Router = express.Router();

event.post("", async (req: Request, res: Response) => {
  try {
    const { userId, eventType, amount, bondId } = req.body;
    const event: Event = {
      userId,
      eventType,
      amount,
      bondId,
    };
    const response = await eventController.addEvent(event);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error adding event");
  }
});

event.get("/:eventType", async (req: Request, res: Response) => {
  const eventType: string = req.params.eventType;
  try {
    const response = await eventController.getEventsOfType(
      EventType.enumValueOf(eventType)!
    );
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error getting events of type " + eventType);
  }
});

event.get("", async (req: Request, res: Response) => {
  try {
    const response = await eventController.getAllEvents();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error getting all events");
  }
});

export { event };
