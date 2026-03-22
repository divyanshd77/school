import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("x-sanity-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { path } = await req.json().catch(() => ({ path: "/" }));
  if (typeof path === "string") {
    revalidatePath(path);
  }
  return NextResponse.json({ revalidated: true });
}
