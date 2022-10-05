let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA HENDRA BOTZ ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ ʜᴇɴᴅʀᴀ-ʙᴏᴛ-ᴍᴅ᭄`, `ᵐᵉⁿᵘ`, `.menu`, m)

       }
       
handler.customPrefix = /^(Hallo|Hay|Bot|Haibot|Hai|Hay|menu)/i
handler.command = new RegExp
module.exports = handler
