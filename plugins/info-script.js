import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/hendrastore/Add*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/hendrastore/Add

Mau Yang No Error Script Bot nya, Gas Cek Video YT :
https://github.com/hendrastore/Add

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6285794152433`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://github.com/hendrastore/Add",
    mediaType: "VIDEO",
    description: "https://youtu.be/g9uLzcCOT20", 
    title: 'Hendra-Botz-MD',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
