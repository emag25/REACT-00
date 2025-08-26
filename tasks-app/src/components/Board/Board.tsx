import { useMemo } from "react";
import Column from "./Column";
import type { Task, Status } from "../../lib/types";

type BoardProps = {
	tasks: Task[]; // ya filtradas/ordenadas desde App
};

const STATUSES: Status[] = ["ABIERTA", "EN_PROGRESO", "COMPLETADA"];

export default function Board({ tasks }: BoardProps) {
	
	const grouped = useMemo(() => {
		const map: Record<Status, Task[]> = {
			ABIERTA: [],
			EN_PROGRESO: [],
			COMPLETADA: [],
		};
		for (const t of tasks) map[t.status].push(t);
		return map;
	}, [tasks]);

	return (
		<section className="grid gap-10 md:grid-cols-3">
			{STATUSES.map((s) => (
				<Column key={s} status={s} tasks={grouped[s]} />
			))}
		</section>
	);
}
