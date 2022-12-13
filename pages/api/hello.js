import {sendNewJobRequest} from '../../Server/mailer'
export default async function  handler (req, res) {
 //   if(MailSend){
  //     res.status(200).json(MailSend)
  //   }
  res.status(200).json({ name: 'John Doe' })
}
