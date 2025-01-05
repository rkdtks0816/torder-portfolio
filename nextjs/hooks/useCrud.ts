import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface CrudOptions {
  dbName: string;
  collectionName: string;
}

export default function useCrud({ dbName, collectionName }: CrudOptions) {
  const queryClient = useQueryClient();

  // Read
  const fetchData = useQuery({
    queryKey: ["data", dbName, collectionName],
    queryFn: async () => {
      const response = await fetch(
        `/api/data/read?dbName=${dbName}&collectionName=${collectionName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐싱
  });

  // Create
  const createData = useMutation({
    mutationFn: async (data: object) => {
      const response = await fetch("/api/data/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  // Update
  const updateData = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: object }) => {
      const response = await fetch("/api/data/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
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

  // Delete
  const deleteData = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch("/api/data/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
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
