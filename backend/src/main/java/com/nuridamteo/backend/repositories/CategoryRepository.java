package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;

import com.nuridamteo.backend.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
