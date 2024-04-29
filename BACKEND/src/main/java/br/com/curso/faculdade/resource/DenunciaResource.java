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

import br.com.curso.faculdade.entities.Denuncia;
import br.com.curso.faculdade.services.DenunciaService;


@RestController
@RequestMapping(value = "/denuncia")
public class DenunciaResource {

    @Autowired
    private DenunciaService denunciaService;

     @GetMapping()
    public List<Denuncia> findAll(){
        List<Denuncia> denuncia = denunciaService.findAll();
        return denuncia;
    } 

    @GetMapping("/{id}")
    public ResponseEntity<Denuncia> findById(@PathVariable Integer id){
        Denuncia denuncia = denunciaService.findById(id);
        return ResponseEntity.ok().body(denuncia);
    }


    @GetMapping("/nome/{nome}")
    public ResponseEntity<Denuncia> findByNome(@PathVariable String nome){
        Denuncia denuncia = denunciaService.findByNome(nome);
        return ResponseEntity.ok().body(denuncia);
    }

    
    @PostMapping
    public ResponseEntity<Denuncia> cadastrarDenuncia(@RequestBody Denuncia denuncia){
        denuncia = denunciaService.cadastrarDenuncia(denuncia);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(denuncia.getId()).toUri();
        return ResponseEntity.created(uri).body(denuncia);   
    }


    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id){
        denunciaService.deletar(id);
        return ResponseEntity.noContent().build();
    }
    
}
