import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';

const ProjectTable = () => {
  const projects = [
    {
      marketing: "John Doe",
      programmer: "Alice Smith",
      dateJoined: "2024-02-01",
      business: "example.com",
      package: "Premium",
      queueNumber: 1,
      schedule: "2024-02-15",
      status: "In Progress",
      notes: "Client requested additional features"
    },
    {
      marketing: "Sarah Wilson",
      programmer: "Bob Johnson",
      dateJoined: "2024-02-02",
      business: "mybusiness.net",
      package: "Standard",
      queueNumber: 2,
      schedule: "2024-02-20",
      status: "Pending",
      notes: "Waiting for content from client"
    },
    {
      marketing: "Michael Brown",
      programmer: "Chris Evans",
      dateJoined: "2024-02-03",
      business: "techstartup.io",
      package: "Enterprise",
      queueNumber: 3,
      schedule: "2024-03-01",
      status: "Completed",
      notes: "Delivered and accepted by client"
    },
    {
      marketing: "Emma White",
      programmer: "David Lee",
      dateJoined: "2024-02-05",
      business: "designhub.co",
      package: "Basic",
      queueNumber: 4,
      schedule: "2024-03-10",
      status: "In Progress",
      notes: "Waiting for final approval"
    },
    {
        marketing: "Emma White",
        programmer: "David Lee",
        dateJoined: "2024-02-05",
        business: "designhub.co",
        package: "Basic",
        queueNumber: 4,
        schedule: "2024-03-10",
        status: "In Progress",
        notes: "Waiting for final approval"
      },
    
      {
        marketing: "Emma White",
        programmer: "David Lee",
        dateJoined: "2024-02-05",
        business: "designhub.co",
        package: "Basic",
        queueNumber: 4,
        schedule: "2024-03-10",
        status: "In Progress",
        notes: "Waiting for final approva aaaaaaaal"
      },
      
    
  ];

  const tableRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah item per halaman

  const scrollRight = () => {
    if (tableRef.current) {
      tableRef.current.scrollLeft += 200;
    }
  };

  const scrollLeft = () => {
    if (tableRef.current) {
      tableRef.current.scrollLeft -= 200;
    }
  };

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
  };

  const filteredProjects = projects.filter(project =>
    Object.values(project).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-2 sm:p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg font-medium text-black">Project Management</h2>
        <div className="relative">
        <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-8 pr-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-2.5 top-1/3 w-4 h-4 text-gray-400" />
        </div>
      </div>
      <div className="block lg:hidden space-y-4">
        {paginatedProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg border border-gray-200 p-3 space-y-2 cursor-pointer hover:border-indigo-500 transition-colors duration-150"
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Project #{startIndex + index + 1}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Marketing</p>
                <p className="font-medium">{project.marketing}</p>
              </div>
              <div>
                <p className="text-gray-500">Programmer</p>
                <p className="font-medium">{project.programmer}</p>
              </div>
              <div>
                <p className="text-gray-500">Business</p>
                <p className="font-medium">{project.business}</p>
              </div>
              <div>
                <p className="text-gray-500">Package</p>
                <p className="font-medium">{project.package}</p>
              </div>
              <div>
                <p className="text-gray-500">Schedule</p>
                <p className="font-medium">{project.schedule}</p>
              </div>
              <div>
                <p className="text-gray-500">Queue No.</p>
                <p className="font-medium">#{project.queueNumber}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500">Notes</p>
              <p className="text-sm">{project.notes}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-black">Project Management</h2>
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
            >
              <ArrowLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
            >
              <ArrowRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div ref={tableRef} className="overflow-x-auto w-full whitespace-nowrap">
          <table className="min-w-max border-collapse w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">No</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b sticky left-0 bg-gray-50">Marketing</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Programmer</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Date Joined</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Business/Domain</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Package</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Queue No.</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Schedule</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Notes</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProjects.map((project, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-gray-50 cursor-pointer group"
                  onClick={() => handleProjectClick(project)}
                >
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{startIndex + index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b sticky left-0 bg-white group-hover:text-indigo-600 group-hover:font-medium">{project.marketing}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.programmer}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.dateJoined}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.business}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.package}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.queueNumber}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.schedule}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b group-hover:border-indigo-500">{project.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProjects.length)} of {filteredProjects.length} results
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;