package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.dtos.NoticeDTO;
import com.nuridamteo.backend.entities.Notice;
import com.nuridamteo.backend.repositories.NoticeRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;

    @Transactional(readOnly = true)
    public List<NoticeDTO> getNotices() {
        return noticeRepository.findByTypeOrderByIsPinnedDescCreatedAtDesc("NOTICE").stream()
                .map(this::dto)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<NoticeDTO> getNews() {
        return noticeRepository.findByTypeOrderByIsPinnedDescCreatedAtDesc("NEWS").stream()
                .map(this::dto)
                .toList();
    }

    private NoticeDTO dto(Notice notice) {
        return NoticeDTO.builder()
                .noticeId(notice.getNoticeId())
                .title(notice.getTitle())
                .content(notice.getContent())
                .createdAt(notice.getCreatedAt())
                .build();
    }
}