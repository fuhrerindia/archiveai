import React from "react";
import Row from "../row/row";
import Image from "next/image";
import css from "./result.module.css";
import Link from "next/link";
import Button from "../button/button";

export default function Result({ image, title, slug, description }) {
  return (
    <article className={`${css.result} resultbox`}>
      <Row alignItems={"center"}>
        <Image src={image} alt={`Logo - ${title}`} width={180} height={180} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href={`/tool/${slug}`}>
            <Button>Open {title}</Button>
          </Link>
        </div>
      </Row>
    </article>
  );
}
