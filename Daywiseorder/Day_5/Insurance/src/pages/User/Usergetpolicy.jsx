
// import React, { useState } from 'react';

// const UserDashboard = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     idProof: '',
//     mobileNumber: '',
//     amount: 5000,
//     timePeriod: '1 Year',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   const policies = [
//     { id: '12345', type: 'Health Insurance', coverage: '$500,000', premium: '$1,200', status: 'Active' },
//     { id: '67890', type: 'Car Insurance', coverage: '$50,000', premium: '$500', status: 'Active' },
//     { id: '11223', type: 'Home Insurance', coverage: '$300,000', premium: '$900', status: 'Expired' },
//   ];

//   const claims = [
//     { id: '45678', type: 'Health Insurance', amount: '$1,000', status: 'Pending' },
//     { id: '78901', type: 'Car Insurance', amount: '$500', status: 'Approved' },
//     { id: '23456', type: 'Home Insurance', amount: '$1,500', status: 'Rejected' },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-200">
//           {/* Get Policy Form */}
//           <div className="p-6 bg-white shadow rounded">
//             <h2 className="text-xl font-bold mb-4">Get Policy Details</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">ID Proof</label>
//                 <input
//                   type="text"
//                   name="idProof"
//                   value={formData.idProof}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Mobile Number</label>
//                 <input
//                   type="text"
//                   name="mobileNumber"
//                   value={formData.mobileNumber}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Amount</label>
//                 <input
//                   type="range"
//                   name="amount"
//                   min="1000"
//                   max="10000"
//                   step="500"
//                   value={formData.amount}
//                   onChange={handleChange}
//                   className="w-full"
//                   required
//                 />
//                 <p className="text-gray-700 mt-2">${formData.amount}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Time Period</label>
//                 <select
//                   name="timePeriod"
//                   value={formData.timePeriod}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 >
//                   <option>1 Year</option>
//                   <option>2 Years</option>
//                   <option>3 Years</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded"
//               >
//                 Get Policy Details
//               </button>
//             </form>
//           </div>
//         </div>
//   );
// };

// export default UserDashboard;



















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
    // Handle form submission logic here
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

  return (
    <div className="flex h-screen bg-gray-200 p-6">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 h-full p-4 shadow-md rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Myinsurance</h2>
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
      <div className="flex flex-col flex-grow ml-4">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hi Jacob Dominic</h1>
            <p className="text-gray-600">Here are your clients</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-gray-800 font-bold text-xl">$948</p>
              <p className="text-gray-500 text-sm">Average claim value</p>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-bold text-xl">$145.50</p>
              <p className="text-gray-500 text-sm">Premium this month</p>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-bold text-xl">14</p>
              <p className="text-gray-500 text-sm">Active Clients</p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <p className="text-gray-700 text-lg">Jacob D</p>
            </div>
          </div>
        </header>

        {/* Get Policy Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Policy Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm font-medium">ID Proof</label>
              <input
                type="text"
                name="idProof"
                value={formData.idProof}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm font-medium">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm font-medium">Amount</label>
              <input
                type="range"
                name="amount"
                min="1000"
                max="10000"
                step="500"
                value={formData.amount}
                onChange={handleChange}
                className="w-full"
                required
              />
              <p className="text-gray-700 mt-2 text-sm">${formData.amount}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm font-medium">Time Period</label>
              <select
                name="timePeriod"
                value={formData.timePeriod}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Get Policy Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
