package br.com.curso.faculdade.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Adm;
import br.com.curso.faculdade.entities.Denuncia;
import br.com.curso.faculdade.repositories.DenunciaRepository;

@Service
public class DenunciaService {

    @Autowired
    DenunciaRepository denunciaRepository;


    public List<Denuncia> findAll() {
        List<Denuncia> denuncia = denunciaRepository.findAll();
        return denuncia;
    }

    public Denuncia findByNome(String nome) {
        Optional<Denuncia> denuncia = denunciaRepository.findByNome(nome);
        return denuncia.orElse(null);
    }

    public Denuncia findById(Integer id) {
        Optional<Denuncia> denuncia = denunciaRepository.findById(id);
        return denuncia.orElse(null);
    }


      public Denuncia cadastrarDenuncia(Denuncia denuncia) {
        return denunciaRepository.save(denuncia);
    }

    public Denuncia atualizarDenuncia(Integer id, Denuncia denuncia) {
        Denuncia alterado = findById(id);
        if(alterado != null){
            alterado.setResolvido(denuncia.isResolvido());

            return denunciaRepository.save(alterado);
        }
        return null;
    }

    public void deletar(Integer id) {
        denunciaRepository.deleteById(id);
    }

    
}
