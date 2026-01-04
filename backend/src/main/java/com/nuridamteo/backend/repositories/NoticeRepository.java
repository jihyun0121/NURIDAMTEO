package com.nuridamteo.backend.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Notice;
import com.nuridamteo.backend.enums.NoticeType;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findByNoticeTypeOrderByIsPinnedDescNoticeIdDesc(NoticeType noticeType);

    List<Notice> findByNoticeTypeOrderByNoticeIdDesc(NoticeType noticeType);

    @Query("""
        SELECT n FROM Notice n
        WHERE n.noticeType = :type
        AND (n.title LIKE %:keyword% OR n.content LIKE %:keyword%)
        ORDER BY n.noticeId DESC
    """)
    List<Notice> searchByKeywordAndType(@Param("keyword") String keyword, @Param("type") NoticeType type);
}
