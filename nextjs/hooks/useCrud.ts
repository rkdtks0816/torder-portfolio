import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface CrudOptions {
  dbName: string;
  collectionName: string;
  token?: string | null;
  query?: Record<string, any>;
}

export default function useCrud({
  dbName,
  collectionName,
  token,
  query,
}: CrudOptions) {
  const queryClient = useQueryClient();

  // Read (누구나 볼 수 있음)
  const fetchData = useQuery({
    queryKey: ["data", dbName, collectionName, query],
    queryFn: async () => {
      const queryString = encodeURIComponent(JSON.stringify(query));
      const response = await fetch(
        `/api/data/read?dbName=${dbName}&collectionName=${collectionName}&${queryString}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐싱
  });

  // Create (토큰 필요)
  const createData = useMutation({
    mutationFn: async (data: object) => {
      if (!token) {
        throw new Error("Authentication token is missing");
      }
      const response = await fetch("/api/data/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ dbName, collectionName, data }),
      });
      if (!response.ok) {
        throw new Error("Failed to create data");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", dbName, collectionName],
        exact: true, // 특정 쿼리만 무효화
      });
    },
  });

  // Update (토큰 필요)
  const updateData = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: object }) => {
      if (!token) {
        throw new Error("Authentication token is missing");
      }
      const response = await fetch("/api/data/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ dbName, collectionName, id, updates }),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", dbName, collectionName],
        exact: true, // 특정 쿼리만 무효화
      });
    },
  });

  // Delete (토큰 필요)
  const deleteData = useMutation({
    mutationFn: async (id: string) => {
      if (!token) {
        throw new Error("Authentication token is missing");
      }
      const response = await fetch("/api/data/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ dbName, collectionName, id }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", dbName, collectionName],
        exact: true, // 특정 쿼리만 무효화
      });
    },
  });

  return { fetchData, createData, updateData, deleteData };
}
