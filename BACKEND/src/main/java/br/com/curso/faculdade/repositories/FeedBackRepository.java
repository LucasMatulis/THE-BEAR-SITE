package br.com.curso.faculdade.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.curso.faculdade.entities.FeedBack;

@Repository
public interface FeedBackRepository extends JpaRepository<FeedBack, Integer> {

    Optional<FeedBack> findByNome(String nome);
    
}
