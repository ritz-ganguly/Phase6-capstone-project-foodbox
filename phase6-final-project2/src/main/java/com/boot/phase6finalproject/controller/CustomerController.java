package com.boot.phase6finalproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boot.phase6finalproject.entity.CartDetails;
import com.boot.phase6finalproject.entity.FoodItems;
import com.boot.phase6finalproject.entity.OrderedItems;
import com.boot.phase6finalproject.entity.Users;
import com.boot.phase6finalproject.service.CustomerService;


@CrossOrigin("*")
@RestController
@RequestMapping("/customer")

public class CustomerController {

	@Autowired
	CustomerService customerService;
	
	
	@PostMapping("/register")
	public boolean customerRegister(@RequestBody Users user) {
		 
		user.setUserType("customer");
		return customerService.customerRegister(user);
		
		
	}
	
	
	@PostMapping("/signIn")
	public String customerSignIn(@RequestBody Users user) {
		return customerService.customerSignIn(user);
	
	}
	
	@GetMapping("/getAllFoodItems")
	public List<FoodItems> getAllFoodItems(){
		
		return customerService.getAllFoodItems();
	}
	
	
	@GetMapping("/getFoodById/{foodId}")
	public FoodItems getFoodById(@PathVariable int foodId) {
		
	return customerService.getFoodById(foodId);
	}
	
	@GetMapping("/getCustomerUserId")
	public int getCustomeUserId(@RequestParam(name="userName") String userName) {
		
		return customerService.getCustomeUserId(userName);
	}
	
	
	@PostMapping("/makePurchase")
	public boolean makePurchase(@RequestParam(name="userName") String userName,
			@RequestBody List<CartDetails> cartDetails
			) {
		
		return customerService.makePurchase(userName, cartDetails);
	}
	
	
	@GetMapping("/getPurchaseHistory")
	public List<OrderedItems> getPurchaseHistory(@RequestParam(name="userName") String userName){
		
		return customerService.getPurchaseHistory(userName);
	}
}
