import React from "react";

type Props = {};

function Introducao({}: Props) {
  return (
    <>
      <h2>1. Introdução</h2>
      <h3>1.1. Problema e Solução</h3>
      <p>
        Com a indústria de jogos brasileira começando a consolidar-se, alguns
        dos obstáculos para os desenvolvedores tornam-se mais aparentes. Dentre
        eles, está o manejamento do tempo de produção de conteúdo. Esse processo
        envolve o planejamento, implementação, teste e polimento de qualquer
        parte do conteúdo que pode fazer parte do projeto final. No entanto,
        muitas vezes soluções propostas são desacartadas na seção de testes,
        fazendo com que o tempo gasto no seu planejamento e implementação tenha
        sido gasto em um conteúdo que não será utilizado. Nesse trabalho,
        abordaremos primariamente nesta questão sob a óptica da produção de arte
        técnica para jogos digitais, no escopo de efeitos de pós-processamento.
      </p>
      <p>
        Para ajudar a solucionar esse problema, propomos um Asset Pack feito
        para a Unreal Engine 5, que implementa com conjunto de Shaders de
        pós-processamento. A ideia é disponibilizar essa ferramenta
        gratuitamente no Marketplace oficial da Unreal. Acreditamos que o acesso
        a Shaders básicos poderá facilitar os testes em projetos de outros
        desenvolvedores, de maneira a averiguar como os efeitos se comportam
        antes de gastar parte do ciclo de produção e o trabalho do artista
        ténico.
      </p>
      <p>
        Também consideramos que, para equipes muito pequenas e que não tenham um
        profissional especializado na produção de Shaders, o Asset Pack
        desenvolvido poderá ser útil para tornar esse tipo de tecnologia mais
        acessível. Isso se torna um ponto mais importante sob o ponto de vista
        do desenvolvimento no Brasil uma vez que o mercado de jogos brasileiro é
        composto de pequenas empresas independentes e também pelo fato de que os
        poucos Asset Packs disponíveis atualmente são pagos e com preços não
        ajustados à moeda brasileira.
      </p>
      <p>
        Por fim, também pretendemos que o trabalho se torne uma fonte de estudo
        a respeito da implementação de Shaders de pós-processamento, que possa
        ser consultado sobretudo por pessoas que queiram aprender mais a
        respeito do desenvolvimento desse tipo de efeito utilizando
        primairamente HLSL.
      </p>
    </>
  );
}

export default Introducao;
