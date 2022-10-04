const kripto = membutuhkan('kripto')

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { samb, usedPrefix, teks }) => {
  biarkan pengguna = global.db.data.users
  jika (teks) {
    if ('ref_count' di users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
    biarkan hitung = pengguna[link_creator].ref_count++
    biar ekstra = xp_bonus[count] || 0
    pengguna[link_creator].exp += xp_link_creator + ekstra
    pengguna[m.sender].exp += xp_first_time
    pengguna[m.sender].ref_count = 0
    m.balas(`
Selamat!
+${xp_first_time} XP
`.trim())
    m.balas(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + ekstra} XP
`.trim(), pembuat_tautan)
  } kalau tidak {
    biarkan kode = pengguna[m.sender].ref_code = pengguna[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    pengguna[m.pengirim].ref_count = pengguna[m.pengirim].ref_count ? pengguna[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    biarkan share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal di bawah ini

Kode Referensi: *${code}*

${command_link}
`.trim()
    m.balas(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referensi kamu: ${code}

Bagikan link ke teman: ${command_link}

atau kirim pesan ke teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['utama']

handler.command = ['ref']

handler.register = true

module.exports = penangan