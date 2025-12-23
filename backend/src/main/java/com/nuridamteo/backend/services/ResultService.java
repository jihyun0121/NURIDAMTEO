package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.dtos.ResultDTO;
import com.nuridamteo.backend.entities.Result;
import com.nuridamteo.backend.repositories.ResultRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class ResultService {
    private final ResultRepository resultRepository;

    @Transactional(readOnly = true)
    public List<ResultDTO> getResults() {
        return resultRepository.findAllByOrderByResultIdDesc().stream().map(this::resultDTO).toList();
    }

    @Transactional(readOnly = true)
    public ResultDTO getResult(Long resultId) {
        Result result = resultRepository.findById(resultId)
                .orElseThrow(() -> new IllegalArgumentException("결과를 찾을 수 없습니다"));

        return resultDTO(result);
    }

    @Transactional
    public ResultDTO updateView(Long noticeId) {
        Result result = resultRepository.findById(noticeId)
                .orElseThrow(() -> new IllegalArgumentException("결과를 찾을 수 없습니다."));

        result.setViewCount(result.getViewCount() + 1);
        return resultDTO(result);
    }

    private ResultDTO resultDTO(Result r) {
        return ResultDTO.builder()
                .resultId(r.getResultId())
                .resultTitle(r.getResultTitle())
                .resultContent(r.getResultContent())
                .author(r.getAuthor())
                .viewCount(r.getViewCount())
                .build();
    }
}