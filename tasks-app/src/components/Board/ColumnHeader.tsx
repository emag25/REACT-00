import { CircleDot, Timer, CheckCircle2 } from "lucide-react";
import { STATUS_OPTIONS } from "../../lib/constants";
import type { Status } from "../../lib/types";

type Props = {
	status: Status;
	count: number;
};

const STATUS_ICON: Record<Status, React.ComponentType<{ size?: number }>> = {
	ABIERTA: CircleDot,
	EN_PROGRESO: Timer,
	COMPLETADA: CheckCircle2,
};

const STATUS_STYLE: Record<Status, string> = {
	ABIERTA: "bg-green-500/10 text-green-900",
	EN_PROGRESO: "bg-yellow-500/10 text-yellow-900",
	COMPLETADA: "bg-blue-500/10 text-blue-900",
};

export default function ColumnHeader({ status, count }: Props) {
	const Icon = STATUS_ICON[status];
	const label =
		STATUS_OPTIONS.find((s) => s.value === status)?.label ?? status;

	return (
		<div
			className={`flex items-center gap-2 border-b ${STATUS_STYLE[status]} p-4 rounded-lg `}
		>
			<Icon size={18} />
			<h3 className="text-sm font-semibold">
				{label}{" "}
				<span className="font-normal text-neutral-500">({count})</span>
			</h3>
		</div>
	);
}
