"use client";
import Capa from "./_components/Capa";
import { useEffect, useState } from "react";
import materialEditorHero from "./_img/material-editor-hero-image.png";

export default function Home() {
  const [sections, setSections] = useState<string[]>();
  useEffect(() => {
    let sections: string[] = [];
    document.querySelectorAll(".section").forEach((element) => {
      sections = [...sections, element.id];
    });
    setSections(sections);
  }, []);
  console.log(sections);

  return (
    <main className="">
      <Capa></Capa>

      <h2>1. Introdução</h2>
      <div className="px-12">
        <p>
          O motor de desenvolvimento Unreal Engine 5 (UE5) conta com várias
          ferramentas necessárias para a produção de jogos e experiências
          interativas em geral, fornecendo ao usuário um framework básico para a
          programação, animação, modelagem, design de som e renderização (EPIC
          GAMES, g). Nesse último tópico, a Unreal disponibiliza uma ferramenta
          chamada Material Editor (ver figura 1) que permite, entre outras
          coisas, um sistema de programação visual através de grafos que
          possibilita a criação de shaders, algoritmos que controlam como cada
          pixel será renderizado na tela e são preferencialmente executados na
          GPU (VRIES, 2014).
        </p>

        <div className="flex flex-col items-center py-8">
          <img className="" src={materialEditorHero.src} alt="" />
          <p>Editor de Materials da UE 5.1</p>
        </div>

        <p>
          A maioria dos jogos atualmente utiliza alguma forma de shader de
          pós-processamento (LAUKKANEN, 2018), sendo importantes não só para
          melhorar a aparência de uma cena como também servir de elemento de
          narrativa visual, estabelecendo o estilo e o clima do jogo. Alguns
          exemplos são o shader de Dithering em Return of the Obra Dinn (ver
          figura 2) (ILETT, 2020), o efeito de televisão de tubo em Loop Hero e
          o uso de shaders de simplificação em Dead Cells que permitem fazer
          objetos 3D pareçam artes feitas em 2D. (VASSEUR, 2018). Na própria
          versão base da UE5, estão inclusos outros efeitos de pós-processamento
          de uso comum para obter algum efeito astético específico como Bloom,
          Depth of Field, Chromatic Aberration e Motion Blur (EPIC GAMES, e).
        </p>
      </div>
    </main>
  );
}
