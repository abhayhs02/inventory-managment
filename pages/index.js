// pages/index.js
import { useState } from 'react';
import OrderList from '../components/OrderList';
import OrderDetails from '../components/OrderDetails';

const initialData = {
  orders: [
    {
      id: 1,
      customer: "Customer A",
      items: [
        { id: 1, name: "Item 1", quantity: 5 },
        { id: 2, name: "Item 2", quantity: 3 }
      ],
      status: "Pending"
    },
    {
      id: 2,
      customer: "Customer B",
      items: [
        { id: 1, name: "Item 1", quantity: 2 },
        { id: 3, name: "Item 3", quantity: 1 }
      ],
      status: "Completed"
    }
  ],
  items: [
    { id: 1, name: "Item 1", stock: 20 },
    { id: 2, name: "Item 2", stock: 15 },
    { id: 3, name: "Item 3", stock: 10 }
  ]
};

export default function Home() {


  const [data, setData] = useState(initialData);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const markCompleted = (id) => {
    setData({
      ...data,
      orders: data.orders.map(order =>
        order.id === id ? { ...order, status: 'Completed' } : order
      )
    });
  };

  return (
    <div>
      <OrderList orders={data.orders} />
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          items={data.items}
          markCompleted={markCompleted}
        />
      )}
    </div>
  );
}
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Inventory and Manufacturing Management System</h1>
    </div>
  );
}

