// src/components/Organims/TableSelectionModal.tsx
import React, { useState } from "react";

interface TableSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (tableNumber: string) => void;
}

export const TableSelectionModal: React.FC<TableSelectionModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [tableNumber, setTableNumber] = useState("");

  const handleSave = () => {
    onSave(tableNumber);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Select Table Number</h2>
        <input
          type="text"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter table number"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 p-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
