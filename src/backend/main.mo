import Time "mo:core/Time";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type Status = {
    #pending;
    #completed;
  };

  type Booking = {
    id : Nat;
    customerName : Text;
    phoneNumber : Text;
    serviceCategory : Text;
    address : Text;
    timestamp : Time.Time;
    status : Status;
  };

  let bookings = Map.empty<Nat, Booking>();
  var nextId = 0;

  public shared ({ caller }) func submitBooking(
    customerName : Text,
    phoneNumber : Text,
    serviceCategory : Text,
    address : Text,
  ) : async () {
    let booking : Booking = {
      id = nextId;
      customerName;
      phoneNumber;
      serviceCategory;
      address;
      timestamp = Time.now();
      status = #pending;
    };
    bookings.add(nextId, booking);
    nextId += 1;
  };

  public query ({ caller }) func getBooking(id : Nat) : async Booking {
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking does not exist") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray();
  };

  public shared ({ caller }) func updateBookingStatus(id : Nat, status : Status) : async () {
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking does not exist") };
      case (?booking) {
        let updatedBooking = { booking with status };
        bookings.add(id, updatedBooking);
      };
    };
  };

  public shared ({ caller }) func toggleBookingStatus(id : Nat) : async Status {
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking does not exist") };
      case (?booking) {
        let newStatus = switch (booking.status) {
          case (#pending) { #completed };
          case (#completed) { #pending };
        };
        let updatedBooking = { booking with status = newStatus };
        bookings.add(id, updatedBooking);
        newStatus;
      };
    };
  };
};
