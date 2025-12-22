package com.nuridamteo.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Participation;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Long> {
    List<Participation> findByTargetIdOrderByParticipationIdDesc(Long targetId);
}
