import { useGetAllBookings, useUpdateBookingStatus } from '../hooks/useQueries';
import { Status } from '../backend';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Loader2, ChevronDown, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const { data: bookings, isLoading, isError, refetch } = useGetAllBookings();
  const updateStatus = useUpdateBookingStatus();

  const handleStatusChange = async (bookingId: bigint, newStatus: Status) => {
    try {
      await updateStatus.mutateAsync({ id: bookingId, status: newStatus });
      toast.success('Booking status updated successfully');
    } catch (error) {
      toast.error('Failed to update booking status');
      console.error('Error updating status:', error);
    }
  };

  const formatTimestamp = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  const getStatusColor = (status: Status) => {
    return status === Status.completed
      ? 'bg-green-500/20 text-green-300 border-green-500/30'
      : 'bg-amber-500/20 text-amber-300 border-amber-500/30';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-gold-accent mx-auto mb-4" />
          <p className="text-white/70">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glassmorphism p-8 rounded-2xl max-w-md">
          <p className="text-red-400 mb-4">Failed to load bookings</p>
          <Button
            onClick={() => refetch()}
            className="bg-gold-accent hover:bg-gold-accent/90 text-navy-primary"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glassmorphism rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-white/70">
                Manage all booking requests
              </p>
            </div>
            <Button
              onClick={() => refetch()}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          {!bookings || bookings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No bookings yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-white/90 font-semibold">
                      Customer Name
                    </TableHead>
                    <TableHead className="text-white/90 font-semibold">
                      Phone Number
                    </TableHead>
                    <TableHead className="text-white/90 font-semibold">
                      Service
                    </TableHead>
                    <TableHead className="text-white/90 font-semibold">
                      Address
                    </TableHead>
                    <TableHead className="text-white/90 font-semibold">
                      Date & Time
                    </TableHead>
                    <TableHead className="text-white/90 font-semibold">
                      Status
                    </TableHead>
                    <TableHead className="text-white/90 font-semibold">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow
                      key={booking.id.toString()}
                      className="border-white/10 hover:bg-white/5"
                    >
                      <TableCell className="text-white font-medium">
                        {booking.customerName}
                      </TableCell>
                      <TableCell className="text-white/80">
                        {booking.phoneNumber}
                      </TableCell>
                      <TableCell className="text-white/80">
                        {booking.serviceCategory}
                      </TableCell>
                      <TableCell className="text-white/80 max-w-xs truncate">
                        {booking.address}
                      </TableCell>
                      <TableCell className="text-white/80 whitespace-nowrap">
                        {formatTimestamp(booking.timestamp)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getStatusColor(booking.status)} border capitalize`}
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white/20 text-white hover:bg-white/10"
                              disabled={updateStatus.isPending}
                            >
                              {updateStatus.isPending ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <>
                                  Change Status
                                  <ChevronDown className="h-4 w-4 ml-1" />
                                </>
                              )}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-navy-primary/95 border-white/20 backdrop-blur-xl"
                          >
                            <DropdownMenuItem
                              onClick={() =>
                                handleStatusChange(booking.id, Status.pending)
                              }
                              className="text-white hover:bg-white/10 cursor-pointer"
                            >
                              Mark as Pending
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleStatusChange(booking.id, Status.completed)
                              }
                              className="text-white hover:bg-white/10 cursor-pointer"
                            >
                              Mark as Completed
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Total Bookings: <span className="text-white font-semibold">{bookings?.length || 0}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
