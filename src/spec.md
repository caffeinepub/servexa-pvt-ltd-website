# Specification

## Summary
**Goal:** Add an admin dashboard to view and manage all booking requests with status tracking.

**Planned changes:**
- Create admin dashboard page at `/admin` route displaying all booking requests in a table format
- Add status field to booking data structure in backend (pending/completed)
- Implement status toggle functionality with visual indicators (colors/badges)
- Integrate React Query hooks for fetching bookings and updating status with automatic refresh
- Add navigation route to access admin dashboard

**User-visible outcome:** Admins can access `/admin` to view all booking submissions in a sortable table showing customer name, phone, service type, address, and timestamp. They can mark bookings as pending or completed, with visual status indicators and real-time updates.
