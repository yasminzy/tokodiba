const modes = [
  {
    icon: "airplane",
    title: "Pesawat",
    description:
      "Lion Group, Malindo Air, Sriwijaya Group, Garuda Air, Citilink, Airasia, dll."
  },
  {
    icon: "train",
    title: "Kereta",
    description: "Kereta PT. KAI."
  },
  {
    icon: "bed",
    title: "Hotel",
    description: "Booking hotel se-Indonesia."
  },
  {
    icon: "boat",
    title: "Kapal",
    description: "Kapal PT. PELNI dan ferry."
  },
  {
    icon: "bus",
    title: "Bus",
    description: "Bus AKAP dan travel."
  },
  {
    icon: "videocam",
    title: "Bioskop",
    description: "Cinema XXI, 21, CGV blitz, dan Cinemaxx."
  }
];

const providers = ["Axis", "Indosat", "Smartfren", "Telkomsel", "Three", "XL"];

const ppob = [
  {
    title: "Bayar Tagihan",
    type: [
      "PLN Bulanan",
      "PLN Token",
      "BPJS Kesehatan",
      "PGN",
      "TELKOM",
      "SPEEDY/ INDIHOME",
      "TELKOMVISION",
      "TRANSVISION",
      "FirstMedia",
      "My Republic",
      "INDOVISION",
      "OKEVISION",
      "TOP TV",
      "NEXMEDIA",
      "PDAM"
    ]
  },
  {
    title: "Pascabayar",
    type: ["Halo", "Matrix", "Xplor", "Smartfren", "Three"]
  },
  {
    title: "Voucher Game",
    type: [
      "Asiasoft",
      "BSF",
      "CC",
      "DASA",
      "Digicash",
      "Gamewave",
      "Gameweb",
      "Garena",
      "Gemscool",
      "GolfOnline",
      "Kiwicard",
      "Lyto",
      "Megaxus",
      "Metin",
      "MyCard",
      "Orange",
      "PlayNexia",
      "Qash",
      "Rappelz",
      "Rose",
      "Spin",
      "Showtime",
      "Steam",
      "Tera",
      "Travian",
      "Viwawa",
      "VTC",
      "Wavegame",
      "Zynga"
    ]
  },
  {
    title: "Multifinance",
    type: [
      "FIF Finance",
      "MAF Finance",
      "MCF Finance",
      "BAF Finance",
      "WOM Finance"
    ]
  },
  {
    title: "Pajak",
    type: ["e-Samsat (khusus Jabar)", "PBB"]
  }
];

const merchants = [
  "Go-Pay Customer/ Driver",
  "Grab-Pay Customer (OVO)",
  "LinkAja",
  "OVO",
  "Dana",
  "Paytren"
];

const testimonials = [
  {
    name: "Rochani",
    content: "Admin cepat respon. Pulsa 50 harga 50.",
    location: "Samarinda"
  }
];

const statistics = [
  {
    count: 467,
    label: "pulsa"
  },
  {
    count: 29,
    label: "paket data"
  },
  {
    count: 31,
    label: "tiket pesawat"
  },
  {
    count: 6,
    label: "tiket kereta"
  },
  {
    count: 17,
    label: "PLN"
  },
  {
    count: 14,
    label: "Telkom"
  },
  {
    count: 17,
    label: "Gopay"
  },
  {
    count: 7,
    label: "Grabpay"
  }
];

export { merchants, modes, ppob, providers, statistics, testimonials };
