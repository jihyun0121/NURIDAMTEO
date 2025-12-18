package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
