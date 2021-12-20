import Header from "./Header";

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function MembersList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/mdelete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    alert(result.result);
    getData();
  }

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/membersList");
    result = await result.json();
    setData(result)

  }

  return (
    <div>
      <Header />
      <h1>MemberList</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
           
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
                  
                  <td>{item.first_name}</td>
                  <td>{item.email}</td>
                   
                  {localStorage.getItem('user-info') ?
                    <td>
                      <Link to={"/mdetail/" + item.id}>
                        <Button variant="outline-info">Details</Button>
                      </Link>
                      <Link to={"/medit/" + item.id}>
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

export default MembersList;