import { NextResponse } from 'next/server';
import { deletePublication, getPublication } from '@/app/api/v1/controller/publicationController';

export async function GET(request: Request, context: any): Promise<NextResponse> {
  const { id } = context.params;
  const response = await getPublication(id);
  if ('error' in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}

export async function DELETE(request: Request, context: any): Promise<NextResponse> {
  const { id } = context.params;
  const response = await deletePublication(id);
  if ('error' in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}