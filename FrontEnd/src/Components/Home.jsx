import React, { useEffect, useState } from "react";
import bookService from "../Service/bookService";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const res = await bookService.getAllBooks();
  //       console.log(res.data);
  //       setBookList(res.data);
  //     } catch (error) {
  //       console.error("Error fetching books:", error);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/bookApp/getAll`);
        console.log(res.data);
        setBookList(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    try {
      await bookService.deleteBook(id);
      setBookList(bookList.filter((book) => book.id !== id));
      setMsg("Deleted successfully!");
      console.log(`Book with id ${id} deleted.`);
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  };

  // Ensure bookList is not empty before accessing keys
  const keys = bookList.length > 0 ? Object.keys(bookList[0]) : [];

  return (
    <div className="container">
      {msg && <p className="text-center text-success">{msg}</p>}

      <table className="table table-success table-striped mt-5">
        <thead>
          <tr>
            {keys.map((key) => (
              <th scope="col" key={key}>
                {key}
              </th>
            ))}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((item) => (
            <tr key={item.id}>
              {keys.map((key) => (
                <td key={key}>{item[key].toString()}</td>
              ))}
              <td>
                <Link to={`editBook/${item.id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link>
                <a onClick={() => deleteBook(item.id)} className="btn btn-sm btn-danger ms-2">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
