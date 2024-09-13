import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Admin from '../Dashboard/AdminDashboardPages/Admin';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

 // Import Bootstrap





const AdminDash = () => {
  return(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>
);
}
export default AdminDash;
