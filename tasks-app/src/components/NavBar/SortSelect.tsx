import { SORT_OPTIONS } from "../../lib/constants";
import type { SortBy } from "../../lib/types";

type SortSelectProps = {
  value: SortBy;
  onChange: (value: SortBy) => void;
};

export default function CategoryFilter({ value, onChange }: SortSelectProps) {
    return (
        <label className="flex items-center gap-2 text-sm">

            <select
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={value}
                onChange={(e) => onChange(e.target.value as SortBy)}
            >
                
                {SORT_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>
                        {c.label}
                    </option>
                ))}
                
            </select>

        </label>
    );
}