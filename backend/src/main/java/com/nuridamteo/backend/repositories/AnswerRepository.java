package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
