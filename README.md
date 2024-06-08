# Gerenciador de fornecedores

O projeto foi desenvolvido para o desafio de seleção do Insight Lab, ele consiste em um módulo onde é possível gerenciar fornecedores e seus contratos.

### Rodando a aplicação

O build do projeto é feito utilizando o Docker, permitindo criar um ambiente isolado e replicável.
[Download e documentação](https://www.docker.com/)

Utilizamos esse comando para fazer o build do Spring Boot e NextJS:

```bash
sudo docker compose build
```

rodando a aplicação:

```bash
sudo docker compose up -d
```

Acesse no seu navegador a [página inicial](http://localhost:3000) 
### OBS:
Caso esteja enfrentando o erro (AxiosError: Network Error) e/ou esteja usando um ambiente em nuvem, verifique a pasta services do frontend e configure a baseURL
