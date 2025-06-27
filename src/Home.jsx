import React from 'react';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main className="home-container">
      <button onClick={openSidebar}>Show Sidebar</button>
      <button onClick={openModal}>Show Modal</button>
    </main>
  );
};

export default Home;
