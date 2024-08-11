package com.tucs215.policychunk.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs215.policychunk.model.Policy;

// @Repository
// public interface PolicyRepository extends JpaRepository<Policy, Long> {
// }

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    
}