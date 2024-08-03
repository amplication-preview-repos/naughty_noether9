import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  id: string;
  payload: JsonValue;
  processed: boolean | null;
  processedAt: Date | null;
  typeField: string | null;
  updatedAt: Date;
};
