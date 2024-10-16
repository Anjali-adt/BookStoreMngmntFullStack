package com.bookmanagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmanagement.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
