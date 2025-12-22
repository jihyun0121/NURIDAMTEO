package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.AnswerDTO;
import com.nuridamteo.backend.entities.Answer;
import com.nuridamteo.backend.entities.Options;
import com.nuridamteo.backend.entities.Participation;
import com.nuridamteo.backend.entities.Question;
import com.nuridamteo.backend.repositories.AnswerRepository;
import com.nuridamteo.backend.repositories.OptionsRepository;
import com.nuridamteo.backend.repositories.ParticipationRepository;
import com.nuridamteo.backend.repositories.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final OptionsRepository optionRepository;
    private final ParticipationRepository participationRepository;

    public AnswerDTO createAnswer(AnswerDTO dto) {
        Participation participation = participationRepository.findById(dto.getParticipation())
                .orElseThrow(() -> new IllegalArgumentException("참여 정보를 찾을 수 없습니다"));

        Question question = questionRepository.findById(dto.getQuestion())
                .orElseThrow(() -> new IllegalArgumentException("질문을 찾을 수 없습니다"));

        Options option = dto.getOption() != null
                ? optionRepository.findById(dto.getOption())
                        .orElseThrow(() -> new IllegalArgumentException("옵션을 찾을 수 없습니다"))
                : null;

        Answer answer = Answer.builder()
                .participation(participation)
                .question(question)
                .option(option)
                .answerText(dto.getAnswerText())
                .build();

        return toDTO(answerRepository.save(answer));
    }

    @Transactional(readOnly = true)
    public List<AnswerDTO> getAnswers(Long answerId) {
        return answerRepository.findById(answerId).stream().map(this::toDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<AnswerDTO> getAnswersBySurvey(Long surveyId) {
        return answerRepository.findByParticipation_TargetId(surveyId).stream().map(this::toDTO).toList();
    }

    private AnswerDTO toDTO(Answer a) {
        return AnswerDTO.builder()
                .answerId(a.getAnswerId())
                .participation(a.getParticipation().getParticipationId())
                .question(a.getQuestion().getQuestionId())
                .option(a.getOption() != null ? a.getOption().getOptionId() : null)
                .answerText(a.getAnswerText())
                .build();
    }
}
