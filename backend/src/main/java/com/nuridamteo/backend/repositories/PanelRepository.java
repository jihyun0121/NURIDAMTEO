package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;
import com.nuridamteo.backend.entities.Panel;

@Repository
public interface PanelRepository extends JpaRepository<Panel, Long> {
    boolean existsBySurvey_SurveyIdAndUser_UserId(Long surveyId, Long userId);
}