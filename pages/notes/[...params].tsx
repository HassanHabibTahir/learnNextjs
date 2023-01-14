import React from "react";
import { useRouter } from "next/router";
const All = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  // const { params } = router.query;
  console.log(Object.values(params), "params");
  return (
    <div>
      this is the all{" "}
      {Object.values(params)?.map((item: String, index: number) => {
        console.log(item, index);

        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default All;
