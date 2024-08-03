import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  payload?: InputJsonValue;
  processed?: boolean | null;
  processedAt?: Date | null;
  typeField?: string | null;
};
