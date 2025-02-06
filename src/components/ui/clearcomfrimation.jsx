import React, { useState } from 'react';
import { CheckCheck } from 'lucide-react';

const ClearConfirmationModal = ({ isOpen, onClose, onClear, onCancel }) => {
  const [dontShow, setDontShow] = useState(false);

  const handleClear = () => {
    onClear();
    onClose();
  };

  const handleCancel = () => {
    onCancel();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center" style={{ marginTop: "10px" }}>
      <div className="relative w-full max-w-md">
        <div className="relative bg-white rounded-lg  shadow-lg p-6">
          {/* Icon and Content - Vertically Stacked */}
          <div className="flex flex-col items-start mb-4">
            <div className="w-8 h-8 bg-[#ddddf9] rounded-lg border-blue-200 flex items-center justify-center mb-3">
              <CheckCheck className="w-5 h-5 text-purple-800" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 text-center">
              Are you sure you want to clear this tab?
            </h3>
            <p className="mt-2 text-xs text-gray-500 text-start mb-2">
              This action will clear all notifications on the Important tab. You can <span className="text-[#99f] hover:underline cursor-pointer">restore cleared notifications</span> for up to 30 days after clearing.
            </p>
          </div>

          {/* Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={dontShow}
                onChange={(e) => setDontShow(e.target.checked)}
                className="rounded border-gray-300 text-[#99f] focus:ring-[#99f] h-4 w-4"
              />
              <span className="ml-2 text-sm text-gray-600">Don't show this message again</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99f]"
            >
              Cancel
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 text-sm font-medium text-white bg-[#99f] rounded-lg hover:bg-[#88f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99f]"
            >
              Clear this tab
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-25 -z-10"></div>
    </div>
  );
};

export default ClearConfirmationModal;