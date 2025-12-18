package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Interest;
import com.nuridamteo.backend.entities.InterestId;

@Repository
public interface InterestRepository extends JpaRepository<Interest, InterestId> {
    boolean existsByUser_UserIdAndCategory_CategoryId(Long userId, Long categoryId);

    List<Interest> findAllByUser_UserId(Long userId);

    List<Interest> findByUser_UserId(Long userId);
}
