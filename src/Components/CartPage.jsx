import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();

  const handleBillingClick = () => {
    // Navigate to the RegisterPage
    navigate('/billing');
  };
  // Dummy data for the cart items
  const cartItems = [
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },
    { productCode: 'ABC123', dueDate: '2024-06-20', quantity: 2 },
    { productCode: 'XYZ456', dueDate: '2024-06-25', quantity: 1 },

    // Add more items as needed
  ];

  return (
    <div className="container ml-5 py-8">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-md w-full md:w-2/3 lg:w-48">
            <p><strong>Product Code:</strong> {item.productCode}</p>
            <p><strong>Due Date:</strong> {item.dueDate}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button onClick={handleBillingClick} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Proceed</button>
      </div>
    </div>
  );
}

export default CartPage;
