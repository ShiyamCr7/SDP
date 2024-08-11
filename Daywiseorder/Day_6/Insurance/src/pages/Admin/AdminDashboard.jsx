import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FaUserShield,
  FaShieldAlt,
  FaClipboardList,
  FaFileAlt,
  FaTasks,
  FaCogs,
  FaUsers,
  FaBell,
} from 'react-icons/fa';

const borderAnimation = keyframes`
  0% {
    border-color: transparent transparent blue transparent;
  }
  25% {
    border-color: transparent purple transparent transparent;
  }
  50% {
    border-color: blue transparent transparent transparent;
  }
  75% {
    border-color: transparent transparent transparent purple;
  }
  100% {
    border-color: transparent transparent blue transparent;
  }
`;

const AnimatedBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  border: 4px solid transparent;
  animation: ${borderAnimation} 4s linear infinite;
  pointer-events: none;
`;

const StyledCardContainer = styled.div`
  position: relative;
  flex: 1 1 22%;
  min-width: 280px;
  margin: 20px;
`;

const StyledCard = styled(Card)`
  border: 1px solid var(--color-primary);
  background: linear-gradient(to right, ${props => props.from}, ${props => props.to});
  color: black;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(to right, ${props => props.hoverFrom}, ${props => props.hoverTo});
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const AdminDashboard = () => {
  return (
    <div className="flex flex-wrap justify-center p-6 gap-6">
      <StyledCardContainer>
        <StyledCard from="#f0f4ff" to="#e5eaf5" hoverFrom="#e0e8ff" hoverTo="#d5dff5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <FaUserShield className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>
      
      <StyledCardContainer>
        <StyledCard from="#e5fff5" to="#d9f5eb" hoverFrom="#ccffed" hoverTo="#c0f5e2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Policies
            </CardTitle>
            <FaShieldAlt className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>
      
      <StyledCardContainer>
        <StyledCard from="#ffe5e5" to="#ffd9d9" hoverFrom="#ffcccc" hoverTo="#ffbfbf">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Claims
            </CardTitle>
            <FaClipboardList className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>
      
      <StyledCardContainer>
        <StyledCard from="#e5f4ff" to="#d9eaf5" hoverFrom="#d0e0ff" hoverTo="#c5d5f5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Policies
            </CardTitle>
            <FaFileAlt className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledCard from="#fff5e5" to="#f5e9d9" hoverFrom="#ffe9cc" hoverTo="#ffdcbf">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Approval Details
            </CardTitle>
            <FaTasks className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>
      
      <StyledCardContainer>
        <StyledCard from="#e5ffe5" to="#d9f5d9" hoverFrom="#ccffcc" hoverTo="#bfffbf">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              To-Do
            </CardTitle>
            <FaCogs className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>
      
      <StyledCardContainer>
        <StyledCard from="#e5e5ff" to="#d9d9f5" hoverFrom="#ccccff" hoverTo="#bfbff5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customize Policy
            </CardTitle>
            <FaCogs className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledCard from="#f5e5ff" to="#e9d9f5" hoverFrom="#ecccff" hoverTo="#dfbff5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Manage Customers
            </CardTitle>
            <FaUsers className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledCard from="#fff5e5" to="#f5e9d9" hoverFrom="#ffe9cc" hoverTo="#ffdcbf">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alerts
            </CardTitle>
            <FaBell className="h-6 w-6 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </StyledCard>
        <AnimatedBorder />
      </StyledCardContainer>
    </div>
  );
};

export default AdminDashboard;
