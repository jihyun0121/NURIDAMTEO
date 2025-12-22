package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Comments;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Long> {
    List<Comments> findByTargetIdOrderByCommentIdDesc(Long targetId);
}
