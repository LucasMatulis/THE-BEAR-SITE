package br.com.curso.faculdade.configurations;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.curso.faculdade.services.AdmService;


@Configuration
@Profile("teste")
public class TesteConfiguracao {
    @Autowired
    AdmService admService;

    private boolean instanciar() throws ParseException{
        this.admService.instanciarAdm();
        return true;
    }
}