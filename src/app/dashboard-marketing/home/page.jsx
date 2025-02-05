"use client";

import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, ListTodo } from 'lucide-react';
import ProjectTable from './components/ProjectTable';

const HomePage = () => {
  const handleSprintClick = (sprintTitle) => {
    console.log(`Navigating to ${sprintTitle}`);
  };

  return (
  <div className="bg-[#f4f8ff] min-h-screen p-6 pt-20 overflow-x-hidden">
  <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-black">Good afternoon, Haidar</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200 h-[320px] overflow-hidden">
            <h2 className="text-lg font-medium mb-3 flex items-center text-black">
              <ListTodo className="w-5 h-5 mr-2" />
              Recents
            </h2>
            <div className="max-h-[240px] overflow-y-auto space-y-2 pr-2">
              {[{ title: 'Sprint 1', date: '5/13 - 5/19', folder: 'Sprint Folder' },
                { title: 'tes', date: '8/12 - 8/18', folder: 'Sprint 14' },
                { title: 'Sprint 14', date: '8/12 - 8/18', folder: 'Sprint Folder' },
                { title: 'Sprint 2', date: '5/20 - 5/26', folder: 'Sprint Folder' },
                { title: 'Sprint Reporting', date: '5/13 - 5/19', folder: 'Sprint 1' },
                { title: 'Sprint 3', date: '5/27 - 6/3', folder: 'Sprint Folder' },
                { title: 'API ORDER', date: '5/27 - 6/3', folder: 'Sprint 3' },
                { title: 'API PRODUCT', date: '5/20 - 5/26', folder: 'Sprint 2' }].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSprintClick(item.title)}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 border border-gray-100 hover:border-gray-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-black group-hover:text-indigo-600">
                        {item.title}
                      </span>
                      <div className="text-sm text-gray-600">
                        in {item.folder}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {item.date}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200 h-[320px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium flex items-center text-black">
                <Calendar className="w-5 h-5 mr-2" />
                Agenda
              </h2>
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-150">
                  <ChevronLeft className="w-5 h-5 text-gray-500" />
                </button>
                <span className="text-sm font-medium text-black">Feb 4, Tue</span>
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-150">
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
                <button className="ml-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Today
                </button>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center h-56 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Calendar className="w-10 h-10 mb-3 text-gray-300" />
              <p className="text-sm mb-2 text-black">Agenda items from your calendars will show here.</p>
              <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors duration-150 shadow-sm hover:shadow">
                Add calendar integrations
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="mt-6 text-black font-bold text-3xl">Tabel Project</h1>
          <a
            href="/dashboard-marketing/task"
            className="mt-6 text-blue-600 font-semibold text-lg hover:underline hover:text-blue-800 transition duration-300"
          >
            See all →
          </a>
        </div>
          <div className='mt-4'>
            <ProjectTable />
          </div>
      </div>
    </div>
  );
};

export default HomePage;