export const useToken = () => {
  // 토큰 가져오기
  const getToken = () => {
    if (typeof window !== "undefined") {
      // 브라우저 환경에서만 localStorage 접근
      return localStorage.getItem("token");
    }
    return null; // 서버 환경에서는 null 반환
  };

  // 토큰 저장
  const setToken = (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    } else {
      console.warn("setToken은 브라우저 환경에서만 사용할 수 있습니다.");
    }
  };

  // 토큰 삭제
  const clearToken = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    } else {
      console.warn("clearToken은 브라우저 환경에서만 사용할 수 있습니다.");
    }
  };

  return { getToken, setToken, clearToken };
};
