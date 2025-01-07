import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLogin } from "@/hooks/useLogin";
import { useAuth } from "@/hooks/useAuth"; // 로그인 상태 확인 훅
import { LoginButton, LoginForm, LoginInput } from "../../styles/LoginStyles";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, isLoading, error } = useLogin(); // 커스텀 훅 사용
  const { isAuthenticated } = useAuth(); // 로그인 상태 확인
  const router = useRouter();

  // 로그인된 경우 이전 페이지로 리다이렉트
  useEffect(() => {
    if (isAuthenticated === true) {
      router.back(); // 이전 페이지로 이동
    }
  }, [isAuthenticated, router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(username, password); // 로그인 요청
  };

  if (isAuthenticated === true) {
    return <p>Redirecting...</p>; // 로그인 상태에서 리다이렉트 중인 메시지 표시
  }

  return (
    <LoginForm onSubmit={onSubmit}>
      <LoginInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디를 입력하세요."
        required
      />
      <LoginInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요."
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <LoginButton type="submit" disabled={isLoading}>
        {isLoading ? "로그인 중..." : "로그인"}
      </LoginButton>
    </LoginForm>
  );
}
