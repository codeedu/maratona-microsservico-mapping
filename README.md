<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="http://maratona.fullcycle.com.br/public/img/logo-maratona.png"/></a>
</p>

## Descrição

Microsserviço de mapeamento de entregas construído com Nest.js Framework + Socket.io +React.js + RabbitMQ

## Rodar a aplicação

#### Antes de começar

O microsserviço de mapeamento necessita que os microsserviços de Drivers, Simulador e Orders já estejam rodando antes de inicia-lo.
Se você não os tem, clone-os aqui: 

[Microsserviço Drivers](https://github.com/codeedu/maratona-microsservico-drivers)

[Microsserviço Simulador](https://github.com/codeedu/maratona-microsservico-simulador)

[Microsserviço Order](https://github.com/codeedu/maratona-microsservico-order.git)


#### Rodar o RabbitMQ

Clone o projeto de configuração Docker do RabbitMQ neste [link](https://github.com/codeedu/maratona-microsservico-rabbitmq.git). Rode ```docker-compose up```. 

#### Crie o .env e configure as variáveis de ambiente do projeto frontend

```bash
$ cd frontend
$ cp .env.example .env
```

#### Crie os containers com Docker

```bash
$ docker-compose up
```

#### Accesse no browser

```
http://localhost:3001 para a API Rest do microserviço
http://localhost:3002 para o front-end que contém a interface de mapeamento da entrega
```

## Fizemos um vídeo no Youtube ensinando como rodar na práticos os microserviços com Nest.js

[https://www.youtube.com/watch?v=MRk2Y_h2F-Q](https://www.youtube.com/watch?v=MRk2Y_h2F-Q)
