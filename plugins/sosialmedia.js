import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let jarot = `*โธ  - โใ ๐๐ฐ๐ด๐ช๐ข๐ญ ๐๐ฆ๐ฅ๐ช๐ข ๐๐ฐ๐ต ใโ  - โ*

ใ ๐๐ถ๐ฑ๐ฐ๐ณ๐ต๐ต ๐๐ฐ๐ต ๐๐ฆ๐ฏ๐จ๐ข๐ฏ ๐๐ข๐ณ๐ข ใ

*โ ๐๐ถ๐ด๐ค๐ณ๐ช๐ฃ๐ฆ ๐ ๐ฐ๐ถ๐ต๐ถ๐ฃ๐ฆ ๐๐ฐ๐ต*
โซนโซบ https://youtube.com/c/Randy25Gaming
*โ ๐๐ฐ๐ญ๐ญ๐ฐ๐ธ ๐๐ฏ๐ด๐ต๐ข๐ด๐จ๐ณ๐ข๐ฎ ๐๐ฐ๐ต*
โซนโซบ https://Instagram.com/Hendra

ใ๐๐ณ๐ฐ๐ถ๐ฑ ๐๐ฐ๐ต ๐ฐ๐ง๐ง๐ค๐ช๐ข๐ญ  && ๐๐ณ๐ฐ๐ถ๐ฑ ๐๐ช๐ด๐ค๐ถ๐ด๐ด๐ช๐ฐ๐ฏใ

๐๐ณ๐ฐ๐ถ๐ฑ ๐๐ช๐ด๐ฎ๐ข๐ฃ๐ฐ๐ต๐ป ๐๐ง๐ง๐ค
โซนโซบ https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL

๐๐ณ๐ฐ๐ถ๐ฑ ๐๐ช๐ด๐ค๐ถ๐ด๐ด๐ช๐ฐ๐ฏ
โซนโซบ https://chat.whatsapp.com/GPMdyM0uDMP789G3IGMHda

`
conn.sendButtonDoc(m.chat, jarot, wm,'Thanks','You', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/playlist?list=RDwHr45iW1AC8&playnext=1",
    mediaType: "VIDEO",
    description: "https://youtube.com/playlist?list=RDwHr45iW1AC8&playnext=1", 
    title: 'Hendra-MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['sosialmedia']
handler.tags = ['main','info']
handler.command = /^(sosial|media|sosialmedia)$/i
export default handler