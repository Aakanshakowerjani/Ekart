package com.infy.ekart.customer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infy.ekart.customer.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {

	List<Customer> findByPhoneNumber(String phoneNumber);

	Customer findByName(String name);
}
