package br.com.curso.faculdade.configurations;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;


@Configuration
@Profile("teste")
public class TesteConfiguracao {
    @Autowired

    private boolean instanciar() throws ParseException{
        return true;
    }
}