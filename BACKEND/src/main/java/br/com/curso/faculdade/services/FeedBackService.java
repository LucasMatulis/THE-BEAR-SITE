package br.com.curso.faculdade.services;


import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Denuncia;
import br.com.curso.faculdade.entities.FeedBack;
import br.com.curso.faculdade.repositories.FeedBackRepository;

@Service
public class FeedBackService {
    
    @Autowired
    FeedBackRepository feedBackRepository;

    @Bean
    public void instanciarFeedBack() throws ParseException{
        FeedBack feedBack1= new FeedBack("Carlinhos", "Privada do banheiro masculino, estava quebrada.",3.0);
        FeedBack feedBack2= new FeedBack("Maria", "Corrimão da escada está quebrado.", 5.0);
        FeedBack feedBack3= new FeedBack("Anonimo", "Corrimão da escada está quebrado.", 1.0);

        feedBackRepository.saveAll(Arrays.asList(feedBack1,feedBack2,feedBack3));
    }

    public List<FeedBack> findAll() {
        List<FeedBack> feedBack = feedBackRepository.findAll();
        return feedBack;
    }

    public FeedBack findByNome(String nome) {
        Optional<FeedBack> feedBack = feedBackRepository.findByNome(nome);
        return feedBack.orElse(null);
    }

    public FeedBack findById(Integer id) {
        Optional<FeedBack> feedBack = feedBackRepository.findById(id);
        return feedBack.orElse(null);
    }


      public FeedBack cadastrasFeedBack(FeedBack feedBack) {
        return feedBackRepository.save(feedBack);
    }

    public void deletar(Integer id) {
        feedBackRepository.deleteById(id);
    }
    
}
