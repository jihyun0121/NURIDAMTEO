package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.PasswordDTO;
import com.nuridamteo.backend.dtos.SettingDTO;
import com.nuridamteo.backend.services.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUser(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateUser(
            @PathVariable Long userId,
            @RequestBody SettingDTO dto) {
        userService.updateUser(userId, dto);
        return ResponseEntity.ok(Map.of("message", "회원정보 수정 완료"));
    }

    @PutMapping("/{userId}/password")
    public ResponseEntity<?> updatePassword(
            @PathVariable Long userId,
            @RequestBody PasswordDTO dto) {
        userService.updatePassword(userId, dto);
        return ResponseEntity.ok(Map.of("message", "비밀번호 변경 완료"));
    }
}