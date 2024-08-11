import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const AdminUsers = () => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    verticalAlign: 'middle'
  };

  const headerStyle = {
    background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px'
  };

  const rowStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  });

  const hoverRowStyle = {
    backgroundColor: '#f1f1f1'
  };

  const tableContainerStyle = {
    overflowX: 'auto',
    margin: '20px'
  };

  const buttonStyle = {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '8px',
    display: 'inline-flex',
    alignItems: 'center'
  };

  const approveStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
    color: 'white'
  };

  const cancelStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    color: 'white'
  };

  const handleApprove = (policyNo) => {
    console.log(`Approved policy ${policyNo}`);
    // Add your approve logic here
  };

  const handleCancel = (policyNo) => {
    console.log(`Cancelled policy ${policyNo}`);
    // Add your cancel logic here
  };

  const policies = [
    {
      policyNo: "POL001",
      policyName: "Life Coverage",
      planMonths: 12,
      planYears: 1,
      policyHolderIDProof: "Aadhar",
      idNumber: "1234 5678 9012",
      name: "John Doe",
      amount: "$500,000",
    },
    {
      policyNo: "POL002",
      policyName: "Health Coverage",
      planMonths: 24,
      planYears: 2,
      policyHolderIDProof: "PAN",
      idNumber: "ABCDE1234F",
      name: "Alice Smith",
      amount: "$300,000",
    },
    {
      policyNo: "POL003",
      policyName: "Car Insurance",
      planMonths: 6,
      planYears: 0,
      policyHolderIDProof: "Aadhar",
      idNumber: "1357 2468 9023",
      name: "Charlie Brown",
      amount: "$150,000",
    },
    {
      policyNo: "POL004",
      policyName: "Home Insurance",
      planMonths: 36,
      planYears: 3,
      policyHolderIDProof: "Passport",
      idNumber: "P1234567",
      name: "David Wilson",
      amount: "$1,200,000",
    },
    {
      policyNo: "POL005",
      policyName: "Travel Insurance",
      planMonths: 12,
      planYears: 1,
      policyHolderIDProof: "Aadhar",
      idNumber: "2468 1357 9023",
      name: "Emma Davis",
      amount: "$200,000",
    },
    {
      policyNo: "POL006",
      policyName: "Health Coverage",
      planMonths: 18,
      planYears: 1.5,
      policyHolderIDProof: "PAN",
      idNumber: "LMNOP1234D",
      name: "Olivia Brown",
      amount: "$250,000",
    },
    {
      policyNo: "POL007",
      policyName: "Life Coverage",
      planMonths: 48,
      planYears: 4,
      policyHolderIDProof: "Passport",
      idNumber: "Q1234567",
      name: "Sophia Miller",
      amount: "$700,000",
    }
  ];

  return (
    <div style={tableContainerStyle}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        fontSize: '32px', 
        color: '#333', 
        fontFamily: 'Cursive, Arial, sans-serif', 
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent' 
      }}>
        User Policies
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>Policy Number</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Policy Name</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Plan (Months/Year)</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Policy Holder ID Proof</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>ID Number</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Name</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Amount</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Approval Details</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy, index) => (
            <tr key={policy.policyNo} style={rowStyle(index)} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = rowStyle(index).backgroundColor}>
              <td style={thTdStyle}>{policy.policyNo}</td>
              <td style={thTdStyle}>{policy.policyName}</td>
              <td style={thTdStyle}>{policy.planMonths} Months / {policy.planYears} Years</td>
              <td style={thTdStyle}>{policy.policyHolderIDProof}</td>
              <td style={thTdStyle}>{policy.idNumber}</td>
              <td style={thTdStyle}>{policy.name}</td>
              <td style={thTdStyle}>{policy.amount}</td>
              <td style={{...thTdStyle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button style={approveStyle} onClick={() => handleApprove(policy.policyNo)}>
                  <FaCheck /> Approve
                </button>
                <button style={cancelStyle} onClick={() => handleCancel(policy.policyNo)}>
                  <FaTimes /> Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;


