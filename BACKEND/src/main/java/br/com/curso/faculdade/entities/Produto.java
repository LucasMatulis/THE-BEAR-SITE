package br.com.curso.faculdade.entities;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Produto")
public class Produto implements Serializable{

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "ID")
    int id;

    @Column (name = "Nome")
    String nome;

    @Column (name = "Preco")
    Double preco;

    @Column (name = "Descricao")
    String descricao;

    @Column (name = "tipo")
    int tipo;


    public Produto(){}

    public Produto(int id, String nome, Double preco, String descricao,int tipo) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.tipo=tipo;
    }
    
    public Produto(int id, String nome, Double preco, int tipo) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.tipo=tipo;
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

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }


    

}