package com.infy.ekart.product.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.ekart.product.dto.ProductDTO;
import com.infy.ekart.product.dto.ReviewDTO;
import com.infy.ekart.product.entity.Product;
import com.infy.ekart.product.entity.Review;
import com.infy.ekart.product.exception.EKartProductException;
import com.infy.ekart.product.repository.ProductRepository;



@Service
public class CustomerProductServiceImpl implements CustomerProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public String createProduct(ProductDTO productDTO) {
		System.out.println(productDTO);
		Product product=modelMapper.map(productDTO, Product.class);
		System.out.println(product);
		productRepository.save(modelMapper.map(productDTO, Product.class));
		return "Product Created";
	}
	
	@Override
	public List<ProductDTO> getAllProducts() throws EKartProductException {
		
		List<Product> products=productRepository.findAll();
		List<ProductDTO> productDTOs=new ArrayList<>();
		for(Product product:products) {

			ProductDTO productDTO=modelMapper.map(product, ProductDTO.class);
			productDTOs.add(productDTO);
		}
		
		return productDTOs;
	}

	@Override
	public ProductDTO getProductById(Integer productId) throws EKartProductException {
		
		Optional<Product> optionalProduct= productRepository.findById(productId);
		if(optionalProduct.isPresent()) {
			return modelMapper.map(optionalProduct, ProductDTO.class);
		}
		else {
			throw new EKartProductException("No Product available with this Product id"+productId);
		}
	}
	
//	@Override
//	public void reduceAvailableQuantity(Integer productId, Integer quantity) throws EKartProductException {
//		
//		Optional<Product> opProduct= productRepository.findById(productId);
//		Product product=opProduct.orElseThrow(() -> new EKartProductException("No Product available with this Product id"+productId));
//		product.setAvailableQuantity(product.getAvailableQuantity()-quantity);
//		productRepository.save(product);
//	}

	@Override
	public ProductDTO getProductByName(String productName) throws EKartProductException {
		Product product= productRepository.getProductByName(productName);
		ProductDTO productDTO=modelMapper.map(product, ProductDTO.class);
		return productDTO;
	}

}
