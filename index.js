const express = require('express');
const mysql = require('mysql');
const app = express();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudnode',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Koneksi Berhasil');
});

// Menampilkan semua data
app.get('/api/produk', (req, res) => {
  let query = conn.query('SELECT * FROM product', (err, result) => {
    res.send({ status: 'Sukses', result: result });
  });
});

app.listen(6000, () => {
  console.log('Server mlaku ngango port 6000');
});
