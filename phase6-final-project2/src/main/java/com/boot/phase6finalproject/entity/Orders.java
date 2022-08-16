package com.boot.phase6finalproject.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity(name = "orders")
@Table(name="orders")
public class Orders implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "order_id"  ,unique = true)
	private int orderId;
	
	@Column(name= "total_price")
	private int totalPrice;
	
	
	@Column(name= "order_date")
	private LocalDate orderDate;
	
	
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	//@JsonIgnoreProperties("orders")
	//@JsonBackReference
	private Users user;
	
	
	
	
	@OneToMany(mappedBy="orders", 
			 targetEntity=OrderedItems.class)
	//@JsonIgnoreProperties("orders")
	//@JsonManagedReference
	@JsonIgnore
	
	private List<OrderedItems> orderedItems = new ArrayList<>();
	
	
	public Orders() {
		// TODO Auto-generated constructor stub
	}


	public Orders(int totalPrice, LocalDate orderDate) {
		this.totalPrice = totalPrice;
		this.orderDate = orderDate;
	}
   
	

	public List<OrderedItems> getOrderedItems() {
		return orderedItems;
	}

	
	public void addItemOrdered(OrderedItems orderedItem) {
		orderedItems.add(orderedItem);
	}

	
	public void removeItemOrdered(OrderedItems orderedItem)
	
	{
		
		orderedItems.remove(orderedItem);
	}

	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}


	public int getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}


	public LocalDate getOrderDate() {
		return orderDate;
	}


	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}


	public Users getUser() {
		return user;
	}


	public void setUser(Users user) {
		this.user = user;
	}
	
	


	
	

}
