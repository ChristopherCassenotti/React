import express, { json, response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/usuarios", async (request, response) => {
  try {
    let users = [];
    if (request.query) {
      users = await prisma.user.findMany({
        where: {
          name: request.query.name,
          email: request.query.email,
          age: request.query.age,
        },
      });

      response.status(200).json(users);
    } else {
      const users = await prisma.user.findMany();
    }
  } catch {
    console.log(console.error());
    response.status(400).json({ error: "Erro no get" });
  }
});

app.post("/usuarios", async (request, response) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: request.body.name,
        email: request.body.email,
        age: request.body.age,
      },
    });
    response.status(200).json(user);
  } catch {
    console.log(error);
    response.status(400).json({ error: "Cadastro não executado" });
  }
});

app.delete("/usuarios/:id", async (request, response) => {
  try {
    await prisma.user.delete({
      where: {
        id: request.params.id,
      },
    });

    response.status(200).json({ message: "User deletado" });
  } catch {
    console.log(error);
    response.status(400).json({ error: "User não deletado" });
  }
});

app.put("/usuarios/:id", async (request, response) => {
  try {
    await prisma.user.update({
      where: {
        id: request.params.id,
      },
      data: {
        name: request.body.name,
        email: request.body.email,
        age: request.body.age,
      },
    });

    response.status(200).json({ message: "User atualizado" });
  } catch {
    console.log(error);
    response.status(400).json({ error: "User não atualizado" });
  }
});

app.listen(3000);
//IWfEqVAlY7AKh5Nk
