import React from "react";

type Props = {};

function InstalacaoEUtilizacao({}: Props) {
  return (
    <>
      <h2>3. Instalação e Utilização</h2>
      <p>
        O Plugin que implementa este Asset Pack necessita que seja instalado em
        um projeto para Unreal Engine 5.1 (ou mais recente) configurado para
        C++. Caso seu projeto não esteja configurado para C++, basta criar uma
        classe de C++ e esperar a Engine criar os arquivos de build necessários.
      </p>

      <p>
        Com essas configurações feitas, basta copiar a pasta PPFree para dentro
        da pasta "Plugins" do seu projeto. Faça uma nova build do projeto e você
        poderá ter acesso aos efeitos de pós processamento criados.
      </p>

      <p>
        Caso os Materials não apareçam como opções para serem usadas dentro da
        Engine, marque a opção "Show Plugin Content" no buscador.
      </p>
    </>
  );
}

export default InstalacaoEUtilizacao;
