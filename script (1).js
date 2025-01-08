// Fungsi untuk mengubah angka menjadi kata (terbilang)
function terbilang(angka) {
  const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  
  if (angka < 12) {
    return satuan[angka];
  } else if (angka < 20) {
    return terbilang(angka - 10) + " Belas";
  } else if (angka < 100) {
    return terbilang(Math.floor(angka / 10)) + " Puluh " + terbilang(angka % 10);
  } else if (angka < 200) {
    return "Seratus " + terbilang(angka - 100);
  } else if (angka < 1000) {
    return terbilang(Math.floor(angka / 100)) + " Ratus " + terbilang(angka % 100);
  } else if (angka < 2000) {
    return "Seribu " + terbilang(angka - 1000);
  } else if (angka < 1000000) {
    return terbilang(Math.floor(angka / 1000)) + " Ribu " + terbilang(angka % 1000);
  } else if (angka < 1000000000) {
    return terbilang(Math.floor(angka / 1000000)) + " Juta " + terbilang(angka % 1000000);
  } else if (angka < 1000000000000) {
    return terbilang(Math.floor(angka / 1000000000)) + " Milyar " + terbilang(angka % 1000000000);
  }
  return "";
}

// Update fungsi hitungTotal untuk menambahkan catatan otomatis
function hitungTotal() {
  const jumlahOrang = parseInt(document.getElementById('jumlahOrang').value);
  const jenisKendaraan = document.getElementById('jenisKendaraan').value;

  const jarak = parseFloat(document.getElementById('jarak').value || 0);
  const durasi = parseFloat(document.getElementById('durasi').value || 0);
  const snack = parseInt(document.getElementById('snack').value || 0);
  const makan = parseInt(document.getElementById('makan').value || 0);
  const lembur = parseFloat(document.getElementById('lembur').value || 0);
  const menginap = parseInt(document.getElementById('menginap').value || 0);

  let biayaJarak = 0;

  if (jenisKendaraan === 'pribadi') {
    biayaJarak = jarak * 750;
  } else if (jenisKendaraan === 'mobilLayanan') {
    biayaJarak = jarak * 2000;
  } else if (jenisKendaraan === 'mobilAntarJemput') {
    biayaJarak = jarak * 0;
  }

  let biayaDurasi = durasi * 3000;
  let biayaSnack = snack * 5000;
  let biayaMakan = makan * 15000;
  let biayaLembur = lembur * 8000;
  let biayaMenginap = menginap * 100000;

  if (jenisKendaraan === 'pribadi') {
    biayaDurasi *= jumlahOrang;
    biayaSnack *= jumlahOrang;
    biayaMakan *= jumlahOrang;
    biayaLembur *= jumlahOrang;
    biayaMenginap *= jumlahOrang;
    biayaJarak *= jumlahOrang;
  } else {
    biayaDurasi *= jumlahOrang;
    biayaSnack *= jumlahOrang;
    biayaMakan *= jumlahOrang;
    biayaLembur *= jumlahOrang;
    biayaMenginap *= jumlahOrang;
  }

  document.getElementById('jumlahJarak').value = biayaJarak;
  document.getElementById('jumlahDurasi').value = biayaDurasi;
  document.getElementById('jumlahSnack').value = biayaSnack;
  document.getElementById('jumlahMakan').value = biayaMakan;
  document.getElementById('jumlahLembur').value = biayaLembur;
  document.getElementById('jumlahMenginap').value = biayaMenginap;

  const total = biayaJarak + biayaDurasi + biayaSnack + biayaMakan + biayaLembur + biayaMenginap;
  document.getElementById('totalBiaya').value = total;

  // Update total dalam kata (terbilang)
  document.getElementById('totalTerbilang').innerText = terbilang(total) + " Rupiah";

  // Tambahkan catatan otomatis berdasarkan jenis kendaraan
  let catatan = "";
  if (jenisKendaraan === 'mobilLayanan') {
    catatan = "item jarak (transport) adalah estimasi untuk pembelian BBM, tidak termasuk upah sopir dan sewa armada.";
  } else if (jenisKendaraan === 'mobilAntarJemput') {
    catatan = "Biaya tidak termasuk upah sopir dan sewa armada.";
  }
  document.getElementById('catatanOtomatis').innerText = catatan;
}
