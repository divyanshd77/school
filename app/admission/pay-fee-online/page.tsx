import type { Metadata } from "next";
import { PayFeeClient } from "./PayFeeClient";

export const metadata: Metadata = {
  title: "Pay Fee Online",
  description: "Pay school fees securely online via Razorpay.",
};

export default function PayFeeOnlinePage() {
  return <PayFeeClient />;
}
