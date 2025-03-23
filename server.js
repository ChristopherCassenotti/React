import express, { response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post("/usuarios", async (request, response) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: request.body.email,
        name: request.body.name,
        age: request.body.age,
      },
    });

    response.status(201).json(user);
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: "Erro ao criar usuário" });
  }
});

app.get("/usuarios", async (request, response) => {
  let users = [];
  if (request.query) {
    users = await prisma.user.findMany({
      where: {
        name: request.query.name,
        email: request.query.email,
        age: request.query.age,
      },
    });
  } else {
    const users = await prisma.user.findMany();
  }

  response.status(200).json(users);
});

app.put("/usuarios/:id", async (request, response) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: request.params.id,
      },
      data: {
        email: request.body.email,
        name: request.body.name,
        age: request.body.age,
      },
    });

    response.status(200).json(user);
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: "Erro ao atualizar usuário" });
  }
});

app.delete("/usuarios/:id", async (request, response) => {
  try {
    await prisma.user.delete({
      where: {
        id: request.params.id,
      },
    });
    response.status(200).json({ message: "Usuário deletado com Sucesso!" });
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: "Erro ao atualizar usuário" });
  }
});

app.listen(3000);
//IWfEqVAlY7AKh5Nk
