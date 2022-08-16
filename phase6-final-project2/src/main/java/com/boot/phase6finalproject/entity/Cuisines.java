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



@Entity(name = "cuisines")
@Table(name="cuisines")
public class Cuisines implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "cuisine_id",unique = true)
	private int cuisineId;
	
	
	@Column(name= "cuisine_name")
	private String cuisineName;
	
	@OneToMany(mappedBy="cuisine", 
			
			 targetEntity=FoodItems.class)
	//@JsonIgnoreProperties("cuisine")
	//@JsonManagedReference
	@JsonIgnore
	private List<FoodItems> foodItems = new ArrayList<>();
	
	public Cuisines() {
		// TODO Auto-generated constructor stub
	}

	public int getCuisineId() {
		return cuisineId;
	}

	public void setCuisineId(int cuisineId) {
		this.cuisineId = cuisineId;
	}

	public String getCuisineName() {
		return cuisineName;
	}

	public void setCuisineName(String cuisineName) {
		this.cuisineName = cuisineName;
	}

	public List<FoodItems> getFoodItems() {
		return foodItems;
	}
	
	public void addFoodItem(FoodItems foodItem) {
		foodItems.add(foodItem);
	}

	
	public void removFoodItem(FoodItems foodItem)
	
	{
		
		foodItems.remove(foodItem);
	}
}
