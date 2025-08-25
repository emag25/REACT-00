import { CATEGORIES_OPTIONS } from "../../lib/constants";
import type { Category } from "../../lib/types";

type CategoryFilterProps = {
	value: Category | "ALL";
	onChange: (value: Category | "ALL") => void;
};

export default function CategoryFilter({
	value,
	onChange,
}: CategoryFilterProps) {
	return (
		<label className="flex items-center gap-2 text-sm">
			<select
				className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				value={value}
				onChange={(e) => onChange(e.target.value as Category | "ALL")}
			>
				<option value="ALL">Todas las categorias</option>

				{CATEGORIES_OPTIONS.map((c) => (
					<option key={c.value} value={c.value}>
						{c.value}
					</option>
				))}
			</select>
		</label>
	);
}
