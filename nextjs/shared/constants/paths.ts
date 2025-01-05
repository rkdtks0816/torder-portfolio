export const PATHS = {
  BOARD: `/board`,
  BLOG: {
    ROOT: `/blog`,
    DETAIL: (id: string) => `/blog/${id}`,
  },
  PROJECT: {
    ROOT: `/project`,
    DETAIL: (id: string) => `/project/${id}`,
  },
  USER: {
    PROFILE: (userId: string) => `/user/${userId}`,
    SETTINGS: `/user/settings`,
  },
};
