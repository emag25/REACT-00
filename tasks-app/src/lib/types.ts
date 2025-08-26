export type Category = "UI" | "UX" | "CARACTERISTICA" | "BUG" | "RENDIMIENTO";

export type Status = "ABIERTA" | "EN_PROGRESO" | "COMPLETADA";

export type SortBy = "most_voted" | "most_recent";

export type Task = {
	id: string;
	title: string;
	description: string;
	category: Category;
	status: Status; // default: "ABIERTA"
	votes: number; // default: 0
	commentsCount: number; // default: 0
	createdAt: number; // para ordenar por "Más reciente"
};
