import { NextResponse } from "next/server";

export const GET = async () => {
  const data = { name: "alireza", age: 22, job: "front-end" };
  return NextResponse.json({ data });
};
