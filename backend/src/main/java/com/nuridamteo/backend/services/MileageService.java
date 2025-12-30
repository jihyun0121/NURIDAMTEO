package com.nuridamteo.backend.services;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.mileage.AddMileageDTO;
import com.nuridamteo.backend.dtos.mileage.MileageDTO;
import com.nuridamteo.backend.entities.Mileage;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.MileageRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class MileageService {
    private final MileageRepository mileageRepository;
    private final UserRepository userRepository;

    @Transactional
    public MileageDTO addMileage(AddMileageDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        user.setTotalMileage(user.getTotalMileage() + dto.getMileage());
        user.setMileage(user.getMileage() + dto.getMileage());

        return mileageDTO(mileageRepository.save(Mileage.builder()
                .user(user)
                .reasonDetail(dto.getReasonDetail())
                .mileage(dto.getMileage())
                .totalMileage(user.getTotalMileage())
                .createdAt(LocalDateTime.now())
                .build()));
    }

    @Transactional(readOnly = true)
    public List<MileageDTO> getMileageHistory(Long userId) {
        return mileageRepository.findAllByUser_UserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::mileageDTO).toList();
    }

    private MileageDTO mileageDTO(Mileage m) {
        return MileageDTO.builder()
                .mileageId(m.getMileageId())
                .user(m.getUser().getUserId())
                .reasonDetail(m.getReasonDetail())
                .totalMileage(m.getTotalMileage())
                .mileage(m.getMileage())
                .createdAt(m.getCreatedAt())
                .build();
    }
}
