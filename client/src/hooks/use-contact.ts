import { useMutation } from "@tanstack/react-query";
import { type InsertMessage } from "@shared/schema";

// Note: Using hardcoded path based on requirements as shared/routes.ts might not be fully available in this context
// In a full environment, we would import { api } from "@shared/routes" and use api.contact.create.path
const CONTACT_API_PATH = '/api/contact';

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const res = await fetch(CONTACT_API_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        let errorMessage = "Failed to send message";
        try {
          const errorData = await res.json();
          if (errorData.message) errorMessage = errorData.message;
        } catch (e) {
          // Ignore parse errors for fallback
        }
        throw new Error(errorMessage);
      }
      
      return await res.json();
    },
  });
}
