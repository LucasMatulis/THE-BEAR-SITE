package br.com.curso.faculdade.repositories;
import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.curso.faculdade.entities.Produto;



@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer>{

    Optional<Produto> findByNome(String nome);

    List<Produto> findByTipo(int tipo);


}