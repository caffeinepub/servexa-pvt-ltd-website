import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Booking, Status } from '../backend';

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      customerName,
      phoneNumber,
      serviceCategory,
      address,
    }: {
      customerName: string;
      phoneNumber: string;
      serviceCategory: string;
      address: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitBooking(customerName, phoneNumber, serviceCategory, address);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['bookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateBookingStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: bigint; status: Status }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.updateBookingStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}
