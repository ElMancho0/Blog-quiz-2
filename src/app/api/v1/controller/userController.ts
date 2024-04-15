import { User } from "@prisma/client";
import {
  createUserInPrisma,
  deleteUserInPrisma,
  getUserFromPrisma,
  getUsersFromPrisma,
  updateUserInPrisma,
} from "@/app/api/v1/lib/userORM";
import { ErrorResponse } from "@/app/api/v1/model/ErrorResponse";

export function getUsers(): Promise<User[] | ErrorResponse> {
  return getUsersFromPrisma();
}
export function getUser(id: string): Promise<User | ErrorResponse> {
  return getUserFromPrisma(id);
}

export function saveUser(user: User): Promise<User | ErrorResponse> {
  if (user.id === undefined) {
    return createUserInPrisma(user);
  } else {
    return updateUserInPrisma(user);
  }
}

export function deleteUser(id: string): Promise<User | ErrorResponse> {
  return deleteUserInPrisma(id);
}
