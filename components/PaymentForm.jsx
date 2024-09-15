import React from 'react';

const PaymentForm = ({ totalAmount, onClose }) => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Payment confirmed!'); // Replace this with actual payment handling logic
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left">Name:</label>
            {console.log(totalAmount)}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-left">Contact Number:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-left">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={`₹${totalAmount}`}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Confirm Payment
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded ml-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
