import React from "react";

type Props = {
  sections: string[] | undefined;
};

function TableOfContents({ sections }: Props) {
  return (
    <>
      <ol>
        {sections?.map((section, index) => (
          <li key={index}>
            <a href={`#${section}`} key={index}>
              {section}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}

export default TableOfContents;
