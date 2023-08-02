import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import appData from "@/strings";
import Row from "../row/row";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

// CSS FOR THIS COMPONENT IS WRITTEN IN globals.css
function Header() {
  return (
    <header>
      <Row justifyContent={"space-between"} alignItems="center">
        <Link href="/">
          <Image
            src={logo}
            alt={`${appData.appName} - Logo`}
            width={195}
            height={40}
          />
        </Link>
        <Row alignItems="center" className="searchbox">
          <SearchIcon className="searchIcon" />
          <input type="search" placeholder="Type a keyword for AI tool" />
        </Row>
      </Row>
    </header>
  );
}
export default Header;
