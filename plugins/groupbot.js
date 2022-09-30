let handler = async (m, { conn }) => {
let info = `
*${htki} STORE CUY ${htka}*
`
const sections = [
   {
	title: `AMAN DAN TERPERCAYA CUY*\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '💌 › NOKOS WA', description: "Note: Nokos itu artinya nomer kosong verifikasi cuman 1x", rowId:".gcbot"},
        {title: '💌 › YT PREMIUM ', description: "APA ITU YT PREMIUM? BISA NONTON VIDEO DI SISI LAYAR BISA VIDEO MENJADI AUDIO DAN LAINNYA", rowId:".gcbot2"},
        {title: '💌 › BELUM GW TAMBAHIN;V', description: "BELUM GW TAMBAHIN;V", rowId:".gcbot3"},
        {title: '💌 › Owner', description: "Creator Hendra BOT >ω<", rowId:".owner"},
        {title: '💌 › Info Hendra BOT', description: "Info HendraBOT >ω<", rowId:".info"},
        {title: '💌 › Donasi', description: "Donasi Untuk Hendra≧▽≦", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['store']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler