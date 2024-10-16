import React, { useEffect } from 'react'
import { useState } from 'react';
import bookService from '../Service/bookService';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {

  const [book, setBook] = useState({
    id:"",
    bookName: "",
    author: "",
    price: "",
  });

  const[msg, setMsg]=useState("");

  const data=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    bookService.getBookById(data.id).then((res)=>{setBook(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);

  
  const handleChange = (e) => {
    const value = e.target.value;
    setBook({ ...book, [e.target.name]: value });
  };

  const updateBook = (e) => {
    e.preventDefault();
    bookService.updateBook(book.id, book).then((res)=>{
      navigate("/");

    }).catch((error)=>{
      console.log(error);
    })
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6.offset-md-3">
          <div className="card">
            <div className="card-header text-center fd-3">Edit Book

             {
              msg && <p className="text-success">
                {msg}
              </p>
             }
             </div>

            <div className="card-body">
              <form onSubmit={(e)=>updateBook(e)}>
                <div className="mb-3">
                  <label>Enter Book Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bookName"
                    value={book.bookName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter Author Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={book.author}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={book.price}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="text-center">
                  <button
                    style={{ height: "10px", paddingBottom: "30px" }}
                    class="btn btn-success"
                  >
                    Edit
                  </button>
                  <input
                    type="Reset"
                    className="btb btn-danger  ms-2 "
                    value="Reset"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBook
