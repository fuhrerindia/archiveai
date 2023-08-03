import React from "react";
import appData from "@/strings";
import Result from "@/comp/result/result";
import chatgpt from "@/public/chatgpt.png";

export async function generateMetadata({ params }) {
  return {
    title: `'${params.q.replaceAll("%20", " ")}' - Search Results on ${
      appData.appName
    }`,
  };
}

export default function Page({ params }) {
  return (
    <main>
      <Result
        title="ChatGPT"
        image={chatgpt}
        description={`I am ChatGPT, an AI language model developed by OpenAI. With a vast knowledge base and advanced natural language processing capabilities`}
        slug={"chat-gpt"}
      />
      <Result
        title="ChatGPT"
        image={chatgpt}
        description={`I am ChatGPT, an AI language model developed by OpenAI. With a vast knowledge base and advanced natural language processing capabilities, I can assist you in various tasks, answer questions, engage in conversations, and provide helpful information across multiple domains. Let's explore and learn together!`}
        slug={"chat-gpt"}
      />
      <Result
        title="ChatGPT"
        image={chatgpt}
        description={`I am ChatGPT, an AI language model developed by OpenAI. With a vast knowledge base and advanced natural language processing capabilities, I can assist you in various tasks, answer questions, engage in conversations, and provide helpful information across multiple domains. Let's explore and learn together!`}
        slug={"chat-gpt"}
      />
    </main>
  );
}
