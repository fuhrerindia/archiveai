import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import appData from "@/strings";
import Row from "../row/row";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import SearchBox from "../searchbox/searchbox";

// CSS FOR THIS COMPONENT IS WRITTEN IN globals.css
function Header() {
  return (
    <header>
      <Row justifyContent={"space-between"} alignItems="center">
        <Link href="/">
          <Image
            src={logo}
            alt={`${appData.appName} - Logo`}
            width={180.36}
            height={40}
          />
        </Link>
        <Row alignItems="center" className="searchbox">
          <SearchIcon className="searchIcon" />
          <SearchBox />
        </Row>
      </Row>
    </header>
  );
}
export default Header;
