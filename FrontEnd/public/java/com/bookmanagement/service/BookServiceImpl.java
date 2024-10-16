package com.bookmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookmanagement.model.Book;
import com.bookmanagement.repo.BookRepository;

import jakarta.persistence.Entity;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepo; 
	
	@Override
	public Book addBook(Book b) {
	   return bookRepo.save(b);
	}

	@Override
	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}

	@Override
	public Book isAvailable() {
        return null;
	}

	@Override
	public Book getBookById(int id) {
		
		return bookRepo.findById(id).get();
	}

	@Override
	public void deleteBook(int id) {
		Book b = bookRepo.findById(id).get();
		if(b!=null)
		{
			bookRepo.delete(b);
		}
		
	}

	@Override
	public Book updateBook(int id, Book b) {
		
		Book oldBook = bookRepo.findById(id).get();
		
		if(oldBook!=null) 
		{
			b.setId(id);
			return bookRepo.save(b);
		}
		   return null;
	}
	

}
