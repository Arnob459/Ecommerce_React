import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function ProductsDetails() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getdata();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    alert(result.result);
    navigate("/")
  }

  async function getdata() {
    let result = await fetch("http://127.0.0.1:8000/api/detail/" + id);
    result = await result.json();
    setData(result)
  }



  return (
    <div>
      <Header />
      <h1>ProductsDetails</h1>

      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{data.id}</td>
            </tr>
            <tr>
              <td>Product Code</td>
              <td>{data.p_code}</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>{data.p_name}</td>
            </tr>
            <tr>
              <td>Product Category</td>
              <td>{data.p_category}</td>
            </tr>
            <tr>
              <td>Product Description</td>
              <td>{data.p_desc}</td>
            </tr>
            <tr>
              <td>Product Price</td>
              <td>{data.p_price}</td>
            </tr>
            <tr>
              <td>Product Rating</td>
              <td>{data.p_rating}</td>
            </tr>
            <tr>
              <td>Product View</td>
              <td><img style={{ widtr: 400, height: 250 }} src={"http://127.0.0.1:8000/" + data.file_path} alt=""/></td>
            </tr>
            <tr>
              <td>Product Quantity</td>
              <td>{data.p_quantity}</td>
            </tr>
            <tr>
              <td>Product Purchased</td>
              <td>{data.p_purchased}</td>
            </tr>
            <tr>
              <td>Product Stock Date</td>
              <td>{data.p_stock_date}</td>
            </tr>
            <tr>
              <td>Product Created At</td>
              <td>{data.created_at}</td>
            </tr>
            <tr>
              <td>Product Updated At</td>
              <td>{data.updated_at}</td>
            </tr>
            <tr>
              <td>Operations</td>
              <td>
                <Button style={{ margin : 10 }} variant="outline-info" >Edit</Button>
                <Button style={{ margin : 10 }} onClick={() => deleteOperation(data.id)} variant="outline-danger">Delete</Button>
              </td>
            </tr>

          </tbody>
        </Table>
      </div>


    </div>
  );
}

export default ProductsDetails;












