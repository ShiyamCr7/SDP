package com.tucs215.policychunk.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tucs215.policychunk.model.Claim;
import com.tucs215.policychunk.service.ClaimService;


@RestController
@RequestMapping("/claims")
public class ClaimController {
    @Autowired
    private ClaimService claimService;

    @PostMapping
    public ResponseEntity<Claim> fileClaim(@RequestBody Claim claim) {
        Claim savedClaim = claimService.fileClaim(claim);
        return new ResponseEntity<>(savedClaim, HttpStatus.CREATED);
    }

    @PutMapping("/{claimNo}/action")
    public ResponseEntity<Claim> updateClaimAction(@PathVariable Long claimNo, @RequestBody Map<String, Boolean> action) {
        Claim updatedClaim = claimService.updateClaimAction(claimNo, action.get("action"));
        return ResponseEntity.ok(updatedClaim);
    }
}