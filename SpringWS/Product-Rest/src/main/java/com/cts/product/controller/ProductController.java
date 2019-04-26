package com.cts.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.product.dao.ProductDao;
import com.cts.product.entity.Product;

@RestController
@RequestMapping("api/products")
@CrossOrigin
public class ProductController {

	@Autowired
	private ProductDao dao;

	@PostMapping
	public void saveProduct(@RequestBody Product product) {
		dao.save(product);
		System.out.println("Dao: Saved ");

	}

	@GetMapping
	public List<Product> listAll() {
		return dao.findAll();
	}

}
