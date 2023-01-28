import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  // const { id } = router.query;
  const { id } = router.query;

  console.log(id, "params");
  return (
    <div>
      <div sx={{ variant: "containers.page" }}>Note: {id}</div>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }: any) {
  console.log(params.id, "------->paramsid");
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);
  if (!response.ok) {
    res.writeHead(302, {
      location: "/notes",
    });
    res.end();
    return {
      props: {},
    };
  }
  const { data } = await response.json();
  console.log(data, "----------->");
  return {
    props: { note: data },
  };
}

export default Page;
