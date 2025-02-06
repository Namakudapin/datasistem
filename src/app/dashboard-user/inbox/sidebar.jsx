'use client';
import React, { useState } from 'react';
import { Home, Inbox, FileText, LayoutDashboard, Video, Clock, MoreHorizontal, Plus, Search, Users, FolderGit, X, Mail } from 'lucide-react';

const InviteModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[480px] shadow-lg">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold text-black">Invite people</h2>
            <button onClick={onClose} className="text-gray-500 hover:bg-gray-100 p-1 rounded-md">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 border-t">
            <p className="text-sm text-gray-600 mb-6">
              Invite members to collaborate in your workspace.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-600">Email addresses</label>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-gray-600" />
                  <input
                    type="text"
                    placeholder="Enter email addresses"
                    className="flex-1 border rounded-md px-3 py-2 text-sm focus:ring-2 text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div> 
              </div>
              
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-600">
                  Message <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  placeholder="Add a personal message..."
                  className="w-full border rounded-md px-3 py-2 text-sm h-24 focus:ring-2 text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>
  
          <div className="flex justify-end gap-2 p-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
            >
              Send invites
            </button>
          </div>
        </div>
      </div>
    );
  };

const CreateSpaceModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[480px] shadow-lg">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-700 font-poppins">Create a space</h2>
          <button onClick={onClose} className="text-gray-500 hover:bg-gray-100 p-1 rounded-md">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 border-t">
          <p className="text-sm font-poppins text-gray-600 mb-6">
            A Space represents teams, departments, or groups, each with its own Lists, workflows, and settings.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-1.5 text-sm font-medium text-gray-600 font-poppins">Icon & name</label>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                  M
                </div>
                <input
                  type="text"
                  placeholder="e.g. Marketing, Engineering, HR"
                  className="flex-1 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-600 font-poppins"
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-1.5 text-sm font-poppins text-gray-600">
                Description <span className="text-gray-500">(optional)</span>
              </label>
              <textarea
                className="w-full border rounded-md px-3 py-2 text-sm h-24 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-600 font-poppins" 
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, badge, indented = false, isActive = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-1 rounded-md cursor-pointer ${
      indented ? 'ml-4' : ''
    } ${
      isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
    }`}
  >
    {icon && <span className={isActive ? 'text-blue-600' : 'text-gray-500'}>{icon}</span>}
    <span className={`text-sm ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>{text}</span>
    {badge && (
      <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 rounded-full">
        {badge}
      </span>
    )}
  </div>
);

const SpaceItem = ({ icon, text, locked }) => (
  <div className="flex items-center space-x-2 px-7 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
    <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center text-white text-xs">
      {icon}
    </div>
    <span className="text-sm text-gray-700">{text}</span>
    {locked && <span className="ml-1 text-gray-400">🔒</span>}
  </div>
);

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false); // <-- Add this
    const [activePage, setActivePage] = useState('Home');
  
    const openInviteModal = () => setIsInviteModalOpen(true);
    const closeInviteModal = () => setIsInviteModalOpen(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  const mainNavItems = [
    { icon: <Home size={18} />, text: 'Home' },
    { icon: <Inbox size={18} />, text: 'Inbox' },
    { icon: <FileText size={18} />, text: 'Docs' },
    { icon: <LayoutDashboard size={18} />, text: 'Dashboards' },
    { icon: <Video size={18} />, text: 'Clips' },
    { icon: <Clock size={18} />, text: 'Timesheets' },
    { icon: <MoreHorizontal size={18} />, text: 'More' }
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex items-center space-x-2">
        <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center text-white text-sm">
          A
        </div>
        <span className="font-normal text-gray-600 text-xm font-[Poppins]">Produksi Workspace</span>
      </div>

      <nav className="flex-1">
        <div className="px-3 py-2">
          {mainNavItems.map((item) => (
            <NavItem 
              key={item.text}
              icon={item.icon}
              text={item.text}
              isActive={activePage === item.text}
              onClick={() => setActivePage(item.text)}
            />
          ))}
        </div>

        <div className="mt-4">
          <div className="px-4 py-2 text-sm text-gray-500">
            Favorites
          </div>
        </div>

        <div className="mt-2">
          <div className="px-4 py-2 text-sm text-gray-500 flex justify-between items-center">
            <span>Spaces</span>
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-gray-200 rounded-md">
                <Search size={16} className="text-gray-700" />
              </div>
              <div className="p-1 bg-blue-700 rounded-md cursor-pointer" onClick={openModal}>
                <Plus size={16} className="text-white" />
              </div>
            </div>
          </div>
          <NavItem icon={<Users size={18} />} text="Everything" indented />
          <SpaceItem 
            icon="T"
            text="Tugas Akhir - Happy People"
            locked
          />
          <div className="pl-8">
            <NavItem icon={<FolderGit size={18} />} text="Weekly Sprint" />
            <div className="pl-4">
              <NavItem text="Sprint 1" badge="4" />
            </div>
            <NavItem icon={<Plus size={18} />} text="Create Sprint" />
          </div>
          <NavItem icon={<FolderGit size={18} />} text="Development" indented />
          <SpaceItem 
            icon="T"
            text="TA #Happy People"
            locked
          />
          <NavItem text="View all Spaces" indented />
          <NavItem icon={<Plus size={18} />} text="Create Space" indented />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 flex justify-between">
        <button 
          onClick={openInviteModal}
          className="text-sm text-gray-600 flex items-center space-x-1 hover:text-gray-800"
        >
          <Users size={16} />
          <span>Invite</span>
        </button>
        <button className="text-sm text-gray-600 flex items-center space-x-1 hover:text-gray-800">
          <span>Help</span>
        </button>
      </div>

      <CreateSpaceModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={() => {
          console.log('Submit space creation');
          closeModal();
        }}
      />
      <InviteModal 
        isOpen={isInviteModalOpen}
        onClose={closeInviteModal}
        onSubmit={() => {
          console.log('Submit invites');
          closeInviteModal();
        }}
      />
    </div>
  );
};

export default Sidebar;