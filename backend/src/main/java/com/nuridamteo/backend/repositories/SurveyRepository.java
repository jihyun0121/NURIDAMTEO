package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.*;
import com.nuridamteo.backend.enums.SurveyType;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findBySurveyTypeOrderBySurveyIdDesc(SurveyType surveyType);

    List<Survey> findBySurveyTypeInOrderBySurveyIdDesc(List<SurveyType> surveyTypes);
    
    @Query("""
        SELECT s FROM Survey s
        WHERE s.title LIKE %:keyword%
        OR s.description LIKE %:keyword%
        ORDER BY s.surveyId DESC
    """)
    List<Survey> searchByKeyword(@Param("keyword") String keyword);
}
