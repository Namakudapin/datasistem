'use client';
import { useState } from "react";
import { User, CheckCircle, CheckCheckIcon } from "lucide-react";
import ClearConfirmationModal from "@/components/ui/clearcomfrimation";

const Inbox = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('Inbox');
  const [showClearAllModal, setShowClearAllModal] = useState(false);
  const [showClearItemModal, setShowClearItemModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const tasks = [
    {
      title: "[FE] Feature Stream",
      assignedBy: "Adit",
      dueDate: "8/12/24"
    },
    {
      title: "[FE] Fixing Report Form Page",
      assignedBy: "Adit",
      dueDate: "8/12/24"
    },
    {
      title: "[FE] Fixing Report View Page",
      assignedBy: "Adit",
      dueDate: "8/12/24"
    },
    {
      title: "Get report by semester teacher",
      assignedBy: "Adit",
      dueDate: "8/12/24"
    },
    {
      title: "Get report by semester student",
      assignedBy: "Adit",
      dueDate: "8/12/24"
    }
  ];

  const navigationTabs = ['Inbox  |', 'Important', 'Cleared'];

  const handleClearAll = () => {
    // Implementasi logic untuk clear all tasks
    console.log('Clearing all tasks...');
    setShowClearAllModal(false);
  };

  const handleClearItem = (index) => {
    // Implementasi logic untuk clear task tertentu
    console.log('Clearing task at index:', index);
    setShowClearItemModal(false);
    setSelectedItemIndex(null);
  };

  const handleCancel = () => {
    setShowClearAllModal(false);
    setShowClearItemModal(false);
    setSelectedItemIndex(null);
  };

  return (
    <div className="flex-1 p-6 font-poppins">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-3">
        <div className="flex space-x-3">
          {navigationTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 px-1 text-xs font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-gray-800 border-gray-800'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowClearAllModal(true)}
            className="flex items-center text-xs text-gray-600 hover:text-gray-800"
          >
            <CheckCheckIcon size={16} className="mr-1" />
            Clear all
          </button>
        </div>
      </div>

      {/* Clear All Modal */}
      <ClearConfirmationModal 
        isOpen={showClearAllModal}
        onClose={() => setShowClearAllModal(false)}
        onClear={handleClearAll}
        onCancel={handleCancel}
      />

      {/* Clear Item Modal */}
      <ClearConfirmationModal 
        isOpen={showClearItemModal}
        onClose={() => setShowClearItemModal(false)}
        onClear={() => handleClearItem(selectedItemIndex)}
        onCancel={handleCancel}
      />

      {/* Main Container */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        {/* Task List */}
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="grid grid-cols-3 items-center px-6 py-4 border-b text-gray-700 hover:bg-gray-100 transition relative"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                <span className="font-poppins text-xs">{task.title}</span>
              </div>
              <div className="flex items-center gap-2 text-xs justify-center">
                <User size={16} />
                <span className="text-gray-400">{task.assignedBy}</span>
                <span className="text-purple-500"> assigned this task</span>
              </div>
              <div className="flex items-center gap-4 justify-end">
                {hoverIndex !== index && (
                  <div className="text-xs text-gray-500">{task.dueDate}</div>
                )}
                {hoverIndex === index && (
                  <button 
                    onClick={() => {
                      setSelectedItemIndex(index);
                      setShowClearItemModal(true);
                    }}
                    className="px-4 py-2 text-sm bg-blue-800 text-white rounded-md shadow-md hover:bg-blue-900 transition-opacity duration-300 flex items-center gap-4"
                  >
                    <CheckCircle size={16} />
                    Clear
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inbox;