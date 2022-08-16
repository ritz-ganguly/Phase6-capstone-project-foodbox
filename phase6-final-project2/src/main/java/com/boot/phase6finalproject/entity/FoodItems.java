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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity(name = "food_items")
@Table(name="food_items")
public class FoodItems implements Serializable{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "food_id" ,unique = true)
	private int foodId;
	
	
	@Column(name= "food_name")
	private String foodName;
	
	@Column(name= "food_price")
	private int foodPrice;
	
	
    @ManyToOne
	@JoinColumn(name = "cuisine_id")
	//@JsonIgnoreProperties("foodItems")
	//@JsonBackReference
	private Cuisines cuisine;
	
	
 	@Column(name= "description")
	private String description;
 	
 	@Column(name= "is_available")
	private String isAvailable;
 	
 	
 	@Column(name= "image_path")
	private String imagePath;
 	
 	
 	@Column(name= "available_quantity")
	private int availableQuantity;
 	
 	@OneToMany(mappedBy="foodItem", 	
			 targetEntity=OrderedItems.class)
	//@JsonIgnoreProperties("foodItem")
 	//@JsonManagedReference
 	@JsonIgnore
 	private List<OrderedItems> orderedItems = new ArrayList<>();
 	
 	public FoodItems() {
		// TODO Auto-generated constructor stub
	}
 	
    

	public FoodItems(String foodName, int foodPrice, String description, String isAvailable, String imagePath,
			int availableQuantity) {
		this.foodName = foodName;
		this.foodPrice = foodPrice;
		this.description = description;
		this.isAvailable = isAvailable;
		this.imagePath = imagePath;
		this.availableQuantity = availableQuantity;
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



	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public int getFoodPrice() {
		return foodPrice;
	}

	public void setFoodPrice(int foodPrice) {
		this.foodPrice = foodPrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIsAvailable() {
		return isAvailable;
	}

	public void setIsAvailable(String isAvailable) {
		this.isAvailable = isAvailable;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public int getAvailableQuantity() {
		return availableQuantity;
	}

	public void setAvailableQuantity(int availableQuantity) {
		this.availableQuantity = availableQuantity;
	}



	public Cuisines getCuisine() {
		return cuisine;
	}



	public void setCuisine(Cuisines cuisine) {
		this.cuisine = cuisine;
	}
 	
 	
 	
 	
 	
}
