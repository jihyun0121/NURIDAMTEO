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
                WHERE s.surveyType = :type
                AND (s.title LIKE %:keyword% OR s.description LIKE %:keyword%)
                ORDER BY s.surveyId DESC
            """)
    List<Survey> searchByKeywordAndType(@Param("keyword") String keyword, @Param("type") SurveyType type);

    @Query("""
                SELECT s FROM Survey s
                WHERE s.surveyType IN :types
                  AND (s.title LIKE %:keyword% OR s.description LIKE %:keyword%)
                ORDER BY s.surveyId DESC
            """)
    List<Survey> searchByKeywordAndTypes(@Param("keyword") String keyword, @Param("types") List<SurveyType> types);

    List<Survey> findByCategory_CategoryIdOrderBySurveyIdDesc(Long categoryId);
}
