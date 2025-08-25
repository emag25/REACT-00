import React, { createContext, useContext, useMemo, useReducer } from "react";
import type { Task, Category, Status } from "../lib/types";
import { DEFAULT_TASKS } from "../lib/defaultTasks";

type TasksState = {
	tasks: Task[];
	sessionVotes: Set<string>;
};

type AddTaskInput = {
	title: string;
	description: string;
	category: Category;
};

type Action =
	| { type: "ADD_TASK"; payload: AddTaskInput }
	| { type: "UPDATE_STATUS"; payload: { id: string; status: Status } }
	| { type: "TOGGLE_VOTE"; payload: { id: string } };

const initialState: TasksState = {
	tasks: DEFAULT_TASKS,
	sessionVotes: new Set<string>(),
};

function uuid() {
	// @ts-ignore
	return typeof crypto !== "undefined" && crypto.randomUUID
		? // @ts-ignore
		  crypto.randomUUID()
		: Math.random().toString(36).slice(2);
}

function reducer(state: TasksState, action: Action): TasksState {
	switch (action.type) {
		case "ADD_TASK": {
			const { title, description, category } = action.payload;
			const newTask: Task = {
				id: uuid(),
				title: title.trim(),
				description: description.trim(),
				category,
				status: "ABIERTA", // estado inicial
				votes: 0,
				createdAt: Date.now(),
			};
			return { ...state, tasks: [newTask, ...state.tasks] };
		}
		case "UPDATE_STATUS": {
			const { id, status } = action.payload;
			const tasks = state.tasks.map((t) =>
				t.id === id ? { ...t, status } : t
			);
			return { ...state, tasks };
		}
		case "TOGGLE_VOTE": {
			const { id } = action.payload;
			const hasVoted = state.sessionVotes.has(id);
			const tasks = state.tasks.map((t) =>
				t.id === id ? { ...t, votes: t.votes + (hasVoted ? -1 : 1) } : t
			);
			const sessionVotes = new Set(state.sessionVotes);
			if (hasVoted) sessionVotes.delete(id);
			else sessionVotes.add(id);
			return { ...state, tasks, sessionVotes };
		}
		default:
			return state;
	}
}

type TasksContextValue = {
	tasks: Task[];
	addTask: (input: AddTaskInput) => void;
	updateStatus: (id: string, status: Status) => void;
	toggleVote: (id: string) => void;
	hasVoted: (taskId: string) => boolean;
};

const TasksContext = createContext<TasksContextValue | null>(null);

export const TasksProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addTask = (input: AddTaskInput) =>
		dispatch({ type: "ADD_TASK", payload: input });

	const updateStatus = (id: string, status: Status) =>
		dispatch({ type: "UPDATE_STATUS", payload: { id, status } });

	const toggleVote = (id: string) =>
		dispatch({ type: "TOGGLE_VOTE", payload: { id } });

	const hasVoted = (taskId: string) => state.sessionVotes.has(taskId);

	const value = useMemo<TasksContextValue>(
		() => ({
			tasks: state.tasks,
			addTask,
			updateStatus,
			toggleVote,
			hasVoted,
		}),
		[state.tasks, state.sessionVotes]
	);

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

export function useTasksContext(): TasksContextValue {
	const ctx = useContext(TasksContext);
	if (!ctx)
		throw new Error("useTasksContext must be used within a TasksProvider");
	return ctx;
}
