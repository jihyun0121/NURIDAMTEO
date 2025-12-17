package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;

import com.nuridamteo.backend.entities.*;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findAllById();
}
