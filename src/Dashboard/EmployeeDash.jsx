import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Employee from '../Dashboard/EmployeeDashboardPages/Employee';


const EmployeeDash = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
    <Employee />
      </StyledEngineProvider>
    </React.StrictMode>
  );
};

// ReactDOM.createRoot(document.querySelector("#root")).render(<AdminDash />);

export default EmployeeDash;
