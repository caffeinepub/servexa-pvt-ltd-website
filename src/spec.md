# Specification

## Summary
**Goal:** Add Internet Identity authentication to protect the admin dashboard while keeping the booking form publicly accessible.

**Planned changes:**
- Integrate Internet Identity authentication provider into the frontend application
- Protect the /admin route to require authentication before access
- Add login and logout buttons for authentication flow
- Configure backend to accept authenticated calls for admin operations
- Keep the home page booking form publicly accessible without authentication

**User-visible outcome:** Customers can submit booking requests without logging in. Admin users must authenticate using Internet Identity (passkeys, Google, Apple, Microsoft) to access the admin dashboard where they can view and manage bookings. Any authenticated user can access the admin features.
