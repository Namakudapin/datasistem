"use client";

import React, { useState } from "react";
import { Bell, Mail, CheckCircle, XCircle, Circle } from "lucide-react";

const InboxPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Add note table in update order",
      assignedBy: "Bawwaz Baufiqi Bachman",
      date: "8/15/24",
      read: false,
    },
    {
      id: 2,
      title: "Fix bug in payment gateway integration",
      assignedBy: "Haidar Malik",
      date: "8/17/24",
      read: true,
    },
  ]);

  const handleMarkAsRead = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, read: true } : task)));
  };

  const handleSnooze = (id) => {
    console.log("Snoozed task:", id);
  };

  const handleClear = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-[#f4f8ff] min-h-screen p-6 pt-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Good afternoon, Haidar</h1>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="group relative bg-white shadow-sm border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition duration-200"
            >
              <div className="flex items-center gap-3">
                {/* Status Icon */}
                {task.read ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <Circle size={20} className="text-blue-500" />
                )}

                {/* Task Details */}
                <div>
                  <h3 className={`text-sm font-medium ${task.read ? "text-gray-500" : "text-gray-900"}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {task.assignedBy} • <span className="font-medium">{task.date}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition duration-200">
                <button
                  onClick={() => handleMarkAsRead(task.id)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                  title="Mark as read"
                >
                  <Mail size={18} />
                </button>
                <button
                  onClick={() => handleSnooze(task.id)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                  title="Snooze"
                >
                  <Bell size={18} />
                </button>
                <button
                  onClick={() => handleClear(task.id)}
                  className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
                  title="Remove"
                >
                  <XCircle size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
