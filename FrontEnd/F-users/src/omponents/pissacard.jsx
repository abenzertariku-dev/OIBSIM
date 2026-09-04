import React, { useState } from "react";
import axios from "axios";

export default function PizzaCard({ item }) {
  // 1. Pop-up Visibility State
  const [isOpen, setIsOpen] = useState(false);

  // 2. Form States
  const [amount, setAmount] = useState("1");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Safe item data extractions
  const descriptionText = item?.Description || item?.Discription || "Freshly baked pizza.";
  const pissaName = item?.Name || "Pizza";

  // 3. Form Submission Handler
  const handleMySubmit = async (e) => {
    e.preventDefault(); // Prevents browser page reload
    setLoading(true);
    setErrorMsg("");

    try {
      await axios.post("http://127.0.0.1:5000/api/user/order", {
        Pissa: pissaName,
        Amount: amount,
        User: user,
        Adress: address,
      });

      console.log("Order placed successfully");
      
      // Reset form and close modal
      setUser("");
      setAddress("");
      setAmount("1");
      setIsOpen(false);
    } catch (error) {
      console.error("Sorry, cannot place the order", error);
      setErrorMsg("Could not place order. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* --- PIZZA CARD --- */}
      <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-amber-100 shadow-md shadow-amber-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 max-w-sm">
        {/* Food Image */}
        <div className="relative h-48 w-full overflow-hidden bg-amber-50">
          <img
            src={item?.Image}
            alt={pissaName}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Price Badge */}
          <div className="absolute top-3 right-3 rounded-full bg-amber-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-sm">
            {item?.Price} ETB
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
              {pissaName}
            </h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {descriptionText}
            </p>
          </div>

          {/* Opens Pop-up Form Modal */}
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="w-full rounded-xl bg-amber-500 py-2.5 px-4 text-center text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:bg-amber-600 active:scale-[0.98]"
          >
            Add to Order
          </button>
        </div>
      </div>

      {/* --- POP-UP MODAL FORM --- */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)} // Close modal when clicking outside background
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-amber-100"
            onClick={(e) => e.stopPropagation()} // Stop closing when clicking inside form
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Place Order</h3>
                <p className="text-xs font-medium text-amber-600">{pissaName}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleMySubmit} className="mt-4 space-y-4">
              {/* User Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abenezer"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2 text-sm text-gray-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Quantity Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  placeholder="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2 text-sm text-gray-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Address Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bole"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2 text-sm text-gray-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Error Notification */}
              {errorMsg && (
                <p className="text-xs font-medium text-red-500 text-center">
                  {errorMsg}
                </p>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-all disabled:opacity-50"
                >
                  {loading ? "Ordering..." : "Confirm Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}