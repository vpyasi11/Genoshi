import React from 'react';
import ProfileDashboard from './components/Profile/ProfileDashboard';
import CreateNewGraph from './components/Profile/CreateNewGraph';
import GraphDetails from './components/Profile/GraphDetails';
import AccountSettings from './components/Profile/AccountSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage from './components/Pricing/PricingPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white-100">
        {/* Apply background color to the entire page */}
        <div className="w-full h-full bg-[#002E3D] text-white">
          <div className="mb-8"></div>
          <Routes>
            <Route path="/" exact element={<ProfileDashboard />} />
            <Route path="/create-new-graph" element={<CreateNewGraph />} />
            <Route path="/graph-details" element={<GraphDetails />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
          <p className="read-the-docs mt-auto"></p>
        </div>
      </div>
    </Router>
  );
};

export default App;
