package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findByParticipation_TargetId(Long surveyId);

    List<Answer> findByQuestion_QuestionId(Long qeustionId);

    List<Answer> findByParticipation_ParticipationId(Long participationId);
}
