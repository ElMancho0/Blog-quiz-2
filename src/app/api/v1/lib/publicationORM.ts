import { Publication } from "@prisma/client";
import { getPrismaClient } from "@/app/api/lib/prisma";
import { ErrorResponse } from "@/app/api/v1/model/ErrorResponse";

const prisma = getPrismaClient();

export async function createPublicationInPrisma(
  publication: Publication
): Promise<Publication | ErrorResponse> {
  try {
    return await prisma.publication.create({ data: publication });
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

export async function updatePublicationInPrisma(
  publication: Publication
): Promise<Publication | ErrorResponse> {
  try {
    return await prisma.publication.update({
      where: { id: publication.id },
      data: publication,
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      return { error: "Publication not found", status: 404 };
    }
    console.log(error);
    return { error: error.message, status: 500 };
  }
}

export async function deletePublicationInPrisma(
  id: string
): Promise<Publication | ErrorResponse> {
  try {
    return await prisma.publication.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      return { error: "Publication not found", status: 404 };
    }
    console.log(error);
    return { error: error.message, status: 500 };
  }
}

export async function getPublicationsFromPrisma(): Promise<Publication[] | ErrorResponse> {
  try {
    return await prisma.publication.findMany();
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

export async function getPublicationFromPrisma(
  id: string
): Promise<Publication | ErrorResponse> {
  try {
    const publication = await prisma.publication.findUnique({
      where: { id },
    });
    if (publication === null) {
      return { error: "Publication not found", status: 404 };
    }
    return publication;
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

