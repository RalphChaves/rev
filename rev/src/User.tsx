import React, { useState } from "react";

type UserList = {
  name: string;
  id: number;
  email: string;
  senha: string;
  idade?: number;
  cargo: string;
  corfavorita: string;
  feNaHumanidade: boolean;
};

export function User() {
  const [users, setUsers] = useState<UserList[]>([
    {
      name: "Ralph",
      id: 12,
      email: "ralph123@gmail.com",
      senha: "123456",
      idade: 16,
      cargo: "FullStack",
      corfavorita: "preto",
      feNaHumanidade: true,
    },
    {
        name: "Victor",
        id: 12,
        email: "ralph123@gmail.com",
        senha: "123456",
        idade: 16,
        cargo: "FullStack",
        corfavorita: "preto",
        feNaHumanidade: true,
      },
  ]);

  return (
    <>
      {users?.map((user) => {
        return (
          <div
            className="card-user"
            style={{
              display: "flex",
              backgroundColor: "#7FFFD4",
              flexDirection: "column",
              border: "2px solid #46bed9",
              padding: "0em 1.9em 0.5em",
              borderRadius: "15px",
              margin: "15px 20px",
            }}
          >
            <h1>Nome: {user.name}</h1>
            <h2>Idade: {user.idade}</h2>
            <h2>Idade: {user.corfavorita}</h2>
            <h2>Idade: {user.cargo}</h2>
          </div>
        );
      })}
    </>
  );
}
