import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// 토큰 유효성 검사 함수
const isTokenValid = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // 토큰의 payload 파싱
    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
    return payload.exp > currentTime; // 만료 시간 확인
  } catch {
    return false;
  }
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // 로그인 상태
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

    if (token && isTokenValid(token)) {
      setIsAuthenticated(true); // 유효한 토큰인 경우 로그인 상태 유지
    } else {
      setIsAuthenticated(false); // 로그인 상태 해제
    }
  }, [router]);

  return { isAuthenticated }; // 로그인 상태 반환
};
