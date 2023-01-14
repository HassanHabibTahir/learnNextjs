import type { NextPage } from "next";
import Link from "next/link";
import style from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={style.home}>
      Hello World from HASSAN HABIB TAHIR.
      <Link href="/notes"> notes page</Link>
    </div>
  );
};

export default Home;
