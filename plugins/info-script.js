//Credits Jangan Dihapus
//Thanks To Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://www.youtube.com/watch?v=uYG-l_i593Q*`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'TERIMAKASIH HENDRA','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.youtube.com/watch?v=uYG-l_i593Q",
    title: 'Hendra-Botz-MultiDevice',
    body: 'want source code?',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler