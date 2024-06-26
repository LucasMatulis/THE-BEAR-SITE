package br.com.curso.faculdade.services;

import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Adm;
import br.com.curso.faculdade.repositories.AdmRepository;

@Service
public class AdmService {
    @Autowired
    AdmRepository admRepository;

    @Bean
    public void instanciarAdm() throws ParseException{
        Adm adm1= new Adm("Bear", "2031");

        admRepository.saveAll(Arrays.asList(adm1));
    }

    public List<Adm> findAll() {
        List<Adm> pessoa = admRepository.findAll();
        return pessoa;
    }

    public Adm findByNome(String nome) {
        Optional<Adm> adm = admRepository.findByNome(nome);
        return adm.orElse(null);
    }

    public Adm findById(Integer id) {
        Optional<Adm> pessoa = admRepository.findById(id);
        return pessoa.orElse(null);
    }
    

    public Adm cadastrarAdm(Adm adm) {
        return admRepository.save(adm);
    }

    public Adm atualizarAdm(Integer id, Adm adm) {
        Adm alterado = findById(id);
        if(alterado != null){
            alterado.setNome(adm.getNome());
            alterado.setSenha(adm.getSenha());

            return admRepository.save(alterado);
        }
        return null;
    }

    public void deletar(Integer id) {
        admRepository.deleteById(id);
    }
}