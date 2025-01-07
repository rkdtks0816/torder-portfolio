export const API_ENDPOINTS = {
  BLOG: {
    LIST: "/api/blogs",
    DETAIL: (id: string) => `/api/blogs/${id}`,
  },
  USER: {
    LOGIN: "/api/auth/login",
    PROFILE: (userId: string) => `/api/users/${userId}`,
  },
};
