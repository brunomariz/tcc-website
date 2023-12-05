import React from "react";
import { SectionInfo } from "../_types/sectionInfo";

type Props = {
  sections: SectionInfo[] | undefined;
};

function TableOfContents({ sections }: Props) {
  const pattern = /\.(?=\s)/;
  if (sections) console.log(sections[1].text.split(pattern));

  return (
    <div className="p-24">
      <div className="flex w-full justify-center">SUMÁRIO</div>
      <ul>
        {sections?.map((section, index) => {
          let sectionPrefix = "";
          let sectionSuffix = "";
          if (section.text.match(pattern)) {
            sectionPrefix = section.text.split(pattern)[0];
            sectionSuffix = `. ${section.text.split(pattern)[1]}`;
          } else {
            sectionPrefix = section.text;
          }
          return (
            <li
              key={index}
              style={{ paddingLeft: `${(section.level - 2) * 2}rem` }}
            >
              <a href={`#${section.id}`} key={index}>
                {sectionPrefix}
              </a>
              {sectionSuffix}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TableOfContents;
