import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./post.css";

const MARCAS_BASE_REST_API_URL =
  "https://parallelum.com.br/fipe/api/v1/carros/marcas";

const validationPost = yup.object().shape({
  title: yup
    .number()
    //.required("Você deve digitar um número")
    //.typeError("Você deve digitar um número")
    .min(300, "valor mínimo 300."),
  description: yup
    .string()
    //.required("A descrição é obrigatório")
    .max(150, "A descrição precisa ter menosde 150 caracteres"),
});

function Post() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) =>
    axios
      .post(MARCAS_BASE_REST_API_URL, data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate("/");
      })
      .catch(() => {
        console.log("DEU ERRADO");
      });

  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Inserir Modelo</h1>
          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Código</label>
                <input type="text" name="title" {...register("codigo")} />
                <p className="error-message">{errors.title?.message}</p>
              </div>

              <div className="fields">
                <label>Nome</label>
                <input type="text" name="description" {...register("modelo")} />
                <p className="error-message">{errors.description?.message}</p>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
