import React from 'react';

function BillingPage() {
  // Cart items data
  const cartItems = [
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
  ];

  return (
    <div className="container mx-auto py-8 ml-72">
      <h2 className="text-xl font-semibold mb-4">Billing</h2>
      <div className="">
        {/* Paper preview */}
        <div className="w-1/2 border border-gray-300 p-4 mr-4">
          <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
          {/* Render cart items */}
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4">
              <p><strong>Product Code:</strong> {item.productCode}</p>
              <p><strong>Due Date:</strong> {item.dueDate}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
            </div>
          ))}
        </div>
        {/* Save PDF button */}
        <div className="w-1/2 flex justify-center mt-10">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Save as PDF</button>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
