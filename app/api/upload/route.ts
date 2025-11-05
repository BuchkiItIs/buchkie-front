export const runtime = "nodejs";

import { create } from "ipfs-http-client";

const projectId = process.env.INFURA_IPFS_ID!;
const projectSecret = process.env.INFURA_IPFS_SECRET!;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: { authorization: auth },
});

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    if (!content)
      return new Response(JSON.stringify({ error: "Missing content" }), {
        status: 400,
      });

    const result = await client.add(content);
    const cid = result.path;

    return new Response(JSON.stringify({ cid }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
    });
  }
}
