const mongoose = require("mongoose");
const dbName = "ghibliproject";

const Movie = require("../models/movie.model");

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.dtta7.mongodb.net/${dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const movies = [
  {
    api_id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593097/castleinthesky_hbuoqg.jpg"
  },
  {
    api_id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593097/graveofthefireflies_zlfddf.jpg"
  },
  {
    api_id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593097/myneighborhoodtotoro_lugz09.jpg"
  },
  {
    api_id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593097/kikisdeliveryservice_hfsbwj.jpg"
  },
  {
    api_id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593097/onlyyesterday_hlbhij.jpg"
  },
  {
    api_id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/porcorosso_dz4epj.jpg"
  },
  {
    api_id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593097/pompoko_phnkji.jpg"
  },
  {
    api_id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/whisperoftheheart_js7nlv.jpg"
  },
  {
    api_id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/princessmononoke_ufthqs.jpg"
  },
  {
    api_id: "45204234-adfd-45cb-a505-a8e7a676b114",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/myneighborstheyamadas_qg4jee.jpg"
  },
  {
    api_id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/spiritedaway.jpg_pqlyut.jpg"
  },
  {
    api_id: "90b72513-afd4-4570-84de-a56c312fdf81",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/thecatreturns_dlddqj.jpg"
  },
  {
    api_id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/howlsmovingcastle_cypvsn.jpg"
  },
  {
    api_id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593096/talesfromearthsea_usxkqq.jpg"
  },
  {
    api_id: "758bf02e-3122-46e0-884e-67cf83df1786",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593095/ponyo_fnoitu.jpg"
  },
  {
    api_id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593095/arriety_kh6kzn.jpg"
  },
  {
    api_id: "45db04e4-304a-4933-9823-33f389e8d74d",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593095/fromuponpoppyhill_ebm2ne.jpg"
  },
  {
    api_id: "67405111-37a5-438f-81cc-4666af60c800",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593095/thewindrises_dxrggl.jpg"
  },
  {
    api_id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593095/The-taleofprincess-kaguya_bxye4x.jpg"
  },
  {
    api_id: "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    image:
      "https://res.cloudinary.com/dxslsbznp/image/upload/v1613593095/whenmarinewasthere_nbgzxh.jpg"
  }
];

Movie.create(movies)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`));
