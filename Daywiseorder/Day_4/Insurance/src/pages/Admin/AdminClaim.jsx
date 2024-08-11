import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const AdminClaim = () => {
  const [claims, setClaims] = useState([
    {
      policyNo: "CLAIM001",
      policyName: "Health Coverage",
      planYears: 1,
      planMonths: 12,
      policyHolderName: "John Doe",
      idNumber: "1234 5678 9012",
      reasonForClaim: "Medical Expenses",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM002",
      policyName: "Life Insurance",
      planYears: 2,
      planMonths: 24,
      policyHolderName: "Jane Smith",
      idNumber: "2345 6789 0123",
      reasonForClaim: "Death",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM003",
      policyName: "Car Insurance",
      planYears: 0,
      planMonths: 6,
      policyHolderName: "Bob Johnson",
      idNumber: "3456 7890 1234",
      reasonForClaim: "Accident Repair",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM004",
      policyName: "Home Insurance",
      planYears: 3,
      planMonths: 36,
      policyHolderName: "Alice Brown",
      idNumber: "4567 8901 2345",
      reasonForClaim: "Fire Damage",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM005",
      policyName: "Travel Insurance",
      planYears: 1,
      planMonths: 12,
      policyHolderName: "Charlie Davis",
      idNumber: "5678 9012 3456",
      reasonForClaim: "Trip Cancellation",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM006",
      policyName: "Health Coverage",
      planYears: 1.5,
      planMonths: 18,
      policyHolderName: "Daniel Wilson",
      idNumber: "6789 0123 4567",
      reasonForClaim: "Surgery",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM007",
      policyName: "Life Insurance",
      planYears: 4,
      planMonths: 48,
      policyHolderName: "Emma Thomas",
      idNumber: "7890 1234 5678",
      reasonForClaim: "Critical Illness",
      status: "", // "Approved" or "Denied"
    },
    {
      policyNo: "CLAIM008",
      policyName: "Car Insurance",
      planYears: 2,
      planMonths: 24,
      policyHolderName: "Frank Taylor",
      idNumber: "8901 2345 6789",
      reasonForClaim: "Theft",
      status: "", // "Approved" or "Denied"
    }
  ]);

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
    setClaims(claims.map(claim =>
      claim.policyNo === policyNo ? { ...claim, status: "Approved" } : claim
    ));
  };

  const handleCancel = (policyNo) => {
    setClaims(claims.map(claim =>
      claim.policyNo === policyNo ? { ...claim, status: "Denied" } : claim
    ));
  };

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
        Claims
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>Policy No</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Policy Name</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Plan (Years/Months)</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Policy Holder Name</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>ID Number</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Reason for Claim</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Approval Details</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim, index) => (
            <tr key={claim.policyNo} style={rowStyle(index)} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = rowStyle(index).backgroundColor}>
              <td style={thTdStyle}>{claim.policyNo}</td>
              <td style={thTdStyle}>{claim.policyName}</td>
              <td style={thTdStyle}>{claim.planYears} Years / {claim.planMonths} Months</td>
              <td style={thTdStyle}>{claim.policyHolderName}</td>
              <td style={thTdStyle}>{claim.idNumber}</td>
              <td style={thTdStyle}>{claim.reasonForClaim}</td>
              <td style={{...thTdStyle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {claim.status === "Approved" && <span style={{ color: 'green' }}>Approved</span>}
                {claim.status === "Denied" && <span style={{ color: 'red' }}>Denied</span>}
                {claim.status === "" && (
                  <>
                    <button style={approveStyle} onClick={() => handleApprove(claim.policyNo)}>
                      <FaCheck /> Approve
                    </button>
                    <button style={cancelStyle} onClick={() => handleCancel(claim.policyNo)}>
                      <FaTimes /> Cancel
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminClaim;





