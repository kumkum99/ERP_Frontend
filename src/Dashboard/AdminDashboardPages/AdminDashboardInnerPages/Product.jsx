import { useState, useEffect } from 'react';
import './PagesCss.css';  // Ensure this imports your CSS file
import NavAdmin from '../../../components/DashboardHeader/NavAdmin';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

function Product() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('productData')) || []);
  const [product, setProduct] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    date: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedProducts = products.map((prod, index) =>
        index === editIndex ? product : prod
      );
      setProducts(updatedProducts);
      setIsEditing(false);
    } else {
      setProducts([...products, product]);
    }
    setProduct({
      id: '',
      name: '',
      quantity: '',
      price: '',
      date: ''
    });
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const editProduct = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setProduct(products[index]);
  };

  const readProduct = (product) => {
    alert(`Details: ${JSON.stringify(product, null, 2)}`);
  };

  return (
    <div className="d-flex flex-column">
      <NavAdmin />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        
        <div id="product-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
          <div id="product-header" className='card-8 rounded-border mb-4'>
            <h1><i className="fa fa-box" style={{ fontSize: "30px" }}></i> Product Management</h1>
            <hr />
          </div>

          {/* Add Product Form */}
          <form id="product-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="id">Product ID:</label>
              <input
                type="text"
                id="id"
                className="input-text"
                value={product.id}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="input-text"
                value={product.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                className="input-text"
                value={product.quantity}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                className="input-text"
                value={product.price}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                className="input-text"
                value={product.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <button id="submit-btn" type="submit">{isEditing ? 'Update' : 'Submit'}</button>
          </form>

          {/* Product Table */}
          <table id="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="table-row">
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.date}</td>
                  <td>
                    <button className="action-btn view-btn" onClick={() => readProduct(product)}>View</button>
                    <button className="action-btn edit-btn" onClick={() => editProduct(index)}>Edit</button>
                    <button className="action-btn delete-btn" onClick={() => deleteProduct(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
