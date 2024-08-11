import React, { useState } from 'react';

const UserDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    idProof: '',
    mobileNumber: '',
    amount: 5000,
    timePeriod: '1 Year',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const policies = [
    { id: '12345', type: 'Health Insurance', coverage: '$500,000', premium: '$1,200', status: 'Active' },
    { id: '67890', type: 'Car Insurance', coverage: '$50,000', premium: '$500', status: 'Active' },
    { id: '11223', type: 'Home Insurance', coverage: '$300,000', premium: '$900', status: 'Expired' },
  ];

  const claims = [
    { id: '45678', type: 'Health Insurance', amount: '$1,000', status: 'Pending' },
    { id: '78901', type: 'Car Insurance', amount: '$500', status: 'Approved' },
    { id: '23456', type: 'Home Insurance', amount: '$1,500', status: 'Rejected' },
  ];

  const payments = [
    { date: '01/01/2023', amount: '$500' },
    { date: '01/06/2023', amount: '$700' },
    { date: '01/12/2023', amount: '$300' },
  ];

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 h-screen p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Myinsurance</h2>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">My Policies</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Claims</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Payments</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Referrals</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <div>
            <h1 className="text-xl font-bold">Hi Jacob Dominic</h1>
            <p className="text-gray-500">Here are your clients</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-gray-700 font-bold">$948</p>
              <p className="text-gray-500 text-sm">Average claim value</p>
            </div>
            <div className="text-right">
              <p className="text-gray-700 font-bold">$145.50</p>
              <p className="text-gray-500 text-sm">Premium this month</p>
            </div>
            <div className="text-right">
              <p className="text-gray-700 font-bold">14</p>
              <p className="text-gray-500 text-sm">Active Clients</p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-gray-700">Jacob D</p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="p-4 space-y-4 overflow-auto">
          {/* Notifications */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <ul>
              <li className="mb-2">
                <p className="text-gray-700">Your policy #12345 is about to expire.</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-700">Your claim #67890 has been approved.</p>
              </li>
              <li>
                <p className="text-gray-700">New payment method added successfully.</p>
              </li>
            </ul>
          </div>

          {/* Policy Summary */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold mb-4">My Policies</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Policy ID</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Coverage</th>
                  <th className="py-2 px-4 text-left">Premium</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((policy) => (
                  <tr key={policy.id} className="border-t">
                    <td className="py-2 px-4">{policy.id}</td>
                    <td className="py-2 px-4">{policy.type}</td>
                    <td className="py-2 px-4">{policy.coverage}</td>
                    <td className="py-2 px-4">{policy.premium}</td>
                    <td className="py-2 px-4">{policy.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Claims Overview */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold mb-4">Claims Overview</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Claim ID</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Amount</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim) => (
                  <tr key={claim.id} className="border-t">
                    <td className="py-2 px-4">{claim.id}</td>
                    <td className="py-2 px-4">{claim.type}</td>
                    <td className="py-2 px-4">{claim.amount}</td>
                    <td className="py-2 px-4">{claim.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment History */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold mb-4">Payment History</h2>
            <ul>
              {payments.map((payment, index) => (
                <li key={index} className="mb-2">
                  <p className="text-gray-700">{`Premium payment of ${payment.amount} on ${payment.date}`}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
