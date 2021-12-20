import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddProduct() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/add");
    }

  }, [])

  const [p_name, setP_name] = useState("");
  const [p_code, setP_code] = useState("");
  const [p_desc, setP_desc] = useState("");
  const [p_category, setP_category] = useState("");
  const [p_price, setP_price] = useState("");
  const [p_quantity, setP_quantity] = useState("");
  const [p_stock_date, setP_stock_date] = useState("");
  const [p_rating, setP_rating] = useState("5");
  const [p_purchased, setP_purchased] = useState("");
  const [file, setFile] = useState("");


  async function addProduct() {
    //let item = { p_name, p_code, p_desc, p_category, p_price, p_quantity, p_stock_date, p_rating, p_purchased, file };
    //console.log(item)
    
    const formData = new FormData();
    formData.append('p_name',p_name);
    formData.append('p_code',p_code);
    formData.append('p_desc',p_desc);
    formData.append('p_category',p_category);
    formData.append('p_price',p_price);
    formData.append('p_quantity',p_quantity);
    formData.append('p_stock_date',p_stock_date);
    formData.append('p_rating',p_rating);
    formData.append('p_purchased',p_purchased);
    formData.append('file',file);

    let result = await fetch("http://127.0.0.1:8000/api/add",
      {
        method: 'POST',
        body: formData
      })

    console.log(result);
 
    /*
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add")*/



  }
  return (
    <div>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>Add Product</h1>
        <Form>
        <input type="text" value={p_name} onChange={(e) => setP_name(e.target.value)} className="form-control" placeholder="Product Name" /> <br />
        <input type="text" value={p_code} onChange={(e) => setP_code(e.target.value)} className="form-control" placeholder="Product Code" /> <br />
        <input type="text" value={p_desc} onChange={(e) => setP_desc(e.target.value)} className="form-control" placeholder="Description" /> <br />
        <input type="text" value={p_category} onChange={(e) => setP_category(e.target.value)} className="form-control" placeholder="Category" /> <br />
        <input type="number" value={p_price} onChange={(e) => setP_price(e.target.value)} className="form-control" placeholder="Product Price"  min="0" /> <br />
        <input type="number" value={p_quantity} onChange={(e) => setP_quantity(e.target.value)} className="form-control" placeholder="Product Quantity" min="0" /> <br />
        <input type="date" value={p_stock_date} onChange={(e) => setP_stock_date(e.target.value)} className="form-control" placeholder="Stock date" /> <br />

        
          <div value={p_rating} onChange={(e) => setP_rating(e.target.value)} className="form-control" placeholder="Rating">
            <Form.Label>Rating</Form.Label>
            <Form.Range  min="0" max="10" step="0.1"/>
          </div><br />
          <input type="text" value={p_rating} onChange={(e) => setP_rating(e.target.value)} className="form-control" placeholder="Please Rate this product" disabled/> <br />

          <div value={p_purchased} onChange={(e) => setP_purchased(e.target.value)} className="form-control" placeholder="Product purchased">
            <Form.Check inline label="Product purchased" name="purchased" type="radio" value="1" id="radio1" />
            <Form.Check inline label="Product not purchased" name="purchased" type="radio" value="0" id="radio2" />
          </div> <br />

          </Form>


        <input type="file"  onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder="File" /> <br />

        <button onClick={addProduct} className="btn btn-secondary">Add Product</button>
        
      </div>

    </div>
  );
}

export default AddProduct;




