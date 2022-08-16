package com.boot.phase6finalproject.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.phase6finalproject.entity.CartDetails;
import com.boot.phase6finalproject.entity.FoodItems;
import com.boot.phase6finalproject.entity.OrderedItems;
import com.boot.phase6finalproject.entity.Orders;
import com.boot.phase6finalproject.entity.Users;
import com.boot.phase6finalproject.repository.CustomerRepository;
import com.boot.phase6finalproject.repository.FoodItemsRepository;
import com.boot.phase6finalproject.repository.OrderedItemsRepository;
import com.boot.phase6finalproject.repository.OrdersRepository;



@Service
public class CustomerService {
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	FoodItemsRepository foodItemsRepository;
	
	
	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	OrderedItemsRepository orderedItemsRepository;
	
	@Transactional
	public boolean customerRegister(Users user) {
		 try {
		boolean status = false;
		List<Users> users = customerRepository.getAllCustomers();
		for(Users us:users) {
			if(us.getUserName().equals(user.getUserName()) ) {
				status =true;
				break;
				
			}
			
		}
		
		if(status  == false) {
			customerRepository.save(user);
			return true;
			
		    	}
		
		else
    		return false;
		 }
		 
		 catch(Exception e) {
			 
			 return false;
		 }
	}

	
	
	@Transactional
	public String customerSignIn(Users u){
		String msg = "failed";
		try {
			List<Users> users = customerRepository.getAllCustomers();
			
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
	public List<FoodItems> getAllFoodItems(){
		
		return foodItemsRepository.findAll();
	}
	
	
	
	@Transactional
	public FoodItems getFoodById(int foodId) {
		
		return foodItemsRepository.findByFoodId(foodId);
	}
	
	
	@Transactional
	public int getCustomeUserId(String userName) {
		
		return customerRepository.getCustomeUserId(userName);
	}
	
	
	@Transactional
	public boolean makePurchase(String userName, List<CartDetails> cartDetails) {
		try {
		int total_price = 0;
		for(CartDetails cd: cartDetails) {
			
			int fp = cd.getFoodPrice();
			
			int quant = cd.getQuantityOrdered();
			
			int thePrice = fp*quant;
			total_price += thePrice;
			
			foodItemsRepository.updateQuantity(cd.getFoodId(),cd.getQuantityOrdered());
			
		}
		Orders o = new Orders();
		Users u = new Users();
		int cid = customerRepository.getCustomeUserId(userName);
		u.setUserId(cid);
		
		o.setUser(u);
		
		o.setTotalPrice(total_price);
		o.setOrderDate(LocalDate.now());
		
		Orders ord = ordersRepository.save(o);
		
		int oid = ord.getOrderId();
		
		
		for(CartDetails cd: cartDetails) {
		OrderedItems ordItem = new OrderedItems();
		ordItem.setUser(u);
		
		FoodItems f = new FoodItems();
		f.setFoodId(cd.getFoodId());
		ordItem.setFoodItem(f);
		
		Orders o2 = new Orders();
		o2.setOrderId(oid);
		
		ordItem.setOrders(o2);
		
		ordItem.setQuantityOrdered(cd.getQuantityOrdered());
		
		orderedItemsRepository.save(ordItem);
		
		}
		
		
		
		
		return true;
		}
		
		catch(Exception e) {
			
			return false;
		}
	}
	
	
	
	
	
	
	@Transactional
	public List<OrderedItems> getPurchaseHistory(String userName){
		
		int cid = customerRepository.getCustomeUserId(userName);
		return orderedItemsRepository.findOrderedItemsByCustomerId(cid);
		//return orderedItemsRepository.findAll();
		
	}
	
	
	
	
}
