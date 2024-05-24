package br.com.curso.faculdade.services;


import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Denuncia;
import br.com.curso.faculdade.repositories.DenunciaRepository;

@Service
public class DenunciaService {

    @Autowired
    DenunciaRepository denunciaRepository;


    @Bean
    public void instanciarDenuncia() throws ParseException{
        Denuncia denuncia1= new Denuncia("Carlinhos", "Privada do banheiro masculino, estava quebrada.");
        Denuncia denuncia2= new Denuncia("Maria", "Corrimão da escada está quebrado.", true);
        Denuncia denuncia3= new Denuncia("Anonimo", "Corrimão da escada está quebrado.");

        denunciaRepository.saveAll(Arrays.asList(denuncia1,denuncia2,denuncia3));
    }


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
