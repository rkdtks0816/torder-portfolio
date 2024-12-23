import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    base: "/ssong-page/", // GitHub Pages의 리포지토리 이름으로 설정
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // @를 src 폴더로 매핑
        },
    },
});
