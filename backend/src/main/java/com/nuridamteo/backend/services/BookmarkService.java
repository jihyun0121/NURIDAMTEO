package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.BookmarkDTO;
import com.nuridamteo.backend.entities.Bookmark;
import com.nuridamteo.backend.entities.Notice;
import com.nuridamteo.backend.entities.Proposal;
import com.nuridamteo.backend.entities.Result;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.BookmarkRepository;
import com.nuridamteo.backend.repositories.NoticeRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.ResultRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;
    private final UserRepository userRepository;
    private final ResultRepository resultRepository;
    private final NoticeRepository noticeRepository;
    private final ProposalRepository proposalRepository;

    public BookmarkDTO createBookmark(BookmarkDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        Result result = null;
        Proposal proposal = null;
        Notice notice = null;

        if (dto.getResult() != null) {
            result = resultRepository.findById(dto.getResult())
                    .orElseThrow(() -> new RuntimeException("결과를 찾을 수 없습니다"));
        } else if (dto.getProposal() != null) {
            proposal = proposalRepository.findById(dto.getProposal())
                    .orElseThrow(() -> new RuntimeException("제안을 찾을 수 없습니다"));
        } else if (dto.getNotice() != null) {
            notice = noticeRepository.findById(dto.getNotice())
                    .orElseThrow(() -> new RuntimeException("공지를 찾을 수 없습니다"));
        } else {
            throw new IllegalArgumentException("결과 또는 제안 중 하나는 반드시 있어야 합니다");
        }

        Bookmark bookmark = Bookmark.builder()
                .user(user)
                .result(result)
                .proposal(proposal)
                .notice(notice)
                .build();

        Bookmark saved = bookmarkRepository.save(bookmark);
        return bookmarkDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<BookmarkDTO> getBookmarkProposal(Long userId) {
        return bookmarkRepository.findByUser_UserIdAndProposalIsNotNullOrderByBookmarkIdDesc(userId)
                .stream()
                .map(this::bookmarkDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<BookmarkDTO> getBookmarkResult(Long userId) {
        return bookmarkRepository.findNoticeOrResultBookmarks(userId)
                .stream()
                .map(this::bookmarkDTO)
                .toList();
    }

    @Transactional
    public void deleteBookmark(Long bookmarkId) {
        if (!bookmarkRepository.existsById(bookmarkId)) {
            throw new IllegalArgumentException("즐겨찾기를 찾을 수 없습니다");
        }
        bookmarkRepository.deleteById(bookmarkId);
    }

    private BookmarkDTO bookmarkDTO(Bookmark b) {
        return BookmarkDTO.builder()
                .bookmarkId(b.getBookmarkId())
                .user(b.getUser().getUserId())
                .proposal(b.getProposal() != null ? b.getProposal().getProposalId() : null)
                .result(b.getResult() != null ? b.getResult().getResultId() : null)
                .notice(b.getNotice() != null ? b.getNotice().getNoticeId() : null)
                .build();
    }

}
