import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  alt: string;
}

const ArticleImage = ({ imageSrc, alt }: Props) => {
  return (
    <>
      <Image src={imageSrc} alt={alt} width={5760} height={3840} />
    </>
  );
};

export default ArticleImage;
