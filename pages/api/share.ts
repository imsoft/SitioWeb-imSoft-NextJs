import type { NextApiRequest, NextApiResponse } from "next";

import nextConnect from "next-connect";

type Data = {
  message: string;
};

const handler = nextConnect();

handler.post((req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { title, text, url } = req.body;

  // Usa la API de "web-share" para compartir contenido
  navigator.share({ title, text, url });

  res.status(200).end();
});

export default handler;
