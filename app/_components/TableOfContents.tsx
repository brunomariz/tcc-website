import React from "react";
import { SectionInfo } from "../_types/sectionInfo";

type Props = {
  sections: SectionInfo[] | undefined;
};

function TableOfContents({ sections }: Props) {
  return (
    <div className="p-24">
      <div className="flex w-full justify-center">SUMÁRIO</div>
      <ul>
        {sections?.map((section, index) => (
          <li
            key={index}
            style={{ paddingLeft: `${(section.level - 2) * 2}rem` }}
          >
            <a href={`#${section.id}`} key={index}>
              {section.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
