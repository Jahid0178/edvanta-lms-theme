import React from "react";
import OrderSummary from "@/components/cards/OrderSummary/OrderSummary";
import CheckoutForm from "@/components/forms/CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  return (
    <section className="section bg-linear-to-t from-white to-blue-200/50">
      <div className="container mt-[42px]">
        <div className="grid grid-cols-12 gap-6 max-w-[996px] mx-auto">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <CheckoutForm />
          </div>
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
