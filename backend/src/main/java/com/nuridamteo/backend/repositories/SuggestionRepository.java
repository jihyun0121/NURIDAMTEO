package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Suggestion;

@Repository
public interface SuggestionRepository extends JpaRepository<Suggestion, Long> {
    List<Suggestion> findAllByOrderBySuggestionIdDesc();
}
