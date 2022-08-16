package com.boot.phase6finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.boot.phase6finalproject.entity.Cuisines;


@Repository
public interface CuisinesRepository extends JpaRepository<Cuisines, Integer> {

	
	@Query(value = "select c.cuisine_id from cuisines c where c.cuisine_name = :cuisineName",
			nativeQuery = true)
	int getCuisineId(String cuisineName);
}
