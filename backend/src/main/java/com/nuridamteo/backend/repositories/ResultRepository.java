package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    List<Result> findAllByOrderByResultIdDesc();
}
