import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Update order status
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        // Fetch orders again after status update
        await fetchAllOrders();
        toast.success("Order status updated successfully.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle errors correctly and log them
      console.error("Error updating order status:", error);
      toast.error(
        error.response
          ? error.response.data.message
          : "Failed to update order status."
      );
    }
  };

  // Fetch orders when token changes
  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6">My Orders</h3>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={order.items[0]?.image || "https://via.placeholder.com/150"}
                alt="Parcel Icon"
                className="w-12 h-12"
              />
              <div className="flex-1">
                <div className="font-medium text-lg">
                  {order.items.map((item, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {item.name} x {item.quantity}{" "}
                      <span className="text-xs text-gray-400">{item.size}</span>
                      {index < order.items.length - 1 && ","}
                    </p>
                  ))}
                </div>
                <p className="text-gray-800 font-semibold mt-2">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="text-sm text-gray-600 mt-2">
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                  <p>{order.address.phone}</p>
                </div>
              </div>
              <div className="text-right w-48">
                <p className="font-semibold text-lg">
                  {currency} {order.amount}
                </p>
                <p className="text-sm text-gray-600">
                  Items: {order.items.length}
                </p>
                <p className="text-sm text-gray-600">
                  Method: {order.paymentMethod}
                </p>
                <p className="text-sm text-gray-600">
                  Payment: {order.payment ? "Done" : "Pending"}
                </p>
                <p className="text-sm text-gray-600">
                  Date: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="border p-2 rounded-md text-gray-600"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              <button
                onClick={() => statusHandler(event, order._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
