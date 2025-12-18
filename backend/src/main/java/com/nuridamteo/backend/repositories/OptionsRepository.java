package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Options;

@Repository
public interface OptionsRepository extends JpaRepository<Options, Long> {
    List<Options> findByQuestion_QuestionIdOrderByOptionOrderAsc(Long questionId);
}
