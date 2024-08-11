package com.tucs215.policychunk.repo;


import com.tucs215.policychunk.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenRepo extends JpaRepository<Token, String> {

    Optional<Token> findByToken(String token);

    List<Token> findAllByCustomer_IdAndExpiredFalseAndRevokedFalse(Long customerId);
}