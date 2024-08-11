package com.tucs215.policychunk.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs215.policychunk.model.CustomerPolicy;

// @Repository
// public interface CustomerPolicyRepository extends JpaRepository<CustomerPolicy, Long> {
//     List<CustomerPolicy> findByCustomerEmail(String email);
// }

@Repository
public interface CustomerPolicyRepository extends JpaRepository<CustomerPolicy, Long> {
}