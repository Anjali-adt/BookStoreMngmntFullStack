import React, { useState } from "react";
import bookService from "../Service/bookService";

const AddBook = () => {
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    price: "",
  });

  const[msg, setMsg]=useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setBook({ ...book, [e.target.name]: value });
  };

  const submitBook = (e) => {
    e.preventDefault();

    bookService
    .saveBook(book)
    .then((res)=>{
      setMsg("Book Added successfully!");
      setBook({
        bookName: "",
        author: "",
        price: "",
      })
   })
   .catch((error)=>{
      console.log(error);
    })
  };

  // const submitBook = (e) => {
  //   e.preventDefault();

  //  axios.post(`http://localhost:8080/bookApp/save`,book)
  //   .then((res)=>{
  //     setMsg("Book Added successfully!");
  //     setBook({
  //       bookName: "",
  //       author: "",
  //       price: "",
  //     })
  //  })
  //  .catch((error)=>{
  //     console.log(error);
  //   })
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6.offset-md-3">
          <div className="card">
            <div className="card-header text-center fd-3">Add Book

             {
              msg && <p className="text-success">
                {msg}
              </p>
             }
             </div>

            <div className="card-body">
              <form onSubmit={(e)=>submitBook(e)}>
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
                    Submit
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
  );
};

export default AddBook;
