"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CheckoutForm = () => {
  return (
    <form className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter your address" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="City" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="State" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input id="zipCode" placeholder="ZIP Code" />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input id="expiryDate" placeholder="MM/YY" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" type="password" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Place Order
      </Button>
    </form>
  );
};