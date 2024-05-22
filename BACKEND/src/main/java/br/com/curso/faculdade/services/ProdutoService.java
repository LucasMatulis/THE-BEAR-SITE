package br.com.curso.faculdade.services;

import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Adm;
import br.com.curso.faculdade.entities.Produto;
import br.com.curso.faculdade.repositories.ProdutoRepository;

@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository produtoRepository;

    @Bean
    public void instanciarProdutos() throws ParseException{
        Produto produto1 = new Produto("Bolinha de Queijo", 25.34, "Bolinha crocante recheada com queijo e coberta com cabelinho de anjo frito", 1);
        Produto produto2 = new Produto("Coca-Cola", 5.00, "Refrigerante de cola, 350ml", 2);
        Produto produto3 = new Produto("Pastel de Carne", 8.50, "Pastel frito recheado com carne moída e temperos", 1);
        Produto produto4 = new Produto("Agua Mineral", 3.00, "Água mineral sem gás, 500ml", 2);
        Produto produto5 = new Produto("Coxinha de Frango", 7.00, "Coxinha de massa crocante recheada com frango desfiado", 1);
        Produto produto6 = new Produto("Suco de Laranja", 4.50, "Suco natural de laranja, 300ml", 2);
        Produto produto7 = new Produto("Empada de Palmito", 6.00, "Empada recheada com palmito e azeitonas", 1);
        Produto produto8 = new Produto("Café Expresso", 3.50, "Café expresso forte, 50ml", 2);
        Produto produto9 = new Produto("Pão de Queijo", 2.50, "Pão de queijo tradicional, 50g", 1);
        Produto produto10 = new Produto("Chá Gelado", 4.00, "Chá gelado sabor limão, 300ml", 2);


        produtoRepository.saveAll(Arrays.asList(produto1,produto2,produto3,produto4,produto5,produto6,produto7,produto8,produto9,produto10));
    }

    public List<Produto> findAll() {
        List<Produto> produto = produtoRepository.findAll();
        return produto;
    }

    public Produto findByNome(String nome) {
        Optional<Produto> produto = produtoRepository.findByNome(nome);
        return produto.orElse(null);
    }

    public Produto findById(Integer id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        return produto.orElse(null);
    }

    public List<Produto> findByTipo(Integer tipo) {
        List<Produto> produto = produtoRepository.findByTipo(tipo);
        return produto;
    }
    

    public Produto cadastrarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto atualizarProduto(Integer id, Produto produto) {
        Produto alterado = findById(id);
        if(alterado != null){
            alterado.setNome(produto.getNome());
            alterado.setPreco(produto.getPreco());
            alterado.setDescricao(produto.getDescricao());
            alterado.setTipo(produto.getTipo());
            return produtoRepository.save(alterado);
        }
        return null;
    }

    public void deletar(Integer id) {
        produtoRepository.deleteById(id);
    }
}