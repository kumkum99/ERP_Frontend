import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import EmployeeHeader from '../components/DashboardHeader/EmployeeHeader';

const EmployeeDash = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <EmployeeHeader />
      </StyledEngineProvider>
    </React.StrictMode>
  );
};

// ReactDOM.createRoot(document.querySelector("#root")).render(<AdminDash />);

export default EmployeeDash;
