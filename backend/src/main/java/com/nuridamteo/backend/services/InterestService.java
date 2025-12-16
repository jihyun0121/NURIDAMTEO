package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.dtos.CategoryDTO;
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
    public void selectInterests(Long userId, List<Long> categoryIds) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        for (Long categoryId : categoryIds) {
            Category category = categoryRepository.findById(categoryId)
                    .orElseThrow(() -> new IllegalArgumentException("카테고리를 찾을 수 없습니다"));

            if (interestRepository.existsByUser_UserIdAndCategory_CategoryId(userId, categoryId))
                continue;

            Interest interest = Interest.builder()
                    .id(new InterestId(userId, categoryId))
                    .user(user)
                    .category(category)
                    .build();

            interestRepository.save(interest);
        }
    }

    @Transactional(readOnly = true)
    public List<CategoryDTO> getInterests(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        return interestRepository.findAllByUser_UserId(userId).stream()
                .map(interest -> {
                    Category c = interest.getCategory();
                    return new CategoryDTO(
                            c.getCategoryId(),
                            c.getCategoryName());
                })
                .toList();
    }

    @Transactional
    public void updateInterests(Long userId, List<Long> categoryIds) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        List<Interest> existing = interestRepository.findAllByUser_UserId(userId);
        interestRepository.deleteAll(existing);

        for (Long categoryId : categoryIds) {
            Category category = categoryRepository.findById(categoryId)
                    .orElseThrow(() -> new IllegalArgumentException("카테고리를 찾을 수 없습니다"));

            InterestId id = new InterestId(userId, categoryId);

            Interest interest = Interest.builder()
                    .id(id)
                    .user(user)
                    .category(category)
                    .build();

            interestRepository.save(interest);
        }
    }
}
