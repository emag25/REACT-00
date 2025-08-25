import ColumnHeader from "./ColumnHeader";
import TaskCard from "./TaskCard";
import type { Task, Status } from "../../lib/types";
import { STATUS_OPTIONS } from "../../lib/constants";

type ColumnProps = {
	status: Status;
	tasks: Task[];
};

export default function Column({ status, tasks }: ColumnProps) {
	return (
		<div className="flex min-h-[280px] flex-col ">
			<ColumnHeader status={status} count={tasks.length} />
			<div className="divide-y ">
				{tasks.length === 0 ? (
					<div className="p-4 text-sm text-neutral-500 text-center">
						No hay tareas{" "}
						{STATUS_OPTIONS.find(
							(s) => s.value === status
						)?.label.toLowerCase()}
						.
					</div>
				) : (
					tasks.map((t) => <TaskCard key={t.id} task={t} />)
				)}
			</div>
		</div>
	);
}
