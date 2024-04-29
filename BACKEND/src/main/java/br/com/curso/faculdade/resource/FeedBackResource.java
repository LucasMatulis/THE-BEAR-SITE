package br.com.curso.faculdade.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.curso.faculdade.entities.FeedBack;
import br.com.curso.faculdade.services.FeedBackService;


@RestController
@RequestMapping(value = "/feedback")
public class FeedBackResource {
    
    @Autowired
    private FeedBackService feedBackService;

     @GetMapping()
    public List<FeedBack> findAll(){
        List<FeedBack> feedBack = feedBackService.findAll();
        return feedBack;
    } 

    @GetMapping("/{id}")
    public ResponseEntity<FeedBack> findById(@PathVariable Integer id){
        FeedBack feedBack = feedBackService.findById(id);
        return ResponseEntity.ok().body(feedBack);
    }


    @GetMapping("/nome/{nome}")
    public ResponseEntity<FeedBack> findByNome(@PathVariable String nome){
        FeedBack feedBack = feedBackService.findByNome(nome);
        return ResponseEntity.ok().body(feedBack);
    }

    
    @PostMapping
    public ResponseEntity<FeedBack> cadastrarFeedBack(@RequestBody FeedBack feedBack){
        feedBack = feedBackService.cadastrasFeedBack(feedBack);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(feedBack.getId()).toUri();
        return ResponseEntity.created(uri).body(feedBack);   
    }


    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id){
        feedBackService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
