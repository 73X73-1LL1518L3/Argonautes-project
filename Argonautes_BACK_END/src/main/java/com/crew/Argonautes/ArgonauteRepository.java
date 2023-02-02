package com.crew.Argonautes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArgonauteRepository extends JpaRepository<Argonaute, Long> {

}
