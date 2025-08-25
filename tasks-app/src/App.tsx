import { useMemo, useState } from "react";
import Board from "./components/Board/Board";
import type { Category, SortBy } from "./lib/types";
import { TasksProvider, useTasksContext } from "./context/TasksProvider";
import Navbar from "./components/NavBar/Navbar";

function AppContent() {
	const [category, setCategory] = useState<Category | "ALL">("ALL");
	const [sortBy, setSortBy] = useState<SortBy>("most_voted");
	const { tasks } = useTasksContext();

	const visibleTasks = useMemo(() => {
		let t = tasks.slice();
		if (category !== "ALL") t = t.filter((x) => x.category === category);
		if (sortBy === "most_voted") t.sort((a, b) => b.votes - a.votes);
		else t.sort((a, b) => b.createdAt - a.createdAt);
		return t;
	}, [tasks, category, sortBy]);

	return (
		<>
			<Navbar
				category={category}
				onCategoryChange={setCategory}
				sortBy={sortBy}
				onSortChange={setSortBy}
			/>
			<main className="mx-auto max-w-7xl p-4 mt-6 text-slate-700">
				<Board tasks={visibleTasks} />
			</main>
		</>
	);
}

export default function App() {
	return (
		<TasksProvider>
			<AppContent />
		</TasksProvider>
	);
}
