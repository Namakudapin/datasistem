'use client';
import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronRight, ListFilter, Users, Clock, Pencil, Filter, MoreHorizontal, Flag, Link, Edit, Trash, Tag } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import TaskAssignee from '@/components/ui/taskasignee'; 
import TaskDueDate from '@/components/ui/datepick';
const TaskBoardPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const statuses = [
    { id: 'open', label: 'OPEN', color: 'bg-gray-400' },
    { id: 'pending', label: 'PENDING', color: 'bg-yellow-400' },
    { id: 'in-progress', label: 'IN PROGRESS', color: 'bg-blue-400' },
    { id: 'completed', label: 'COMPLETED', color: 'bg-green-400' },
    { id: 'in-review', label: 'IN REVIEW', color: 'bg-purple-400' }
  ];

  const tasks = [
    { 
      id: 1, 
      name: '[BE] Multi-user Login', 
      assignee: { initial: 'A', bgColor: 'bg-orange-700' },
      dueDate: '5/3/24',
      status: 'open'
    },
    { 
      id: 2, 
      name: '[FE] Splash Screen : slicing', 
      assignee: { initial: 'RR', bgColor: 'bg-purple-600' },
      dueDate: '4/29/24',
      status: 'pending'
    },
    { 
      id: 3, 
      name: '[FE] Login : slicing', 
      assignee: { initial: 'RR', bgColor: 'bg-purple-600' },
      dueDate: '5/1/24',
      status: 'in-progress'
    },
    { 
      id: 4, 
      name: '[FE] Home : Slicing', 
      assignee: { initial: 'RR', bgColor: 'bg-purple-600' },
      dueDate: '5/3/24',
      status: 'completed'
    }
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (taskId, newStatus) => {
    console.log(`Updating task ${taskId} to status ${newStatus}`);
  };

  const handleAssigneeChange = (taskId, newAssignee) => {
    console.log(`Updating task ${taskId} assignee to ${newAssignee.name}`);
    // Di sini Anda bisa menambahkan logika untuk mengupdate assignee di state atau API
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTasks = tasks.filter(task => 
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 h-screen overflow-auto bg-white">
      {/* Top Navigation */}
      <header className="border-b px-4 py-2 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center text-white text-xs">
              T
            </div>
            <span className="text-gray-700 font-poppins text-xm">Nama folder</span>
            
       
            
          </div>
        </div>

      </header>

      {/* Main Navigation */}
      <div className="border-b bg-white sticky top-12 z-10">
        <div className="px-4 flex justify-between">
          <div className="flex items-center">
            <button className="px-4 py-3 text-gray-600 border-b-2 border-blue-800 font-poppins">
              List
            </button>
           
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-1.5 bg-gray-50 rounded-md text-sm border border-gray-200 focus:outline-none focus:border-purple-500 text-gray-700"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 font-poppins text-sm">
              <Filter size={16} />
              <span>Filter</span>
            </button>
           
          </div>
        </div>
      </div>

      {/* Task Controls */}
      <div className="px-4 py-2 flex items-center space-x-4 border-b bg-white sticky top-[104px] z-10">
        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
          <Filter size={16} />
          <span>Nama Project: Namanya</span>
        </button>
      
        <div className="flex-1" />
     
      </div>

      {/* Task List */}
      <div className="px-4 py-4">
        <div className="mb-6">
          <div className="flex items-center mb-2 group">
            <button onClick={toggleOpen} className="p-0.5 text-gray-400 hover:text-gray-600">
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            <div className="flex items-center space-x-2 ml-1">
              
              <span className="font-poppins text-gray-900 text-lg">TO DO</span>
              <span className="text-gray-400">{filteredTasks.length}</span>
              <button className="hidden group-hover:flex items-center space-x-1 text-gray-400 hover:text-gray-600">
                <Plus size={16} />
                <span className="text-sm">Add Task</span>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="space-y-1 ml-6">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-500">
                    <th className="font-normal text-left pl-7 w-[400px]">Name</th>
                    <th className="font-normal text-left w-[100px]">Assignee</th>
                    <th className="font-normal text-left w-[100px]">Due date</th>
                    <th className="font-normal text-left w-[100px]">Priority</th>
                    <th className="w-8"></th>
                  </tr>
                  <tr>
                    <td colSpan="5" className="border-b border-gray-200"></td>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((task, index) => (
                    <React.Fragment key={task.id}>
                      <tr className="group hover:bg-gray-50">
                        <td className="py-3 pl-0">
                          <div className="group/name relative flex items-center">
                            <div className="flex items-center space-x-2">
                              <Popover>
                                <PopoverTrigger>
                                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0 cursor-pointer hover:border-gray-400" />
                                </PopoverTrigger>
                                <PopoverContent className="w-48 p-0">
                                  <div className="flex flex-col divide-y divide-gray-100">
                                    {statuses.map((status) => (
                                      <button
                                        key={status.id}
                                        className="flex items-center space-x-2 px-4 py-4 hover:bg-gray-50 transition-colors"
                                        onClick={() => handleStatusChange(task.id, status.id)}
                                      >
                                        <div className={`w-2 h-2 rounded-full ${status.color}`} />
                                        <span className="text-sm text-gray-700">{status.label}</span>
                                        {task.status === status.id && (
                                          <ChevronDown className="ml-auto h-4 w-4 text-purple-600" />
                                        )}
                                      </button>
                                    ))}
                                  </div>
                                </PopoverContent>
                              </Popover>
                              <span className="text-xs font-semibold text-gray-500 group-hover/name:text-blue-700">
                                {task.name}
                              </span>
                            </div>
                            <div className="absolute hidden group-hover/name:flex right-4 bg-white shadow-md rounded-md">
                              <button className="p-2 text-gray-500 hover:text-blue-600">
                                <Plus size={14} />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-blue-600">
                                <Tag size={14} />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-blue-600">
                                <Pencil size={14} />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <TaskAssignee 
                            currentAssignee={task.assignee}
                            onAssigneeChange={(newAssignee) => handleAssigneeChange(task.id, newAssignee)}
                          />
                        </td>
                        <td>
                          <TaskDueDate 
                            dueDate={task.dueDate} 
                            onDateChange={(newDate) => console.log(`Tanggal baru untuk task ${task.id}: ${newDate}`)}
                          />
                        </td>
                        <td>
                          <div className="flex justify-start">
                            <Flag size={16} className="text-gray-400" />
                          </div>
                        </td>
                        <td>
                          <button className="invisible group-hover:visible text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={16} />
                          </button>
                        </td>
                      </tr>
                      {index < filteredTasks.length - 1 && (
                        <tr>
                          <td colSpan="5" className="border-b border-gray-200"></td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskBoardPage;