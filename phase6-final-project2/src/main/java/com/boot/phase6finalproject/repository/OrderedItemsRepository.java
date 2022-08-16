package com.boot.phase6finalproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.boot.phase6finalproject.entity.OrderedItems;
@Repository
public interface OrderedItemsRepository extends JpaRepository<OrderedItems, Integer> {

	
	@Query(value = "select * from ordered_items b where b.user_id = :uid", nativeQuery = true)
	List<OrderedItems> findOrderedItemsByCustomerId(int uid);
}
