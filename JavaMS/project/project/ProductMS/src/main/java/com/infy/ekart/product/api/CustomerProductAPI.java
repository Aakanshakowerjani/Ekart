package com.infy.ekart.product.api;

import java.util.List;

import javax.validation.Valid;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.ekart.product.dto.ProductDTO;
import com.infy.ekart.product.exception.EKartProductException;
import com.infy.ekart.product.service.CustomerProductService;

import io.micrometer.core.ipc.http.HttpSender;


@RestController
@RequestMapping(value = "/Ekart/product-api")
public class CustomerProductAPI {

	@Autowired
	private CustomerProductService customerProductService;

	@Autowired
    private Environment  environment;
    
    
    Log logger = LogFactory.getLog(CustomerProductAPI.class);
    
    @PostMapping(value= "/create-product")
    public ResponseEntity<String> createProduct(@Valid @RequestBody ProductDTO productDTO){
    	String response= customerProductService.createProduct(productDTO);
    	return new ResponseEntity<>(response,HttpStatus.CREATED);
    }
    
	@GetMapping(value = "/products")
	public ResponseEntity<List<ProductDTO>> getAllProducts() throws EKartProductException {
		List<ProductDTO> products= customerProductService.getAllProducts();
		return new ResponseEntity<>(products,HttpStatus.OK);

	}
	
	@GetMapping(value = "/product/{productId}")
	public ResponseEntity<ProductDTO> getProductById(@PathVariable Integer productId) throws EKartProductException {
		ProductDTO product= customerProductService.getProductById(productId);
		return new ResponseEntity<>(product,HttpStatus.OK);
	}
	
	@GetMapping(value = "/search-product/{productName}")
	public ResponseEntity<ProductDTO> getProductByName(@PathVariable String productName) throws EKartProductException {
		ProductDTO product= customerProductService.getProductByName(productName);
		return new ResponseEntity<>(product,HttpStatus.OK);
	}
	
//	@PutMapping(value = "/update/{productId}")
//	public ResponseEntity<String> reduceAvailableQuantity(@PathVariable Integer productId , @RequestBody Integer quantity) throws EKartProductException {
//        customerProductService.reduceAvailableQuantity(productId, quantity);
//		return new ResponseEntity<>("Quantity Reduced",HttpStatus.OK);
//
//	}
}
