import React from "react";

type Props = {};

function Capa({}: Props) {
  return (
    <div className="capa">
      <div className="py-12 flex w-full justify-center">
        <h1 className="w-1/2">
          Shaders de pós-processamento visual open-source para Unreal Engine 5
        </h1>
      </div>
      <div className="py-12">
        <p>por</p>
        <p>Bernardo Coutinho</p>
        <p>Bruno Mariz</p>
        <p>Vinicius Ariel</p>
      </div>
      <div className="py-12 flex w-full justify-end">
        <div className="mx-16 w-1/2 text-justify">
          Trabalho de conclusão de curso apresentado ao Departamento de
          Engenharia de Computação e Sistemas Digitais da Escola Politécnica da
          Universidade de São Paulo para obtenção do Título de Engenheiro.
        </div>
      </div>
      <div className="py-12">
        <p>Orientador: Prof. Dr. Ricardo Nakamura</p>
      </div>
      <div className="flex-col w-full items-start py-12">
        <p>Universidade de São Paulo - USP</p>
        <p>Escola Politécnica</p>
        <p>
          Departamento de Engenharia de Computação e Sistemas Digitais (PCS)
        </p>
      </div>
      <div className="flex w-full justify-start">
        <p>São Paulo, SP 2023</p>
      </div>
    </div>
  );
}

export default Capa;
