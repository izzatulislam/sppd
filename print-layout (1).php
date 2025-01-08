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
            <p>Jarak: <?php echo $_GET['jarak']; ?> km - Rp. <?php echo $_GET['nominalJarak']; ?></p>
            <p>Durasi: <?php echo $_GET['durasi']; ?> jam - Rp. <?php echo $_GET['nominalDurasi']; ?></p>
            <p>Snack: <?php echo $_GET['snack']; ?> porsi - Rp. <?php echo $_GET['nominalSnack']; ?></p>
            <p>Makan: <?php echo $_GET['makan']; ?> porsi - Rp. <?php echo $_GET['nominalMakan']; ?></p>
            <p>Lembur: <?php echo $_GET['lembur']; ?> jam - Rp. <?php echo $_GET['nominalLembur']; ?></p>
            <p>Menginap: <?php echo $_GET['menginap']; ?> hari - Rp. <?php echo $_GET['nominalMenginap']; ?></p>
        </div>

        <div class="total">
            <p>Total Biaya: Rp. <?php echo $_GET['total']; ?></p>
            <p><?php echo $_GET['totalTerbilang']; ?> Rupiah</p>
        </div>

        <?php if (!empty($_GET['catatan'])) { ?>
        <div class="catatan">
            <p>Catatan: <?php echo $_GET['catatan']; ?></p>
        </div>
        <?php } ?>

        <?php if (!empty($_GET['keteranganTambahan'])) { ?>
        <div class="keterangan-tambahan">
            <p>Keterangan Tambahan: <?php echo $_GET['keteranganTambahan']; ?></p>
        </div>
        <?php } ?>
    </div>
</body>
</html>
