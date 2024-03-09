package com.infy.ekart.customer.service;

import com.infy.ekart.customer.dto.CustomerDTO;
import com.infy.ekart.customer.exception.EKartCustomerException;

public interface CustomerService {

	CustomerDTO authenticateCustomer(String name, String password) throws EKartCustomerException;

	String registerNewCustomer(CustomerDTO customerDTO) throws EKartCustomerException;

	void updateProfile(CustomerDTO customerDTO,String emailId) throws EKartCustomerException;
//
//	void changePassword(String customerEmailId, String currentPassword, String newPassword) throws EKartCustomerException;
//
    
	void updateShippingAddress(String customerEmailId , String address) throws EKartCustomerException;

	void deleteShippingAddress(String customerEmailId) throws EKartCustomerException;
	
	CustomerDTO getCustomerByEmailId(String email) throws EKartCustomerException;

	 CustomerDTO getCustomerByUsername(String username) throws EKartCustomerException;
	 
	 

	
}
