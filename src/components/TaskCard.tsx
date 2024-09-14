"use client";

import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
      key={task.id}
      className="w-full max-w-md px-10 py-10 mt-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 transition-all hover:bg-slate-700 cursor-pointer"
    >
      <h2 className="mt-2 text-lg uppercase font-semibold text-gray-800 dark:text-white md:mt-0">
        {task.title}
      </h2>
      <p className="mt-2 text-sm uppercase text-gray-600 dark:text-gray-200">
        {task.description}
      </p>
      <div className="flex justify-end mt-6 gap-2">
        <div className="flex gap-2 items-center justify-evenly">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-300">
            Fecha de creación:&nbsp;
            {task.createdAt.toLocaleDateString()}
          </p>
          <p className="text-xs font-medium text-blue-600 dark:text-blue-300">
            Fecha de actualización:&nbsp;
            {task.updatedAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
