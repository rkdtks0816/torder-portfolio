import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

// 사용자 데이터
const users = [
  { username: process.env.USER_NAME, password: process.env.PASSWORD },
];

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // 사용자 인증
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // 토큰 생성
    const token = jwt.sign({ username }, JWT_SECRET_KEY, { expiresIn: "7d" });

    return res.status(200).json({ token });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
