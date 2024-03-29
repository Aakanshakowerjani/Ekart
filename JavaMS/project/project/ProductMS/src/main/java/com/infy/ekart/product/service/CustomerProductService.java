package com.infy.ekart.product.service;

import java.util.List;

import com.infy.ekart.product.dto.ProductDTO;
import com.infy.ekart.product.exception.EKartProductException;

public interface CustomerProductService {
	
	String createProduct(ProductDTO productDTO);
	
	List<ProductDTO> getAllProducts() throws EKartProductException;
	
	ProductDTO getProductById(Integer productId) throws EKartProductException;
	
	ProductDTO getProductByName(String productName) throws EKartProductException;
	
//    void reduceAvailableQuantity(Integer productId, Integer quantity) throws EKartProductException ;
}
