# Contact App

Bu proje, React kullanarak basit bir kişi rehberi uygulaması geliştirmektedir. Kullanıcı, kişi listesini görebilir, kişileri filtreleyebilir ve yeni kişi ekleyebilir.

## Live Site

You can visit the live site [here](https://regal-syrniki-18130b.netlify.app/) to try out the game!

## Özellikler

- **Kişi Listeleme:** Kayıtlı kişilerin ad ve telefon numaralarını görüntüler.
- **Filtreleme:** İsim veya telefon numarasına göre kişileri filtreleyebilir.
- **Kişi Ekleme:** Yeni kişileri ad ve telefon numarası ile listeye ekleyebilir.

## Ana Bileşenler

- App: Ana bileşen, Contacts bileşenini içerir.
- Contacts: Kişi rehberi uygulamasının temel işlevlerini içerir. List ve Form bileşenlerini kullanır.
  - List: Kayıtlı kişileri listeleyen bileşendir ve filtreleme işlevini içerir.
  - Form: Yeni kişi eklemeyi sağlayan form bileşenidir.

## Kurulum

Projeyi çalıştırmak için aşağıdaki adımları izleyin:

1. Projeyi klonlayın:

```bash
git clone <repository-url>
```

2. Proje dizinine gidin:

```bash
cd contact-app
```

3. Bağımlılıkları yükleyin:

```bash
npm install
```

4. Uygulamayı çalıştırın:

```bash
npm run dev
```

## Kullanım

- **Kişi Eklemek İçin:** İlgili alanlara ad ve telefon numarasını girin ve "Add" butonuna tıklayın.
- **Kişi Filtrelemek İçin:** Üstteki arama çubuğuna bir isim veya telefon numarası girin. Liste otomatik olarak filtrelenir.

## Teknolojiler

- **React:** Arayüz oluşturmak için kullanılan kütüphane.
- **CSS:** Basit stillendirme için kullanıldı.

## Kod Açıklamaları

### Contacts Bileşeni

`Contacts` bileşeni, `useEffect` ile her yeni kişi eklendiğinde `contacts` listesini konsola yazar. `List` ve `Form` bileşenlerini içerir ve kişileri listelemek ve eklemek için temel işlevleri yönetir.

### List Bileşeni

`List` bileşeni, girilen filtreleme kriterine göre kişileri filtreler ve listeler. `contacts` prop'u ile gelen kişileri filtreleme alanı içinden dinamik olarak görüntüler.

### Form Bileşeni

`Form` bileşeni, `handleChangeInput` ve `handleSubmit` işlevlerini içerir. Bu bileşen, yeni bir kişi eklemek için form alanları sağlar. Boş bir isim veya telefon numarasıyla gönderim yapıldığında, yeni kişi eklenmez.
