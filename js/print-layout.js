<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetak Rincian SPPD</title>
    <style>
        body {
            font-family: Courier, monospace;
            font-size: 14px;
        }
        .container {
            width: 300px;
            margin: 0 auto;
            text-align: left;
        }
        .rincian {
            border-top: 1px dashed #000;
            border-bottom: 1px dashed #000;
            padding: 10px 0;
        }
        .rincian p {
            margin: 0;
        }
        .total {
            font-weight: bold;
            margin-top: 10px;
            border-top: 1px solid #000;
            padding-top: 10px;
        }
        .catatan {
            margin-top: 20px;
            font-style: italic;
        }
        .keterangan-tambahan {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h3>Rincian SPPD</h3>
        <div class="rincian">
            <p id="jarak"></p>
            <p id="durasi"></p>
            <p id="snack"></p>
            <p id="makan"></p>
            <p id="lembur"></p>
            <p id="menginap"></p>
        </div>

        <div class="total">
            <p id="total"></p>
            <p id="totalTerbilang"></p>
        </div>

        <div class="catatan" id="catatanContainer" style="display: none;">
            <p id="catatan"></p>
        </div>

        <div class="keterangan-tambahan" id="keteranganTambahanContainer" style="display: none;">
            <p id="keteranganTambahan"></p>
        </div>
    </div>

    <script>
        // Mengambil parameter dari URL
        const urlParams = new URLSearchParams(window.location.search);

        // Fungsi untuk menampilkan parameter di elemen tertentu
        function setTextContent(id, text) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
            }
        }

        // Menampilkan data di bagian rincian
        setTextContent('jarak', `Jarak: ${urlParams.get('jarak')} km - Rp. ${urlParams.get('nominalJarak')}`);
        setTextContent('durasi', `Durasi: ${urlParams.get('durasi')} jam - Rp. ${urlParams.get('nominalDurasi')}`);
        setTextContent('snack', `Snack: ${urlParams.get('snack')} porsi - Rp. ${urlParams.get('nominalSnack')}`);
        setTextContent('makan', `Makan: ${urlParams.get('makan')} porsi - Rp. ${urlParams.get('nominalMakan')}`);
        setTextContent('lembur', `Lembur: ${urlParams.get('lembur')} jam - Rp. ${urlParams.get('nominalLembur')}`);
        setTextContent('menginap', `Menginap: ${urlParams.get('menginap')} hari - Rp. ${urlParams.get('nominalMenginap')}`);

        // Menampilkan total biaya
        setTextContent('total', `Total Biaya: Rp. ${urlParams.get('total')}`);
        setTextContent('totalTerbilang', `${urlParams.get('totalTerbilang')} Rupiah`);

        // Menampilkan catatan jika ada
        const catatan = urlParams.get('catatan');
        if (catatan) {
            document.getElementById('catatanContainer').style.display = 'block';
            setTextContent('catatan', `Catatan: ${catatan}`);
        }

        // Menampilkan keterangan tambahan jika ada
        const keteranganTambahan = urlParams.get('keteranganTambahan');
        if (keteranganTambahan) {
            document.getElementById('keteranganTambahanContainer').style.display = 'block';
            setTextContent('keteranganTambahan', `Keterangan Tambahan: ${keteranganTambahan}`);
        }
    </script>
</body>
</html>
