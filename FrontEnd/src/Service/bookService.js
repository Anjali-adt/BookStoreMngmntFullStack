import axios from "axios";
const BASE_API_URL="http://localhost:8080/bookApp";

class BookService{

  saveBook(book)
  {
      return axios.post(BASE_API_URL+"/save",book);
  }

  getAllBooks()
  {
    return axios.get(BASE_API_URL+"/getAll");
  }

  getBookById(id)
  {
    return axios.get(BASE_API_URL+"/"+id);
  }

  deleteBook(id)
  {
    return axios.get(BASE_API_URL+"/delete/"+id);
  }

  updateBook(id, book)
  {
    return axios.post(BASE_API_URL+"/update/"+id,book);
  }
}
export default new BookService();