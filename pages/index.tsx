import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { GetStaticProps } from "next";
import style from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={style.home}>
      Hello World from HASSAN HABIB TAHIR.
      <Link href="/notes"> notes page</Link>
      ------------------
      <a
        sx={{
          color: "text",
          fontSize: 3,
          cursor: "pointer",
        }}
        href={process.env.HELP_APP_URL}
      >
        Help
      </a>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log(context);
//   return {
//     props: {},
//   };
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let res: any;
//   res = await fetch(`http://localhost:3000/api/note`, {

//   });
//   console.log(res, "--res");
//   const { data } = res.json();
//   console.log(data, "data--------->");
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { notes: data },
//   };
// };

export default Home;
