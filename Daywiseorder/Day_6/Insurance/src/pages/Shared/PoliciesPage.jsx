import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaHeartbeat, FaCar, FaHome, FaLifeRing, FaPlane, FaPaw, FaInfoCircle, FaBriefcase, FaUmbrella, FaBuilding, FaShieldAlt } from 'react-icons/fa';

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #ffffff, #f0f0f0);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: ${props => props.color};
`;

const Logo = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background: ${props => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => props.hoverColor};
  }
`;

const PoliciesPage = () => {
  const navigate = useNavigate();

  const policies = [
    {
      name: 'Health Insurance',
      description: 'Get comprehensive health coverage for you and your family, ensuring access to the best medical care.',
      icon: <FaHeartbeat />,
      color: '#007BFF',
      hoverColor: '#0056b3',
      route: '/policies/health'
    },
    {
      name: 'Auto Insurance',
      description: 'Protect your vehicle against damage and theft with our reliable auto insurance plans.The best Auto insurance provided.',
      icon: <FaCar />,
      color: '#28a745',
      hoverColor: '#1e7e34',
      route: '/policies/auto'
    },
    {
      name: 'Home Insurance',
      description: 'Safeguard your home and personal property with our all-encompassing home insurance.',
      icon: <FaHome />,
      color: '#17a2b8',
      hoverColor: '#117a8b',
      route: '/policies/homeinsurance'
    },
    {
      name: 'Life Insurance',
      description: 'Ensure financial security for your loved ones with our flexible life insurance policies.',
      icon: <FaLifeRing />,
      color: '#ffc107',
      hoverColor: '#d39e00',
      route: '/policies/life'
    },
    {
      name: 'Travel Insurance',
      description: 'Enjoy peace of mind on your trips with our comprehensive travel insurance coverage.Get your safe journey',
      icon: <FaPlane />,
      color: '#dc3545',
      hoverColor: '#bd2130',
      route: '/policies/travel'
    },
    {
      name: 'Pet Insurance',
      description: 'Protect your pets with our extensive coverage, giving them the care they deserve.',
      icon: <FaPaw />,
      color: '#6f42c1',
      hoverColor: '#5a32a3',
      route: '/policies/pet'
    },
    {
      name: 'Business Insurance',
      description: 'Comprehensive coverage for your business and its assets.Thrill your businees with risks you want to take.',
      icon: <FaBriefcase />,
      color: '#343a40',
      hoverColor: '#23272b',
      route: '/policies/business'
    },
    {
      name: 'Umbrella Insurance',
      description: 'Extra liability coverage to protect your assets.Always an extra safety is better.Why wait so',
      icon: <FaUmbrella />,
      color: '#ff6347',
      hoverColor: '#cc4f39',
      route: '/policies/umbrella'
    },
    {
      name: 'Commercial Property Insurance',
      description: 'Protect your commercial properties with our extensive coverage.',
      icon: <FaBuilding />,
      color: '#00bfff',
      hoverColor: '#008acd',
      route: '/policies/commercial'
    },
  ];

  const handleViewDetails = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-wrap justify-center p-4 gap-4">
      {policies.map((policy, index) => (
        <CardContainer key={index}>
          <CardHeader color={policy.color}>
            <Logo>{policy.icon}</Logo>
            <Title>{policy.name}</Title>
          </CardHeader>
          <CardContent>
            <Description>{policy.description}</Description>
            <Actions>
              <ActionButton color={policy.color} hoverColor={policy.hoverColor} onClick={() => handleViewDetails(policy.route)}>
                <FaInfoCircle style={{ marginRight: '5px' }} />
                View Details
              </ActionButton>
              <ActionButton color={policy.color} hoverColor={policy.hoverColor}>
                <FaShieldAlt style={{ marginRight: '5px' }} />
                Get Policy
              </ActionButton>
            </Actions>
          </CardContent>
        </CardContainer>
      ))}
    </div>
  );
};

export default PoliciesPage;
