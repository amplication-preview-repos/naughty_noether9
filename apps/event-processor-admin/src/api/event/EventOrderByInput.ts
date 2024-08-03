import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  processed?: SortOrder;
  processedAt?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
