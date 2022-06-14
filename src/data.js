const movies = [
  {
    name: "The Shawshank Redemption",
    released: "1994",
    rated: 9.2,
    id: 1,
    image:
      "https://ae01.alicdn.com/kf/Hc23f6083c0c04635a5b778ebbf50a5a83/The-Shawshank-Redemption-Propaganda-Vintage-Retro-Kraft-DIY-Wall.jpg_Q90.jpg_.webp",
  },
  {
    name: "The Godfather",
    released: "1972",
    rated: "9.2",
    id: 2,
    image:
      "https://media.elcinema.com/uploads/_640x_fbaa3f5faa7b0f15facd2ca8538040725aed35ded9471e41e65a7998dc0ffa47.jpg",
  },
  {
    name: "The Godfather: Part II",
    released: "1974",
    rated: 9,
    id: 3,
    image:
      "https://3.bp.blogspot.com/-VTcKbdLdh_0/V2lmBQxTDNI/AAAAAAAAA2M/gwGHcq1q-jo8NUjl6B5vsC5cALyHIlg_wCLcB/s1600/godfather%2Bpart%2B2.jpg",
  },
  {
    name: "Batman: Atsawinrattikan",
    released: "2008",
    rated: 9,
    id: 4,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    name: "12 Angry Men",
    released: "1957",
    rated: 8.9,
    id: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/08c56299bd22f83264a20025be29f9e6d47664792cde0d879bbd6f0cd3d673c8._RI_V_TTW_.jpg",
  },
  {
    name: "Schindler's List",
    released: "1993",
    rated: 8.9,
    id: 6,
    image: "https://flxt.tmsimg.com/assets/p15227_p_v13_be.jpg",
  },
  {
    name: "The Lord of the Rings",
    released: "2003",
    rated: 8.9,
    id: 7,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
  },
  {
    name: "Pulp Fiction",
    released: "1994",
    rated: 8.9,
    id: 8,
    image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
  },
  {
    name: "Il buono, il brutto, il cattivo",
    released: "1966",
    rated: 8.8,
    id: 9,
    image:
      "https://resources5.eaglepictures.com/image/1/400/600/61c215641f9a7/il-buono-il-brutto-il-cattivo-cover.jpg",
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
  {
    name: "Il buono, il brutto, il cattivo",
    released: "1966",
    rated: 8.8,
    id: 19,
    image:
      "https://resources5.eaglepictures.com/image/1/400/600/61c215641f9a7/il-buono-il-brutto-il-cattivo-cover.jpg",
  },
  {
    name: "Fight Club",
    released: "1999",
    rated: 8.8,
    id: 20,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
  },
];

export default movies;
