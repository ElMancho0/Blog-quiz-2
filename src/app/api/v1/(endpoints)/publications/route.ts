import { NextResponse } from "next/server";
import {
  getPublications,
  savePublication,
} from "@/app/api/v1/controller/publicationController";
import { Publication } from "@prisma/client";

export async function GET(
  request: Request,
  context: any
): Promise<NextResponse> {
  const response = await getPublications();
  if ("error" in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}

export async function POST(
  request: Request,
  context: any
): Promise<NextResponse> {
  const publication = (await request.json()) as Publication;
  const response = await savePublication(publication);
  if ("error" in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response, { status: 201 });
}
