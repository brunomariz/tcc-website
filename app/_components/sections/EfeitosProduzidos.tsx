import React from "react";
import ImgCaption from "../ImgCaption";
import dithering from "../../_assets/_img/dithering.png";
import kuwahara from "../../_assets/_img/Kuwahara_InGame.png";
import outline from "../../_assets/_img/Outline.png";
import ed from "../../_assets/_img/EdgeDetection2.png";
import crt from "../../_assets/_img/crt_effect.png";

type Props = {};

function EfeitosProduzidos({}: Props) {
  return (
    <>
      <h2>2. Efeitos Produzidos</h2>
      <p>
        Abaixo, listamos cada um dos Shaders de pós-processamento presentes no
        trabalho, explicando seu propósito e ilustrando sua aparência.
      </p>
      <h3>2.1. Dithering Ordenado</h3>
      <ImgCaption caption="" src={dithering.src}></ImgCaption>
      <p>
        Dithering foi um efeito muito usado na época em que o hardware limitava
        a profundidade de cores num jogo. Ele se baseia na introdução de ruído
        padronizado sobre a imagem para aparentar uma profundidade maior de
        cores.
      </p>
      <h3>2.2. Kuwahara Filter</h3>
      <ImgCaption caption="" src={kuwahara.src}></ImgCaption>
      <p>
        Esse é um filtro que simplifica imagens mantendo as fronteiras entre
        objetos bem definidas. Esse efeito cria um aspecto de pintura à mão na
        imagem.
      </p>
      <h3>2.3. Outline</h3>
      <ImgCaption caption="" src={outline.src}></ImgCaption>
      <p>
        Esse efeito cria uma borda colorida sobre objetos 3D em cena. Ele pode
        ser usado para dar uma aparência de cartunesca à cena 3D.
      </p>
      <h3>2.4. Edge Detection</h3>
      <ImgCaption caption="" src={ed.src}></ImgCaption>
      <p>
        Efeito similar ao Outiline, em que bordas dos objetos são coloridas, mas
        o restante da cena também é pintado com uma outra cor. Em suma, apenas
        as fronteiras dos objetos são destacadas.
      </p>
      <h3>2.5. CRT Effect</h3>
      <ImgCaption caption="" src={crt.src}></ImgCaption>
      <p>
        Procurando reproduzir os efeitos das televisões de tubo CRT, esse efeito
        foi criado para dar um aspecto nostálgico à cena. Ele introduz uma
        ilusão de curvatura na tela, além de aplicar as "scanlines" (linhas
        iluminadas diferentemente enquanto o scan de raios catódicos passa pela
        tela).
      </p>
    </>
  );
}

export default EfeitosProduzidos;
