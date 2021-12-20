import Header from "./Header";

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    alert(result.result);
    getData();
  }

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/product");
    result = await result.json();
    setData(result)

  }

  return (
    <div>
      <Header />
      <h1>ProductList</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Rating</th>
              <th>Product View</th>
              {localStorage.getItem('user-info') ?
                <th>Operations</th>
                : null}
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,i) =>
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.p_code}</td>
                  <td>{item.p_name}</td>
                  <td>{item.p_category}</td>
                  <td>{item.p_desc}</td>
                  <td>{item.p_price}</td>
                  <td>{item.p_rating}</td>
                  <td><img style={{ width: 120, height: 70 }} src={"http://127.0.0.1:8000/" + item.file_path} alt=""/></td>

                  {localStorage.getItem('user-info') ?
                    <td>
                      <Link to={"/detail/" + item.id}>
                        <Button variant="outline-info">Details</Button>
                      </Link>
                      <Link to={"/edit/" + item.id}>
                        <Button variant="outline-info">Edit</Button>
                      </Link>
                      <Button onClick={() => deleteOperation(item.id)} variant="outline-danger">Delete</Button>
                    </td>
                    : null}
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default ProductList;