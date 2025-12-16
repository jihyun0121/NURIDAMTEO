package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Notice;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findByTypeOrderByIsPinnedDescCreatedAtDesc(String type);
}
