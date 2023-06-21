import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function MyReservations() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form inputs */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyReservations;
