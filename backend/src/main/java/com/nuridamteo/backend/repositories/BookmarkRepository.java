package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Bookmark;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findByUser_UserIdAndProposalIsNotNullOrderByBookmarkIdDesc(Long userId);

    @Query("""
                SELECT b
                FROM Bookmark b
                WHERE b.user.userId = :userId
                  AND (b.result IS NOT NULL OR b.notice IS NOT NULL)
                ORDER BY b.bookmarkId DESC
            """)
    List<Bookmark> findNoticeOrResultBookmarks(@Param("userId") Long userId);
}