package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.*;
import com.nuridamteo.backend.enums.SurveyType;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findBySurveyTypeOrderBySurveyIdDesc(SurveyType surveyType);

    List<Survey> findBySurveyTypeInOrderBySurveyIdDesc(List<SurveyType> surveyTypes);
}
