import React, { ReactNode } from "react";

type Props = {
  title: string;
  sectionNumber: string;
  children?: ReactNode | ReactNode[];
};

function Section({ title, sectionNumber, children }: Props) {
  return (
    <>
      <h2 className="section" id={title}>
        {`${sectionNumber}. ${title}`}
      </h2>
      {children}
    </>
  );
}

export default Section;
