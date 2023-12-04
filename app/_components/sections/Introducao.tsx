import React from "react";
import materialEditorHero from "../../_img/material-editor-hero-image.png";
import obraDinn from "../../_img/obra-dinn.jpg";
import ditShader from "../../_img/dithering-shader.jpg";
import ImgCaption from "../ImgCaption";

type Props = {};

function Introducao({}: Props) {
  return (
    <>
      <h2>1. Introdução</h2>
      {/* <p>
        O motor de desenvolvimento Unreal Engine 5 (UE5) conta com várias
        ferramentas necessárias para a produção de jogos e experiências
        interativas em geral, fornecendo ao usuário um framework básico para a
        programação, animação, modelagem, design de som e renderização. Nesse
        último tópico, a Unreal disponibiliza uma ferramenta chamada Material
        Editor (ver figura 1) que permite, entre outras coisas, um sistema de
        programação visual através de grafos que possibilita a criação de
        shaders, algoritmos que controlam como cada pixel será renderizado na
        tela e são preferencialmente executados na GPU .
      </p>
      <ImgCaption
        caption="Figura 1 - Editor de Materials da UE 5.1"
        src={materialEditorHero.src}
      ></ImgCaption>
      <p>
        A maioria dos jogos atualmente utiliza alguma forma de shader de
        pós-processamento, sendo importantes não só para melhorar a aparência de
        uma cena como também servir de elemento de narrativa visual,
        estabelecendo o estilo e o clima do jogo. Alguns exemplos são o shader
        de Dithering em Return of the Obra Dinn (ver figura 2), o efeito de
        televisão de tubo em Loop Hero e o uso de shaders de simplificação em
        Dead Cells que permitem fazer objetos 3D pareçam artes feitas em 2D. Na
        própria versão base da UE5, estão inclusos outros efeitos de
        pós-processamento de uso comum para obter algum efeito astético
        específico como Bloom, Depth of Field, Chromatic Aberration e Motion
        Blur.
      </p>
      <ImgCaption
        src={obraDinn.src}
        caption="Figura 2 - Dithering Shader em Return of the Obra Dinn"
      ></ImgCaption>
      <h3 className="">1.1. Motivação</h3>
      <p>
        Utilizando o Editor de Materials da Unreal Engine, é possível que um
        artista técnico crie shaders de pós-processamento que aplicam efeitos ao
        pixels da cena (salvos no buffer de renderização) antes que sejam de
        fato exibidos na tela. Por conta disso, existem vários Asset Packs
        voltados à UE5 que implementam shaders para serem utilizados
        out-of-the-box, de maneira prática. Asset Packs desse gênero, apesar de
        não serem usualmente utilizados em uma implementação final de um projeto
        grande, podem ajudar desenvolvedores no início de uma produção a testar
        vários tipos de efeitos de pós-processamento diferentes sem onerar os
        artistas técnicos da equipe em desenvolver vários shaders que poderiam
        ser posteriormente descartados.
      </p>
      <p>
        Além disso, também consideramos o contexto de projetos menores, em que
        as equipes são menores e a exigência de recursos computacionais para o
        desenvolvimento é relativamente pequena. Nesse caso, a produção de
        recursos mais complexos de arte técnica pode estar além do escopo dos
        desenvolvedores. Portanto, Pacotes que disponibilizem esses recursos
        podem ser mantidos na versão finalizada do projeto.
      </p>
      <p>
        No entanto, a grande maioria dos pacotes de pós-processamento são pagos
        com preços não ajustados à moeda brasileira. Os poucos pacotes gratuitos
        que estão disponíveis no Marketplace oficial da Unreal limitam-se a um
        ou dois Shaders diferentes. Assim, percebe-se a falta de uma alternativa
        open-source e gratuita para dar acessibilidade às vantagens que um
        conjunto de efeitos de pós-processamento fornece a um projeto. Na figura
        3, temos um exemplo de um dos Asset Packs pagos disponíveis no
        Marketplace da Unreal Engine.
      </p>
      <ImgCaption
        caption="Figura 3 – Asset Pack que disponibiliza efeito de Dithering Shader, disponível no Market-
place da Unreal"
        src={ditShader.src}
      ></ImgCaption>
      <h3>1.2 Objetivos</h3>
      <p>
        Este trabalho tem como objetivo a criação de um Asset Pack para a Unreal
        Engine 5 que permita a rápida iteração por diferentes efeitos visuais
        obtidos com Shaders de pós-processamento. Para tanto, será implementado
        um conjunto de efeitos com parâmetros customizáveis e uma integração
        coerente com o restante da engine. O principal diferencial do projeto é
        ser uma alternativa open-source e grátis aos pacotes já existentes na
        loja da Unreal Engine, que estabelecem uma barreira monetária indesejada
        para pequenos desenvolvedores.
      </p>
      <p>
        Ao final do projeto, pretendemos ter um pacote que permita aos
        desenvolvedores de jogos testar diferentes efeitos visuais em seus jogos
        de maneira prática, modular e rápida. Assim, nosso trabalho tem foco na
        usabilidade dentro de projetos pequenos ou em estados iniciais (desde a
        pré-produção até o Alpha), tendo como benefício primordial evitar que
        artistas técnicos (responsáveis pela criação de materiais, shaders e
        efeitos visuais) gastem tempo de produção com a criação de assets que
        podem ser posteriormente descartados.
      </p>
      <p>
        A utilização do produto desenvolvida será facilitada através da
        disponibilização do Asset Pack no Marketplace oficial da Unreal Engine.
        Dessa forma, qualquer desenvovledor poderá integrar os efeitos
        produzidos ao seu projeto de maneira mais simples e intuitiva.
      </p> */}
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
