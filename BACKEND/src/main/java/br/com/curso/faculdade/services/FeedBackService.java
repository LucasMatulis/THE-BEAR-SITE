package br.com.curso.faculdade.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.FeedBack;
import br.com.curso.faculdade.repositories.FeedBackRepository;

@Service
public class FeedBackService {
    
    @Autowired
    FeedBackRepository feedBackRepository;


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
