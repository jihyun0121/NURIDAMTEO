package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.entities.Notice;
import com.nuridamteo.backend.entities.Proposal;
import com.nuridamteo.backend.entities.Result;
import com.nuridamteo.backend.entities.Survey;
import com.nuridamteo.backend.enums.NoticeType;
import com.nuridamteo.backend.enums.SurveyType;
import com.nuridamteo.backend.repositories.NoticeRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.ResultRepository;
import com.nuridamteo.backend.repositories.SurveyRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SearchService {

    private final ProposalRepository proposalRepository;
    private final SurveyRepository surveyRepository;
    private final NoticeRepository noticeRepository;
    private final ResultRepository resultRepository;

    public List<Proposal> searchProposals(String keyword) {
        return proposalRepository.searchByKeyword(keyword.trim());
    }

    public List<Survey> searchSurveys(String keyword) {
        return surveyRepository.searchByKeywordAndType(keyword.trim(), SurveyType.SURVEY);
    }

    public List<Survey> searchPanels(String keyword) {
        return surveyRepository.searchByKeywordAndTypes(keyword.trim(), List.of(SurveyType.PANEL, SurveyType.SELECT));
    }

    public List<Notice> searchNotices(String keyword) {
        return noticeRepository.searchByKeywordAndType(keyword.trim(), NoticeType.NOTICE);
    }

    public List<Notice> searchNews(String keyword) {
        return noticeRepository.searchByKeywordAndType(keyword.trim(), NoticeType.NEWS);
    }

    public List<Result> searchResults(String keyword) {
        return resultRepository.searchByKeyword(keyword.trim());
    }

    public List<Proposal> searchCategoryProposals(Long categoryId) {
        return proposalRepository.findByCategory_CategoryIdOrderByProposalIdDesc(categoryId);
    }

    public List<Survey> searchCategorySurveys(Long categoryId) {
        return surveyRepository.findByCategory_CategoryIdOrderBySurveyIdDesc(categoryId);
    }
}
