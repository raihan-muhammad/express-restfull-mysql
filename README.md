# express-restfull

The technology that I use
1. Node Js
2. Express Js
3. Mysql

How to start
```
npm install
```

```
npm run start
```

### ENDPOINT 

| Path             | Method | Description                                   | Data                                                                                                                                                                                                                        |
| ---------------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/produk      | GET    | used for show list of produk from database.   | -                                                                                                                                                                                                                           |
| /api/produk/:id  | GET    | used for show detail of produk from database. | Params Request :<br>id: integer                         |
| /api/produk      | POST   | used for add data produk to database.         | Raw Object Request :<br>product_name: varchar<br>  product_price: integer          |
| /api/produk/:id  | PUT    | used for update data produk to database.      | Params Request : <br>id: integer <br> Raw Object Request :<br>product_name: varchar<br>  product_price: integer          |
| /api/produk/:id  | DELETE    | used for delete data of produk from database. | Params Request :<br>id: integer                         |

