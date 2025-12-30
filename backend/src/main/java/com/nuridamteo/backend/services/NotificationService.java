package com.nuridamteo.backend.services;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.notification.CreateNorificationDTO;
import com.nuridamteo.backend.dtos.notification.NotificationDTO;
import com.nuridamteo.backend.entities.Notification;
import com.nuridamteo.backend.entities.Proposal;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.NotificationRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;
    private final ProposalRepository proposalRepository;

    public NotificationDTO createNotifications(CreateNorificationDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));
        Proposal proposal = proposalRepository.findById(dto.getProposal())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        Notification notification = Notification.builder()
                .user(user)
                .proposal(proposal)
                .message(dto.getMessage())
                .notificationType(dto.getNotificationType())
                .createdAt(LocalDateTime.now())
                .build();

        Notification saved = notificationRepository.save(notification);
        return notificationDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<NotificationDTO> getNotifications(Long userId) {
        return notificationRepository.findAllByUser_UserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::notificationDTO).toList();
    }

    @Transactional
    public void readNotification(Long userId) {
        List<Notification> notifications = notificationRepository.findAllByUser_UserIdAndIsReadFalse(userId);

        if (notifications.isEmpty())
            return;

        notifications.forEach(notification -> {
            notification.setIsRead(true);
            notification.setReadAt(LocalDateTime.now());
        });
    }

    private NotificationDTO notificationDTO(Notification n) {
        return NotificationDTO.builder()
                .notificationId(n.getNotificationId())
                .user(n.getUser().getUserId())
                .proposal(n.getProposal().getProposalId())
                .message(n.getMessage())
                .notificationType(n.getNotificationType())
                .isRead(n.getIsRead())
                .createdAt(n.getCreatedAt())
                .readAt(n.getReadAt())
                .build();
    }
}
