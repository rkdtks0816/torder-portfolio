import { useState } from "react";
import { useRouter } from "next/router";
import { useToken } from "@/hooks/useToken";

interface UseLoginResult {
  handleLogin: (username: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useLogin = (): UseLoginResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setToken } = useToken(); // 토큰 저장 기능

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null); // 이전 오류 초기화

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("잘못된 사용자명 또는 비밀번호입니다.");
      }

      const { token } = await response.json();
      setToken(token); // 토큰 저장
      router.back(); // 로그인 성공 시 뒤로 이동
    } catch (err) {
      setError((err as Error).message); // 오류 메시지 저장
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };

  return { handleLogin, isLoading, error };
};
