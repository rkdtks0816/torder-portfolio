export const PATHS = {
  ROOT: `/`,
  INTRO: `/intro`,
  LOGIN: `/login`,
  WRITE: `/write`,
  BLOG: {
    ROOT: `/blog`,
    DETAIL: (id: string) => `/blog/${id}`,
  },
  PROJECT: {
    ROOT: `/project`,
    DETAIL: (id: string) => `/project/${id}`,
  },
};
