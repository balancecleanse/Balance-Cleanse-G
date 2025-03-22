'use client';

import { Card, Tabs, Tab } from '@nextui-org/react';
import OrderHistory from './components/OrderHistory';
import AccountSettings from './components/AccountSettings';
import SavedAddresses from './components/SavedAddresses';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <Tabs aria-label="Dashboard options">
        <Tab key="orders" title="Order History">
          <Card className="p-4">
            <OrderHistory />
          </Card>
        </Tab>
        <Tab key="settings" title="Account Settings">
          <Card className="p-4">
            <AccountSettings />
          </Card>
        </Tab>
        <Tab key="addresses" title="Saved Addresses">
          <Card className="p-4">
            <SavedAddresses />
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
