import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const TaskAssignee = ({ currentAssignee, onAssigneeChange }) => {
  const users = [
    { id: 1, initial: 'P1', name: 'Produksi 1', bgColor: 'bg-purple-600' },
    { id: 2, initial: 'P2', name: 'Produksi 2', bgColor: 'bg-orange-700' },
    { id: 3, initial: 'P3', name: 'Produksi 3', bgColor: 'bg-gray-700' }
  ];

  return (
    <Popover>
      <PopoverTrigger>
        <div className={`w-6 h-6 ${currentAssignee.bgColor} rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:opacity-90`}>
          {currentAssignee.initial}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        <div className="space-y-2">
          {users.map((user) => (
            <label
              key={user.id}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                name="assignee"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                checked={currentAssignee.initial === user.initial}
                onChange={() => onAssigneeChange(user)}
              />
              <div className={`w-6 h-6 ${user.bgColor} rounded-full flex items-center justify-center text-white text-xs`}>
                {user.initial}
              </div>
              <span className="text-sm text-gray-700">{user.name}</span>
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TaskAssignee;