import { ErrorResponse } from "@/model/ErrorResponse";

export function validateResponse(res: Response): void {
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
  }
}

export function validateObject(object: any): void {
  if (object.error) {
    throw new Error(object.error);
  }
}

export function getError(error: any): ErrorResponse {
  console.error("Error fetching users:", error.message);
  return {
    error: "Failed to fetch users data -> " + error.message,
    status: error.status,
  };
}
