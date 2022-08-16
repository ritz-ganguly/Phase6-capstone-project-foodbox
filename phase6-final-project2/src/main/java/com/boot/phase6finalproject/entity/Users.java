package com.boot.phase6finalproject.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity(name = "users")
@Table(name="users")
public class Users implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "user_id",unique = true)
    private int userId;
    
    @Column(name= "username")
	private String userName;
    
    
    @Column(name= "password")
	private String password;
    
    
    @Column(name= "email")
	private String email;
    
    
    @Column(name= "address")
	private String address;
    
    
    @Column(name= "user_type")
	private String userType;
    
    @Column(name= "mobile_number")
	private String mobileNumber;
    
    @OneToMany(mappedBy="user", 
			 targetEntity=Orders.class)
	//@JsonIgnoreProperties("user")
	//@JsonManagedReference
    @JsonIgnore
	
	private List<Orders> orders = new ArrayList<>();
    
    
    
    @OneToMany(mappedBy="user", 
			 targetEntity=OrderedItems.class)
	//@JsonIgnoreProperties("user")
    //@JsonManagedReference
    @JsonIgnore
    private List<OrderedItems> orderedItems = new ArrayList<>();
	
    
    public Users() {
		// TODO Auto-generated constructor stub
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

	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getUserType() {
		return userType;
	}


	public void setUserType(String userType) {
		this.userType = userType;
	}


	public String getMobileNumber() {
		return mobileNumber;
	}


	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}


	public List<Orders> getOrders() {
		return orders;
	}
    
    
	public void addOrder(Orders order) {
		orders.add(order);
	}

	
	public void removeOrder(Orders order)
	
	{
		
		orders.remove(order);
	}
    

}
