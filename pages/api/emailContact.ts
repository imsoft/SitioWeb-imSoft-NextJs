import type { NextApiRequest, NextApiResponse } from "next";

import { mailOptions, transporter } from "../../config";

type Data = {
  message: string | unknown;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case "POST":
      return mailHandler(req, res);

    default:
      return res
        .status(400)
        .json({ message: "Endpoint no exite " + req.method });
  }
};

const mailHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `📨 ¡Nuevo mensaje para imSoft de ${req.body.newName}! 👨‍💻🌐`,
      text: `Nombre: ${req.body.newName}, Correo Electrónico: ${req.body.newEmail}, Número de teléfono: ${req.body.newPhoneNumber}, Mensaja: ${req.body.newMessage}`,
      html: `<!DOCTYPE html><html><head><title></title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><style type="text/css">a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{background-color:#fff;margin:24px 0;padding:20px;border:1px none #ccc}.form-title{color:#1b9cd9;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:center;line-height:20px;font-size:20px;margin:0 0 8px;padding:20px 0}.form-heading{color:#1b9cd9;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:20 0 20 0}.form-answer{color:#949494;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}.divider{margin-bottom:20px;border-top:.5px solid #949494}.image{max-width:100%;max-height:100%}div[style*="margin: 16px 0;"]{margin:0!important}</style></head><body style="margin:0!important;padding:0!important;background:#fff"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#1B9CD9" align="center" style="padding:10px 15px 30px 15px" class="section-padding"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px" class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td style="padding:0;font-size:16px;line-height:25px;color:#232323" class="padding message-content"><div class="form-container"><h2 class="form-title">¡Nuevo correo electrónico desde el sitio web! 💬</h2><hr class="divider"><h3 class="form-heading" align="left">Nombre</h3><p class="form-answer" align="left">${req.body.newName}</p><h3 class="form-heading" align="left">Correo Electrónico</h3><p class="form-answer" align="left">${req.body.newEmail}</p><h3 class="form-heading" align="left">Número de teléfono</h3><p class="form-answer" align="left">${req.body.newPhoneNumber}</p><h3 class="form-heading" align="left">Mensaje</h3><p class="form-answer" align="left">${req.body.newMessage}</p><hr class="divider"><img class="image" src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FimSoft_Transparente_Azul.png?alt=media&token=0a5bf3d6-641b-4d5f-8f17-45e5dab67995" alt="Logo imSoft"></div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`,
    });
    return res.status(200).json({ message: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

export default handler;
