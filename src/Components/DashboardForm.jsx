import React, { useState } from 'react';

function DashboardForm() {
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add Product to Cart</h2>
        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="select-date" className="block mb-1">Selecting Date:</label>
            <input type="date" id="select-date" name="select-date" className="border border-gray-300 rounded-md py-2 px-3 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="product-code" className="block mb-1">Product Code:</label>
            <input type="text" id="product-code" name="product-code" className="border border-gray-300 rounded-md py-2 px-3 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="due-date" className="block mb-1">Select Due Date:</label>
            <input type="date" id="due-date" name="due-date" className="border border-gray-300 rounded-md py-2 px-3 w-full" />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="quantity" className="block mb-1">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" className="border border-gray-300 rounded-md py-2 px-3 w-1/4" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Add to Cart</button>
          </div>
        </form>
      </div>
      {showNotification && (
        <div className="bg-green-500 text-white fixed bottom-0 right-0 p-4 rounded-md mb-4 mr-4">
          Item added successfully!
        </div>
      )}
    </div>
  );
}

export default DashboardForm;
