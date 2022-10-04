biarkan momen = membutuhkan('zona waktu-saat')
biarkan penangan = async (m, {sambungan}) => {
    biarkan _uptime = process.uptime() * 1000
    biarkan waktu aktif = clockString(_uptime)
    misalkan d = Tanggal baru
    biarkan tanggal = d.toLocaleDateString('id', {
        hari: 'numerik',
        bulan: 'panjang',
        tahun: 'numerik'
    })
misalkan anu = `${ucapan()}
Halo👋
Ada Yang Bisa Saya Bantu?
Ketik .menu Untuk Memulai Bot

Waktu Proses: ${waktu aktif}`
   const ftroli = {
    kunci : {
    remoteJid: '6283136505591-1614953337@g.us',
    peserta : '0@s.whatsapp.net'
    },
    pesan: {
    pesanpesan: {
    Jumlah barang : 2022,
    status: 1,
    permukaan : 1,
    pesan: `2020 © ${namebot},
    orderTitle: `Hyzer`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg',
    sellerJid: '0@s.whatsapp.net'
    }
    }
    }
   conn.reply(m.chat, anu, ftroli)
}
handler.customPrefix = /^bot$/i // ketik bot (tanpa awalan)
handler.command = RegExp baru
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = salah
handler.botAdmin = false
handler.fail = null
module.exports = penangan

fungsi ucapan() {
  const waktu = moment.tz('Asia/Jakarta').format('HH')
  jika (waktu >= 5) {
    res = "Selamat pagi🌄"
  }
  jika (waktu > 9) {
    res = "Selamat siang🏞️"
  }
  jika (waktu >= 15) {
    res = "Selamat sakit🌇"
  }
  jika (waktu >= 19) {
    res = "Selamat malam🌃"
  }
  kembalikan res
}
fungsi clockString(ms) {
    misalkan h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    misalkan m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    misalkan s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    kembali [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}