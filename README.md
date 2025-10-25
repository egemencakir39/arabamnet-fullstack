# 🚗 ArabamNet – Fullstack Araç İlan Platformu

ArabamNet, kullanıcıların araç ilanlarını görüntüleyebildiği ve **admin’in yeni araç ilanı ekleyebildiği** fullstack bir web uygulamasıdır.  
Proje, modern web teknolojileri kullanılarak **Next.js 15, MongoDB, JWT Authentication** ve **Cloudinary** entegrasyonlarıyla geliştirilmiştir.

---

## 🧩 Özellikler

### 👤 Kimlik Doğrulama (JWT)
- Kullanıcılar ve admin, JWT tabanlı kimlik doğrulama ile güvenli şekilde giriş yapabilir.  
- Token, **httpOnly cookie** olarak saklanır ve **middleware** koruması sayesinde sadece yetkili kullanıcılar erişim sağlar.  
- Admin paneli ve API route’ları bu token ile korunur.

---

### 🔑 Admin Paneli
- Admin kullanıcı **araç ilanlarını ekleyebilir, düzenleyebilir ve silebilir.**  
- Araç ekleme işlemi **modal form** ile yapılır.  
- Görseller **Cloudinary Upload Widget** üzerinden yüklenir.  
- Tüm ilan verileri **MongoDB Atlas**’ta saklanır.  

---

### 🚘 Araç İlanları
- Kullanıcılar siteye giriş yapmadan tüm araçları görüntüleyebilir.  
- İlanlar responsive kart tasarımıyla listelenir.  
- MUI + Tailwind CSS kullanılarak modern, sade bir görünüm elde edilmiştir.  
- Yakında filtreleme ve detay sayfası özellikleri eklenecektir.

---

## 🛠️ Kullanılan Teknolojiler

| Katman | Teknoloji |
|--------|------------|
| **Frontend** | Next.js 15, React, Redux Toolkit, Tailwind CSS, MUI |
| **Backend** | Node.js (Next.js API Routes), MongoDB, Mongoose |
| **Auth** | JWT + Cookies |
| **Media** | Cloudinary |
| **Deployment** | Vercel (API + UI), MongoDB Atlas |

---

## 🧠 Çalışma Mantığı

1. Kullanıcı veya admin giriş yapar → JWT cookie oluşturulur.  
2. Token geçerliyse kullanıcı `/profile`, admin `/admin` sayfasına yönlendirilir.  
3. Admin yeni araç ilanı ekleyebilir, silebilir veya güncelleyebilir.  
4. Araçlar `/api/cars` üzerinden MongoDB’den çekilir.  
5. Görseller Cloudinary üzerinde barındırılır.  
6. **Middleware** koruması sayesinde sadece giriş yapan kullanıcılar API’lere erişebilir.

---

## 💡 Eklenmesi Planlanan Özellikler

### ⭐ Favori Sistemi
- Kullanıcılar ilan kartlarındaki “kalp” ikonuna tıklayarak favorilerine araç ekleyebilecek.  
- Favoriler kullanıcı hesabına özel olarak MongoDB’de saklanacak.  

### 👤 Profil Güncelleme
- Kullanıcılar giriş yaptıktan sonra **ad, e-posta, şifre ve profil fotoğrafı** gibi bilgilerini düzenleyebilecek.

### 🧾 Filtreleme & Arama
- Araçlar marka, model, fiyat, yakıt türü, vites tipi ve yıl bilgisine göre filtrelenebilecek.

---

### Geliştirme Ortamı
```bash
npm install
npm run dev

Deployment

Proje Vercel üzerinde yayınlanmıştır:
👉 https://arabamnet-fullstack.vercel.app
