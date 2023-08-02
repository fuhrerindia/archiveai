import Row from "@/comp/row/row";
import React from "react";
import css from "./404.module.css";
import WarningIcon from "@mui/icons-material/Warning";

export const metadata = {
  title: "Error 404 - Page Not Found",
};
export default function Error() {
  return (
    <main className={css.main}>
      <Row justifyContent="center" alignItems="center" className={css.row}>
        <div>
          <WarningIcon className={css.icon} style={{ fontSize: 150 }} />
          <h1>ERROR 404</h1>
          <p>Page not found</p>
        </div>
      </Row>
    </main>
  );
}
