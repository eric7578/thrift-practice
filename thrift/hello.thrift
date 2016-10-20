struct Send {
  1: required string username;
  2: required i32 sendtime;
  3: required string content;
  4: LatLng location;
}

struct LatLng {
  1: double lat;
  2: double lng;
}

service Messenger {
  void send(1: Send send);
}
