import React from "react";
import style from "./row.module.css";

export default function Row({
  children,
  justifyContent,
  className,
  alignItems,
}) {
  return (
    <div
      className={`${style.row}${className ? ` ${className}` : ""}`}
      style={{
        justifyContent: justifyContent || "flex-start",
        alignItems: alignItems || "flex-start",
      }}
    >
      {children}
    </div>
  );
}
