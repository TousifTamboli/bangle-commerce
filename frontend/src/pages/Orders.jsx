import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [activeTrackingId, setActiveTrackingId] = useState(null); // Store active tracking ID

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + 'api/order/userorders', {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            item['orderId'] = order._id; // Store orderId to track it
            allOrdersItem.push(item);
          });
        });

        // Filter out items where payment is pending
        const filteredOrders = allOrdersItem.filter(item => item.payment === true);
        setOrderData(filteredOrders.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTrackOrder = (productId) => {
    if (activeTrackingId === productId) {
      setActiveTrackingId(null); // Close the tracking info if clicked again
    } else {
      setActiveTrackingId(productId); // Set the active tracking ID
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.length === 0 ? (
          <p>No orders to display. Please check back later.</p>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                    <p className="text-lg">{currency} {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1">Date: <span className="text-gray-700">{new Date(item.date).toDateString()}</span></p>
                  <p className="mt-1">Payment: <span className="text-gray-700">{item.paymentMethod}</span></p>
                  <p className="mt-1">Payment status: <span className="text-gray-700">{item.payment ? "Paid" : "Pending"}</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>
                <button onClick={() => handleTrackOrder(item._id)} className="border px-4 py-2 text-sm font-medium rounded-sm">
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Display tracking info for the active product */}
      {activeTrackingId && (
        <div className="mt-8 p-4 border-t">
          {/* Find the order data of the active productId */}
          {orderData.map((item) => {
            if (item._id === activeTrackingId) {
              return (
                <div key={item._id}>
                  <h4 className="text-xl font-semibold">Tracking Information for Product: {item.name}</h4>
                  <div className="text-gray-700">
                    <p><strong>Status:</strong> {item.status}</p>
                    <p><strong>Payment:</strong> {item.payment ? "Paid" : "Pending"}</p>
                    <p><strong>Payment Method:</strong> {item.paymentMethod}</p>
                    <p><strong>Order Date:</strong> {new Date(item.date).toDateString()}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
