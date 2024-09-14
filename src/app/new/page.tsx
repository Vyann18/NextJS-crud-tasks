"use client";

import Buttons from "@/components/Buttons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function NewPage({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      });
    }
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      await axios.post("/api/tasks", data);
    }
    router.push("/");
    router.refresh();
  });

  return (
    <section className="flex flex-col justify-center items-center bg-slate-400 dark:bg-slate-800 p-6 m-12 rounded-md">
      <div className="w-[80%] m-auto">
        <h1 className="text-2xl font-bold text-center uppercase my-5 mx-auto">
          {params.id ? "Actualizar Tarea" : "Crear Nueva Tarea"}
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 w-full m-auto items-center"
        >
          <input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Escribe un título para la tarea"
            className=" text-black px-3 py-1 rounded-md border border-solid border-gray-400 dark:border-white/[.145] 
          w-[60%] focus:outline-none focus:border-black/[.08] dark:focus:border-white/[.145]"
          />
          <textarea
            {...register("description")}
            id="description"
            rows={4}
            placeholder="Escribe una descripción para la tarea"
            className="text-black px-3 py-1 rounded-md border border-solid border-gray-400 dark:border-white/[.145] 
          w-[60%] focus:outline-none focus:border-black/[.08] dark:focus:border-white/[.145]"
          />
          {params.id ? (
            <div className="flex gap-4 m-auto justify-evenly items-center">
              <Buttons.ButtonUpdate />
              <Buttons.ButtonDelete params={params} />
            </div>
          ) : (
            <Buttons.ButtonCreate />
          )}
        </form>
      </div>
    </section>
  );
}
