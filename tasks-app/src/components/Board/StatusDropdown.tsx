// src/components/Board/StatusDropdown.tsx
import { useEffect, useRef, useState } from "react";
import { MoreHorizontal, Check } from "lucide-react";
import { STATUS_OPTIONS } from "../../lib/constants";
import type { Status } from "../../lib/types";

type Props = {
	value: Status;
	onChange: (s: Status) => void;
};

export default function StatusDropdown({ value, onChange }: Props) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// Cerrar al hacer click afuera
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node))
				setOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	// Cerrar con Esc
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) =>
			e.key === "Escape" && setOpen(false);
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);

	const currentLabel =
		STATUS_OPTIONS.find((s) => s.value === value)?.label ?? value;

	return (
		<div className="relative" ref={ref}>
			<button
				type="button"
				aria-haspopup="menu"
				aria-expanded={open}
				aria-label={`Cambiar estado (actual: ${currentLabel})`}
				title={`Estado: ${currentLabel}`}
				onClick={() => setOpen((v) => !v)}
				className="inline-flex items-center rounded-md border px-2 py-1.5 bg-white  hover:bg-neutral-50"
			>
				<MoreHorizontal size={18} />
			</button>

			{open && (
				<div
					role="menu"
					className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-md border bg-white shadow-lg"
				>
					<div className="py-1">
						{STATUS_OPTIONS.map((opt) => {
							const selected = opt.value === value;
							return (
								<button
									key={opt.value}
									role="menuitem"
									onClick={() => {
										onChange(opt.value as Status);
										setOpen(false);
									}}
									className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-neutral-100 ${
										selected
											? "text-violet-700"
											: "text-neutral-700"
									}`}
								>
									<span>Mover a '{opt.label}'</span>
									{selected && <Check size={16} />}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
