import { NextResponse } from "next/server";

const data = [
  { name: "alireza", job: "front-end" },
  { name: "taha", job: "film maker" },
];
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const filteredData = data.filter((data) => data.name === name);

  return NextResponse.json(filteredData);
};
