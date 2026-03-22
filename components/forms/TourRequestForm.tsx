"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  preferredDate: z.string().min(1),
  familyMembers: z.number().int().min(1).max(20),
  message: z.string().optional(),
});

type Values = z.infer<typeof schema>;

function isWeekend(d: Date) {
  const day = d.getDay();
  return day === 0 || day === 6;
}

export function TourRequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    const d = new Date(data.preferredDate);
    if (isWeekend(d)) {
      alert("Please choose a weekday for your visit.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/tour-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("err");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-card border border-gray-200 bg-white p-6 shadow-card"
    >
      {(["name", "email", "phone"] as const).map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize" htmlFor={field}>
            {field === "phone" ? "Phone (10 digits)" : field}
          </label>
          <input
            id={field}
            type={field === "email" ? "email" : "text"}
            className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
            {...register(field)}
          />
          {errors[field] && (
            <p className="mt-1 text-sm text-error">{errors[field]?.message as string}</p>
          )}
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium" htmlFor="preferredDate">
          Preferred date (weekdays)
        </label>
        <input
          id="preferredDate"
          type="date"
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("preferredDate")}
        />
        {errors.preferredDate && (
          <p className="mt-1 text-sm text-error">{errors.preferredDate.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="familyMembers">
          Family members visiting
        </label>
        <input
          id="familyMembers"
          type="number"
          min={1}
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("familyMembers", { valueAsNumber: true })}
        />
        {errors.familyMembers && (
          <p className="mt-1 text-sm text-error">{errors.familyMembers.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="message">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={3}
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("message")}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-btn bg-primary py-3 font-semibold text-white"
      >
        {status === "loading" ? "Sending…" : "Request tour"}
      </button>
      {status === "ok" && (
        <p className="text-sm text-success">Request received. We will confirm shortly.</p>
      )}
      {status === "err" && (
        <p className="text-sm text-error">Could not submit. Please try again.</p>
      )}
    </form>
  );
}
