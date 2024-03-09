package com.infy.ekart.cart.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.infy.ekart.cart.entity.CartProduct;


public interface CartProductRepository extends JpaRepository<CartProduct, Integer> {

}
