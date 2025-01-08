<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rincian SPPD</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container my-5">
    <h1 class="text-center">Rincian SPPD</h1>

    <!-- Form Input -->
    <form id="sppdForm">
      <div class="row mb-3">
        <div class="col-md-4">
          <label for="jumlahOrang" class="form-label">Jumlah Orang</label>
          <input type="number" class="form-control" id="jumlahOrang" name="jumlahOrang" required>
        </div>
        <div class="col-md-4">
          <label for="tujuan" class="form-label">Tujuan</label>
          <input type="text" class="form-control" id="tujuan" name="tujuan" required>
        </div>
        <div class="col-md-4">
          <label for="jenisKendaraan" class="form-label">Jenis Kendaraan</label>
          <select class="form-control" id="jenisKendaraan" name="jenisKendaraan">
            <option value="pribadi">Pribadi</option>
            <option value="mobilLayanan">Mobil Layanan</option>
            <option value="mobilAntarJemput">Mobil Antar Jemput</option>
          </select>
        </div>
      </div>

      <!-- Tabel Rincian -->
      <table class="table table-bordered" id="rincianTabel">
        <thead>
          <tr>
            <th>Komponen</th>
            <th>Volume</th>
            <th>Satuan</th>
            <th>Jumlah (Rp)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jarak</td>
            <td><input type="number" id="jarak" class="form-control" placeholder="0" min="0" oninput="if(this.value==''){this.value='0';}" /></td>
            <td>km</td>
            <td><input type="text" class="form-control jumlah" id="jumlahJarak" readonly></td>
          </tr>
          <tr>
            <td>Durasi</td>
            <td><input type="number" id="durasi" class="form-control" placeholder="0" min="0" oninput="if(this.value==''){this.value='0';}" /></td>
            <td>jam</td>
            <td><input type="text" class="form-control jumlah" id="jumlahDurasi" readonly></td>
          </tr>
          <tr>
            <td>Snack</td>
            <td><input type="number" id="snack" class="form-control" placeholder="0" min="0" oninput="if(this.value==''){this.value='0';}" /></td>
            <td>porsi</td>
            <td><input type="text" class="form-control jumlah" id="jumlahSnack" readonly></td>
          </tr>
          <tr>
            <td>Makan</td>
            <td><input type="number" id="makan" class="form-control" placeholder="0" min="0" oninput="if(this.value==''){this.value='0';}" /></td>
            <td>porsi</td>
            <td><input type="text" class="form-control jumlah" id="jumlahMakan" readonly></td>
          </tr>
          <tr>
            <td>Lembur</td>
            <td><input type="number" id="lembur" class="form-control" placeholder="0" min="0" oninput="if(this.value==''){this.value='0';}" /></td>
            <td>jam</td>
            <td><input type="text" class="form-control jumlah" id="jumlahLembur" readonly></td>
          </tr>
          <tr>
            <td>Menginap</td>
            <td><input type="number" id="menginap" class="form-control" placeholder="0" min="0" oninput="if(this.value==''){this.value='0';}" /></td>
            <td>hari</td>
            <td><input type="text" class="form-control jumlah" id="jumlahMenginap" readonly></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-center"><button type="button" class="btn btn-primary" onclick="hitungTotal()">Hitung Total</button></td>
            <td><input type="text" class="form-control" id="totalBiaya" readonly></td>
          </tr>
        </tfoot>
      </table>

      <!-- Tambahkan di bawah tabel total -->
        <div class="mt-3">
        <strong>Terbilang:</strong>
        <p id="totalTerbilang"></p>
        </div>

      <!-- Catatan otomatis -->
        <div class="mt-3">
         <strong>Catatan:</strong>
         <p id="catatanOtomatis"></p>
        </div>

      <!-- ket tambahana -->
      <div class="form-group">
          <label for="keteranganTambahan">Keterangan Tambahan (opsional):</label>
          <input type="text" id="keteranganTambahan" class="form-control">
      </div><br>

      <button type="button" class="btn btn-success" onclick="window.print()">Print</button>
      <button class="btn btn-primary" onclick="printSPPD()">Print struk</button>
    </form>
  </div>

  <script src="js/script.js"></script>
  <script src="js/print.js"></script>
</body>
</html>
