import React, { useEffect, useState } from "react";

export default function TimerComponent() {
  const [timeLeft, setTimeLeft] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleSubscribe = () => {
    setIsModalOpen(true);
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleModalSubmit = (email) => {
    console.log("Submitted Email:", email);
    setIsModalOpen(false); // Close the modal after submission
  };
  const handleSubmit=()=>{

  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Set midnight for the current day

      const difference = midnight - now; // Difference in milliseconds

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Format time as HH:MM:SS
      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    // Update time every second
    const interval = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Call immediately to avoid delay on initial render

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center h-70% bg-gray-50 text-gray-800 ">
      {/* User Name Section */}
      {/* <div className="text-xl  font-bold text-red-900 mb-6">
        WELCOME
      </div> */}

      {/* Date Section */}
      <div className="text-5xl font-medium text-gray-700 mb-8 font-inter">
        3 January 2025
      </div>

      {/* Days Left */}
      <div className="text-xl text-gray-600 mb-4">
       <span className="text-4xl"> 363</span> Days Left for 2025
      </div>

      {/* Time Left for the Day */}
      <div className="text-xl font-bold text-gray-900 mb-6">
        Time Left for the Day: <span className="text-blue-500">{timeLeft}</span>
      </div>

      {/* Motivational Quote */}
     

      {/* Subscribe Button */}
      <button
        onClick={handleSubscribe}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md transition duration-300"
      >
        Subscribe
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Email Address</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                handleModalSubmit(email);
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                onClick={handleSubmit}
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
    <div>
    <div className="text-xl italic text-gray-700 mb-6 text-center border">
        "LOST TIME IS NEVER FOUND AGAIN" - Benjamin Franklin
      </div>
    </div>
    </>
  );
}
