package com.tucs215.policychunk.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs215.policychunk.model.Claim;

// @Repository
// public interface ClaimRepository extends JpaRepository<Claim, Long> {
// }

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long> {
}