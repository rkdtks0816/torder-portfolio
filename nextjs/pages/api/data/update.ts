import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";

interface ExtendedRequest extends NextApiRequest {
  user?: string | JwtPayload;
}

// JWT 인증 미들웨어 함수
const authenticateToken = (
  req: ExtendedRequest,
  res: NextApiResponse,
  next: (error?: unknown) => void
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY; // .env 파일에 JWT_SECRET_KEY 추가
    if (!secretKey) {
      throw new Error("JWT secret key is not defined");
    }

    const decoded = jwt.verify(token, secretKey); // 토큰 검증
    req.user = decoded; // 검증된 사용자 정보 추가
    next(); // 다음 핸들러로 이동
  } catch (err) {
    console.error("JWT verification error:", err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    return authenticateToken(req, res, async () => {
      const { dbName, collectionName, id, updates } = req.body;

      if (!dbName || !collectionName || !id || !updates) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      try {
        const client = await clientPromise;
        const db = client.db(dbName);
        const result = await db
          .collection(collectionName)
          .updateOne({ _id: new ObjectId(id) }, { $set: updates });

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json({ message: "Data updated", result });
      } catch (error) {
        res.status(500).json({ message: "Failed to update data", error });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
