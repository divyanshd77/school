"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  studentClass: z.string().min(1, "Select a class"),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
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
      noValidate
    >
      <div>
        <label className="block text-sm font-medium text-dark" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-dark" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-dark" htmlFor="phone">
          Phone (10 digits)
        </label>
        <input
          id="phone"
          inputMode="numeric"
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-dark" htmlFor="cls">
          Student class
        </label>
        <select
          id="cls"
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("studentClass")}
        >
          <option value="">Select</option>
          {[
            "Nursery",
            "KG",
            ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
          ].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.studentClass && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.studentClass.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-dark" htmlFor="sub">
          Subject / query type
        </label>
        <select
          id="sub"
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("subject")}
        >
          <option value="">Select</option>
          <option value="Admission">Admission</option>
          <option value="Academics">Academics</option>
          <option value="Fee">Fee</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-dark" htmlFor="msg">
          Message
        </label>
        <textarea
          id="msg"
          rows={4}
          className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-btn bg-primary py-3 font-semibold text-white hover:bg-primary-light disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit"}
      </button>
      {status === "ok" && (
        <p className="text-sm text-success" role="status">
          Thank you — we will get back to you shortly.
        </p>
      )}
      {status === "err" && (
        <p className="text-sm text-error" role="alert">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
