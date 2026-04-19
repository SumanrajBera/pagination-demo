import React, { useState, useEffect, useRef } from 'react';
import { generateMockData } from '../mockData.js';
import '../index.css';
import PageBasedSection from '../components/PageBasedSection.jsx';
import CursorBasedSection from '../components/CursorBasedSection.jsx';

const data = generateMockData(150);

export default function App() {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1 className="main-title">Workforce Data</h1>
        <p className="main-subtitle">Employee management dashboard based on precision editorial design</p>
      </header>

      <main className="dashboard-main">
        <PageBasedSection data={data} />
        <CursorBasedSection data={data} />
      </main>
    </div>
  );
}
