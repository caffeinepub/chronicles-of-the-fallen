import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { PlayerProgress } from "../backend.d";
import { useActor } from "./useActor";

export function usePlayerProgress() {
  const { actor, isFetching } = useActor();
  return useQuery<PlayerProgress | null>({
    queryKey: ["playerProgress"],
    queryFn: async () => {
      if (!actor) return null;
      const saved = await actor.isProgressSaved();
      if (!saved) return null;
      return actor.getProgress();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSaveProgress() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (progress: PlayerProgress) => {
      if (!actor) return;
      const saved = await actor.isProgressSaved();
      if (saved) {
        await actor.updateProgress(progress);
      } else {
        await actor.saveProgress(progress);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playerProgress"] });
    },
  });
}

export function useReachedEndings() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["reachedEndings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getReachedEndings();
    },
    enabled: !!actor && !isFetching,
  });
}
