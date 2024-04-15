import { User } from "@prisma/client";
import { getPrismaClient } from "@/app/api/lib/prisma";
import { ErrorResponse } from "@/app/api/v1/model/ErrorResponse";

const prisma = getPrismaClient();

export async function getUsersFromPrisma(): Promise<User[] | ErrorResponse> {
  try {
    return await prisma.user.findMany();
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

export async function getUserFromPrisma(
  id: string
): Promise<User | ErrorResponse> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (user === null) {
      return { error: "User not found", status: 404 };
    }
    return user;
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

export async function createUserInPrisma(
  user: User
): Promise<User | ErrorResponse> {
  try {
    return await prisma.user.create({ data: user });
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

export async function updateUserInPrisma(
  user: User
): Promise<User | ErrorResponse> {
  try {
    return await prisma.user.update({
      where: { id: user.id },
      data: user,
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      return { error: "User not found", status: 404 };
    }
    console.log(error);
    return { error: error.message, status: 500 };
  }
}

export async function deleteUserInPrisma(
  id: string
): Promise<User | ErrorResponse> {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      return { error: "User not found", status: 404 };
    }
    return { error: error.message, status: 500 };
  }
}

export async function getUserByEmail(
  email: string
): Promise<User | ErrorResponse> {
  try {
    const user = await prisma.user.findFirst({
      where: { email: { equals: email } },
    });
    if (user === null) {
      return { error: "User not found", status: 404 };
    }
    return user;
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}
