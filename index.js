const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

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
  conn.query('SELECT * FROM product', (err, result) => {
    if (err) {
      res.send({ status: 'Gagal', message: err.message });
    } else {
      res.send({ status: 'Sukses', result });
    }
  });
});

// Menampilkan bedasarkan ID
app.get('/api/produk/:id', (req, res) => {
  conn.query(
    `SELECT * FROM product WHERE product_id=${req.params.id}`,
    (err, result) => {
      if (err) {
        res.send({ status: 'Gagal', message: err.name });
      } else {
        res.send({ status: 'Sukses', result });
      }
    }
  );
});

// Menambahkan data
app.post('/api/produk', (req, res) => {
  let data = {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
  };
  conn.query(`INSERT INTO product SET ?`, data, (err, result) => {
    if (err) {
      res.send({ status: 'Gagal', message: err.name });
    } else {
      res.send({ status: 'Sukses', result });
    }
  });
});

// Update Data
app.put('/api/produk/:id', (req, res) => {
  let sql = `UPDATE product SET product_name='"${req.body.product_name}"', product_price='"${req.body.product_price}"' WHERE product_id="${req.params.id}";`;
  conn.query(sql, (err, result) => {
    if (err) {
      res.send({ status: 'Gagal', message: err.name });
    } else {
      res.send({ status: 'Sukses', result });
    }
  });
});

app.listen(6000, () => {
  console.log('Server mlaku ngango port 6000');
});
