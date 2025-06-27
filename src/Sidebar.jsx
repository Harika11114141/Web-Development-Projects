import React from 'react';
import { useGlobalContext } from './context';
import {
  Home,
  Users,
  Folder,
  Calendar,
  FileText,
} from 'lucide-react'; // import Lucide icons

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const links = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <Users size={20} />, label: 'Team' },
    { icon: <Folder size={20} />, label: 'Projects' },
    { icon: <Calendar size={20} />, label: 'Calendar' },
    { icon: <FileText size={20} />, label: 'Documents' },
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>✖</button>
      <ul className="sidebar-links">
        {links.map((link, index) => (
          <li key={index} className="sidebar-item">
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
