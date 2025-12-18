package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Level;

@Repository
public interface LevelRepository extends JpaRepository<Level, Long> {

}