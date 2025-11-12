import { create } from "ipfs-http-client";

const projectId = process.env.FILEBASE_ACCESS_KEY!;
const projectSecret = process.env.FILEBASE_SECRET_KEY!;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  url: "https://ipfs.filebase.io/api/v0",
  headers: { authorization: auth },
});

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (!content || !content.toString().trim()) {
      return new Response(JSON.stringify({ error: "Missing content" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await client.add(content);
    const cid = result.path;

    return new Response(JSON.stringify({ cid }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    console.error(err);
    let message = "Upload failed";
    if (err instanceof Error) message = err.message;

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
