package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;

import com.nuridamteo.backend.entities.Level;

public interface LevelRepository extends JpaRepository<Level, Long> {

}