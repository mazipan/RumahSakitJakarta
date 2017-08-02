/* eslint-disable */
let routes = [{
  method: 'GET',
  url: 'http://api.jakarta.go.id/v1/emergency/pospemadam/',
  response: {
    "status": "success",
    "count": 73,
    "data": [{
        "NO": 1,
        "POS_PEMADAM": "KANTOR SUDIN DAMKAR JAKARTA PUSAT",
        "ALAMAT": "Jl. KH. Zainul Arifin No.71",
        "RT_RW": "-",
        "KELURAHAN": "Duri Pulo",
        "LAT": -6.161295,
        "LNG": 106.809517
      },
      {
        "NO": 2,
        "POS_PEMADAM": "POS JATI BARU",
        "ALAMAT": "Jl Taman Jati Baru",
        "RT_RW": "03 / 01",
        "KELURAHAN": "Cideng",
        "LAT": -6.188489,
        "LNG": 106.813133
      },
      {
        "NO": 3,
        "POS_PEMADAM": "POS SEK NEG",
        "ALAMAT": "Jl Majapahit",
        "RT_RW": "Perkantoran",
        "KELURAHAN": "Kebon Kelapa",
        "LAT": -6.168452,
        "LNG": 106.821449
      }
    ]
  }
}]

export default {
  routes
}
