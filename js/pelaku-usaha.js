const kotaData = {
  "NANGGROE ACEH DARUSSALAM": ["Banda Aceh", "Lhokseumawe", "Langsa"],
  "SUMATERA UTARA": ["Medan", "Binjai", "Tebing Tinggi"],
  "SUMATERA BARAT": ["Padang", "Bukittinggi", "Payakumbuh"],
  RIAU: ["Pekanbaru", "Dumai", "Bengkalis"],
  JAMBI: ["Jambi", "Sungai Penuh", "Muaro Jambi"],
  "SUMATERA SELATAN": ["Palembang", "Lubuklinggau", "Prabumulih"],
  BENGKULU: ["Bengkulu", "Argamakmur", "Curup"],
  LAMPUNG: ["Bandar Lampung", "Metro", "Pringsewu"],
  "KEPULAUAN BANGKA BELITUNG": [
    "Pangkalpinang",
    "Tanjung Pandan",
    "Sungai Liat",
  ],
  "KEPULAUAN RIAU": ["Tanjung Pinang", "Batam", "Bintan"],
  "DKI JAKARTA": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Selatan"],
  "JAWA BARAT": ["Bandung", "Bekasi", "Depok"],
  "JAWA TENGAH": ["Semarang", "Surakarta", "Tegal"],
  "DAERAH ISTIMEWA YOGYAKARTA": ["Yogyakarta", "Sleman", "Bantul"],
  "JAWA TIMUR": ["Surabaya", "Malang", "Kediri"],
  BANTEN: ["Serang", "Cilegon", "Tangerang"],
  BALI: ["Denpasar", "Badung", "Gianyar"],
  "NUSA TENGGARA BARAT": ["Mataram", "Bima", "Dompu"],
  "NUSA TENGGARA TIMUR": ["Kupang", "Ende", "Maumere"],
  "KALIMANTAN BARAT": ["Pontianak", "Singkawang", "Ketapang"],
  "KALIMANTAN TENGAH": ["Palangka Raya", "Sampit", "Pangkalan Bun"],
  "KALIMANTAN SELATAN": ["Banjarmasin", "Banjarbaru", "Martapura"],
  "KALIMANTAN TIMUR": ["Samarinda", "Balikpapan", "Bontang"],
  "KALIMANTAN UTARA": ["Tanjung Selor", "Tarakan", "Nunukan"],
  "SULAWESI UTARA": ["Manado", "Bitung", "Tomohon"],
  "SULAWESI TENGAH": ["Palu", "Donggala", "Poso"],
  "SULAWESI SELATAN": ["Makassar", "Parepare", "Palopo"],
  "SULAWESI TENGGARA": ["Kendari", "Bau-Bau", "Kolaka"],
  GORONTALO: ["Gorontalo", "Limboto", "Tilamuta"],
  "SULAWESI BARAT": ["Mamuju", "Polewali", "Majene"],
  MALUKU: ["Ambon", "Tual", "Masohi"],
  "MALUKU UTARA": ["Ternate", "Tidore", "Sofifi"],
  "PAPUA BARAT": ["Manokwari", "Sorong", "Raja Ampat"],
  PAPUA: ["Jayapura", "Mimika", "Biak"],
};

function updateKota() {
  const provinsiSelect = document.getElementById("provinsi-select");
  const kotaSelect = document.getElementById("kota-select");
  const selectedProvinsi = provinsiSelect.value;

  kotaSelect.innerHTML = '<option value="">Semua Kota/Kabupaten</option>';

  if (selectedProvinsi && kotaData[selectedProvinsi]) {
    kotaData[selectedProvinsi].forEach((kota) => {
      const option = document.createElement("option");
      option.value = kota;
      option.textContent = kota;
      kotaSelect.appendChild(option);
    });
    kotaSelect.disabled = false;
  } else {
    kotaSelect.disabled = true;
  }
}
