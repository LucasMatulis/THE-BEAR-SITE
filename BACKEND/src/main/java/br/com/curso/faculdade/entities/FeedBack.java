package br.com.curso.faculdade.entities;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "FeedBack")
public class FeedBack implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    int id;

    @Column(name = "Nome")
    String nome;

    @Column(name = "Texto")
    String texto;

    @Column(name = "Nota")
    Double nota;

    public FeedBack() {}

    public FeedBack(int id, String nome, String texto, Double nota) {
        this.id = id;
        this.nome = nome;
        this.texto = texto;
        this.nota = nota;
    }

    public FeedBack(String nome, String texto, Double nota) {
        this.nome = nome;
        this.texto = texto;
        this.nota = nota;
    }

    public FeedBack(String texto, Double nota) {
        this.texto = texto;
        this.nota = nota;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }
}
