let handler = async (m, { conn }) => {
let caption = `*(￣ヘ￣）ʜᴍ ᴀᴘᴀᴋᴀᴋ*`

conn.sendButton( m.chat, caption, `©️ ʜᴇɴᴅʀᴀ-ʙᴏᴛ-ᴍᴅ᭄`, `ᵐᵉⁿᵘ⚠`, `.menu`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
