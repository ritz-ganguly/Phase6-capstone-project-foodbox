package com.boot.phase6finalproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.boot.phase6finalproject.entity.Users;
@Repository
public interface AdminRepository extends JpaRepository<Users, Integer> {

	
	@Query(
			value ="select * from users u where u.user_type = '" + "customer" +"'",nativeQuery = true
			)
	List<Users> getAllCustomers();
	
	
	
	@Query(
			value ="select * from users u where u.user_type = '" + "admin" +"'",nativeQuery = true
			)
	List<Users> getAllAdmins();


	@Query(value = "select DISTINCT c.cuisine_name from cuisines c",nativeQuery =true)
	List<Object[]> getUniqueCuisineNames();



}
