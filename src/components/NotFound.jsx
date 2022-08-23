import React from "react";

function NotFound() {
  return (
    // component will be shown when found nothing
    <p className="mb-4 mt-2" style={{ textAlign: "center", fontSize: 16 }}>
      <b>Maalesef size yakın işletme bulamadık. Lütfen bekleyiniz...</b>
    </p>
  );
}

export default NotFound;
