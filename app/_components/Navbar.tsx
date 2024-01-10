import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <div className="flex w-full justify-start bg-gray-200 text-sm pb-4">
        {/* <div>
          [<a href="/">Início</a>]
        </div> */}
        <div>
          [
          <a
            target="_blank"
            href="files/TCC___Shaders_de_pós_processamento_visual_open_source_para_Unreal_Engine_5.pdf"
          >
            Baixar monografia completa com referências
          </a>
          ]
        </div>
        <div>
          [
          <a target="_blank" href="files/Banner_PCS3860_COOP_2023_Grupo_C02.pdf">
            Banner
          </a>
          ]
        </div>
        <div>
          [
          <a target="_blank" href="files/Press_Release_PCS3860_COOP_2023_Grupo_C02.pdf">
            Press release
          </a>
          ]
        </div>
        <div>
          [
          <a target="_blank" href="https://github.com/UnrealVFX/UnrealPostProcessingShaders">
            GitHub
          </a>
          ]
        </div>
      </div>
    </>
  );
}

export default Navbar;
