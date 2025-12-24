package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.ProposalDTO;
import com.nuridamteo.backend.services.ProposalService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/proposals")
public class ProposalController {
    private final ProposalService proposalService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> createProposal(@PathVariable("userId") Long userId, @RequestBody ProposalDTO dto) {
        proposalService.createProposal(userId, dto);
        return ResponseEntity.ok(Map.of("message", "제안 생성 성공"));
    }

    @GetMapping
    public ResponseEntity<?> getProposals() {
        List<ProposalDTO> proposal = proposalService.getProposals();
        return ResponseEntity.ok(proposal);
    }

    @GetMapping("/{proposalId}")
    public ResponseEntity<?> getProposal(@PathVariable("proposalId") Long proposalId) {
        ProposalDTO proposal = proposalService.getProposal(proposalId);
        return ResponseEntity.ok(proposal);
    }

    @PatchMapping("/{proposalId}/state")
    public ResponseEntity<?> setState(@PathVariable("proposalId") Long proposalId, @RequestBody ProposalDTO dto) {
        ProposalDTO proposal = proposalService.setState(proposalId, dto);
        return ResponseEntity.ok(proposal);
    }
}