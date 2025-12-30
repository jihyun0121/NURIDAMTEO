package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Mileage;

@Repository
public interface MileageRepository extends JpaRepository<Mileage, Long> {
    List<Mileage> findAllByUser_UserIdOrderByCreatedAtDesc(Long userId);
}