package com.nuridamteo.backend.services;

import java.util.*;
import java.util.stream.*;

import org.springframework.stereotype.*;

import com.nuridamteo.backend.entities.Answer;
import com.nuridamteo.backend.repositories.StatisticRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class StatisticService {
        private final StatisticRepository statisticRepository;

        public Map<Long, Double> getOptionStats(Long questionId) {
                List<Answer> answers = statisticRepository.findByQuestion_QuestionId(questionId);

                List<Answer> optionAnswers = answers.stream()
                                .filter(a -> a.getOption() != null)
                                .toList();

                long totalOptionAnswers = optionAnswers.size();

                if (totalOptionAnswers == 0) {
                        return Collections.emptyMap();
                }

                return optionAnswers.stream()
                                .collect(Collectors.groupingBy(
                                                a -> a.getOption().getOptionId(),
                                                Collectors.collectingAndThen(
                                                                Collectors.counting(),
                                                                cnt -> (cnt * 100.0) / totalOptionAnswers)));
        }
}