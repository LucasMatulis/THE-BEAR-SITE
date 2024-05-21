package br.com.curso.faculdade.entities;

import java.io.Serializable;
import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity(name = "Denuncia")
public class Denuncia implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    int id;

    @Column(name = "Nome")
    String nome;

    @Column(name = "Texto")
    String texto;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dataCriacao")
    private Date dataCriacao;
    
    @Column(name = "Resolvido")
    private boolean resolvido;

    public Denuncia() {
        this.resolvido = false;
    }

    public Denuncia(int id, String nome, String texto) {
        this.id = id;
        this.nome = nome;
        this.texto = texto;
        this.resolvido = false;
    }

    public Denuncia(String texto) {
        this.texto = texto;
        this.resolvido = false;
    }

    @PrePersist
    protected void onCreate() {
        dataCriacao = new Date();
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

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public boolean isResolvido() {
        return resolvido;
    }

    public void setResolvido(boolean resolvido) {
        this.resolvido = resolvido;
    }
}
