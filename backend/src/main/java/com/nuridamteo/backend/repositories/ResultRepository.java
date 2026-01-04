package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    List<Result> findAllByOrderByResultIdDesc();

    @Query("""
        SELECT r FROM Result r
        WHERE r.resultTitle LIKE %:keyword%
        OR r.resultContent LIKE %:keyword%
        ORDER BY r.resultId DESC
    """)
    List<Result> searchByKeyword(@Param("keyword") String keyword);
}
