package com.boot.phase6finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.boot.phase6finalproject.entity.FoodItems;

@Repository
public interface FoodItemsRepository extends JpaRepository<FoodItems, Integer> {
	
	FoodItems findByFoodId(int foodItem);
	
	
	
	
	@Modifying
	@Query(value = "update food_items f set available_quantity = available_quantity - :q where"
			+ " food_id = :fid", nativeQuery = true)
	void updateQuantity(int fid, int q);
	
	
	

}
