package com.bookmanagement.service;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import com.bookmanagement.model.Book;

public interface BookService {
	
	public Book addBook(Book b);
	
	public List<Book> getAllBooks();
	
	public Book isAvailable();
	
	public Book getBookById(int id);
	
	public void deleteBook(int id);

	public Book updateBook(int id, Book b);

	
}
