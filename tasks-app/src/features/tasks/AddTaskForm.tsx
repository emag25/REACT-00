import { useForm } from "react-hook-form";
import { CATEGORIES_OPTIONS } from "../../lib/constants";
import type { Category } from "../../lib/types";
import { useTasks } from "../../hooks/useTasks";

type FormValues = {
	title: string;
	description: string;
	category: Category;
};

type AddTaskFormProps = {
	onSuccess?: () => void;
	onCancel?: () => void;
};

export default function AddTaskForm({ onSuccess, onCancel }: AddTaskFormProps) {
	const { addTask } = useTasks();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		defaultValues: {
			title: "",
			description: "",
			category: "UI",
		},
		mode: "onTouched",
	});

	const onSubmit = (data: FormValues) => {
		addTask({
			title: data.title.trim(),
			description: data.description.trim(),
			category: data.category,
		});
		reset();
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			{/* Título */}
			<div>
				<label className="mb-1 block text-sm font-medium">Título</label>
				<input
					type="text"
					placeholder="Ej. Mejorar la barra de navegación"
					className="w-full rounded border px-3 py-2 outline-none focus:ring focus:ring-violet-200"
					aria-invalid={!!errors.title}
					{...register("title", {
						required: "El título es obligatorio",
						minLength: { value: 4, message: "Mínimo 4 caracteres" },
						maxLength: {
							value: 80,
							message: "Máximo 80 caracteres",
						},
					})}
				/>
				{errors.title && (
					<p className="mt-1 text-sm text-red-600">
						{errors.title.message}
					</p>
				)}
			</div>

			{/* Descripción */}
			<div>
				<label className="mb-1 block text-sm font-medium">
					Descripción
				</label>
				<textarea
					placeholder="Describe la idea, el problema o la mejora propuesta…"
					className="w-full min-h-[120px] rounded border px-3 py-2 outline-none focus:ring focus:ring-violet-200"
					aria-invalid={!!errors.description}
					{...register("description", {
						required: "La descripción es obligatoria",
						minLength: {
							value: 10,
							message: "Mínimo 10 caracteres",
						},
						maxLength: {
							value: 500,
							message: "Máximo 500 caracteres",
						},
					})}
				/>
				{errors.description && (
					<p className="mt-1 text-sm text-red-600">
						{errors.description.message}
					</p>
				)}
			</div>

			{/* Categoría */}
			<div>
				<label className="mb-1 block text-sm font-medium">
					Categoría
				</label>
				<select
					className="w-full rounded border bg-white px-3 py-2 outline-none focus:ring focus:ring-violet-200"
					aria-invalid={!!errors.category}
					{...register("category", {
						required: "Selecciona una categoría",
					})}
				>
					{CATEGORIES_OPTIONS.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{`${opt.value} - ${opt.description}`}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="mt-1 text-sm text-red-600">
						{errors.category.message}
					</p>
				)}
			</div>

			<div className="flex items-center justify-end gap-2 pt-2">
				<button
					type="button"
					onClick={onCancel}
					className="rounded border px-3 py-2 text-sm hover:bg-neutral-50"
				>
					Cancelar
				</button>
				<button
					type="submit"
					disabled={isSubmitting}
					className="inline-flex items-center rounded bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-60"
				>
					Guardar
				</button>
			</div>
		</form>
	);
}
