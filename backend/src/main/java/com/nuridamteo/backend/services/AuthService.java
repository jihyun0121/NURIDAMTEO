package com.nuridamteo.backend.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nuridamteo.backend.configs.jwt.JWToken;
import com.nuridamteo.backend.dtos.LoginDTO;
import com.nuridamteo.backend.dtos.SignupDTO;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWToken jwToken;

    @Transactional
    public void signUp(SignupDTO dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("이미 가입된 이메일입니다.");
        }

        Users user = Users.builder()
                .email(dto.getEmail())
                .password(passwordEncoder.encode(dto.getPassword()))
                .build();

        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public LoginDTO login(LoginDTO dto) {
        Users user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 이메일입니다"));

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }

        String token = jwToken.createToken(
                user.getUserId(),
                user.getEmail());

        return LoginDTO.builder()
                .token(token)
                .userId(user.getUserId())
                .email(user.getEmail())
                .name(user.getName())
                .build();
    }
}
