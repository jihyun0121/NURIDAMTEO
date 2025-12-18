package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.dtos.NoticeDTO;
import com.nuridamteo.backend.entities.Notice;
import com.nuridamteo.backend.enums.NoticeType;
import com.nuridamteo.backend.repositories.NoticeRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeRepository noticeRepository;

    @Transactional(readOnly = true)
    public List<NoticeDTO> getNotice() {
        return noticeRepository.findByNoticeTypeOrderByIsPinnedDescNoticeId(NoticeType.NOTICE).stream()
                .map(this::noticeDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<NoticeDTO> getNews() {
        return noticeRepository.findByNoticeTypeOrderByIsPinnedDescNoticeId(NoticeType.NEWS).stream()
                .map(this::noticeDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<NoticeDTO> getNewses() {
        return noticeRepository.findByNoticeTypeOrderByNoticeIdDesc(NoticeType.NEWS).stream()
                .map(this::noticeDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public NoticeDTO getDetail(Long noticeId) {
        Notice notice = noticeRepository.findById(noticeId)
                .orElseThrow(() -> new IllegalArgumentException("공지를 찾을 수 없습니다"));

        return noticeDTO(notice);
    }

    private NoticeDTO noticeDTO(Notice n) {
        return NoticeDTO.builder()
                .noticeId(n.getNoticeId())
                .noticeType(n.getNoticeType())
                .title(n.getTitle())
                .content(n.getContent())
                .isPinned(n.getIsPinned())
                .createdAt(n.getCreatedAt())
                .build();
    }
}