import React from "react";
import Image from "next/image";
import chatgpt from "@/public/chatgpt.png";
import Row from "@/comp/row/row";
import classes from "./tool.module.css";
import Button from "@/comp/button/button";
import Link from "next/link";

export const metadata = {
  title: "ChatGPT on ArchiveAI",
};

export default function Page({ params }) {
  return (
    <main className={classes.tools}>
      <br />
      <Row
        justifyContent="flex-start"
        alignItems="center"
        className={classes.title}
      >
        <Image src={chatgpt} width={150} height={150} alt="hi" />
        <div>
          <h1>ChatGPT</h1>
          <Link href={"https://chat.openai.com"} target="_blank">
            <Button>Open ChatGPT</Button>
          </Link>
        </div>
      </Row>
      <p className={classes.para}>
        I am ChatGPT, an AI language model developed by OpenAI. With a vast
        knowledge base and advanced natural language processing capabilities, I
        can assist you in various tasks, answer questions...I am ChatGPT, an AI
        language model developed by OpenAI. With a vast knowledge base and
        advanced natural language processing capabilities, I can assist you in
        various tasks, answer questions...I am ChatGPT, an AI language model
        developed by OpenAI. With a vast knowledge base and advanced natural
        language processing capabilities, I can assist you in various tasks,
        answer questions...I am ChatGPT, an AI language model developed by
        OpenAI. With a vast knowledge base and advanced natural language
        processing capabilities, I can assist you in various tasks, answer
        questions...I am ChatGPT, an AI language model developed by OpenAI. With
        a vast knowledge base and advanced natural language processing
        capabilities, I can assist you in various tasks, answer questions...I am
        ChatGPT, an AI language model developed by OpenAI. With a vast knowledge
        base and advanced natural language processing capabilities, I can assist
        you in various tasks, answer questions...I am ChatGPT, an AI language
        model developed by OpenAI. With a vast knowledge base and advanced
        natural language processing capabilities, I can assist you in various
        tasks, answer questions...I am ChatGPT, an AI language model developed
        by OpenAI. With a vast knowledge base and advanced natural language
        processing capabilities, I can assist you in various tasks, answer
        questions...I am ChatGPT, an AI language model developed by OpenAI. With
        a vast knowledge base and advanced natural language processing
        capabilities, I can assist you in various tasks, answer questions...
      </p>
    </main>
  );
}
