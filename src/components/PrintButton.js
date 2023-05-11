import React from "react";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return <button onClick={handlePrint}>Print</button>;
}
