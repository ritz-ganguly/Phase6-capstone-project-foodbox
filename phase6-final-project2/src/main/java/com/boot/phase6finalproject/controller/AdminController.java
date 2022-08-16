package com.boot.phase6finalproject.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boot.phase6finalproject.entity.Cuisines;
import com.boot.phase6finalproject.entity.FoodItems;
import com.boot.phase6finalproject.entity.OrderedItems;
import com.boot.phase6finalproject.entity.Orders;
import com.boot.phase6finalproject.entity.Users;
import com.boot.phase6finalproject.repository.AdminRepository;
import com.boot.phase6finalproject.service.AdminService;


@CrossOrigin("*")
@RestController
@RequestMapping("/admin")

public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	
	@PostMapping("/addCuisine")
	public boolean addCuisine(@RequestBody Cuisines cuisine) {
		
		return adminService.addCuisine(cuisine);
		
	}
	
	
	@DeleteMapping("/removeCuisine")
	public boolean removeCuisine(@RequestBody Cuisines cuisine) {
		
		return adminService.removeCuisine(cuisine);
		
	}
	
	@GetMapping("/getAllCustomers")
	public List<Users> getAllCustomers(){
		return adminService.getAllCustomers();
		
	}
	
	
	
	@PostMapping("/signIn")
	public String adminSignIn(@RequestBody Users user) {
		
		return adminService.adminSignIn(user);
		
		
	}
	
	
	@GetMapping("/getUniqueCuisineNames")
	public HashMap<String,String> getUniqueCuisineNames(){
		try {
			
			
			List<Object[]> s =  adminService.getUniqueCuisineNames();
			HashMap<String,String> map=new HashMap<String,String>();
			
			for (Object[] result : s) {
			    String item = (String)result[0];
			    String name =  item;
			    map.put(name,item);
			}
			
			return map;
		}
		catch(Exception e) {
			
		return null;
		}
	}
	
	
	
	@GetMapping("/getCuisineId")
	public int getCuisineId(@RequestParam(name="cuisineName") String cuisineName) {
		return adminService.getCuisineId(cuisineName);
		
	}
	
	@PostMapping("/addFoodItem")
	public boolean addFoodItem(@RequestBody FoodItems foodItem, @RequestParam(name="cuisineName") String cuisineName )
	{
		return adminService.addFoodItem(foodItem, cuisineName);
		
	}
	
	
	@PutMapping("/updateFoodItem")
	public boolean updateFoodItem(@RequestBody FoodItems foodItem, @RequestParam(name="cuisineName") String cuisineName )
	{
		return adminService.updateFoodItem(foodItem, cuisineName);
		
	}
	
	
	
	@DeleteMapping("/removeFoodItem")
	public boolean removeFoodItem(@RequestBody FoodItems foodItem, @RequestParam(name="cuisineName") String cuisineName )
	{
		return adminService.removeFoodItem(foodItem, cuisineName);
		
	}
	
	
	
	@GetMapping("/getAllFoodItems")
	public List<FoodItems> getAllFoodItems() 
	{
		return adminService.getAllFoodItems();
		
	}
	
	@GetMapping("/getFoodById/{foodId}")
	public FoodItems getFoodById(@PathVariable int foodId) {
		
		return adminService.getFoodById(foodId);
		
	}
	
	@GetMapping("/getAllOrders")
	public List<Orders> getAllOrders(){
		return adminService.getAllOrders();
		
	}
	
	@GetMapping("/getAllOrderedItems")
	public List<OrderedItems> getAllOrderedItems(){
		return adminService.getAllOrderedItems();
		
	}
	
	@GetMapping("/getAllCuisines")
	public List<Cuisines> getAllCuisines(){
		
		return adminService.getAllCuisines();
	}
}
