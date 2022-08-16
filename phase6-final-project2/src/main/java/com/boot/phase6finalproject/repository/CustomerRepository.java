package com.boot.phase6finalproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.boot.phase6finalproject.entity.Users;

@Repository
public interface CustomerRepository extends JpaRepository<Users, Integer> {

	
	@Query(
			value ="select * from users u where u.user_type = '" + "customer" +"'",nativeQuery = true
			)
	List<Users> getAllCustomers();
	
	
	@Query(value = "select u.user_id from users u where u.username = :userName",nativeQuery = true)
	int getCustomeUserId(String userName);
	
	
	
	
}
