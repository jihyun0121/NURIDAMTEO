package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.SurveyDTO;
import com.nuridamteo.backend.entities.Survey;
import com.nuridamteo.backend.enums.SurveyType;
import com.nuridamteo.backend.repositories.SurveyRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class SurveyService {
    private final SurveyRepository surveyRepository;

    @Transactional(readOnly = true)
    public List<SurveyDTO> getSurvey() {
        return surveyRepository.findAllById().stream()
                .map(this::surveyDTO).toList();
    }

    public List<SurveyDTO> getSurveyList() {
        return surveyRepository
                .findBySurveyTypeOrderBySurveyIdDesc(SurveyType.SURVEY).stream()
                .map(this::surveyDTO).toList();
    }

    public List<SurveyDTO> getPanelList() {
        return surveyRepository
                .findBySurveyTypeInOrderBySurveyIdDesc(List.of(SurveyType.SELECT, SurveyType.PANEL)).stream()
                .map(this::surveyDTO).toList();
    }

    private SurveyDTO surveyDTO(Survey survey) {
        return SurveyDTO.builder()
                .surveyId(survey.getSurveyId())
                .title(survey.getTitle())
                .author(survey.getAuthor())
                .description(survey.getDescription())
                .result(survey.getResult())
                .recruit(survey.getRecruit())
                .surveyType(survey.getSurveyType())
                .category(survey.getCategory())
                .status(survey.getStatus())
                .startAt(survey.getStartAt())
                .endAt(survey.getEndAt())
                .rewarded(survey.getRewarded())
                .viewCount(survey.getViewCount())
                .participationCount(survey.getParticipationCount())
                .build();
    }
}
