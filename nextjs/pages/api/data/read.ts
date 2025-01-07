import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { dbName, collectionName, query } = req.query;

    if (!dbName || !collectionName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db(dbName as string);

      // Query 파라미터 처리
      const parsedQuery =
        query && query !== "undefined" && typeof query === "string"
          ? JSON.parse(query)
          : {};

      // MongoDB에서 데이터 조회
      const data = await db
        .collection(collectionName as string)
        .find(parsedQuery)
        .toArray();

      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Failed to fetch data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
