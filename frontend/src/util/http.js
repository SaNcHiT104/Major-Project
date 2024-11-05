import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function getDecodedTokenInfoFromToken(token) {
  // console.log(token);
  try {
    const response = await fetch("http://localhost:3000/decodeToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    });

    if (!response.ok) {
      throw new Error("Failed to decode token");
    }
    // console.log("RES" + response)
    const data = await response.json();
    // console.log("DATA - " + data.userType);
    return data;
  } catch (error) {
    console.log("INVALID TOKEN", error);
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
