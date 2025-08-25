import { CATEGORY_COLORS } from "../../lib/constants";
import type { Task } from "../../lib/types";
import VoteButton from "./VoteButton";
import StatusDropdown from "./StatusDropdown";
import { useTasks } from "../../hooks/useTasks";
import { MessageCircleMore } from "lucide-react";

type Props = { task: Task };

export default function TaskCard({ task }: Props) {
	const { toggleVote, hasVoted, updateStatus } = useTasks();
	const voted = hasVoted(task.id);

	return (
		<article className="flex flex-col mt-4 gap-3 p-5 word-wrap rounded-md border bg-neutral-50 shadow-sm hover:shadow-md hover:bg-white transition-shadow duration-200 h-50 justify-between">
			{/* Título */}
			<div className="flex items-start justify-between gap-4">
				<h4 className="text-base font-semibold line-clamp-1 break-words">
					{task.title}
				</h4>
				<StatusDropdown
					value={task.status}
					onChange={(s) => updateStatus(task.id, s)}
				/>
			</div>
			{/* Descripción truncada */}
			<p className="text-sm text-neutral-700 line-clamp-2 break-words">
				{task.description}
			</p>

			<div className="mt-1 flex items-center justify-between gap-4 text-xs">
				<div className="flex items-center gap-3">
					<span
						className={`inline-flex items-center rounded-full px-2 py-1 text-xxs font-medium ${
							CATEGORY_COLORS[task.category]
						}`}
						title={task.category}
					>
						{task.category}
					</span>

					<span className="text-neutral-500 inline-flex items-center">
						<MessageCircleMore
							className="inline-block mr-1"
							size={16}
						/>
						{task.commentsCount} Comentarios
					</span>
				</div>

				<VoteButton
					votes={task.votes}
					voted={voted}
					onToggle={() => toggleVote(task.id)}
				/>
			</div>
		</article>
	);
}
