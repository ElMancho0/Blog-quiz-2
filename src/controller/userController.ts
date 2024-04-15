'use server'
import { User } from "@prisma/client";
import { ErrorResponse } from "@/model/ErrorResponse";
import { getError, validateObject, validateResponse } from "@/utils/utils";


export async function getUser(id: number): Promise<User | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/users/${id}`);
    validateResponse(res);

    const user: User | ErrorResponse = await res.json();
    validateObject(user);
    return user;
  } catch (error: any) {
    return getError(error);
  }
}

export async function deleteUser(id: number): Promise<User | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/users/${id}`, { method: "DELETE" });
    validateResponse(res);

    const user: User | ErrorResponse = await res.json();
    validateObject(user);
    return user;
  } catch (error: any) {
    return getError(error);
  }
}

export async function saveUser(user: User): Promise<User | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/users`, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    validateResponse(res);

    const newUser: User | ErrorResponse = await res.json();
    validateObject(newUser);
    return newUser;
  } catch (error: any) {
    return getError(error);
  }
}

export async function getUsers(): Promise<User[] | ErrorResponse> {
  try {
    console.log(process.env.API_DIRECTION);
    const res: Response = await fetch(`api/users`);

    validateResponse(res);

    const users: User[] | ErrorResponse = await res.json();

    return users;
  } catch (error: any) {
    return getError(error);
  }
}

export async function getUserByEmail(email: string): Promise<User | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/users/email/${email}`);
    validateResponse(res);

    const user: User | ErrorResponse = await res.json();
    validateObject(user);
    return user;
  } catch (error: any) {
    return getError(error);
  }
}