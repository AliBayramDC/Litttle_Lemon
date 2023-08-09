import React, { useState } from 'react';
import './ReservationSection.css';

const ReservationSection = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reservationReason, setReservationReason] = useState('');
  const [environment, setEnvironment] = useState('');
  const [numSeats, setNumSeats] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const seatOptions = [2, 4, 6, 8, 10, 15, 20];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the reservation submission
    console.log('Reservation submitted:', {
      name,
      surname,
      date,
      time,
      reservationReason,
      environment,
      numSeats,
    });

    // Show the success message
    setShowSuccessModal(true);
    // Reset the form
    setName('');
    setSurname('');
    setDate('');
    setTime('');
    setReservationReason('');
    setEnvironment('');
    setNumSeats('');
  };

  const handleCloseModal = () => {
    // Close the success modal
    setShowSuccessModal(false);
  };

  return (
    <section className="reservation-section" id="reservation">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservation-reason">Reason for Reservation:</label>
          <select
            id="reservation-reason"
            value={reservationReason}
            onChange={(e) => setReservationReason(e.target.value)}
            required
          >
            <option value="">Select a reason</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="environment">Environment:</label>
          <select
            id="environment"
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="outdoor">Outdoor</option>
            <option value="indoor">Indoor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="num-seats">Number of Seats:</label>
          <select
            id="num-seats"
            value={numSeats}
            onChange={(e) => setNumSeats(e.target.value)}
            required
          >
            <option value="">Select number of seats</option>
            {seatOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit Reservation</button>
      </form>

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="check-mark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p>Your reservation was successfully submitted!</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReservationSection;
