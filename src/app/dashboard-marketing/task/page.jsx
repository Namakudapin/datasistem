"use client";

import React from "react";
import { Plus } from "lucide-react";
import ProjectTable from "./components/ProjectTable";

const TaskPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f8ff] p-6 pt-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-4 text-black">
            Good morning, dapin
          </h1>
          <a
            href="/add-project"
            className="bg-white rounded-lg px-4 py-2 shadow-md border flex items-center gap-2 hover:bg-gray-100 transition duration-300"
          >
            <Plus size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-black">Add Project</span>
          </a>
        </div>
        <div className="mt-6">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
