package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Comments;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Long> {
}
