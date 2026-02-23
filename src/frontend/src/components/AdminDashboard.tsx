import { useGetAllBookings, useUpdateBookingStatus } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useNavigate } from '@tanstack/react-router';
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
import { Loader2, ChevronDown, RefreshCw, AlertCircle, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AdminDashboard() {
  const { data: bookings, isLoading, isError, error, refetch } = useGetAllBookings();
  const updateStatus = useUpdateBookingStatus();
  const { clear } = useInternetIdentity();
  const navigate = useNavigate();

  const handleStatusChange = async (bookingId: bigint, newStatus: Status) => {
    try {
      await updateStatus.mutateAsync({ id: bookingId, status: newStatus });
      toast.success('Booking status updated successfully');
    } catch (error) {
      toast.error('Failed to update booking status. Please try again.');
      console.error('Error updating status:', error);
    }
  };

  const handleLogout = () => {
    clear();
    navigate({ to: '/' });
    toast.success('Logged out successfully');
  };

  const formatTimestamp = (timestamp: bigint) => {
    try {
      const date = new Date(Number(timestamp) / 1000000);
      return date.toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Invalid date';
    }
  };

  const getStatusColor = (status: Status) => {
    return status === Status.completed
      ? 'bg-green-500/20 text-green-300 border-green-500/30'
      : 'bg-amber-500/20 text-amber-300 border-amber-500/30';
  };

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-gold-accent mx-auto mb-4" />
          <p className="text-white/70 text-lg">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center glassmorphism p-8 rounded-2xl max-w-md w-full">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Failed to Load Bookings</h3>
          <p className="text-white/70 mb-6">
            {error instanceof Error ? error.message : 'Unable to connect to the server. Please check your connection and try again.'}
          </p>
          <Button
            onClick={() => refetch()}
            className="bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-semibold"
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-white/70">
                Manage all booking requests
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => refetch()}
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {!bookings || bookings.length === 0 ? (
            <Alert className="bg-white/5 border-white/20">
              <AlertCircle className="h-4 w-4 text-white/70" />
              <AlertTitle className="text-white">No bookings yet</AlertTitle>
              <AlertDescription className="text-white/70">
                Booking requests will appear here once customers submit the form.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg border border-white/10">
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
                          <a 
                            href={`tel:${booking.phoneNumber}`}
                            className="hover:text-gold-accent transition-colors"
                          >
                            {booking.phoneNumber}
                          </a>
                        </TableCell>
                        <TableCell className="text-white/80">
                          {booking.serviceCategory}
                        </TableCell>
                        <TableCell className="text-white/80 max-w-xs">
                          <div className="truncate" title={booking.address}>
                            {booking.address}
                          </div>
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
                                disabled={booking.status === Status.pending}
                              >
                                Mark as Pending
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleStatusChange(booking.id, Status.completed)
                                }
                                className="text-white hover:bg-white/10 cursor-pointer"
                                disabled={booking.status === Status.completed}
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

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-white/60 text-sm">
                    Total Bookings: <span className="text-white font-semibold">{bookings.length}</span>
                  </p>
                  <p className="text-white/60 text-sm">
                    Pending: <span className="text-amber-300 font-semibold">
                      {bookings.filter(b => b.status === Status.pending).length}
                    </span>
                    {' | '}
                    Completed: <span className="text-green-300 font-semibold">
                      {bookings.filter(b => b.status === Status.completed).length}
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
