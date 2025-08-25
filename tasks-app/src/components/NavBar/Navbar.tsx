import CategoryFilter from "./CategoryFilter";
import SortSelect from "./SortSelect";
import type { Category, SortBy } from "../../lib/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddTaskModal from "../../features/tasks/AddTaskModal";

type NavbarProps = {
	category: Category | "ALL";
	onCategoryChange: (v: Category | "ALL") => void;
	sortBy: SortBy;
	onSortChange: (v: SortBy) => void;
};

export default function Navbar({
	category,
	onCategoryChange,
	sortBy,
	onSortChange,
}: NavbarProps) {
  
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
					<div>
						<h1 className="text-lg font-bold">Feedback Board</h1>
						<p className="text-xs text-gray-600">
							Share ideas, vote on suggestions, and help improve
							our platform
						</p>
					</div>
          <div className="flex items-center gap-4">
            
						<CategoryFilter
							value={category}
							onChange={onCategoryChange}
						/>
						<SortSelect value={sortBy} onChange={onSortChange} />

						<button
							onClick={() => setOpen(true)}
							className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700"
						>
							<Plus size={16} />
							Agregar tarea
            </button>
            
					</div>
				</div>
			</header>

			<AddTaskModal isOpen={open} onClose={() => setOpen(false)} />
		</>
	);
}
