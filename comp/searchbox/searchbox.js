"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [q, setQ] = React.useState("");
  const router = useRouter();

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      if (q.replaceAll(" ", "") !== "") {
        router.push(`/search/${q}`);
      }
    }
  }

  return (
    <input
      type="search"
      placeholder="Type a keyword for AI tool"
      onKeyUp={handleKeyPress}
      value={q}
      onChange={(e) => setQ(e.target.value)}
    />
  );
}
