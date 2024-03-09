package com.infy.ekart.cart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.infy.ekart.cart.entity.CustomerCart;

public interface CustomerCartRepository extends JpaRepository<CustomerCart, Integer> {

	Optional<CustomerCart> findByCustomerEmailId(String customerEmailId);
  
}
