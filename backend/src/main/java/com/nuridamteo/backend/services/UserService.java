package com.nuridamteo.backend.services;

import org.springframework.stereotype.Service;

import com.nuridamteo.backend.dtos.UsersDTO;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UsersDTO getUser(Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        return UsersDTO.builder()
                .userId(user.getUserId())
                .email(user.getEmail())
                .name(user.getName())
                .createdAt(user.getCreatedAt())
                .build();
    }
}
