impor { createHash } dari 'crypto'
misalkan Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = fungsi async (m, { teks, usedPrefix, perintah }) {
	fungsi pickRandom(daftar) {
  kembali daftar[Math.floor(Math.random() * list.length)]
}
	biarkan namae = conn.getName(m.sender)
	bagian const = [
	{
	judul: "Pilih Usia Anda Di Sini!",
	baris: [
	    {title: "Tahun Acak", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19 ','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	judul: "OL D",
	baris: [
	    {title: "30 Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Tahun", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Tahun", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Tahun", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Tahun", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Tahun", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Tahun", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Tahun", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Tahun", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	judul: "KAMU G",
	baris: [
	    {title: "20 Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Tahun", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Tahun", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Tahun", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Tahun", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Tahun", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Tahun", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Tahun", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Tahun", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Tahun", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Tahun", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const daftarPesan = {
  text: `Silahkan pilih usia Anda di tombol bawah...\n*Nama Anda:* ${conn.getName(m.sender)}\nIngin nama kostum? ketik *${usedPrefix + command} namaanda.umur*`,
  footer: global.wm,
  judul: "━━━━「 Pendaftaran ",
  buttonText: "Klik Disini !",
  bagian
}

  biarkan pengguna = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) mengembalikan conn.sendMessage(m.chat, listMessage, m)
  biarkan [_, nama, pembagi, usia] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alfanumerik)'
  if (!age) throw 'Umur tidak boleh kosong (Angga)'
  umur = parseInt(umur)
  jika (usia > 30) melempar 'WOI TUA (。-`ω´-)'
  jika (umur < 5) lempar 'Halah dasar bocil'
  nama pengguna = nama.trim()
  pengguna.usia = usia
  user.regTime = + Tanggal baru
  user.registered = benar
  biarkan sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.balas(`
*Pendaftaran Berhasil*

• INFORMASI
*Nama:* ${nama}
*Usia:* ${age} Tahun
*Sn:* ${sn}
···
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

ekspor penangan default