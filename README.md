##### Como rodar a api localmente:

Para executar a api deve ter a versão 18 do [Node.js](https://nodejs.org/en) ou superior.

- Primeiramente precisamos criar o arquivo `.env` usando como base o arquivo `.env,example`

```sh
DATABASE_URL="link_database"
```

- Rodamos o comando `yarn` para atualizar as dependencias
- O projeto vai rodar no caminho [http://localhost:5000](http://localhost:5000)

---

Estou utilizando o sqlite porenquanto. Para rodar o db seguir os seguintes paços:

- Devemos rodar o comando `prisma migrate dev --name qualquer_nome`
- No documento **schema.prisma** para subir para vercel devemos mudar as linhas comentadas em datasource

https://dillinger.io/
