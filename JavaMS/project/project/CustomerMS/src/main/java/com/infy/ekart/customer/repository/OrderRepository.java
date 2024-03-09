package com.infy.ekart.customer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infy.ekart.customer.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

List<Order> findByCustomerEmailId(String customerEmailId);

}
