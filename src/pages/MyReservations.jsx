import React from 'react';
import axios from 'axios';
import {
  useSelector,
} from 'react-redux';

function MyReservations() {
  const localToken = useSelector((state) => state.auth.token);
  console.log(localToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://booking-api-nhmg.onrender.com/rooms', {
        headers: { Authorization: `${localToken}` },
      });
      console.log(response.data);

      // ... rest of the code
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form inputs */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyReservations;
