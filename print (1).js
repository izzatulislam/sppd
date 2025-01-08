function printSPPD() {
    const jumlahOrang = document.getElementById('jumlahOrang').value;
    const jenisKendaraan = document.getElementById('jenisKendaraan').value;
    const jarak = document.getElementById('jarak').value || 0;
    const durasi = document.getElementById('durasi').value || 0;
    const snack = document.getElementById('snack').value || 0;
    const makan = document.getElementById('makan').value || 0;
    const lembur = document.getElementById('lembur').value || 0;
    const menginap = document.getElementById('menginap').value || 0;
    const total = document.getElementById('totalBiaya').value;
    const totalTerbilang = document.getElementById('totalTerbilang').innerText;
    const catatan = document.getElementById('catatanOtomatis').innerText;
    const keteranganTambahan = document.getElementById('keteranganTambahan').value;

    // Perhitungan nominal untuk tiap komponen
    const nominalJarak = calculateJarak(jenisKendaraan, jarak);
    const nominalDurasi = durasi * 3000;
    const nominalSnack = snack * 5000;
    const nominalMakan = makan * 15000;
    const nominalLembur = lembur * 8000;
    const nominalMenginap = menginap * 100000;

    // Buat URL untuk halaman print dengan query string
    const url = `print-layout.php?jarak=${jarak}&nominalJarak=${nominalJarak}&durasi=${durasi}&nominalDurasi=${nominalDurasi}&snack=${snack}&nominalSnack=${nominalSnack}&makan=${makan}&nominalMakan=${nominalMakan}&lembur=${lembur}&nominalLembur=${nominalLembur}&menginap=${menginap}&nominalMenginap=${nominalMenginap}&total=${total}&totalTerbilang=${totalTerbilang}&catatan=${encodeURIComponent(catatan)}&keteranganTambahan=${encodeURIComponent(keteranganTambahan)}`;
    
    // Buka halaman print di tab baru
    window.open(url, '_blank');
}

function calculateJarak(jenisKendaraan, jarak) {
    let biayaPerKm = 0;
    if (jenisKendaraan === 'pribadi') {
        biayaPerKm = 750;
    } else if (jenisKendaraan === 'mobil layanan') {
        biayaPerKm = 2000;
    } else if (jenisKendaraan === 'mobil antar jemput') {
        biayaPerKm = 4000;
    }
    return jarak * biayaPerKm;
}
