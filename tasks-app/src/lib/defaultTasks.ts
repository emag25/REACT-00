import type { Task } from "./types";

const now = Date.now();
const ms = {
	h: (n: number) => n * 60 * 60 * 1000,
	d: (n: number) => n * 24 * 60 * 60 * 1000,
};

export const DEFAULT_TASKS: Task[] = [
	{
		id: "t-001",
		title: "Mejorar barra de navegación",
		description:
			"Hacer sticky la barra, añadir sombra sutil y estados de foco accesibles para teclado.",
		category: "UI",
		status: "ABIERTA",
		votes: 22,
		createdAt: now - (ms.d(1) + ms.h(3)),
		commentsCount: 4,
	},
	{
		id: "t-002",
		title: "Test A/B para CTA principal",
		description:
			"Validar si 'Empezar ahora' convierte mejor que 'Prueba gratuita' en usuarios nuevos.",
		category: "UX",
		status: "EN_PROGRESO",
		votes: 15,
		createdAt: now - ms.d(3),
		commentsCount: 2,
	},
	{
		id: "t-003",
		title: "Nueva vista: Roadmap público",
		description:
			"Permitir a los usuarios ver el roadmap de producto y su estado por trimestre.",
		category: "CARACTERISTICA",
		status: "ABIERTA",
		votes: 34,
		createdAt: now - ms.h(12),
		commentsCount: 5,
	},
	{
		id: "t-004",
		title: "Optimizar carga de imágenes",
		description:
			"Implementar lazy-loading y tamaños responsive para reducir LCP en la página de inicio.",
		category: "RENDIMIENTO",
		status: "EN_PROGRESO",
		votes: 18,
		createdAt: now - (ms.d(2) + ms.h(6)),
		commentsCount: 3,
	},
	{
		id: "t-005",
		title: "Error 500 al editar perfil sin avatar",
		description:
			"Se lanza una excepción cuando el usuario guarda sin imagen; validar null y usar placeholder.",
		category: "BUG",
		status: "ABIERTA",
		votes: 12,
		createdAt: now - ms.d(5),
		commentsCount: 1,
	},
	{
		id: "t-006",
		title: "Componente de tabla accesible",
		description:
			"Crear tabla con navegación por teclado, roles/aria y soporte para lectores de pantalla.",
		category: "UI",
		status: "EN_PROGRESO",
		votes: 9,
		createdAt: now - (ms.d(1) + ms.h(8)),
		commentsCount: 0,
	},
	{
		id: "t-007",
		title: "Mejorar flujo de onboarding",
		description:
			"Reducir pasos de registro, tutorial contextual y checklist de primeros 5 minutos.",
		category: "UX",
		status: "ABIERTA",
		votes: 27,
		createdAt: now - ms.d(7),
		commentsCount: 6,
	},
	{
		id: "t-008",
		title: "Exportar reportes a CSV",
		description:
			"Permitir exportar listados filtrados a CSV con columnas visibles y fecha en el nombre.",
		category: "CARACTERISTICA",
		status: "COMPLETADA",
		votes: 20,
		createdAt: now - ms.d(10),
		commentsCount: 2,
	},
	{
		id: "t-009",
		title: "Cachear requests de catálogo",
		description:
			"Añadir cache HTTP + revalidación condicional para reducir TTFB en listados.",
		category: "RENDIMIENTO",
		status: "COMPLETADA",
		votes: 11,
		createdAt: now - ms.d(9),
		commentsCount: 0,
	},
	{
		id: "t-010",
		title: "Bug al reordenar tarjetas en móvil",
		description:
			"El drag & drop salta entre columnas; desactivar en mobile y usar acciones explícitas.",
		category: "BUG",
		status: "EN_PROGRESO",
		votes: 7,
		createdAt: now - ms.h(36),
		commentsCount: 1,
	},
	{
		id: "t-011",
		title: "Modo oscuro automático",
		description:
			"Respetar prefers-color-scheme y recordar preferencia del usuario en la sesión.",
		category: "CARACTERISTICA",
		status: "ABIERTA",
		votes: 19,
		createdAt: now - (ms.d(4) + ms.h(2)),
		commentsCount: 3,
	},
	{
		id: "t-012",
		title: "Mejorar foco visual en inputs",
		description:
			"Aumentar contraste del outline y estados de error para WCAG AA.",
		category: "UI",
		status: "COMPLETADA",
		votes: 8,
		createdAt: now - ms.d(12),
		commentsCount: 0,
	},
];
