"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import { InnerPage } from "@/components/layout/InnerPage";

const schema = z.object({
  studentName: z.string().min(2),
  className: z.string().min(1),
  section: z.string().min(1),
  feeType: z.string().min(1),
  amount: z.number().positive(),
});

type Values = z.infer<typeof schema>;

declare global {
  interface Window {
    Razorpay?: new (config: unknown) => { open: () => void };
  }
}

export function PayFeeClient() {
  const [receipt, setReceipt] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: data.amount }),
    });
    const json = (await res.json()) as {
      ok?: boolean;
      dev?: boolean;
      orderId?: string;
    };
    if (!res.ok) return;

    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!key || json.dev) {
      setReceipt(`DEV-${Date.now()}-${data.studentName}`);
      return;
    }

    const options = {
      key,
      amount: Math.round(data.amount * 100),
      currency: "INR",
      name: "Jaipuria Lucknow",
      description: `Fee — ${data.feeType}`,
      order_id: json.orderId,
      handler() {
        setReceipt(`RZP-${Date.now()}`);
      },
    };

    const R = window.Razorpay;
    if (!R) return;
    const rzp = new R(options);
    rzp.open();
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <InnerPage
        title="Pay Fee Online"
        subtitle="Secure online payment powered by Razorpay."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission/procedure" },
          { label: "Pay Fee Online" },
        ]}
      >
        <div className="not-prose grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-card border border-gray-200 bg-white p-6 shadow-card"
          >
            <div>
              <label className="block text-sm font-medium" htmlFor="studentName">
                Student name
              </label>
              <input
                id="studentName"
                className="mt-1 w-full rounded-btn border px-3 py-2"
                {...register("studentName")}
              />
              {errors.studentName && (
                <p className="text-sm text-error">{errors.studentName.message}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium" htmlFor="className">
                  Class
                </label>
                <input
                  id="className"
                  className="mt-1 w-full rounded-btn border px-3 py-2"
                  {...register("className")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="section">
                  Section
                </label>
                <input
                  id="section"
                  className="mt-1 w-full rounded-btn border px-3 py-2"
                  {...register("section")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="feeType">
                Fee type
              </label>
              <select
                id="feeType"
                className="mt-1 w-full rounded-btn border px-3 py-2"
                {...register("feeType")}
              >
                <option value="">Select</option>
                <option value="Tuition">Tuition</option>
                <option value="Transport">Transport</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="amount">
                Amount (INR)
              </label>
              <input
                id="amount"
                type="number"
                step="0.01"
                className="mt-1 w-full rounded-btn border px-3 py-2"
                {...register("amount", { valueAsNumber: true })}
              />
              {errors.amount && (
                <p className="text-sm text-error">{errors.amount.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-btn bg-primary py-3 font-semibold text-white"
            >
              Proceed to pay
            </button>
          </form>
          <div className="rounded-card border border-dashed border-gray-300 bg-offwhite p-6">
            <h3 className="font-display text-lg text-dark">Receipt</h3>
            <p className="mt-2 text-sm text-gray-600">
              After successful payment, download your receipt here. In production,
              generate a PDF receipt from your server.
            </p>
            {receipt && (
              <p className="mt-4 font-mono text-sm text-primary">
                Reference: {receipt}
              </p>
            )}
          </div>
        </div>
      </InnerPage>
    </>
  );
}
