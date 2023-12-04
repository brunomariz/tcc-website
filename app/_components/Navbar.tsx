import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <div className="flex w-full justify-start bg-gray-200 text-sm h-8">
        {/* <div>
          [<a href="/">Início</a>]
        </div> */}
        <div>
          [
          <a target="_blank" href="files/monografia.pdf">
            Baixar monografia completa com referências
          </a>
          ]
        </div>
      </div>
    </>
  );
}

export default Navbar;
