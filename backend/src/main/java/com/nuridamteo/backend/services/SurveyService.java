package com.nuridamteo.backend.services;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.survey.OptionsDTO;
import com.nuridamteo.backend.dtos.survey.QuestionDTO;
import com.nuridamteo.backend.dtos.survey.SurveyDTO;
import com.nuridamteo.backend.entities.Options;
import com.nuridamteo.backend.entities.Question;
import com.nuridamteo.backend.entities.Survey;
import com.nuridamteo.backend.enums.SurveyType;
import com.nuridamteo.backend.repositories.OptionsRepository;
import com.nuridamteo.backend.repositories.QuestionRepository;
import com.nuridamteo.backend.repositories.SurveyRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class SurveyService {
    private final SurveyRepository surveyRepository;
    private final QuestionRepository questionRepository;
    private final OptionsRepository optionRepository;

    @Transactional(readOnly = true)
    public List<SurveyDTO> getSurvey() {
        return surveyRepository.findAllByOrderBySurveyIdDesc().stream()
                .map(this::surveyDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<SurveyDTO> getSurveyList() {
        return surveyRepository
                .findBySurveyTypeOrderBySurveyIdDesc(SurveyType.SURVEY).stream()
                .map(this::surveyDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<SurveyDTO> getPanelList() {
        return surveyRepository
                .findBySurveyTypeInOrderBySurveyIdDesc(List.of(SurveyType.SELECT, SurveyType.PANEL)).stream()
                .map(this::surveyDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<SurveyDTO> getSurveyFrom(Long surveyId) {
        return surveyRepository.findById(surveyId).stream()
                .map(this::surveyDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<QuestionDTO> getQuestionsByForm(Long surveyId) {
        return questionRepository.findBySurvey_SurveyIdOrderByQuestionOrderAsc(surveyId).stream()
                .map(this::qustionDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<OptionsDTO> getOptionsByQuestion(Long questionId) {
        return optionRepository.findByQuestion_QuestionIdOrderByOptionOrderAsc(questionId).stream()
                .map(this::optionDto)
                .collect(Collectors.toList());
    }

    private SurveyDTO surveyDTO(Survey s) {
        return SurveyDTO.builder()
                .surveyId(s.getSurveyId())
                .title(s.getTitle())
                .author(s.getAuthor())
                .description(s.getDescription())
                .result(s.getResult())
                .recruit(s.getRecruit())
                .surveyType(s.getSurveyType())
                .category(s.getCategory().getCategoryId())
                .status(s.getStatus())
                .startAt(s.getStartAt())
                .endAt(s.getEndAt())
                .rewarded(s.getRewarded())
                .viewCount(s.getViewCount())
                .participationCount(s.getParticipationCount())
                .build();
    }

    private QuestionDTO qustionDto(Question q) {
        return QuestionDTO.builder()
                .questionId(q.getQuestionId())
                .survey(q.getSurvey().getSurveyId())
                .questionContent(q.getQuestionContent())
                .questionType(q.getQuestionType())
                .questionOrder(q.getQuestionOrder())
                .build();
    }

    private OptionsDTO optionDto(Options o) {
        return OptionsDTO.builder()
                .optionId(o.getOptionId())
                .question(o.getQuestion().getQuestionId())
                .optionContent(o.getOptionContent())
                .optionOrder(o.getOptionOrder())
                .build();
    }
}
