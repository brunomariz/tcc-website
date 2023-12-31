import React from "react";

type Props = {};

function InstalacaoEUtilizacao({}: Props) {
  return (
    <>
      <h2>3. Instalação e Utilização</h2>
      <video loop autoPlay muted>
        <source src="https://imgur.com/2raM2S8.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <p>
        O Plugin que implementa este Asset Pack necessita que seja instalado em
        um projeto para Unreal Engine 5.1 (ou mais recente) configurado para
        C++. Caso seu projeto não esteja configurado para C++, basta criar uma
        classe de C++ e esperar a Engine criar os arquivos de build necessários.
      </p>

      <p>
        Com essas configurações feitas, basta copiar a pasta PPFree para dentro
        da pasta &ldquo;Plugins&rdquo; do seu projeto. Faça uma nova build do
        projeto e você poderá ter acesso aos efeitos de pós processamento
        criados.
      </p>

      <p>
        Caso os Materials não apareçam como opções para serem usadas dentro da
        Engine, marque a opção &ldquo;Show Plugin Content&rdquo; no buscador.
      </p>
    </>
  );
}

export default InstalacaoEUtilizacao;
