"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/hooks/useCart";
import { useAnalytics } from "@/hooks/useAnalytics";
import { database } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const CheckoutForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const { cart, clearCart } = useCart();
  const { trackEvent } = useAnalytics();
  const router = useRouter();

  const handleInputChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const userId = localStorage.getItem("shopUserId");
      if (!userId || !database) {
        throw new Error("User not authenticated or database not available");
      }

      // Create transaction record
      const transaction = {
        userId,
        orderDate: new Date().toISOString(),
        items: cart.map((item) => ({
          item_name: item.item_name,
          brand: item.brand,
          price: item.price,
          quantity: item.quantity,
          total_price: item.total_price,
        })),
        shipping: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        },
        payment: {
          cardLast4: formData.cardNumber.slice(-4),
          expiryDate: formData.expiryDate,
        },
        totals: {
          subtotal: cart.reduce((sum, item) => sum + item.total_price, 0),
          shipping: 15000,
          tax: cart.reduce((sum, item) => sum + item.total_price * 0.11, 0),
        },
        status: "pending",
      };

      // Save to Firebase
      const transactionsRef = ref(database, `fhi/${userId}/transactions`);
      const newTransactionRef = push(transactionsRef);
      await set(newTransactionRef, transaction);

      // Track purchase event
      trackEvent("purchase_complete", {
        transaction_id: newTransactionRef.key,
        items: cart,
        total_amount:
          transaction.totals.subtotal +
          transaction.totals.shipping +
          transaction.totals.tax,
      });

      // Clear cart and redirect
      clearCart();
      toast.success("Order placed successfully!");
      router.push("/shop/orders");
    } catch (error) {
      console.error("Error processing order:", error);
      toast.error("Failed to process order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange("lastName")}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            required
            value={formData.address}
            onChange={handleInputChange("address")}
            placeholder="Enter your address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              required
              value={formData.city}
              onChange={handleInputChange("city")}
              placeholder="City"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              required
              value={formData.state}
              onChange={handleInputChange("state")}
              placeholder="State"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              required
              value={formData.zipCode}
              onChange={handleInputChange("zipCode")}
              placeholder="ZIP Code"
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            required
            value={formData.cardNumber}
            onChange={handleInputChange("cardNumber")}
            placeholder="0000 0000 0000 0000"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              required
              value={formData.expiryDate}
              onChange={handleInputChange("expiryDate")}
              placeholder="MM/YY"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              required
              type="password"
              value={formData.cvv}
              onChange={handleInputChange("cvv")}
              placeholder="123"
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting || cart.length === 0}
      >
        {isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </form>
  );
};
