// src/lib/data.ts

export const staticProducts = [
  {
    id: 1,
    Name: "Seblak Frozen Original",
    Category: "Frozen Food",
    Price: 12000, // Sesuai harga baru
    Thumbnail: "/images/produk.jpeg", // Pastikan gambar ada di folder public
    VariantName: "Paket Hemat",
    Description: "Nikmatnya kerupuk dan makaroni dengan bumbu kencur otentik. Pilihan tepat untuk ngemil santai.",
    CookingTime: "5 Menit",
    Spiciness: 5, // Melambangkan Level 1-5 tersedia
    Ingredients: [
      "Kerupuk Seblak Mentah Pilihan",
      "Makaroni",
      "Bumbu Seblak Khas",
      "Garam & Gula",
      "Minyak Nabati",
      "Penyedap Rasa"
    ],
    Instructions: "Tumis bumbu dengan sedikit minyak, masukkan air 2 gelas (±300ml), masukkan kerupuk & makaroni. Masak hingga lunak dan kuah mengental."
  },
  {
    id: 2,
    Name: "Seblak Frozen Sosis Bakso",
    Category: "Frozen Food",
    Price: 15000, // Sesuai harga baru
    Thumbnail: "/images/produk.jpeg", 
    VariantName: "Best Seller",
    Description: "Varian favorit! Perpaduan kenyalnya kerupuk dengan topping Sosis dan Bakso sapi yang bikin nagih.",
    CookingTime: "5-7 Menit",
    Spiciness: 5, // Melambangkan Level 1-5 tersedia
    Ingredients: [
      "Kerupuk Seblak Pilihan",
      "Makaroni",
      "Potongan Sosis Sapi",
      "Bakso Sapi",
      "Bumbu Seblak Khas",
      "Minyak Nabati & Bumbu Pelengkap"
    ],
    Instructions: "Tumis bumbu, tambahkan air. Masukkan kerupuk, makaroni, sosis, dan bakso. Masak hingga semua bahan matang merata dan aroma harum."
  },
  {
    id: 3,
    Name: "Seblak Frozen Komplit Sultan",
    Category: "Frozen Food",
    Price: 18000, // Sesuai harga baru
    Thumbnail: "/images/produk.jpeg",
    VariantName: "Sultan (Paling Puas)",
    Description: "Paket paling puas dengan isian melimpah ruah. Topping lengkap, porsi mantap ±250gr, jaminan kenyang!",
    CookingTime: "7-8 Menit",
    Spiciness: 5, // Melambangkan Level 1-5 tersedia
    Ingredients: [
      "Kerupuk Seblak & Makaroni",
      "Sosis Sapi Premium",
      "Bakso Sapi Premium",
      "Topping Spesial Lainnya",
      "Bumbu Kencur 'Sultan'",
      "Minyak Nabati & Penyedap"
    ],
    Instructions: "Tumis bumbu hingga harum, masukkan air secukupnya. Masukkan semua isian komplit. Masak hingga kuah menyusut (nyemek) sesuai selera."
  }
];