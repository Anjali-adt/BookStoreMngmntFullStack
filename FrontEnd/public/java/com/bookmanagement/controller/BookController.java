package com.bookmanagement.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookmanagement.model.Book;
import com.bookmanagement.service.BookService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/bookApp")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/save")
	public ResponseEntity<Book> addBook(@RequestBody Book b )
	{
		return new ResponseEntity<Book>(bookService.addBook(b),HttpStatus.CREATED);
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Book>> getAllBooks()
	{
		return new ResponseEntity<List<Book>>(bookService.getAllBooks(), HttpStatus.OK);
		//return new ResponseEntity<String>("Hieee", HttpStatus.OK);
	}

//	@GetMapping("/get")
//	public ResponseEntity<String> getAllBooks1()
//	{
//		return new ResponseEntity<String>("hello", HttpStatus.OK);
//	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable int id )
	{
		return new ResponseEntity<Book>(bookService.getBookById(id),HttpStatus.OK);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<String> deleteBook(@PathVariable int id)
	{
		bookService.deleteBook(id);
		return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
	}
	
	@PostMapping("/update/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book b )
	{
		return new ResponseEntity<Book>(bookService.updateBook(id, b),HttpStatus.OK);
	}
	
}
