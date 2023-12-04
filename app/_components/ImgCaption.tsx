import React from "react";

type Props = { src: string; caption: string; alt?: string };

function ImgCaption({ src, caption, alt = "" }: Props) {
  return (
    <div className="flex flex-col items-center py-8">
      <img className="" src={src} alt={alt} />
      <p>{caption}</p>
    </div>
  );
}

export default ImgCaption;
