import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldBooking = {
    id : Nat;
    customerName : Text;
    phoneNumber : Text;
    serviceCategory : Text;
    address : Text;
    timestamp : Int;
  };

  type OldActor = {
    bookings : Map.Map<Nat, OldBooking>;
    nextId : Nat;
  };

  type Status = {
    #pending;
    #completed;
  };

  type NewBooking = {
    id : Nat;
    customerName : Text;
    phoneNumber : Text;
    serviceCategory : Text;
    address : Text;
    timestamp : Int;
    status : Status;
  };

  type NewActor = {
    bookings : Map.Map<Nat, NewBooking>;
    nextId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newBookings = old.bookings.map<Nat, OldBooking, NewBooking>(
      func(_id, oldBooking) {
        { oldBooking with status = #pending };
      }
    );
    { old with bookings = newBookings };
  };
};
