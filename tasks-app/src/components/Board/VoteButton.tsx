import { ArrowBigUp } from "lucide-react";

type Props = {
	votes: number;
	voted: boolean;
	onToggle: () => void;
};

export default function VoteButton({ votes, voted, onToggle }: Props) {
	return (
		<button
			type="button"
			onClick={onToggle}
			aria-pressed={voted}
			className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-neutral-500 bg-white hover:cursor-pointer hover:shadow-sm hover:transition-shadow
        ${
			voted
				? "border-violet-600 bg-violet-50 text-violet-700"
				: "hover:bg-neutral-50"
		}`}
			title={voted ? "Quitar voto" : "Votar"}
		>
			<ArrowBigUp size={18} />
			<span className="tabular-nums">{votes}</span>
		</button>
	);
}
