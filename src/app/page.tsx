// import axios from "axios";

import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  //Using HTTP GET request to fetch tasks from the server
  // const res = await axios.get("http://localhost:3000/api/tasks");
  // console.log(res);

  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <div className="grid items-center justify-items-center p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold text-center uppercase my-5 mx-auto">
        Tareas
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full m-auto items-center">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  );
}
