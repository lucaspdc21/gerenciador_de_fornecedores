import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String endereco;
    // Outros campos necessários para o fornecedor

    //@OneToMany(mappedBy = "fornecedor", cascade = CascadeType.ALL)
    //private List<Contrato> contratos;

    // Getters e setters
}
