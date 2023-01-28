// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cors from "cors";
import { notes } from "../../src/data";

const Handler = nc()
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };
    notes.push(note);
    res.json({ data: note });
  })
  .get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ data: notes });
  });
export default Handler;
// .get((req: NextApiRequest, res: NextApiResponse) => {
//   return res.status(200).json({ name: "Ok" });
// })
// .post((req: NextApiRequest, res: NextApiResponse) => {
//   return res.status(200).json({ name: "Posted!" });
// });
// module.exports = Handler;
