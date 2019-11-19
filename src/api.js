import { http } from "./utils/http";

export const getTasks = () => http('/tasks');
