import React from 'react'
import { Route, Routes } from 'react-router';
import HomePage from './Pages/homePage';
import CreatePage from "./Pages/createPage";
import NoteDetailPage from './Pages/noteDetailPage';

const App = () => {
  return (
    <div
      data-theme="slate"
      className="relative min-h-screen bg-base-100 text-base-content"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10
    [background:radial-gradient(125%_125%_at_50%_10%,#0f172a_60%,#00FF9D40_100%)]"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App
