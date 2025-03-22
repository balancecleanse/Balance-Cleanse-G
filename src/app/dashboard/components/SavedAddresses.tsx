'use client';

import { useState } from 'react';
import { Button, Card, Modal, Input, Radio } from '@nextui-org/react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Address {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

export default function SavedAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      label: 'Home',
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true
    }
  ]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [newAddress, setNewAddress] = useState<Omit<Address, 'id'>>({
    label: '',
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    isDefault: false
  });

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id ? { ...editingAddress } : addr
      ));
      setEditingAddress(null);
    } else {
      const id = Math.random().toString(36).substr(2, 9);
      setAddresses([...addresses, { ...newAddress, id }]);
      setNewAddress({
        label: '',
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        isDefault: false
      });
    }
    setAddModalOpen(false);
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Saved Addresses</h3>
        <Button 
          color="primary" 
          startContent={<Plus />}
          onClick={() => setAddModalOpen(true)}
        >
          Add New Address
        </Button>
      </div>

      <div className="grid gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className="p-4">
            <div className="flex justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{address.label}</h4>
                  {address.isDefault && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{address.name}</p>
                <p className="text-gray-600">{address.street}</p>
                <p className="text-gray-600">
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button 
                  isIconOnly 
                  variant="light"
                  onClick={() => {
                    setEditingAddress(address);
                    setAddModalOpen(true);
                  }}
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button 
                  isIconOnly 
                  variant="light" 
                  color="danger"
                  onClick={() => handleDelete(address.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                {!address.isDefault && (
                  <Button
                    size="sm"
                    variant="flat"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    Set as Default
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => {
          setAddModalOpen(false);
          setEditingAddress(null);
        }}
        size="2xl"
      >
        <Modal.Body>
          <h4 className="text-lg font-semibold mb-4">
            {editingAddress ? 'Edit Address' : 'Add New Address'}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Label (e.g., Home, Office)"
              value={editingAddress?.label ?? newAddress.label}
              onChange={(e) => editingAddress 
                ? setEditingAddress({ ...editingAddress, label: e.target.value })
                : setNewAddress({ ...newAddress, label: e.target.value })
              }
            />
            <Input
              label="Full Name"
              value={editingAddress?.name ?? newAddress.name}
              onChange={(e) => editingAddress
                ? setEditingAddress({ ...editingAddress, name: e.target.value })
                : setNewAddress({ ...newAddress, name: e.target.value })
              }
            />
            <div className="col-span-2">
              <Input
                label="Street Address"
                value={editingAddress?.street ?? newAddress.street}
                onChange={(e) => editingAddress
                  ? setEditingAddress({ ...editingAddress, street: e.target.value })
                  : setNewAddress({ ...newAddress, street: e.target.value })
                }
              />
            </div>
            <Input
              label="City"
              value={editingAddress?.city ?? newAddress.city}
              onChange={(e) => editingAddress
                ? setEditingAddress({ ...editingAddress, city: e.target.value })
                : setNewAddress({ ...newAddress, city: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="State"
                value={editingAddress?.state ?? newAddress.state}
                onChange={(e) => editingAddress
                  ? setEditingAddress({ ...editingAddress, state: e.target.value })
                  : setNewAddress({ ...newAddress, state: e.target.value })
                }
              />
              <Input
                label="ZIP Code"
                value={editingAddress?.zip ?? newAddress.zip}
                onChange={(e) => editingAddress
                  ? setEditingAddress({ ...editingAddress, zip: e.target.value })
                  : setNewAddress({ ...newAddress, zip: e.target.value })
                }
              />
            </div>
          </div>
          <Radio.Group
            label="Set as default?"
            value={editingAddress?.isDefault ?? newAddress.isDefault ? 'yes' : 'no'}
            onChange={(val) => editingAddress
              ? setEditingAddress({ ...editingAddress, isDefault: val === 'yes' })
              : setNewAddress({ ...newAddress, isDefault: val === 'yes' })
            }
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={handleSaveAddress}>
            Save Address
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
