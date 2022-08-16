package com.boot.phase6finalproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.phase6finalproject.entity.Cuisines;
import com.boot.phase6finalproject.entity.FoodItems;
import com.boot.phase6finalproject.entity.OrderedItems;
import com.boot.phase6finalproject.entity.Orders;
import com.boot.phase6finalproject.entity.Users;
import com.boot.phase6finalproject.repository.AdminRepository;
import com.boot.phase6finalproject.repository.CuisinesRepository;
import com.boot.phase6finalproject.repository.FoodItemsRepository;
import com.boot.phase6finalproject.repository.OrderedItemsRepository;
import com.boot.phase6finalproject.repository.OrdersRepository;

@Service
public class AdminService {
	@Autowired
	CuisinesRepository cuisinesRepository;
	
	@Autowired
	AdminRepository adminRepository;
	
	
	@Autowired
	FoodItemsRepository foodItemsRepository;
	
	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	OrderedItemsRepository orderedItemsRepository;
	

	
	
	@Transactional
	public boolean addCuisine(Cuisines cuisine) {
		
		try {
			
			cuisinesRepository.save(cuisine);
			return true;
		}
		
		catch(Exception e) {
			
			return false;
		}
	}
	
	
	@Transactional
	public boolean removeCuisine(Cuisines cuisine) {
		
		try {
			cuisinesRepository.delete(cuisine);
			return true;
		}
		
		
		catch(Exception e) {
			
			return false;
		}
	}
	
	@Transactional
	public List<Users> getAllCustomers(){
		
		try {
			
			return adminRepository.getAllCustomers();
		}
		
		catch(Exception e) {
			
			return null;
		}
	}
	
	
	
	
	@Transactional
	public String adminSignIn(Users u){
		String msg = "failed";
		try {
		List<Users> users = adminRepository.getAllAdmins();
		
		for(Users us:users) {
			if(us.getUserName().equals(u.getUserName()) && us.getPassword().equals(u.getPassword())) {
				msg =u.getUserName();
				break;
				
			}
			
		}
		return msg;
	    }
	    catch(Exception e) {
	    	
	    	return msg;
	    }
		
	}
	

	
	@Transactional
	public List<Object[]> getUniqueCuisineNames(){
		
		return adminRepository.getUniqueCuisineNames();
	}
	
	
	@Transactional
	public int getCuisineId(String cuisineName) {
		
		return cuisinesRepository.getCuisineId(cuisineName);
	}
	
	@Transactional
	public boolean addFoodItem(FoodItems foodItem, String cuisineName ) {
		FoodItems fi = new FoodItems();
		fi.setDescription(foodItem.getDescription());
		fi.setAvailableQuantity(foodItem.getAvailableQuantity());
		fi.setFoodName(foodItem.getFoodName());
		fi.setFoodPrice(foodItem.getFoodPrice());
		fi.setIsAvailable(foodItem.getIsAvailable());
		fi.setImagePath(foodItem.getImagePath());
		 try {
		Cuisines c = new Cuisines();
		int cid = cuisinesRepository.getCuisineId(cuisineName);
		c.setCuisineId(cid);
		fi.setCuisine(c);
		foodItemsRepository.save(fi);
		return true;
		
		 }
		 
		 catch(Exception e) {
			 
			 return false;
		 }
		
		 
		
	}
	
	
	
	
	
	@Transactional
	public boolean updateFoodItem(FoodItems foodItem, String cuisineName ) {
		
		FoodItems fi = new FoodItems();
		fi.setFoodId(foodItem.getFoodId());
		fi.setDescription(foodItem.getDescription());
		fi.setAvailableQuantity(foodItem.getAvailableQuantity());
		fi.setFoodName(foodItem.getFoodName());
		fi.setFoodPrice(foodItem.getFoodPrice());
		fi.setIsAvailable(foodItem.getIsAvailable());
		fi.setImagePath(foodItem.getImagePath());
		 try {
		Cuisines c = new Cuisines();
		int cid = cuisinesRepository.getCuisineId(cuisineName);
		c.setCuisineId(cid);
		fi.setCuisine(c);
		foodItemsRepository.save(fi);
		return true;
		
		 }
		 
		 catch(Exception e) {
			 
			 return false;
		 }
		
		 
		
	}
	
	
	
	
	@Transactional
	public boolean removeFoodItem(FoodItems foodItem, String cuisineName ) {
		
		FoodItems fi = new FoodItems();
		fi.setFoodId(foodItem.getFoodId());
		fi.setDescription(foodItem.getDescription());
		fi.setAvailableQuantity(foodItem.getAvailableQuantity());
		fi.setFoodName(foodItem.getFoodName());
		fi.setFoodPrice(foodItem.getFoodPrice());
		fi.setIsAvailable(foodItem.getIsAvailable());
		fi.setImagePath(foodItem.getImagePath());
		 try {
		Cuisines c = new Cuisines();
		int cid = cuisinesRepository.getCuisineId(cuisineName);
		c.setCuisineId(cid);
		fi.setCuisine(c);
		foodItemsRepository.delete(fi);
		return true;
		
		 }
		 
		 catch(Exception e) {
			 
			 return false;
		 }
		
		 
		
	}
	
	
	@Transactional
	public List<FoodItems> getAllFoodItems() {
		
		return foodItemsRepository.findAll();
	}
	
	@Transactional
	public FoodItems getFoodById(int foodId) {
		
		return foodItemsRepository.findByFoodId(foodId);
	}
	
	
	@Transactional
	public List<Orders> getAllOrders(){
		return ordersRepository.findAll();
		
	}
	
	@Transactional
	public List<OrderedItems> getAllOrderedItems(){
		return orderedItemsRepository.findAll();
		
	}
	
	@Transactional
	public List<Cuisines> getAllCuisines(){
		
		return cuisinesRepository.findAll();
	}
	
}
