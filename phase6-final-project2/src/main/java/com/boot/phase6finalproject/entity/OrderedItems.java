package com.boot.phase6finalproject.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity(name = "ordered_items")
@Table(name="ordered_items")
public class OrderedItems implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "ordered_item_id" ,unique = true)
	private int orderedItemId;
	
	@Column(name= "quantity_ordered")
	private int quantityOrdered;
	
	@ManyToOne
	@JoinColumn(name = "food_id")
	//@JsonIgnoreProperties("orderedItems")
	//@JsonBackReference
	private FoodItems foodItem;
	
	
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	//@JsonIgnoreProperties("orderedItems")
	//@JsonBackReference
	private Users user;
	
	
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	//@JsonIgnoreProperties("orderedItems")
	//@JsonBackReference
	private Orders orders;
	
	
	
	
	
	
	
	
	public OrderedItems() {
		// TODO Auto-generated constructor stub
	}


	public OrderedItems(int quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}


	public int getOrderedItemId() {
		return orderedItemId;
	}


	public void setOrderedItemId(int orderedItemId) {
		this.orderedItemId = orderedItemId;
	}


	public int getQuantityOrdered() {
		return quantityOrdered;
	}


	public void setQuantityOrdered(int quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}


	public FoodItems getFoodItem() {
		return foodItem;
	}


	public void setFoodItem(FoodItems foodItem) {
		this.foodItem = foodItem;
	}


	public Users getUser() {
		return user;
	}


	public void setUser(Users user) {
		this.user = user;
	}


	public Orders getOrders() {
		return orders;
	}


	public void setOrders(Orders order) {
		this.orders = order;
	}
	
	
	
	

}
