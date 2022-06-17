const movies = [
  {
    name: "Minions : The Rise of Gru",
    released: "2022",
    rated: 9.2,
    id: 1,
    image:
      "https://lh3.googleusercontent.com/ntQC1ZR6lAs6MT3tP8QkZLppyjqGPhDncnlngKEFjSByOgu9ReV6rToCIt698fgvu4o2Crv14cH41wZw_XO-ceXGqhKPBEBj=w260",
  },
  {
    name: "LightYear",
    released: "2022",
    rated: "9.2",
    id: 2,
    image:
      "https://lh3.googleusercontent.com/_Cs39kMypP0ibH3VvOfux83ytSKyyn9fN5g_S3cHM79fLZ6YSBGtHjMDrpeWbHD5AKSEnJZ-UCAd6ElwxBculwb99B2J-S53NA=w260",
  },
  {
    name: "Doctor Strange2",
    released: "2022",
    rated: 9,
    id: 3,
    image:
      "https://lh3.googleusercontent.com/8qldP3jObcN9bbpdAe0WYoqdML7YZB5mkZEGuhVdxSVELEYZdepbKfqr5bd8GApf0sSZH5FL1B_AC8vkV-cVCJ5kV5804yeUvw=w260",
  },
  {
    name: "Top Gun: Maverick",
    released: "2022",
    rated: 9,
    id: 4,
    image:
      "https://lh3.googleusercontent.com/kf3DRgL_m21iQRs0HQvczIRb5nGyLTRNN9j9J8GZSoPgt0_O-8F1OYVKzFUKLqZHd8TWQxI-wcWZUAtQWhKaQLJ9h-TI1qiqNA=w260",
  },
  {
    name: "Jurassic World Dominion",
    released: "2022",
    rated: 8.9,
    id: 5,
    image:
      "https://lh3.googleusercontent.com/WQBu8Ijt5B9DQQ2vJSVpDT9GngZM3tJVF-kjNpfGxSZAQDGiEUzCe5EkHUJAQ3wCYnVTTnv0IgzYW-3MvbUOhEgwEnhgICYMKiI=w260",
  },
  {
    name: "The Antique shop",
    released: "2022",
    rated: 8.9,
    id: 6,
    image:
      "https://lh3.googleusercontent.com/OQdzKfgeqHr1aLgetM7Gc8PUJC4NcRO-fc-PjHkd3Po7EBr-QFSHpiiLdV5n4FcX6glwhDw5HHRqDXJ804MicIWLgqoQxyI_Dg=w260",
  },
  {
    name: "shark Bait",
    released: "2022",
    rated: 8.9,
    id: 7,
    image:
      "https://lh3.googleusercontent.com/2rtcGNAW5XgLeputQ88megsxQpy7YrBwRW-7H2yj4Ar5rPRsl3VMOf2x57zGZR_qFJ_FAXkPffRKuFyUC2O4cnDqkBolyJDKZg=w260",
  },
  {
    name: "Fire Hurt",
    released: "2022",
    rated: 8.9,
    id: 8,
    image:
      "https://lh3.googleusercontent.com/IQ6_6BhL7KBDtQ99NDc-MOkjHl6hIbgfbLH1Hpt5gZGnTBwjQcMtRrSBcZcEs-GTk-aRvGtpFF4__gU8oQ4liOGb-uVXNV3pnQ=w260",
  },
  {
    name: "Detective Conan The Movie 25",
    released: "2022",
    rated: 8.8,
    id: 9,
    image:
      "https://lh3.googleusercontent.com/jIhXBR9j-YViwrCujaoVxXCzTrqUQLC_ejUTBRZGdKC7aAS7CqefwmEnJz89s4onYErvospFa6ggTJvqi94Pfv8jgHSd660Fnfg=w260",
  },
  {
    name: "Fight Club",
    released: "1999",
    rated: 8.8,
    id: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "The Shawshank Redemption",
    released: "1994",
    rated: 9.2,
    id: 11,
    image:
      "https://ae01.alicdn.com/kf/Hc23f6083c0c04635a5b778ebbf50a5a83/The-Shawshank-Redemption-Propaganda-Vintage-Retro-Kraft-DIY-Wall.jpg_Q90.jpg_.webp",
  },
  {
    name: "The Godfather",
    released: "1972",
    rated: "9.2",
    id: 12,
    image:
      "https://media.elcinema.com/uploads/_640x_fbaa3f5faa7b0f15facd2ca8538040725aed35ded9471e41e65a7998dc0ffa47.jpg",
  },
  {
    name: "The Godfather: Part II",
    released: "1974",
    rated: 9,
    id: 13,
    image:
      "https://3.bp.blogspot.com/-VTcKbdLdh_0/V2lmBQxTDNI/AAAAAAAAA2M/gwGHcq1q-jo8NUjl6B5vsC5cALyHIlg_wCLcB/s1600/godfather%2Bpart%2B2.jpg",
  },
  {
    name: "Batman: Atsawinrattikan",
    released: "2008",
    rated: 9,
    id: 14,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    name: "12 Angry Men",
    released: "1957",
    rated: 8.9,
    id: 15,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/08c56299bd22f83264a20025be29f9e6d47664792cde0d879bbd6f0cd3d673c8._RI_V_TTW_.jpg",
  },
  {
    name: "Schindler's List",
    released: "1993",
    rated: 8.9,
    id: 16,
    image: "https://flxt.tmsimg.com/assets/p15227_p_v13_be.jpg",
  },
  {
    name: "The Lord of the Rings",
    released: "2003",
    rated: 8.9,
    id: 17,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
  },
  {
    name: "Pulp Fiction",
    released: "1994",
    rated: 8.9,
    id: 18,
    image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
  },
];

export default movies;
