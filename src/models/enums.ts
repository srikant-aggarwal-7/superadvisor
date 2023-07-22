import { Enumify } from "enumify";

class EventType extends Enumify {
  static purchase = new EventType();
  static sell = new EventType();
  static _ = this.closeEnum(); // TypeScript: Color.closeEnum()
}

export { EventType };
