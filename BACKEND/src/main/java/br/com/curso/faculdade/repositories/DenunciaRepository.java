package br.com.curso.faculdade.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.curso.faculdade.entities.Denuncia;

@Repository
public interface DenunciaRepository extends JpaRepository<Denuncia, Integer>{

    Optional<Denuncia> findByNome(String nome);

    
}
