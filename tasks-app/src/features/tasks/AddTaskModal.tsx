import { X } from "lucide-react";
import AddTaskForm from "./AddTaskForm";

type AddTaskModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
    
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
			aria-hidden={!isOpen}
		>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="add-task-title"
				className="w-full max-w-lg rounded-lg bg-white shadow-lg"
			>
				<div className="flex items-center justify-between border-b px-4 py-3">
					<h2 id="add-task-title" className="text-lg font-semibold">
						Agregar nueva tarea
					</h2>
					<button
						onClick={onClose}
						aria-label="Cerrar"
						className="rounded p-2 hover:bg-neutral-100"
					>
						<X size={18} />
					</button>
				</div>

				<div className="p-4">
					<AddTaskForm onSuccess={onClose} onCancel={onClose} />
				</div>
			</div>
		</div>
	);
}
