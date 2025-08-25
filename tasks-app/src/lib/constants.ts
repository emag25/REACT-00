import type { Category, Status, SortBy } from "./types";

export const CATEGORIES_OPTIONS: ReadonlyArray<{ value: Category;	description: string }> = [
	{ value: "UI", description: "Interfaz de usuario" },
	{ value: "UX", description: "Experiencia de usuario" },
	{ value: "CARACTERISTICA", description: "Nueva funcionalidad" },
	{ value: "BUG", description: "Reporte de anomalía" },
	{ value: "RENDIMIENTO", description: "Rapidez y optimización" },
];

export const SORT_OPTIONS: ReadonlyArray<{ value: SortBy; label: string }> = [
	{ value: "most_voted", label: "Más votada" },
	{ value: "most_recent", label: "Más reciente" },
];

export const STATUS_OPTIONS: ReadonlyArray<{ value: Status; label: string }> = [
	{ value: "ABIERTA", label: "Abiertas" },
	{ value: "EN_PROGRESO", label: "En progreso" },
	{ value: "COMPLETADA", label: "Completadas" },
];

export const CATEGORY_COLORS: Record<Category, string> = {
	UI: "bg-violet-100 text-violet-700",
	UX: "bg-pink-100 text-pink-700",
	CARACTERISTICA: "bg-indigo-100 text-indigo-700",
	BUG: "bg-red-100 text-red-700",
	RENDIMIENTO: "bg-emerald-100 text-emerald-700",
};
