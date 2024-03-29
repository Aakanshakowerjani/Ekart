package com.infy.ekart.customer.api;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.infy.ekart.customer.dto.CartProductDTO;
import com.infy.ekart.customer.dto.OrderDTO;
import com.infy.ekart.customer.dto.OrderStatus;
import com.infy.ekart.customer.dto.OrderedProductDTO;
import com.infy.ekart.customer.dto.ProductDTO;
import com.infy.ekart.customer.exception.EKartCustomerException;
import com.infy.ekart.customer.service.OrderService;

//Add the missing annotations


@CrossOrigin
@RequestMapping(value = "/Ekart/customerorder-api")
@RestController
@Validated
public class OrderAPI {

	@Autowired
	private OrderService orderService;

	@Autowired
	private Environment environment;
    
	@Autowired
	private RestTemplate template;
	
	@PostMapping(value = "/place-order")
	public ResponseEntity<String> placeOrder(@Valid @RequestBody OrderDTO order) throws EKartCustomerException {
		
		ResponseEntity<CartProductDTO[]> cartProductDTOsResponse = template.getForEntity(
				"http://CustomerCartMS/Ekart/customercart-api/customer/" + order.getCustomerEmailId() + "/products",
				CartProductDTO[].class);

		CartProductDTO[] cartProductDTOs = cartProductDTOsResponse.getBody();
		template.delete("http://CustomerCartMS/Ekart/customercart-api/customer/" + order.getCustomerEmailId() + "/products");
		
		List<OrderedProductDTO> orderedProductDTOs = new ArrayList<>();

		for (CartProductDTO cartProductDTO : cartProductDTOs) {
			OrderedProductDTO orderedProductDTO = new OrderedProductDTO();
			orderedProductDTO.setProduct(cartProductDTO.getProduct());
			orderedProductDTO.setQuantity(cartProductDTO.getQuantity());
			orderedProductDTOs.add(orderedProductDTO);
		}
		order.setOrderedProducts(orderedProductDTOs);

		Integer orderId = orderService.placeOrder(order);
		String modificationSuccessMsg = environment.getProperty("OrderAPI.ORDER_PLACED_SUCCESSFULLY");

		return new ResponseEntity<>(modificationSuccessMsg + orderId, HttpStatus.CREATED);
	}

	@GetMapping(value = "order/{orderId}")
	public ResponseEntity<OrderDTO> getOrderDetails(
			@NotNull(message = "{orderId.absent}") @PathVariable Integer orderId) throws EKartCustomerException {
		OrderDTO orderDTO = orderService.getOrderDetails(orderId);
		for (OrderedProductDTO orderedProductDTO : orderDTO.getOrderedProducts()) {

			ResponseEntity<ProductDTO> productResponse = template.getForEntity(
					"http://ProductMS/Ekart/product-api/product/" + orderedProductDTO.getProduct().getId(),
					ProductDTO.class);
			
			
			orderedProductDTO.setProduct(productResponse.getBody());
		}
		return new ResponseEntity<>(orderDTO, HttpStatus.OK);
	}
	
	
	@GetMapping(value = "customer/{customerEmailId}/orders")
	public ResponseEntity<List<OrderDTO>> getOrdersOfCustomer(
			@Pattern(regexp = "[a-zA-Z0-9._]+@[a-zA-Z]{2,}\\.[a-zA-Z][a-zA-Z.]+", message = "{invalid.email.format}") @PathVariable String customerEmailId)
			throws EKartCustomerException {
		List<OrderDTO> orderDTOs = orderService.findOrdersByCustomerEmailId(customerEmailId);
		for (OrderDTO orderDTO : orderDTOs) {
			for (OrderedProductDTO orderedProductDTO : orderDTO.getOrderedProducts()) {

				ResponseEntity<ProductDTO> productResponse = template.getForEntity(
						"http://ProductMS/Ekart/product-api/product/" + orderedProductDTO.getProduct().getId(),
						ProductDTO.class);
				
				orderedProductDTO.setProduct(productResponse.getBody());
			}
		}
		return new ResponseEntity<>(orderDTOs, HttpStatus.OK);
	}

	

}
