import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
⟩» *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 BULAN* 10.000
⬡ *2 BULAN:* 15.000
⬡ *PERMANEN:* 20.000
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* 083181085070
⬡ *GOPAY:* 083181085070
⬡ *OVOV:* 083181085070
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa run:
wa.me/6285794152433${numberowner} (Owner)

*Subscribe Youtube Owner*`
  conn.sendButton(m.chat, anu, syt, flaaa.getRandom() + teks, [['Donasi', '.donasi'], ['SewaBot', '.sewabot']], m)
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

export default handler
