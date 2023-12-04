"use client";
import Capa from "./_components/Capa";
import { useEffect, useState } from "react";
import Introducao from "./_components/sections/Introducao";
import { stringify } from "querystring";
import { SectionInfo } from "./_types/sectionInfo";
import TableOfContents from "./_components/TableOfContents";
import EfeitosProduzidos from "./_components/sections/EfeitosProduzidos";
import InstalacaoEUtilizacao from "./_components/sections/InstalacaoEUtilizacao";

export default function Home() {
  const [sections, setSections] = useState<SectionInfo[]>();
  useEffect(() => {
    let sections: SectionInfo[] = [];
    document.querySelectorAll("h2, h3, h4, h5, h6").forEach((element) => {
      const obj = {
        text: element.textContent || "",
        level: Number(element.tagName.slice(1)) || -1,
        id: element.textContent?.replaceAll(" ", "-").toLowerCase() || "",
      };
      element.setAttribute("id", obj.id);
      sections = [...sections, obj];
    });
    setSections(sections);
  }, []);
  console.log(sections);

  return (
    <main className="">
      <Capa></Capa>
      <TableOfContents sections={sections}></TableOfContents>
      <hr />
      <Introducao></Introducao>
      <EfeitosProduzidos></EfeitosProduzidos>
      <InstalacaoEUtilizacao></InstalacaoEUtilizacao>
    </main>
  );
}
