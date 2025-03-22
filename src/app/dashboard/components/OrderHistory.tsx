'use client';

import { Table } from '@nextui-org/react';

const mockOrders = [
  {
    id: 'ORD001',
    date: '2023-11-20',
    total: 49.99,
    status: 'Delivered',
    items: ['Green Detox Juice', 'Immunity Booster']
  },
  // Add more mock orders as needed
];

export default function OrderHistory() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <Table aria-label="Order history">
        <Table.Header>
          <Table.Column>Order ID</Table.Column>
          <Table.Column>Date</Table.Column>
          <Table.Column>Items</Table.Column>
          <Table.Column>Total</Table.Column>
          <Table.Column>Status</Table.Column>
        </Table.Header>
        <Table.Body>
          {mockOrders.map(order => (
            <Table.Row key={order.id}>
              <Table.Cell>{order.id}</Table.Cell>
              <Table.Cell>{order.date}</Table.Cell>
              <Table.Cell>{order.items.join(', ')}</Table.Cell>
              <Table.Cell>${order.total}</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
