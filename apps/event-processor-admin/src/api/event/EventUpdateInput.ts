import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  payload?: InputJsonValue;
  processed?: boolean | null;
  processedAt?: Date | null;
  typeField?: string | null;
};
