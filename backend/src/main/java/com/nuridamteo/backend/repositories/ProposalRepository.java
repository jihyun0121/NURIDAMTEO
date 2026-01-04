package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Proposal;

@Repository
public interface ProposalRepository extends JpaRepository<Proposal, Long> {
    List<Proposal> findAllByOrderByProposalIdDesc();

    List<Proposal> findByUser_UserIdOrderByProposalIdDesc(Long userId);
    
    @Query("""
        SELECT p FROM Proposal p
        WHERE p.title LIKE %:keyword%
        OR p.content LIKE %:keyword%
        ORDER BY p.proposalId DESC
        """)
    List<Proposal> searchByKeyword(@Param("keyword") String keyword);
}
