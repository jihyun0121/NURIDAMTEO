package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.dtos.InterestDTO;
import com.nuridamteo.backend.entities.Category;
import com.nuridamteo.backend.entities.Interest;
import com.nuridamteo.backend.entities.InterestId;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.CategoryRepository;
import com.nuridamteo.backend.repositories.InterestRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class InterestService {
    private final InterestRepository interestRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;

    @Transactional
    public void selectInterests(InterestDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));
        Category category = categoryRepository.findById(dto.getCategory())
                .orElseThrow(() -> new IllegalArgumentException("카테고리를 찾을 수 없습니다"));

        if (interestRepository.existsByUser_UserIdAndCategory_CategoryId(dto.getUser(), dto.getCategory())) {
            throw new IllegalArgumentException("이미 선택한 관심사입니다");
        }

        InterestId interestId = new InterestId(
                dto.getUser(),
                dto.getCategory());

        Interest interest = Interest.builder()
                .id(interestId)
                .user(user)
                .category(category)
                .build();

        interestRepository.save(interest);
    }

    @Transactional(readOnly = true)
    public List<Category> getInterests(Long userId) {

        userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        return interestRepository.findAllByUser_UserId(userId).stream()
                .map(Interest::getCategory)
                .toList();
    }

}
