import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function getUserTypeFromToken(token) {
  try {
    const response = await fetch("http://localhost:3000//decodeToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error("Failed to decode token");
    }
    const data = await response.json();
    return data.userType;
  } catch (error) {
    console.error("Error fetching user type:", error);
  }
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

// We will define the expiration date for token to be 7 days.
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
