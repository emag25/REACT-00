
import { useTasksContext } from "../context/TasksProvider";

export function useTasks() {
  return useTasksContext();
}
