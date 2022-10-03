let handler = async (m, { conn }) => {
NOTE: PEMBAYARAN PAKE QRIS PAYMENT SAJA YA TIDAK NERIMA DANA-OVO-DLL
	]
    }, {
    title: `✃ BAYAR`,
	rows: [
	    {title: "📊 payment", rowId: '.bayar', description: 'KALO ' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "ʙ ᴜ ʏ",
  sections
}
urlButton: {
                                    displayText: 'QRIS',
                                    url: 'https://youtube.com/channel/UCmUhiytK9WMYaOFgdOho_2g'
                                }
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['paymnet', 'bayar']
handler.tags = ['main']
handler.command = /^(aymnet(bot)?|bayar)$/i
handler.private = true

export default handler
