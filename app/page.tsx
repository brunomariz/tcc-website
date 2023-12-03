import Image from "next/image";
import Capa from "./_components/Capa";
import TableOfContents from "./_components/TableOfContents";

export default function Home() {
  return (
    <main className="">
      <Capa></Capa>
      <TableOfContents></TableOfContents>
      <h2>Teste 1</h2>
      <h2>Teste 2</h2>
      <h2>Teste 3</h2>
    </main>
  );
}
