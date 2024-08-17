### Basit Kütüphane Yönetim Paneli (BETA) V1.0

- Panelde yaklaşık 5 tane özellik bulunmaktadır bunlar şu şekilde;
- Kitap Ekle
- Kitap Çıkar
- Kitap Teslim İşlemleri (Kitabı teslim alma & teslim etme)
- Teslim Listesi (Kimler hangi kitabı teslim almış vs.)
- Son olarak eklenilen kitaplar.


### Projede kullanılan sistemler hk.

Tarafımca google firebase ile hazırlanmıştır.


### Projeyi nasıl kullanabilirim?
Yapmanız gereken tek şey Google Firebase hesabı oluşturun ve bir tane proje oluşturun.
Projeyi oluşturduktan sonra kurulum aşamasından CDN seçin ve aşağıdaki kodları diğer keyler ile değiştirin.
En önemli kural firebase üzerinden firestore cloud oluşturun ve 2 tane collection oluşturun (kitaplar, teslimAlinmayan)


```javascript
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "BURALAR SİZE AİT OLACAK GOOGLE FIREBASE'DE VAR",
    authDomain: "BURALAR SİZE AİT OLACAK GOOGLE FIREBASE'DE VAR"",
    projectId: "BURALAR SİZE AİT OLACAK GOOGLE FIREBASE'DE VAR"",
    storageBucket: "BURALAR SİZE AİT OLACAK GOOGLE FIREBASE'DE VAR"",
    messagingSenderId: "BURALAR SİZE AİT OLACAK GOOGLE FIREBASE'DE VAR"",
    appId: "BURALAR SİZE AİT OLACAK GOOGLE FIREBASE'DE VAR""
  };
</script>
```

Kullanıma hazır.


### ENG

### Simple Library Administration Panel (BETA) V1.0

- There are approximately 5 features in the panel, they are as follows;
- Add Book
- Release a Book
- Book Delivery Procedures (Receiving & delivering the book)
- Delivery List (Who delivered which book, etc.)
- Recently added books.


### About the systems used in the project.

It was prepared by me using Google Firebase.


### How can I use the project?
All you need to do is create a Google Firebase account and create a project.
After creating the project, select CDN during the installation phase and replace the codes below with other keys.
The most important rule is to create a firestore cloud via firebase and create 2 collections (books, undelivered)


```javascript
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "THESE WILL BE YOURS, AVAILABLE ON GOOGLE FIREBASE",
    authDomain: "THESE WILL BE YOURS, AVAILABLE ON GOOGLE FIREBASE"",
    projectId: "THESE WILL BE YOURS, AVAILABLE ON GOOGLE FIREBASE"",
    storageBucket: "THESE WILL BE YOURS, AVAILABLE ON GOOGLE FIREBASE"",
    messagingSenderId: "THESE WILL BE YOURS, AVAILABLE ON GOOGLE FIREBASE"",
    appId: "THESE WILL BE YOURS, AVAILABLE ON GOOGLE FIREBASE""
  };
</script>
```

Ready for using
