import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function MembersDetail() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getdata();
  }, []);


  async function getdata() {
    let result = await fetch("http://127.0.0.1:8000/api/membersDetail/" + id);
    result = await result.json();
    setData(result)
  }



  return (
    <div>
      <Header />
      <h1>MembersDetails</h1>

      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{data.id}</td>
            </tr>
            <tr>
              <td> First name</td>
              <td>{data.first_name}</td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>{data.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Password </td>
              <td>{data.password}</td>
            </tr>
            <tr>
              <td>address </td>
              <td>{data.address}</td>
            </tr>
            <tr>
            <td>Phone Number </td>
              <td>{data.phone_number}</td>
            </tr>
            <tr>
            <td>Dob </td>
              <td>{data.dob}</td>
            </tr>
            <tr>
            <td>Gender </td>
              <td>{data.gender}</td>
            </tr>
          
          
        

          </tbody>
        </Table>
      </div>


    </div>
  );
}

export default MembersDetail;