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
import com.nuridamteo.backend.repositories.PanelRepository;
import com.nuridamteo.backend.repositories.QuestionRepository;
import com.nuridamteo.backend.repositories.SurveyRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class SurveyService {
	private final SurveyRepository surveyRepository;
	private final UserRepository userRepository;
	private final QuestionRepository questionRepository;
	private final OptionsRepository optionRepository;
	private final PanelRepository panelRepository;

	@Transactional(readOnly = true)
	public SurveyDTO getSurvey(Long surveyId) {
		Survey survey = surveyRepository.findById(surveyId)
				.orElseThrow(() -> new IllegalArgumentException("결과를 찾을 수 없습니다"));

		return surveyDTO(survey);
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
				.findBySurveyTypeInOrderBySurveyIdDesc(List.of(SurveyType.SELECT, SurveyType.PANEL))
				.stream()
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
				.map(this::qustionDTO)
				.collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public List<OptionsDTO> getOptionsByQuestion(Long questionId) {
		return optionRepository.findByQuestion_QuestionIdOrderByOptionOrderAsc(questionId).stream()
				.map(this::optionDTO)
				.collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public boolean checkSurveySelection(Long surveyId, Long userId) {
		userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));
		surveyRepository.findById(surveyId)
				.orElseThrow(() -> new IllegalArgumentException("설문을 찾을 수 없습니다."));

		return panelRepository
				.existsBySurvey_SurveyIdAndUser_UserId(surveyId, userId);
	}

	@Transactional
	public SurveyDTO updateView(Long surveyId) {
		Survey survey = surveyRepository.findById(surveyId)
				.orElseThrow(() -> new IllegalArgumentException("설문을 찾을 수 없습니다."));

		survey.setViewCount(survey.getViewCount() + 1);
		return surveyDTO(survey);
	}

	@Transactional
	public SurveyDTO updateParticipate(Long surveyId) {
		Survey survey = surveyRepository.findById(surveyId)
				.orElseThrow(() -> new IllegalArgumentException("설문을 찾을 수 없습니다."));

		survey.setParticipationCount(survey.getParticipationCount() + 1);
		return surveyDTO(survey);
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

	private QuestionDTO qustionDTO(Question q) {
		return QuestionDTO.builder()
				.questionId(q.getQuestionId())
				.survey(q.getSurvey().getSurveyId())
				.questionContent(q.getQuestionContent())
				.questionType(q.getQuestionType())
				.questionOrder(q.getQuestionOrder())
				.build();
	}

	private OptionsDTO optionDTO(Options o) {
		return OptionsDTO.builder()
				.optionId(o.getOptionId())
				.question(o.getQuestion().getQuestionId())
				.optionContent(o.getOptionContent())
				.optionOrder(o.getOptionOrder())
				.build();
	}
}
