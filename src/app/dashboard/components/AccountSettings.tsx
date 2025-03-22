'use client';

import { useState } from 'react';
import { Input, Button, Switch, Divider, Modal } from '@nextui-org/react';

interface UserSettings {
  name: string;
  email: string;
  notifications: {
    orderUpdates: boolean;
    promotions: boolean;
    newsletter: boolean;
  };
}

export default function AccountSettings() {
  const [settings, setSettings] = useState<UserSettings>({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: {
      orderUpdates: true,
      promotions: false,
      newsletter: true,
    }
  });
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleSave = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="space-y-4">
          <Input
            label="Full Name"
            value={settings.name}
            onChange={(e) => setSettings({ ...settings, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
          />
          <Button color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="text-lg font-semibold mb-4">Password</h3>
        <Button onClick={() => setPasswordModalOpen(true)}>
          Change Password
        </Button>

        <Modal 
          isOpen={isPasswordModalOpen} 
          onClose={() => setPasswordModalOpen(false)}
        >
          <Modal.Body>
            <Input
              label="Current Password"
              type="password"
              className="mb-2"
            />
            <Input
              label="New Password"
              type="password"
              className="mb-2"
            />
            <Input
              label="Confirm New Password"
              type="password"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary">Update Password</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Divider />

      <div>
        <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <Switch
            isSelected={settings.notifications.orderUpdates}
            onChange={(e) => setSettings({
              ...settings,
              notifications: {
                ...settings.notifications,
                orderUpdates: e.target.checked
              }
            })}
          >
            Order Updates
          </Switch>
          <Switch
            isSelected={settings.notifications.promotions}
            onChange={(e) => setSettings({
              ...settings,
              notifications: {
                ...settings.notifications,
                promotions: e.target.checked
              }
            })}
          >
            Promotional Emails
          </Switch>
          <Switch
            isSelected={settings.notifications.newsletter}
            onChange={(e) => setSettings({
              ...settings,
              notifications: {
                ...settings.notifications,
                newsletter: e.target.checked
              }
            })}
          >
            Newsletter
          </Switch>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="text-lg font-semibold mb-4 text-danger">Danger Zone</h3>
        <Button 
          color="danger" 
          variant="flat"
          onClick={() => setDeleteModalOpen(true)}
        >
          Delete Account
        </Button>

        <Modal 
          isOpen={isDeleteModalOpen} 
          onClose={() => setDeleteModalOpen(false)}
        >
          <Modal.Body>
            <h4 className="text-lg font-semibold mb-2">Delete Account</h4>
            <p className="text-gray-600">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
            <Input
              label="Type 'DELETE' to confirm"
              className="mt-4"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button color="danger">Delete Account</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
