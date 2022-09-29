import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://github.com/hendrastore/Add
│ *Base :* 
│ ╰ https://github.com/Fokusdotid/Family-MD
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star & kasih credit

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
