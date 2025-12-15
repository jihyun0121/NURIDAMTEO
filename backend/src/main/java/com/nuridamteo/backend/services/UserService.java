package com.nuridamteo.backend.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.dtos.PasswordDTO;
import com.nuridamteo.backend.dtos.user.ProfileDTO;
import com.nuridamteo.backend.dtos.user.SettingDTO;
import com.nuridamteo.backend.dtos.user.UserProfileDTO;
import com.nuridamteo.backend.entities.Profile;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.ProfileRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ProfileRepository profileRepository;

    @Transactional(readOnly = true)
    public UserProfileDTO getUser(Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        Profile profile = profileRepository.findByUser_UserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        return UserProfileDTO.builder()
                .userId(user.getUserId())
                .email(user.getEmail())
                .name(profile.getName())
                .gender(profile.getGender())
                .birthday(profile.getBirthday())
                .residence(profile.getResidence())
                .postalCode(profile.getPostalCode())
                .totalMileage(user.getTotalMileage())
                .accessibilityMode(user.getAccessibilityMode())
                .notificationEnabled(user.getNotificationEnabled())
                .isDeleted(user.getIsDeleted())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
    }

    @Transactional
    public void updateProfile(Long userId, ProfileDTO dto) {
        Profile profile = profileRepository.findByUser_UserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("프로필이 없습니다"));

        if (dto.getName() != null)
            profile.setName(dto.getName());
        if (dto.getResidence() != null)
            profile.setResidence(dto.getResidence());
        if (dto.getPostalCode() != null)
            profile.setPostalCode(dto.getPostalCode());
    }

    @Transactional
    public void updateSetting(Long userId, SettingDTO dto) {
        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("프로필이 없습니다"));

        if (dto.getEmail() != null)
            users.setEmail(dto.getEmail());
        if (dto.getTotalMileage() != null)
            users.setTotalMileage(dto.getTotalMileage());
        if (dto.getAccessibilityMode() != null)
            users.setAccessibilityMode(dto.getAccessibilityMode());
        if (dto.getNotificationEnabled() != null)
            users.setNotificationEnabled(dto.getNotificationEnabled());
        if (dto.getIsDeleted() != null)
            users.setIsDeleted(dto.getIsDeleted());
        users.setUpdatedAt(dto.getUpdatedAt());
    }

    @Transactional
    public void updatePassword(Long userId, PasswordDTO dto) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));

        if (!passwordEncoder.matches(dto.getCurrentPassword(), user.getPassword())) {
            throw new IllegalArgumentException("기존 비밀번호가 일치하지 않습니다");
        }

        user.setPassword(passwordEncoder.encode(dto.getNewPassword()));
    }
}