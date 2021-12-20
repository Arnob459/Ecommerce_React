import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function UpdateOneProduct() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [p_name, setP_name] = useState("");
    const [p_code, setP_code] = useState("");
    const [p_desc, setP_desc] = useState("");
    const [p_category, setP_category] = useState("");
    const [p_price, setP_price] = useState("");
    const [p_quantity, setP_quantity] = useState("");
    const [p_stock_date, setP_stock_date] = useState("");
    const [p_rating, setP_rating] = useState("");
    const [p_purchased, setP_purchased] = useState("");
    const [file, setFile] = useState("");
    // const navigate = useNavigate();


    useEffect(() => {
        getdata();
    }, []);
    /*const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem('user-info')) {
        navigate("/add");
      }
  
    }, [])*/


    async function getdata() {
        let result = await fetch("http://127.0.0.1:8000/api/edit/" + id);
        result = await result.json();
        setData(result)
        setP_name(result.p_name)
        setP_code(result.p_code)
        setP_category(result.p_category)
        setP_desc(result.p_desc)
        setP_price(result.p_price)
        setP_quantity(result.p_quantity)
        setP_stock_date(result.p_stock_date)
        setP_rating(result.p_rating)
        setP_purchased(result.p_purchased)
        setFile(result.file)

    }





    async function updateproduct(id) {
        //let item = { p_name, p_code, p_desc, p_category, p_price, p_quantity, p_stock_date, p_rating, p_purchased, file };
        //console.log(item)

        const formData = new FormData();
        formData.append('p_name', p_name);
        formData.append('p_code', p_code);
        formData.append('p_desc', p_desc);
        formData.append('p_category', p_category);
        formData.append('p_price', p_price);
        formData.append('p_quantity', p_quantity);
        formData.append('p_stock_date', p_stock_date);
        formData.append('p_rating', p_rating);
        formData.append('p_purchased', p_purchased);
        formData.append('file', file);

        let result = await fetch("http://127.0.0.1:8000/api/update/" + id + "?_method=PUT",
            {
                method: 'POST',
                body: formData
            })

        console.log(result);

    }
    return (
        <div>
            <Header />

            <div className="col-sm-8 offset-sm-2">

                <h1>Update Product</h1>
                <Form>
                    <input type="text" defaultValue={data.id} className="form-control" placeholder="Product ID" disabled /> <br />
                    <input type="text" defaultValue={data.p_name} onChange={(e) => setP_name(e.target.value)} className="form-control" placeholder="Product Name" /> <br />
                    <input type="text" defaultValue={data.p_code} onChange={(e) => setP_code(e.target.value)} className="form-control" placeholder="Product Code" /> <br />
                    <input type="text" defaultValue={data.p_desc} onChange={(e) => setP_desc(e.target.value)} className="form-control" placeholder="Description" /> <br />
                    <input type="text" defaultValue={data.p_category} onChange={(e) => setP_category(e.target.value)} className="form-control" placeholder="Category" /> <br />
                    <input type="number" defaultValue={data.p_price} onChange={(e) => setP_price(e.target.value)} className="form-control" placeholder="Product Price" min="0" /> <br />
                    <input type="number" defaultValue={data.p_quantity} onChange={(e) => setP_quantity(e.target.value)} className="form-control" placeholder="Product Quantity" min="0" /> <br />
                    <input type="date" defaultValue={data.p_stock_date} onChange={(e) => setP_stock_date(e.target.value)} className="form-control" placeholder="Stock date" /> <br />


                    <div defaultValue={data.p_rating} onChange={(e) => setP_rating(e.target.value)} className="form-control" placeholder="Rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Range min="0" max="10" step="0.1" />
                    </div><br />
                    <input type="text" value={p_rating} className="form-control" placeholder="Please Rate this product" disabled /> <br />

                    <div defaultValue={data.p_purchased} onChange={(e) => setP_purchased(e.target.value)} className="form-control" placeholder="Product purchased">
                        <Form.Check inline label="Product purchased" name="purchased" type="radio" value="1" id="radio1" />
                        <Form.Check inline label="Product not purchased" name="purchased" type="radio" value="0" id="radio2" />
                    </div> <br />
                    <input type="text" value={p_purchased} className="form-control" placeholder="Product purchased" disabled /> <br />



                    <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder="File" /> <br />
                    <img style={{ width: 240, height: 140 }} src={"http://127.0.0.1:8000/" + data.file_path} /> <br /> <br />
                </Form>
                <button onClick={() => updateproduct(data.id)} className="btn btn-secondary">Update Product</button>

            </div>

        </div>
    );
}

export default UpdateOneProduct;




