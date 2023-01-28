// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import nc from "next-connect";
import cors from "cors";
import { notes } from "../../../src/data";
const getNote = (id: any) => notes.find((n) => n.id === parseInt(id));
const handler = nc()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    res.json({ data: note });
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const id = Date.now();
    const note = { ...req.body, id };

    notes.push(note);
    res.json({ data: note });
  });
export default handler;
