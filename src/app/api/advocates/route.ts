import db from "../../../db";
import { advocates } from "../../../db/schema";
// import { advocateData } from "../../../db/seed/advocates";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skip = parseInt(searchParams.get("skip") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  // Uncomment this line to use a database
  const data = await (db as any)
    .select()
    .from(advocates)
    .limit(limit)
    .offset(skip);

  // const data = advocateData;

  return Response.json({
    data,
    pagination: { skip, limit },
  });
}
