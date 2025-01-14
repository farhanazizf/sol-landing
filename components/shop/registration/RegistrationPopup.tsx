"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { database } from "@/lib/firebase";
import { ref, set } from "firebase/database";

interface RegistrationData {
  name: string;
  email: string;
  phone_number: string;
  store: string;
}

interface RegistrationPopupProps {
  onComplete: () => void;
}

export function RegistrationPopup({ onComplete }: RegistrationPopupProps) {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    phone_number: "",
    store: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate a unique ID for the user
      const userId = `fhi_${formData.email.split("@")[0] || "anonim"}`;

      // Save to Firebase Realtime Database
      const userRef = ref(database!, `fhi/${userId}`);
      await set(userRef, {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number,
        store: formData.store,
        cart: [],
      });

      // Store user ID in localStorage
      localStorage.setItem("shopUserId", userId);

      onComplete();
    } catch (error) {
      console.error("Error saving registration:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to Sukanda Onelink - FHI</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              autoComplete="no"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              required
              value={formData.phone_number}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phone_number: e.target.value,
                }))
              }
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="store">Store/Business Name *</Label>
            <Input
              id="store"
              required
              value={formData.store}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, store: e.target.value }))
              }
              placeholder="Enter your store/business name"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Continue to Shop"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
