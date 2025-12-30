package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Mileage;

@Repository
public interface MileageRepository extends JpaRepository<Mileage, Long> {
}