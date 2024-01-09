import React, { Component } from 'react';

class CreateNewGraph extends Component {
  // Mock data for paper options
  paperOptions = [
    { id: 1, title: 'Paper 1' },
    { id: 2, title: 'Paper 2' },
    { id: 3, title: 'Paper 3' },
  ];

  render() {
    return (
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Create New Graph</h2>
          {/* Form to specify graph title and description */}
          <form className="mb-6">
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2">
                Graph Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="graphTitle"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2">
                Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
              ></textarea>
            </div>
            {/* Select papers from mock data */}
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2">
                Select Papers:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                name="papers"
              >
                {this.paperOptions.map((paper) => (
                  <option key={paper.id} value={paper.id}>
                    {paper.title}
                  </option>
                ))}
              </select>
            </div>
            {/* Configure graph settings - layout, colors, etc */}
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2">
                Graph Settings:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                type="text"
                name="layout"
                placeholder="Layout"
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                type="text"
                name="colors"
                placeholder="Colors"
              />
              {/* Add more settings as needed */}
            </div>
            {/* View graph visualization preview */}
            <div className="mb-4">Graph Visualization Preview</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Graph
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNewGraph;
