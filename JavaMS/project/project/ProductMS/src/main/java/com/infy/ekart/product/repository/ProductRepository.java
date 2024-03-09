package com.infy.ekart.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.infy.ekart.product.entity.Product;

//extends it with required Interface
public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query(value= "select * from ek_product t where t.display_name= :name", nativeQuery = true)
	Product getProductByName(@Param("name") String name);
	
}
