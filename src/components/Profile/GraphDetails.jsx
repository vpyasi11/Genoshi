// src/components/Profile/GraphDetails.jsx
import React from 'react';

const GraphDetails = () => {
  // Mock data for papers shown in the graph
  const papersInGraph = [
    { id: 1, title: 'Paper 1' },
    { id: 2, title: 'Paper 2' },
    { id: 3, title: 'Paper 3' },
  ];

  return (
    <div className="min-h-screen bg-[#002E3D] text-white p-8">
      {/* Show graph title, description, date created */}
      <h2 className="text-2xl font-bold mb-4">Graph Title</h2>
      <p className="text-white-700">Graph Description</p>
      <p className="text-white-700">Date Created: {new Date().toLocaleDateString()}</p>

      {/* Buttons to edit, share, or delete a graph */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit Graph</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Share Graph</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Graph</button>

      {/* List papers shown in the graph */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Papers in the Graph</h3>
        <ul>
          {papersInGraph.map((paper) => (
            <li key={paper.id} className="text-white-700">{paper.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GraphDetails;
