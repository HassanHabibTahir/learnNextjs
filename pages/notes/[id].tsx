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

export default Page;
