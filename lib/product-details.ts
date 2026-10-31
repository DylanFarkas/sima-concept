export type ProductOption = {
  name: string;
  values: string[];
};

export type ProductVariant = {
  options: string[];
  price: number;
  available: boolean;
  image: string;
};

export type ProductDetail = {
  title: string;
  description: string;
  images: string[];
  options: ProductOption[];
  variants: ProductVariant[];
  related: string[];
};

export const productDetails: Record<string, ProductDetail> = {
  "sudadera-antifluido-cargo": {
    "title": "Sudadera Antifluido Cargo",
    "description": "Estilo y comodidad para todos tus días. Sudadera tipo cargo con tela antifluido, diseño moderno y bolsillos laterales con tapa y broche que aportan funcionalidad y un toque urbano. Cuenta con cintura y bota ajustables con elástico para un ajuste cómodo y práctico, ideal para entrenar o complementar tus outfits deportivos.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B7877B90-FDD4-4FEE-BFA7-85D1D881867B.jpg?v=1793212499",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E66A9F78-DE91-4A85-B452-B4448006771B.jpg?v=1793212499",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/51B0D23C-F4B8-4DA9-A575-35307BB092EF.jpg?v=1793212499",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B93B9564-6D47-474C-8DFC-BD187AD6558A.jpg?v=1793212499",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/5888779C-B653-4F1D-8677-A967E653BC6B.jpg?v=1793212499",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/8B7A0B8E-2EA2-457E-AAAF-C24775DA61A0.jpg?v=1793212499"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Beige",
          "Gris oscuro",
          "Negro",
          "Verde",
          "Azul"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-corto-algodon-nike",
      "conjunto-deportivo-dri-fit-nike-1",
      "conjunto-deportivo-dri-fit-adidas-1",
      "conjunto-deportivo-dri-fit-adidas"
    ]
  },
  "conjunto-corto-algodon-nike": {
    "title": "Conjunto Corto Algodón Nike",
    "description": "Conjunto corto Nike Air de dos piezas, confeccionado en algodón para brindar comodidad, frescura y estilo. Incluye camiseta de manga corta y bermuda con bolsillos. Ideal para un look deportivo y casual en cualquier ocasión.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/9E29CE77-D510-4951-9BF4-1B8EB5221431.jpg?v=1792544222",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B932A42F-133E-44C5-8241-40BB098A25DA.jpg?v=1792544222",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/F2F0F685-ADDE-4E1C-8754-E9FB4808CD08.jpg?v=1792544222",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/16CB5B33-4F2A-47B0-A420-0D72D2162183.jpg?v=1792544222",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B0820E50-BB65-44E0-A785-B3AEF4D1C608.jpg?v=1792544222"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Gris oscuro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "2XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "2XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-algodon-nike",
      "conjunto-nike",
      "pantaloneta-algodon-jordan",
      "conjunto-tela-fria-nike"
    ]
  },
  "conjunto-deportivo-dri-fit-nike-1": {
    "title": "Conjunto Deportivo Dri-Fit Nike",
    "description": "Conjunto deportivo Dri-Fit ligero, fresco y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_266ca2e9-6652-48e6-8116-e3f7baaafe70.jpg?v=1792693978",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fadf7ace-85e2-4065-abd0-f61922e62827.jpg?v=1792693977",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f8708d07-2a46-43b8-b318-bd95478a314f.jpg?v=1792693977",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_768ba033-5e64-4780-8f4e-24302a79339c.jpg?v=1792693978",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8f9da643-1bf5-4ccd-b87b-0b43540e2c67.jpg?v=1792693977",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9a8d2d8a-36c3-4c8a-aca7-23c1c1e37901.jpg?v=1792693977",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4abe1c7b-1b7a-4017-b489-4b69b3f90234.jpg?v=1792693977"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Verde",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Blanco"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Blanco"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Blanco"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Blanco"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-deportivo-dri-fit-puma",
      "conjunto-deportivo-dri-fit-nike",
      "camiseta-dri-fit-nike",
      "camiseta-nike-dri-fit"
    ]
  },
  "conjunto-deportivo-dri-fit-adidas-1": {
    "title": "Conjunto Deportivo Dri-Fit Adidas",
    "description": "Conjunto deportivo Dri-Fit ligero, fresco y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c49e4a4d-6f70-4e6a-9576-d2270c7d90cc.jpg?v=1792693733",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4ac83b87-2334-480c-8af1-b5f230829103.jpg?v=1792693733",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_66279274-ac79-4660-8858-9a0def3fe2b2.jpg?v=1792693734",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ac38fef8-27bd-49e0-ba5b-16695061b671.jpg?v=1792693733",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8bcfe831-547b-409b-9f8c-63a5f6fe0c6b.jpg?v=1792693733",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6209421e-3924-40a2-bf80-ee43b4ce474c.jpg?v=1792693734",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_592e6596-4118-41e8-992f-b6ea20d01df8.jpg?v=1792693733",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_29f029fc-b4af-428a-9d15-74968cec029e.jpg?v=1792693734",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_75182b06-d1f6-4634-ac79-138c6e6e8b6a.jpg?v=1792693733"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde",
          "Gris",
          "Gris oscuro",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Gris oscuro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Gris oscuro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Gris oscuro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Gris oscuro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-deportivo-dri-fit-adidas",
      "camiseta-dri-fit-adidas",
      "conjunto-adidas",
      "conjunto-deportivo-dri-fit-nike-1"
    ]
  },
  "conjunto-deportivo-dri-fit-adidas": {
    "title": "Conjunto Deportivo Dri-Fit Adidas",
    "description": "Conjunto deportivo Dri-Fit ligero, fresco y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_78c9376f-f095-4e20-8d97-1184a45d66d2.jpg?v=1792693394",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a91ec500-d72c-4e7b-8ec5-62abc696a560.jpg?v=1792693393",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4dcafee1-d883-4657-8e73-d79ee14dbc0c.jpg?v=1792693394",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c0ffba47-5051-4bc2-be66-fcb1e5745ef0.jpg?v=1792693393",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9f4d2262-1999-47ae-8e89-3d7321752802.jpg?v=1792693393",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0f31c1ef-6ef2-49be-9a02-842933c6122d.jpg?v=1792693394",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0124af02-a41e-4f2b-82b9-df919ccdc46b.jpg?v=1792693393"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde",
          "Gris",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Verde"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-underarmour-dri-fit",
      "chaqueta-drifit",
      "camiseta-nike-dri-fit",
      "pantaloneta-algodon-nike"
    ]
  },
  "conjunto-deportivo-dri-fit-nike": {
    "title": "Conjunto Deportivo Dri-Fit Nike",
    "description": "Conjunto deportivo Dri-Fit ligero, fresco y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8a796765-1c85-4026-8c3a-9a37b1b385e2.jpg?v=1792692471",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_26840d51-893f-4e20-8654-3d26c13a036e.jpg?v=1792692625",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0c7caea2-468c-446c-97f0-11b4e80fc9e8.jpg?v=1792692470",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eae438c3-11d6-47cd-a935-a09624faca7e.jpg?v=1792692470",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_90abda43-4d7a-41f5-a038-c4092d778c50.jpg?v=1792692470",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_864ecd97-a531-4083-93c2-c4c47a489cfa.jpg?v=1792692575",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_daad2d3d-5cf9-4c4d-af4f-7becc4c8ba21.jpg?v=1792692575"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Gris",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Gris"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-deportivo-dri-fit-nike-1",
      "camiseta-nike-dri-fit",
      "conjunto-deportivo-dri-fit-puma",
      "camiseta-dri-fit-nike"
    ]
  },
  "conjunto-deportivo-dri-fit-puma": {
    "title": "Conjunto Deportivo Dri-Fit Puma",
    "description": "Conjunto deportivo Dri-Fit ligero, fresco y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b31ed7a1-bcb9-47c6-83f3-b8eff4e483d5.jpg?v=1792693135",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b0f811b6-9f25-4fc7-90a1-22977c9aa981.jpg?v=1792693134",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4943ce84-1acc-4d6b-8c50-a5473beb1a85.jpg?v=1792693134",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_74ab49b2-b03e-4ab7-b1c8-14b14ba38c4e.jpg?v=1792693134",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_22d221ae-c324-4650-9cc5-49f699e61605.jpg?v=1792693134",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_23fe65aa-c2a9-44e8-b5d9-34caa79fb6bf.jpg?v=1792693134",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_af51d961-08d3-4c08-9fe6-658dcfa7fbeb.jpg?v=1792693134"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Azul",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Beige"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Azul"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Negro"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-deportivo-dri-fit-nike-1",
      "camiseta-dri-fit-puma",
      "camiseta-puma-dri-fit",
      "conjunto-deportivo-dri-fit-nike"
    ]
  },
  "conjunto-corto-algodon-adidas": {
    "title": "Conjunto Corto Algodón Adidas",
    "description": "Conjunto corto Adidas de dos piezas, confeccionado en algodón para brindar comodidad, frescura y estilo. Incluye camiseta de manga corta y bermuda con bolsillos. Ideal para un look deportivo y casual en cualquier ocasión.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E78688DE-5A7E-496B-8ACA-2A9300CEC77F.jpg?v=1792544491",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C501F7C8-4D98-47C2-AA4A-214C874B64DE.jpg?v=1792544491"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "2XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-adidas",
      "conjunto-deportivo-dri-fit-adidas-1",
      "conjunto-deportivo-dri-fit-adidas",
      "conjunto-corto-algodon-nike"
    ]
  },
  "camiseta-dri-fit-ref-serena-wiliams": {
    "title": "Camiseta Dri-Fit Ref Serena Wiliams",
    "description": "Camiseta deportiva ligera, fresca y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_61492075-4e82-48e8-9e56-9f1badcdef41.jpg?v=1792543671"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "S"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-dri-fit-on-cloud",
      "camiseta-nike-dri-fit",
      "camiseta-dri-fit-adidas",
      "camiseta-puma-dri-fit"
    ]
  },
  "camiseta-dri-fit-puma": {
    "title": "Camiseta Dri-Fit Puma",
    "description": "Camiseta deportiva ligera, fresca y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_917603b9-1e73-4a4e-9772-c1a3bbd4f1bf.jpg?v=1792543568"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "S"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-puma-dri-fit",
      "conjunto-deportivo-dri-fit-puma",
      "camiseta-dri-fit-on-cloud",
      "camiseta-nike-dri-fit"
    ]
  },
  "camiseta-dri-fit-adidas": {
    "title": "Camiseta Dri-Fit Adidas",
    "description": "Camiseta deportiva ligera, fresca y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_384f904e-6118-4fac-bf1c-c4001e826610.jpg?v=1792543433",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4e8b70fc-dc7e-46f0-b30d-9772a474d719.jpg?v=1792543433",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_cd431d8f-9a1d-468b-9e6b-09614c9c5349.jpg?v=1792543433"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "S"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-nike-dri-fit",
      "camiseta-dri-fit-nike",
      "conjunto-deportivo-dri-fit-adidas-1",
      "conjunto-deportivo-dri-fit-adidas"
    ]
  },
  "camiseta-dri-fit-nike": {
    "title": "Camiseta Dri-Fit Nike",
    "description": "Camiseta deportiva ligera, fresca y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_02869020-35ac-4f59-ac64-6c17f06818a9.jpg?v=1792543313"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "S"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-nike-dri-fit",
      "camiseta-dri-fit-adidas",
      "conjunto-deportivo-dri-fit-nike-1",
      "camiseta-dri-fit-on-cloud"
    ]
  },
  "camiseta-dri-fit-on-cloud": {
    "title": "Camiseta Dri-Fit On Cloud",
    "description": "Camiseta deportiva ligera, fresca y transpirable, ideal para entrenar o complementar tu outfit deportivo. Su diseño minimalista ofrece comodidad, libertad de movimiento y un estilo versátil para acompañarte en cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2dbba6a9-9c6c-4964-86ff-2d71947b5da5.jpg?v=1792543016"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "S"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-nike-dri-fit",
      "camiseta-dri-fit-adidas",
      "camiseta-dri-fit-ref-serena-wiliams",
      "camiseta-puma-dri-fit"
    ]
  },
  "pantaloneta-under-armour-dri-fit": {
    "title": "Pantaloneta Under Armour Dri-Fit",
    "description": "Pantaloneta Dri-FIT con licra interna, ideal para correr y entrenar con comodidad. Su tela ligera y transpirable ayuda a mantenerte fresco, mientras la licra reduce la fricción y brinda mayor soporte en cada movimiento.\n\n \n\nTALLAJE REDUCIDO",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d330b8b5-bc4e-49b0-b4b3-21aeadaff75f.jpg?v=1792541533",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2703fec6-4dd7-4de0-9875-e9d19a3c436b.jpg?v=1792541533"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "L",
          "XL",
          "2XL",
          "3XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "3XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-underarmour-dri-fit",
      "pantaloneta-nike-dri-fit",
      "conjunto-underarmour",
      "conjunto-tela-fria-underarmour"
    ]
  },
  "pantaloneta-nike-dri-fit": {
    "title": "Pantaloneta Nike Dri-Fit",
    "description": "Pantaloneta Dri-FIT con licra interna, ideal para correr y entrenar con comodidad. Su tela ligera y transpirable ayuda a mantenerte fresco, mientras la licra reduce la fricción y brinda mayor soporte en cada movimiento.\n\nTALLAJE REDUCIDO",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_471c98d7-93ce-40b0-bbf7-43a4377d2ca5.jpg?v=1792541207",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_786f5e7f-2fdb-4819-9851-6082ea93224f.jpg?v=1792541207"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "L",
          "XL",
          "2XL",
          "3XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "3XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-nike-running",
      "pantaloneta-running-nike",
      "camiseta-nike-dri-fit",
      "pantaloneta-algodon-nike"
    ]
  },
  "conjunto-nike-tech": {
    "title": "Conjunto Nike Tech",
    "description": "Estilo urbano y deportivo con un diseño moderno, cómodo y versátil. Ideal para entrenar o complementar tus outfits diarios con un look deportivo premium.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9933b532-bc75-470c-b965-8322aedc2ccc.jpg?v=1792536335",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1cdd2197-b58f-47df-8da9-0250973cfd2e.jpg?v=1792536335",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_dfea062f-9f0b-448c-9a89-909adb0f9792.jpg?v=1792536335",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7e44ffdf-da70-4eeb-af5f-5dde9da4f8bc.jpg?v=1792536335",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_199f810e-b4e0-497d-9501-5d136e5a65f7.jpg?v=1792536335",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f6c5da16-a9dd-4d13-8c1e-2c905c053468.jpg?v=1792536335"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "L",
          "XL",
          "2XL",
          "3XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "L"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "3XL"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-nike",
      "conjunto-tela-fria-nike",
      "conjunto-deportivo-dri-fit-nike-1",
      "conjunto-corto-algodon-nike"
    ]
  },
  "camiseta-puma-dri-fit": {
    "title": "Camiseta Puma Dri-Fit",
    "description": "Camiseta deportiva Dri-Fit, ligera, transpirable y de secado rápido. Ideal para entrenar con comodidad y mantenerte fresco durante cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0e8bb9c1-d3d3-4e41-9905-836ddf9863a5.jpg?v=1791926098"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Gris"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-dri-fit-puma",
      "conjunto-deportivo-dri-fit-puma",
      "camiseta-dri-fit-on-cloud",
      "camiseta-nike-dri-fit"
    ]
  },
  "camiseta-underarmour-dri-fit": {
    "title": "Camiseta Underarmour Dri-Fit",
    "description": "Camiseta deportiva Dri-Fit, ligera, transpirable y de secado rápido. Ideal para entrenar con comodidad y mantenerte fresco durante cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6b9d1a72-80be-44ab-90f5-dea940bd83f0.jpg?v=1791925054",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_762e4696-9438-4834-964a-5b97e64e1347.jpg?v=1791925054"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Verde",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-under-armour-dri-fit",
      "conjunto-underarmour",
      "camiseta-dri-fit-on-cloud",
      "camiseta-nike-dri-fit"
    ]
  },
  "camiseta-nike-dri-fit": {
    "title": "Camiseta Nike Dri-Fit",
    "description": "Camiseta deportiva Dri-Fit, ligera, transpirable y de secado rápido. Ideal para entrenar con comodidad y mantenerte fresco durante cada actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ee5fa69f-fc37-4a72-8ea2-84fefab0c0fa.jpg?v=1791925808",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_979920cb-24ff-48b0-b39b-34e43b269687.jpg?v=1791925808"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Gris",
          "Azul"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-dri-fit-nike",
      "camiseta-dri-fit-adidas",
      "camiseta-dri-fit-on-cloud",
      "conjunto-deportivo-dri-fit-nike-1"
    ]
  },
  "camisa-sisa-puma": {
    "title": "Camisa Sisa Puma",
    "description": "Camiseta Sisa Puma estilo urbano y moderno. Ideal para complementar tus outfits deportivos y lucir un look auténtico con comodidad y libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_71fd8204-8607-4beb-a8a2-de32b9bdbb75.jpg?v=1791924223",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1a5987d0-0cd6-48ae-87f6-b35ab2d196f7.jpg?v=1791924223"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Gris",
          "Negro"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camisilla-puma-running",
      "camiseta-dri-fit-puma",
      "camiseta-puma-dri-fit",
      "camiseta-sisa-nike"
    ]
  },
  "camiseta-sisa-nike": {
    "title": "Camiseta Sisa Nike",
    "description": "Camiseta Sisa Nike con diseño gráfico, estilo urbano y moderno. Ideal para complementar tus outfits deportivos y lucir un look auténtico con comodidad y libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_defeb48e-5eae-42c0-92ea-9fa6f2b6408b.jpg?v=1791923633"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Gris",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro"
        ],
        "price": 92000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-nike-dri-fit",
      "camisa-sisa-puma",
      "camiseta-dri-fit-nike",
      "camisilla-nike-running"
    ]
  },
  "pantaloneta-jordan-diamond": {
    "title": "Pantaloneta Jordan Diamond",
    "description": "Diseño deportivo con detalles icónicos, tela ligera y transpirable que brinda comodidad y libertad de movimiento para entrenar o lucir un estilo urbano.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2388b37f-caac-4190-8a33-074c03b5526c.jpg?v=1791923075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_59d1c160-c81a-4c1e-abd7-79bd908a69e9.jpg?v=1791923075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eb50d53b-46ba-4030-891e-9b9e1434975e.jpg?v=1791923075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_16cd0f6c-4da2-490e-915c-da85d9e707dc.jpg?v=1791923076",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a815eba1-9cdf-4b13-8e29-c650be82bf91.jpg?v=1791923075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_80cef283-52ce-4251-a5fe-587347032ee5.jpg?v=1791923075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b49c7134-fd13-4b0c-8f17-1ce34d8e06ef.jpg?v=1791923075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_650a1fa3-7ded-461d-b8ac-4cabda5ace72.jpg?v=1791923075"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco- Verde",
          "Negro",
          "Azul",
          "Fuscia",
          "Verde",
          "Beige",
          "Rojo"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL",
          "2XL",
          "3XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco- Verde",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "M"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "L"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "2XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "3XL"
        ],
        "price": 90000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-algodon-jordan",
      "pantaloneta-nike-dri-fit",
      "pantaloneta-adidas-running",
      "pantaloneta-algodon-nike"
    ]
  },
  "camisilla-adidas-telafria": {
    "title": "Camisilla Adidas Telafria",
    "description": "Camisilla deportiva en tela fría, ligera y fresca, ideal para entrenar con comodidad y libertad de movimiento. Su tejido permite una sensación agradable sobre la piel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/613F7C29-A375-4639-B5DA-71BBBB4DF2E7.jpg?v=1791430424"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Gris",
          "Azul"
        ]
      },
      {
        "name": "Size",
        "values": [
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "camisilla-nike-telafria",
      "camisilla-adidas",
      "camisilla-underarmour-telafria",
      "camisilla-basica"
    ]
  },
  "camisilla-nike-telafria": {
    "title": "Camisilla Nike Telafria",
    "description": "Camisilla deportiva en tela fría, ligera y fresca, ideal para entrenar con comodidad y libertad de movimiento. Su tejido permite una sensación agradable sobre la piel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/2EEEC6E7-8F1F-424C-A75A-1122EF784551.jpg?v=1791430301",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/00F8CA15-B26B-488F-A278-CFDB45E57045.jpg?v=1791430301",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/ED325307-F926-45FD-A56B-70E11DF809DA.jpg?v=1791430301",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/191FF14D-D7A7-4068-9B65-C491F760D9F7.jpg?v=1791430302"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Azul marino",
          "Gris",
          "Gris oscuro",
          "Salmon",
          "Verde"
        ]
      },
      {
        "name": "Size",
        "values": [
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Salmon",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Salmon",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Salmon",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "camisilla-adidas-telafria",
      "camisilla-nike-running",
      "camisilla-underarmour-telafria",
      "camiseta-sisa-nike"
    ]
  },
  "camisilla-underarmour-telafria": {
    "title": "Camisilla UnderArmour Telafria",
    "description": "Camisilla deportiva en tela fría, ligera y fresca, ideal para entrenar con comodidad y libertad de movimiento. Su tejido permite una sensación agradable sobre la piel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/D10C0B8B-E1FD-4C32-AB21-AF4A6B81975E.jpg?v=1791430018",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/6CD36640-28ED-4EC9-A41F-675448443CDF.jpg?v=1791430018"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Vinotinto",
          "Azul marino",
          "Gris",
          "Gris oscuro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Vinotinto",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Vinotinto",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Vinotinto",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "2XL"
        ],
        "price": 82000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "camisilla-underarmour-running",
      "camisilla-adidas-telafria",
      "camisilla-nike-telafria",
      "camiseta-underarmour-dri-fit"
    ]
  },
  "basics-pants": {
    "title": "Basics Pants",
    "description": "Suave, fresca y cómoda. Fabricada en algodón para brindarte una sensación agradable y mayor comodidad durante el día. Un básico versátil para entrenar o complementar tu estilo deportivo.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C82D3246-D1B8-4F93-9850-0096D6D78C60.jpg?v=1791245856",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E73EAB8A-0500-4EBF-A044-EE7BA6E0352A.jpg?v=1791245856",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/67FC1B39-408F-4BDD-B3D4-A892B7413E3C.jpg?v=1791245857"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "basics",
      "basics-algodon",
      "basics-leggins",
      "camisilla-basica"
    ]
  },
  "basics-algodon": {
    "title": "Basics Algodón",
    "description": "Suave, fresca y cómoda. Fabricada en algodón para brindarte una sensación agradable y mayor comodidad durante el día. Un básico versátil para entrenar o complementar tu estilo deportivo.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C6FB231A-1B20-49CC-AA38-2871E959190F.jpg?v=1791245587",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/0501A774-FA5B-4730-B738-5A0238ACBE31.jpg?v=1791245587",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/577E7B39-E42B-4D73-845D-AC847D0AEE6A.jpg?v=1791245587",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/3BEE7CF6-CC4A-42DE-A26C-CFF5F02A019B.jpg?v=1791245587"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camisilla-basica",
      "basics",
      "basics-pants",
      "compresion-manga-larga"
    ]
  },
  "camisilla-basica": {
    "title": "Camisilla Básica",
    "description": "Un básico que no puede faltar. Diseño cómodo, ligero y versátil, ideal para entrenar o complementar tu look deportivo. Su ajuste permite moverte con libertad y mantenerte cómodo durante el día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/97F4FDC7-0443-4074-BCC4-ACF0947A7961.jpg?v=1791245336",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FADBE87F-9118-4B36-A9CE-77783665F44A.jpg?v=1791245336"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M"
        ],
        "price": 55000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 55000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 55000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "basics-algodon",
      "camisilla-adidas-telafria",
      "camisilla-puma-running",
      "camisa-sisa-puma"
    ]
  },
  "conjunto-tela-fria-nike": {
    "title": "Conjunto Tela Fría Nike",
    "description": "Conjunto deportivo para hombre en tela fría, ligera y transpirable. Incluye camiseta y pantaloneta, ofreciendo frescura, comodidad y libertad de movimiento para entrenar con estilo y mantenerte cómodo durante toda tu actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/34903E56-1C19-4DA9-AF2D-56EDD0B3DDCB.jpg?v=1791244682",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E4685B66-8111-42C0-94E6-81587252A9E8.jpg?v=1791244682"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Gris"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Beige"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Beige"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Beige"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Beige"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-nike",
      "conjunto-nike-tech",
      "conjunto-deportivo-dri-fit-nike-1",
      "conjunto-corto-algodon-nike"
    ]
  },
  "conjunto-tela-fria-underarmour": {
    "title": "Conjunto Tela Fría UnderArmour",
    "description": "Conjunto deportivo para hombre en tela fría, ligera y transpirable. Incluye camiseta y pantaloneta, ofreciendo frescura, comodidad y libertad de movimiento para entrenar con estilo y mantenerte cómodo durante toda tu actividad.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FBF396B2-5D72-4C7E-B722-B267695778CE.jpg?v=1791244514",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/26622F02-0F0C-47E2-94F5-F5FC9D827E55.jpg?v=1791244514"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde",
          "Gris"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M",
          "Verde"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Verde"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Verde"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Verde"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "M",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL",
          "Gris"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-underarmour",
      "camiseta-underarmour-dri-fit",
      "conjunto-tela-fria-nike",
      "camisilla-underarmour-telafria"
    ]
  },
  "conjunto-underarmour": {
    "title": "Conjunto UnderArmour",
    "description": "Conjunto deportivo transpirable con pantaloneta larga, diseñado para brindarte comodidad y libertad de movimiento durante tus entrenamientos. Su tejido ligero y fresco te mantiene cómodo mientras te mueves, ideal para llevar tu rendimiento al siguiente nivel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_9cabf2eb-66e7-42df-9efb-ec2d2855fea2.jpg?v=1791243549",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/A015E5B3-019F-4DD3-A832-4E4B9E16FC9B.jpg?v=1791243566"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-tela-fria-underarmour",
      "camiseta-underarmour-dri-fit",
      "pantaloneta-under-armour-dri-fit",
      "conjunto-nike"
    ]
  },
  "conjunto-adidas": {
    "title": "Conjunto Adidas",
    "description": "Conjunto deportivo transpirable con pantaloneta larga, diseñado para brindarte comodidad y libertad de movimiento durante tus entrenamientos. Su tejido ligero y fresco te mantiene cómodo mientras te mueves, ideal para llevar tu rendimiento al siguiente nivel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_29e8f0b7-a0dc-44fd-85f9-af0c7fc1e87b.jpg?v=1791243708",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1574AB0A-74DE-4D93-860C-09D28E46659D.jpg?v=1791243761"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "Xl",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Xl"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-corto-algodon-adidas",
      "conjunto-deportivo-dri-fit-adidas",
      "conjunto-deportivo-dri-fit-adidas-1",
      "conjunto-nike"
    ]
  },
  "conjunto-nike": {
    "title": "Conjunto Nike",
    "description": "Conjunto deportivo transpirable con pantaloneta larga, diseñado para brindarte comodidad y libertad de movimiento durante tus entrenamientos. Su tejido ligero y fresco te mantiene cómodo mientras te mueves, ideal para llevar tu rendimiento al siguiente nivel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/0BC5FF66-5EA9-419C-916E-44C6306927E8.jpg?v=1791243287",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/617AB513-05D8-40D1-A8AF-9A2310A959B9.jpg?v=1791243304"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "2XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-tela-fria-nike",
      "conjunto-nike-tech",
      "conjunto-deportivo-dri-fit-nike-1",
      "conjunto-corto-algodon-nike"
    ]
  },
  "compresion-manga-larga": {
    "title": "Compresión Manga Larga",
    "description": "Camiseta de compresión diseñada para acompañarte en cada entrenamiento. Su ajuste al cuerpo brinda soporte y libertad de movimiento, mientras su tejido transpirable ayuda a mantenerte fresco y cómodo durante la actividad física.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/92035F43-A5D0-4B42-9DEE-DBE8BD093504.jpg?v=1791242687",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/7A8AC95D-7564-4E92-99E4-4EA023919A08.jpg?v=1791242687",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/74C7A442-B052-42C8-8CB2-277B529C756A.jpg?v=1791242833",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/132D9C14-EC8E-4F98-9B2E-188C3B4BF857.jpg?v=1791242832"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "basics-algodon",
      "camiseta-dri-fit-on-cloud",
      "camisilla-basica",
      "camisa-sisa-puma"
    ]
  },
  "sudadera-antifluido-puma": {
    "title": "Sudadera Antifluido Puma",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/302452AD-FC7A-4A60-A43B-18710F9E67B1.jpg?v=1791241881",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/6C590C1E-D284-4ACE-BF51-BE3C39ABC4B5.jpg?v=1791241881"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Rojo"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-2",
      "sudadera-antifluido-nike-1",
      "sudadera-antifluido-nike-copy",
      "sudadera-antifluido-nike"
    ]
  },
  "sudadera-antifluido-nike-3": {
    "title": "Sudadera Antifluido Nike",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/93E881D4-CD0C-4459-9580-D45F853459EF.jpg?v=1791241836",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/94CFA6EF-7F11-40C5-A046-5322641BA67F.jpg?v=1791241836"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Gris"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-2",
      "sudadera-antifluido-nike-copy",
      "sudadera-antifluido-nike-1",
      "sudadera-antifluido-nike"
    ]
  },
  "sudadera-antifluido-jordan": {
    "title": "Sudadera Antifluido Jordan",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/ED5F7FBD-681C-474C-9EDF-4B543F10E796.jpg?v=1791241788",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/DE7BB375-5AEA-43EB-8D68-1B432F1D4985.jpg?v=1791241788"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Azul"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-adidas",
      "sudadera-antifluido-nike",
      "sudadera-antifluido-nike-1",
      "sudadera-antifluido-nike-copy"
    ]
  },
  "sudadera-antifluido-adidas": {
    "title": "Sudadera Antifluido Adidas",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/4681B716-DBF1-4939-9004-DC50B3CD96CF.jpg?v=1791241731",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/8EBE2509-54B8-42F0-90D0-8A52B367BDC8.jpg?v=1791241731"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Azul"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-copy",
      "sudadera-antifluido-nike",
      "sudadera-antifluido-nike-2",
      "sudadera-antifluido-nike-1"
    ]
  },
  "sudadera-antifluido-nike-copy": {
    "title": "Sudadera Antifluido Nike",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/5A0C0B04-CC57-4A7A-8C5E-51D116C70FEF.jpg?v=1791241530",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/D9359DE7-522E-49D6-8D86-1943C832CAE8.jpg?v=1791241530"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Beige"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-3",
      "sudadera-antifluido-nike-2",
      "sudadera-antifluido-nike-1",
      "sudadera-antifluido-nike"
    ]
  },
  "sudadera-antifluido-nike-2": {
    "title": "Sudadera Antifluido Nike",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/40F83CE4-F941-4A6D-84BC-2482593EA919.jpg?v=1791241431",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/4F97DE0E-3CD6-4666-A8E5-8FF73C624C3C.jpg?v=1791241431",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/7E6AD58B-E1B3-4365-B29F-224BCF0C46B1.jpg?v=1791241431",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/2DD02F85-36DC-4551-ACC8-0968F68CF48B.jpg?v=1791241431"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Azul"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-3",
      "sudadera-antifluido-nike-copy",
      "sudadera-antifluido-nike-1",
      "sudadera-antifluido-nike"
    ]
  },
  "sudadera-antifluido-nike-1": {
    "title": "Sudadera Antifluido Nike",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/9EACC0E8-6156-4CD6-80FD-2B1471B35F3D.jpg?v=1791241350",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/77D0EC3A-808A-4AC8-B5A4-46047CE8BCBF.jpg?v=1791241349"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Gris"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-3",
      "sudadera-antifluido-nike-2",
      "sudadera-antifluido-nike",
      "sudadera-antifluido-nike-copy"
    ]
  },
  "sudadera-antifluido-nike": {
    "title": "Sudadera Antifluido Nike",
    "description": "Sudadera antifluido, ligera y versátil, diseñada para acompañarte dentro y fuera del entrenamiento. Su tejido ayuda a repeler líquidos y brinda comodidad, libertad de movimiento y protección para tu día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/AC5436DD-0836-4E28-8757-025691BEC796.jpg?v=1791241192",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/44358F73-8F42-4975-8A8D-88BD4CB53330.jpg?v=1791241192",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E7E03ECC-6144-4DD4-B52B-C2C6E0954EFA.jpg?v=1791241192"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Rojo"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "M"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "L"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "2XL"
        ],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sudadera-antifluido-nike-1",
      "sudadera-antifluido-nike-2",
      "sudadera-antifluido-nike-copy",
      "sudadera-antifluido-nike-3"
    ]
  },
  "camisilla-puma-running": {
    "title": "Camisilla Puma Running",
    "description": "Camisilla microperforada y transpirable, diseñada para mantenerte fresco y cómodo durante tus entrenamientos. Su tejido ligero favorece la ventilación y permite mayor libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/A0423595-B3DD-4BD7-9AF1-31270BFF1294.jpg?v=1791240745"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camisa-sisa-puma",
      "camisilla-nike-running",
      "camisilla-underarmour-running",
      "camisilla-adidas"
    ]
  },
  "camisilla-underarmour-running": {
    "title": "Camisilla UnderArmour Running",
    "description": "Camisilla microperforada y transpirable, diseñada para mantenerte fresco y cómodo durante tus entrenamientos. Su tejido ligero favorece la ventilación y permite mayor libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/7E83E021-8673-4732-A0D5-B6AE632A0174.jpg?v=1791240682"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camisilla-underarmour-telafria",
      "camisilla-nike-running",
      "camisilla-puma-running",
      "camisilla-adidas"
    ]
  },
  "camisilla-nike-running": {
    "title": "Camisilla Nike Running",
    "description": "Camisilla microperforada y transpirable, diseñada para mantenerte fresco y cómodo durante tus entrenamientos. Su tejido ligero favorece la ventilación y permite mayor libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/14C4C868-0D0E-41AE-9495-A75290C49805.jpg?v=1791240599",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FF772291-BC9C-4AD9-94EA-639789F69224.jpg?v=1791240599",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/98E8A981-F078-488C-A000-E395325C435F.jpg?v=1791240599"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camisilla-nike-telafria",
      "camisilla-puma-running",
      "camisilla-underarmour-running",
      "camisilla-adidas"
    ]
  },
  "camisilla-adidas": {
    "title": "Camisilla Adidas Running",
    "description": "Camisilla microperforada y transpirable, diseñada para mantenerte fresco y cómodo durante tus entrenamientos. Su tejido ligero favorece la ventilación y permite mayor libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/IMG-2436.jpg?v=1791240251"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 82000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camisilla-adidas-telafria",
      "camisilla-nike-running",
      "camisilla-underarmour-running",
      "camisilla-puma-running"
    ]
  },
  "pantaloneta-reebok-running": {
    "title": "Pantaloneta Reebok Running",
    "description": "Pantaloneta Reebok\n\nPantaloneta de running con licra interna que ayuda a reducir la fricción y brinda mayor comodidad y soporte durante cada movimiento. Su diseño ligero y fresco te permite correr con libertad y confianza en cada kilómetro.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_1aed75a5-b601-4f87-8a18-b85dd830a643.jpg?v=1791240103"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Naranja"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-nike-running",
      "pantaloneta-running-nike",
      "pantaloneta-running-puma",
      "pantaloneta-adidas-running"
    ]
  },
  "pantaloneta-adidas-running": {
    "title": "Pantaloneta Adidas Running",
    "description": "Pantaloneta Adidas\n\nPantaloneta de running con licra interna que ayuda a reducir la fricción y brinda mayor comodidad y soporte durante cada movimiento. Su diseño ligero y fresco te permite correr con libertad y confianza en cada kilómetro.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_fddf5bd1-ea1f-47d9-89e9-275d3cbd3093.jpg?v=1791239981"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sin-titulo-8oct_15-37-30",
      "pantaloneta-nike-running",
      "conjunto-corto-algodon-adidas",
      "conjunto-adidas"
    ]
  },
  "pantaloneta-nike-running": {
    "title": "Pantaloneta Nike Running",
    "description": "Pantaloneta Nike\n\nPantaloneta de running con licra interna que ayuda a reducir la fricción y brinda mayor comodidad y soporte durante cada movimiento. Su diseño ligero y fresco te permite correr con libertad y confianza en cada kilómetro.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/519385AA-66FD-4C02-B57C-87B40AC324D5.jpg?v=1791239723",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/3B6BF1F3-62FA-4364-9B35-EBFF4462D28C.jpg?v=1791239723",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/4BB5297A-E714-4F0A-B0AC-D180E9CAD1BA.jpg?v=1791239723",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1653874D-C914-4EBA-9AAF-57094B3C9F5E.jpg?v=1791239723",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/9B59B668-2B34-4B33-A151-6776AF68A296.jpg?v=1791239723"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Negro",
          "Gris oscuro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 88000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-running-nike",
      "pantaloneta-algodon-nike",
      "pantaloneta-nike-dri-fit",
      "pantaloneta-running-puma"
    ]
  },
  "pantaloneta-algodon-jordan": {
    "title": "Pantaloneta Algodón Jordan",
    "description": "Pantaloneta Nike\n\nConfeccionada en algodón suave y transpirable, diseñada para brindarte máxima comodidad y frescura durante todo el día. Su ajuste relajado permite libertad de movimiento, convirtiéndola en la opción ideal para entrenar, descansar o lucir un estilo deportivo moderno.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/94768CE5-C812-42A3-B466-3C25AA9EFD38.jpg?v=1791239207",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/493BB498-F484-4E0D-A06A-2B9A3F2D8894.jpg?v=1791239207",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/92B76498-D62B-4E88-8C18-29A0FA1D9F49.jpg?v=1791239207"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Negro",
          "Gris oscuro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-algodon-nike",
      "pantaloneta-nike-running",
      "pantaloneta-algodon-puma",
      "pantaloneta-jordan-diamond"
    ]
  },
  "pantaloneta-algodon-puma": {
    "title": "Pantaloneta Algodón Puma",
    "description": "Pantaloneta Nike\n\nConfeccionada en algodón suave y transpirable, diseñada para brindarte máxima comodidad y frescura durante todo el día. Su ajuste relajado permite libertad de movimiento, convirtiéndola en la opción ideal para entrenar, descansar o lucir un estilo deportivo moderno.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E2EE3DA3-0A2C-44DF-BC41-D0CE31B4F86C.jpg?v=1791239102",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/154D6AE9-5970-4969-8924-4AB00C1BB9D2.jpg?v=1791239101"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Negro",
          "Verde",
          "Naranja"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-algodon-nike",
      "pantaloneta-running-puma",
      "pantaloneta-algodon-jordan",
      "pantaloneta-nike-running"
    ]
  },
  "pantaloneta-algodon-nike": {
    "title": "Pantaloneta Algodón Nike",
    "description": "Pantaloneta Nike\n\nConfeccionada en algodón suave y transpirable, diseñada para brindarte máxima comodidad y frescura durante todo el día. Su ajuste relajado permite libertad de movimiento, convirtiéndola en la opción ideal para entrenar, descansar o lucir un estilo deportivo moderno.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/DA990574-8DD0-420D-A8FC-B57D02D15DDA.jpg?v=1791238809",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/44BD9A61-87AB-470A-9D60-9BBBEF5C3058.jpg?v=1791238809",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/F34B407D-95FD-4AA9-9F6F-34DBD24A7E3A.jpg?v=1791238809",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1FC658CD-01ED-4181-9BF9-430C56CF631E.jpg?v=1791238809"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Beige",
          "Gris",
          "Gris oscuro",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-algodon-jordan",
      "pantaloneta-algodon-puma",
      "pantaloneta-nike-running",
      "pantaloneta-running-nike"
    ]
  },
  "pantaloneta-running-nike-plizada": {
    "title": "Pantaloneta Running Nike Plizada",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83457.jpg?v=1793219353",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83455.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83456.jpg?v=1793219351",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83454.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83453.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83452.jpg?v=1793219353",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83451.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83449.jpg?v=1793219351",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83450.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83448.jpg?v=1793219351",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83447.jpg?v=1793219353",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83445.jpg?v=1793219353",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83443.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83440.jpg?v=1793219353",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83437.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83436.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83434.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83435.jpg?v=1793219351",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83461.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83460.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83459.jpg?v=1793219352",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83458.jpg?v=1793219352"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Fuscia",
          "Naranja",
          "Rojo",
          "Dorado",
          "Azul",
          "Azul marino",
          "Moca",
          "Amarillo",
          "Rosa",
          "Negro",
          "Beige"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Fuscia",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Dorado",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Dorado",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Dorado",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "XL"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-running-puma",
      "pantaloneta-running-nike",
      "sin-titulo-8oct_15-37-30",
      "chaqueta-drifit"
    ]
  },
  "pantaloneta-running-puma": {
    "title": "Pantaloneta Running Puma",
    "description": "Pantaloneta deportiva para running, ligera y cómoda, diseñada para brindar libertad de movimiento y frescura durante cada entrenamiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a67d4c3e-6da5-4810-8c07-1f503a603496.jpg?v=1791492590",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_47840a22-e398-4eb5-a43d-26b25cda2b9b.jpg?v=1791492590",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4e8b926b-b702-477f-b6ae-e0274dc7e536.jpg?v=1791492590",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ffa7bd8b-a6cd-413c-ad14-40bfb3a75c89.jpg?v=1791492590"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Azul cielo",
          "Rosa",
          "Morado",
          "Azul",
          "Negro"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul cielo",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul cielo",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul cielo",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-running-nike",
      "pantaloneta-nike-running",
      "pantaloneta-algodon-puma",
      "camisilla-puma-running"
    ]
  },
  "pantaloneta-running-nike": {
    "title": "Pantaloneta Running Nike",
    "description": "Pantaloneta deportiva para running, ligera y cómoda, diseñada para brindar libertad de movimiento y frescura durante cada entrenamiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e572c33a-5b26-43c4-96e1-b38b2a75d2fe.jpg?v=1791492444",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_afe9938d-efe8-4444-97b1-67eb519b9717.jpg?v=1791492445",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_bf55f6b1-302d-4ae8-a0f8-95800ee053c1.jpg?v=1791492445",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d6c26fa0-f3a6-4cdc-bb52-39c6e3311155.jpg?v=1791492445",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_da9282f7-a5d4-4330-8727-f377ab96b140.jpg?v=1791492445",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_08ca781e-e1fa-41c0-9c7f-086f2940b3ed.jpg?v=1791492445"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Rosa",
          "Morado",
          "Azul",
          "Negro"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-nike-running",
      "pantaloneta-running-puma",
      "pantaloneta-algodon-nike",
      "pantaloneta-nike-dri-fit"
    ]
  },
  "sin-titulo-8oct_15-37-30": {
    "title": "Pantaloneta Running Adidas",
    "description": "Pantaloneta deportiva para running, ligera y cómoda, diseñada para brindar libertad de movimiento y frescura durante cada entrenamiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_72177cca-9b4c-4847-be06-cb48999c6d40.jpg?v=1791491956",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7e18f7cc-cbfd-4720-ada6-d0bd2ebd749f.jpg?v=1791491956",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9050ba79-4d7a-4499-8ca0-4acf0d33f904.jpg?v=1791491956",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_48160df1-1560-4ad4-91e0-85e450c46742.jpg?v=1791491956",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5343ea25-fd0b-48a7-8a95-666f79770de8.jpg?v=1791491956"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Rosa",
          "Azul",
          "Negro"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 80000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "pantaloneta-adidas-running",
      "pantaloneta-running-nike",
      "pantaloneta-nike-running",
      "pantaloneta-running-puma"
    ]
  },
  "chaqueta-drifit": {
    "title": "Chaqueta Dri-Fit",
    "description": "Chaqueta Dri-Fit\n Ligera, fresca y de ajuste cómodo, ideal para entrenar con libertad y mantenerte cómodo durante el ejercicio.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/08A80CA0-0DC8-403C-B14B-5274B2F78794.jpg?v=1791226299",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_45ec9868-f3e6-4c1f-a665-fdee8f4f7780.jpg?v=1791226596",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fa006fcc-1729-4fdb-b24d-610e4b27ee68.jpg?v=1791226596",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1790ab1b-5d5d-4cca-8dda-2f50e4ec5aa5.jpg?v=1791226596"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Gris oscuro",
          "Beige"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "camiseta-dri-fit-on-cloud",
      "camiseta-dri-fit-ref-serena-wiliams",
      "camiseta-nike-dri-fit",
      "camiseta-puma-dri-fit"
    ]
  },
  "sudadera-fit": {
    "title": "Sudadera Fit",
    "description": "Sudadera basic\n Cómoda, versátil y de corte relajado, perfecta para complementar tus looks deportivos y de diario.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/3D0CB5DE-34DE-407B-A01E-0CB3D54D5001.jpg?v=1791226081",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/71D7CBEF-B116-4FFA-B044-E3D0ED5E8CCB.jpg?v=1791226081",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/881BBB7B-1E99-441A-A569-404B6856131D.jpg?v=1791226081"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Gris",
          "Gris oscuro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Gris",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "chaqueta-drifit",
      "sudadera-antifluido-adidas",
      "sudadera-antifluido-puma",
      "sudadera-antifluido-nike-1"
    ]
  },
  "short": {
    "title": "Short",
    "description": "Shorts SIMA\n\nDiseñados para ajustarse al cuerpo y realzar naturalmente la figura. Su tela de tacto frío y fresca brinda una sensación ligera y cómoda, ideal para acompañarte durante cada entrenamiento.",
    "images": [],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Moca",
          "Rosa",
          "Gris"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "S"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "M"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "L"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "S"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "M"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "L"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "S"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 35000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "basics",
      "pantaloneta-algodon-puma",
      "basics-leggins",
      "enterizo-nova-copy"
    ]
  },
  "basics": {
    "title": "Basics",
    "description": "Básicas de Entrenamiento\n\nPrendas esenciales para acompañarte en cada entrenamiento. Diseñadas para brindarte comodidad, libertad de movimiento y un ajuste ideal, mientras mantienes un look deportivo y versátil.\n\nPerfectas para gym, running, entrenamiento funcional o tus actividades del día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/164908E3-E395-4464-898D-AEA23EF1543D.jpg?v=1791224887"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Gris",
          "Gris oscuro",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "basics-leggins",
      "enterizo-nova-copy",
      "set-2-piezas",
      "short"
    ]
  },
  "basics-leggins": {
    "title": "Basics Leggins",
    "description": "Leggins Básics\n\nUn básico imprescindible para tu armario deportivo. Su diseño de tiro alto y ajuste al cuerpo brinda comodidad, soporte y libertad de movimiento, adaptándose a tu silueta sin limitarte.\n\nPerfecta para gym, yoga, running, caminatas o para complementar tus looks deportivos del día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/345BE60F-6DCB-4720-98FA-A12441817431.jpg?v=1791224516",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/0703B217-99F7-4FF1-BACC-6D82D30B0C7E.jpg?v=1791224278",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/A087C5A2-B8C3-42B0-AD93-FEF1B2A8D946.jpg?v=1791224515"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Vinotinto",
          "Moca"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Vinotinto",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Vinotinto",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Vinotinto",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "basics",
      "basics-pants",
      "short",
      "set-2-piezas"
    ]
  },
  "set-2-piezas": {
    "title": "Set 2 piezas",
    "description": "Set Dos Piezas\n\nUn conjunto diseñado para acompañarte con comodidad, estilo y libertad de movimiento. Su diseño femenino y versátil se adapta perfectamente a tus entrenamientos y a tus looks deportivos del día a día.\n\nIdeal para gym, yoga, caminatas o un look sporty casual.\n\nESCOGELO EN TOP O EN CAMISETA.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_2bfe325e-a682-48b4-8ea6-d9bc67c64da7.jpg?v=1791223806",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/89D2475B-9F60-4BF9-8144-FBCBD5D0F7BC.jpg?v=1791223917",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E67FFF36-DE19-4E44-AB75-A5C458F0C43C.jpg?v=1791223916"
    ],
    "options": [
      {
        "name": "Pack",
        "values": [
          "Top + Leggins",
          "Camiseta + Leggins"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Top + Leggins",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "enterizo-nova-copy",
      "basics",
      "conjunto-nike",
      "basics-leggins"
    ]
  },
  "enterizo-nova-copy": {
    "title": "Set 2 piezas",
    "description": "Set Dos Piezas\n\nUn conjunto diseñado para acompañarte con comodidad, estilo y libertad de movimiento. Su diseño femenino y versátil se adapta perfectamente a tus entrenamientos y a tus looks deportivos del día a día.\n\nIdeal para gym, yoga, caminatas o un look sporty casual.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/8E67228B-FAF4-48F1-B862-A2DAA0260A1D.jpg?v=1791223315",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/92033282-873E-446D-994A-2248831CE403.jpg?v=1791223315",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/60D92BD4-6518-472F-ACCF-4F0B9631CA8B.jpg?v=1791223315",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E6BCBBDD-1EF6-41A5-8319-220B8CBC8195.jpg?v=1791223315",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/0B697259-35BA-4FA8-98BA-1F26ACD8C16F.jpg?v=1791223315"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Rosa",
          "Azul",
          "Negro"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Rosa",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "S"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "M"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "L"
        ],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "set-2-piezas",
      "basics",
      "conjunto-nike",
      "short"
    ]
  },
  "enterizo-nova": {
    "title": "Enterizo Nova",
    "description": "Enterizo Nova\n\nComodidad, estilo y libertad de movimiento en una sola pieza. El Enterizo Nova cuenta con diseño de manga corta, cierre frontal y short ajustado que estiliza la silueta, perfecto para acompañarte en tus entrenamientos y actividades del día a día.\n\nIdeal para gym, caminatas o un look sporty casual.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/ADAEAB6B-84C9-4558-859E-5847D6681174.jpg?v=1791222230",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/7E5ECFC1-B887-4D72-9413-BB37447FF74D.jpg?v=1791222470"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Top + Leggins"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Top + Leggins",
          "S"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "M"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "L"
        ],
        "price": 105000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "enterizo-eva",
      "enterizo-vitalia",
      "set-2-piezas",
      "basics-leggins"
    ]
  },
  "vestido-yoga-rose": {
    "title": "Vestido Yoga Rose",
    "description": "Vestido Yoga Rose\n\nDiseñado para acompañarte con comodidad y estilo en cada movimiento. Su silueta femenina se adapta al cuerpo, mientras su falda cruzada con amarre lateral aporta un toque elegante y versátil.\n\nIdeal para yoga, entrenamiento, caminatas o para crear un look sporty chic.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_252f9d32-06ff-48c1-9996-24bc744ed94b.jpg?v=1791221925",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/53A0D0C8-8082-4DC0-9A56-53D56BA7010B.jpg?v=1791221579",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender.jpg?v=1791221846",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/D65CC3D6-EAC7-4885-A8A6-240F1924A4F3.jpg?v=1791221579",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/D876C383-E416-4D46-9832-2225DACAC450.jpg?v=1791221578"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Violeta",
          "Moca",
          "Top + Leggins",
          "Amarillo"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Violeta",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "S"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "M"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "L"
        ],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "enterizo-nova-copy",
      "set-2-piezas",
      "enterizo-eva",
      "basics-leggins"
    ]
  },
  "enterizo-eva": {
    "title": "Enterizo Eva",
    "description": "Enterizo Eva\n\nDiseñado para acompañarte en cada movimiento.\nEl Enterizo Eva combina comodidad, ajuste y un diseño femenino que realza la silueta.\n\n Su espalda descubierta aporta un toque distintivo y moderno, mientras que su manga larga y short integrado brindan libertad de movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/50827E1C-2C33-4EEF-9AC6-389F1C4D9DB4.jpg?v=1791221125",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/17BB3A0E-D6AE-4ACC-AA48-CDA62BAEB204.jpg?v=1791221125",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1B772FAC-D6D4-4B1C-9408-7A29A8AA8BB5.jpg?v=1791221125",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/068261F1-959B-4CAE-B25D-91B45AECC2E6.jpg?v=1791221245"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Violeta",
          "Moca",
          "Top + Leggins",
          "Amarillo"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Violeta",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "S"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "M"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Amarillo",
          "L"
        ],
        "price": 85000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "enterizo-nova",
      "enterizo-vitalia",
      "enterizo-nova-copy",
      "set-2-piezas"
    ]
  },
  "enterizo-vitalia": {
    "title": "Enterizo Vitalia",
    "description": "Enterizo Vitalia \n\nDiseñado para acompañarte en cada movimiento. El Enterizo Vitalia combina un diseño femenino y versátil con un ajuste que realza la silueta y brinda comodidad durante todo el día.\n\n \n\nIdeal para entrenar, caminar o crear un look deportivo y casual. Su diseño de tirantes y pierna acampanada le da un toque moderno y elegante.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/07344C87-F049-4B7A-9F05-898492ECFC5D.jpg?v=1791226494",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/2974C702-BBF0-4DE0-B7B2-240DB29645B7.webp?v=1791226493",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/26B8B298-D2E1-4D9E-93E6-B366D8A6C0B9.jpg?v=1790653785",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/CBF44CAC-645A-451C-9F9E-37EE2B2A1683.jpg?v=1790653784",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E09D39B2-8B8A-49ED-8175-664D09E92BF6.jpg?v=1790653785"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Top + Leggins",
          "Beige",
          "Moca"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Top + Leggins",
          "S"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "S"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "S"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "M"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "L"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "enterizo-eva",
      "enterizo-nova",
      "chaqueta-drifit",
      "set-2-piezas"
    ]
  },
  "asics-ff-leap": {
    "title": "Asics FF Leap - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83580.jpg?v=1793226381",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83579.jpg?v=1793226380",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83578.jpg?v=1793226380",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83577.jpg?v=1793226381"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Beige",
          "Negro",
          "Blanco",
          "Violeta"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Beige",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-air-max-moto2k",
      "brooks-running-hombre",
      "nike-metcon-v1-mujer",
      "nike-air-max-hombre"
    ]
  },
  "nike-air-max-moto2k": {
    "title": "Nike Air Max Moto2K",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6af4bf34-04ce-4a0f-b7ee-e2049c4ffb3d.jpg?v=1792551190",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_63016774-9c37-408b-839c-4741772f6853.jpg?v=1792551189",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c1a1a18a-ed35-43ac-97ca-34678c093f23.jpg?v=1792551189",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_02859d56-b6c3-4f3e-bcd4-2582dcce4ed9.jpg?v=1792551190"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Gris",
          "Beige",
          "Blanco"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro",
          "37"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "37"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "37"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "37"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "38"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "39"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "40"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "41-42"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "38"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "39"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "40"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "41-42"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "38"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "39"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "40"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "41-42"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "38"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "39"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "40"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "41-42"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-air-max-hombre",
      "nike-air-max-90-hombre",
      "nike-v2k-mujer",
      "nike-air-270-mujer"
    ]
  },
  "brooks-running-hombre": {
    "title": "Brooks Running - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e9fad65f-235f-4264-8320-98a54e3f3359.jpg?v=1792550566",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_621be8d8-c94c-4020-a138-5922b22128f3.jpg?v=1792550566"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Azul",
          "Rojo"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Azul",
          "37"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "37"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "38"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "39"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "40"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul",
          "41-42"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "38"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "39"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "40"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "41-42"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-running-hombre",
      "hoka-hombre",
      "on-cloud-trail-hombre",
      "asics-nyc-hombre"
    ]
  },
  "nike-metcon-v1-mujer": {
    "title": "Nike Metcon V1 - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8253325b-db3d-4b72-b6fe-d4f6f661babf.jpg?v=1792550021",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_95bb0d6d-261f-486a-acfe-968a8b32a34a.jpg?v=1792550021",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_00dd6175-72ff-4664-ba46-2d2b7a8e90fd.jpg?v=1792550021",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2f61b647-fea6-4aa6-bb00-2e2fc77b30a8.jpg?v=1792550021"
    ],
    "options": [
      {
        "name": "Talla del calzado",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35"
        ],
        "price": 125000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36"
        ],
        "price": 125000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37"
        ],
        "price": 125000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38"
        ],
        "price": 125000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-hierro-mujer-copia-2",
      "niketecno-mujer",
      "nike-v5k-mujer",
      "nike-p6000-mujer"
    ]
  },
  "nike-air-max-hombre": {
    "title": "Nike Air Max- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_86c3b7df-a8cb-405b-a75a-46b3d78e7fec.jpg?v=1792549433",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_283b205b-f5e5-4afc-81cb-2dcfee4fa0bb.jpg?v=1792549433",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b16ec8ff-6d95-489f-84b3-ac864c4020bd.jpg?v=1792549433"
    ],
    "options": [
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Salmon",
          "Negro",
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Salmon"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Salmon"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Salmon"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Salmon"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Salmon"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-air-max-90-hombre",
      "nike-air-max-moto2k",
      "nike-speed-x-hombre",
      "nike-p6000-hombre"
    ]
  },
  "nike-air-270-mujer": {
    "title": "Nike Air 270- Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6a6ddf7c-c537-4cb4-97eb-3dd89948c546.jpg?v=1792548965",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_61728b2a-bceb-4668-8ca7-e2718d155b34.jpg?v=1792548965",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0d7301da-669e-4245-9f33-c6d3fa812a49.jpg?v=1792548965"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Beige",
          "Blanco-Rosa",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Beige"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco-Rosa"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-v2k-mujer",
      "nike-p6000-mujer",
      "nike-zoom-mujer",
      "nike-v5k-mujer"
    ]
  },
  "puma-wildrider": {
    "title": "Puma Wildrider- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f3a1853a-6737-4e48-b945-3ee7421bffa0.jpg?v=1792547985",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3ef5ad7-0b2f-4265-87ec-b96a9c1c7af5.jpg?v=1792548049"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "salomon-hombre",
      "nike-p6000-hombre",
      "hoka-hombre",
      "adidas-adistar-hombre"
    ]
  },
  "asics-gel-dama": {
    "title": "Asics Gel- Dama",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2176a050-f512-428b-863e-0b06b2d1d812.jpg?v=1792547734",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_3e33070c-1fe8-44a8-a63f-eddb2fd04546.jpg?v=1792547734",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_797bbbfd-faa1-44a3-92f3-d00b43df1272.jpg?v=1792547734"
    ],
    "options": [
      {
        "name": "Talla del calzado",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-gel",
      "adidas-adizero-hombre-copia-2",
      "asics-running-hombre",
      "asics-ff-turbo-hombre-1"
    ]
  },
  "asics-gel": {
    "title": "Asics Gel - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_676d1ecd-f40d-49c1-9776-82b3c74af7e4.jpg?v=1792547472",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_24c37970-7aa9-43eb-959c-655761636fdf.jpg?v=1792547502",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_07be7d30-2464-4881-8f72-8ce1bccf87b7.jpg?v=1792547501",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3ffa1be-3173-4e2a-96ed-98dafdde4a22.jpg?v=1792547501",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9980360f-2178-491a-b296-15f5048822c4.jpg?v=1792547502",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_89c605a7-a960-4d36-889d-0b2325b6e5c8.jpg?v=1792547501",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6b3082d2-c98f-4b89-b7fc-36f0dd419b05.jpg?v=1792547501"
    ],
    "options": [
      {
        "name": "Talla del calzado",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-gel-dama",
      "asics-running-hombre",
      "asics-ff-turbo-hombre-1",
      "asics-nyc-hombre"
    ]
  },
  "adidas-adistar-hombre": {
    "title": "Adidas Adistar- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ff262e57-9728-4224-960a-933f926356c7.jpg?v=1791913191",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_551b5d2a-97a9-4fe6-96e9-776050501e52.jpg?v=1791913191",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_60e10a21-6d2f-4907-b706-8afc1207a8dc.jpg?v=1791913191"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco- Verde",
          "Negro",
          "Verde"
        ]
      },
      {
        "name": "Sexo objetivo",
        "values": [
          "Masculino"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "Masculino",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "Masculino",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "Masculino",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "Masculino",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "Masculino",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-hyperboost-edge-hombre",
      "adizero-hombre",
      "adidas-adizero-dropset-hombre-copia",
      "adidas-glow-hombre"
    ]
  },
  "nike-ava-hombre": {
    "title": "Nike Ava - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5a9bfb84-e343-4c30-a117-48807a291c6b.jpg?v=1791912932",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2ecfab8d-a51f-4bfe-b80b-64b80b3cf80c.jpg?v=1791912932",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_624138b0-816c-4b9a-91c2-d6605d498384.jpg?v=1791912931",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1f06984d-1ca2-44a4-a30e-bfe840158aef.jpg?v=1791912932"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco- Verde",
          "Negro",
          "Gris oscuro"
        ]
      },
      {
        "name": "Sexo objetivo",
        "values": [
          "Masculino"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "37"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "Masculino",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "39"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "40"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "Masculino",
          "41-42"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "39"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "40"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "Masculino",
          "41-42"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "Masculino",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "Masculino",
          "39"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "Masculino",
          "40"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro",
          "Masculino",
          "41-42"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-p6000-hombre",
      "nike-air-max-90-hombre",
      "nike-st-glow-hombre",
      "nike-speed-x-hombre"
    ]
  },
  "adidas-glow-hombre": {
    "title": "Adidas Glow - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a083cfa0-c077-4932-a8c2-b6d29af51703.jpg?v=1791433870",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_24ccaac2-206e-4f68-bb4e-300101302792.jpg?v=1791433870",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fd1cfba9-9b59-48ed-8627-8f04c7b727fb.jpg?v=1791433870",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9a72d17b-5120-4a7a-9b66-a692b9f834ab.jpg?v=1791433870",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2a6cf7fa-d640-4dc1-887a-d79781522499.jpg?v=1791433870"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Rojo",
          "Blanco",
          "Azul marino",
          "Gris",
          "Negro"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Rojo",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo",
          "41-42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "40"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "41-42"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "39"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "40"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Azul marino",
          "41-42"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "39"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "40"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Gris",
          "41-42"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "39"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "40"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "41-42"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "adidas-hyperboost-edge-hombre",
      "adizero-hombre",
      "adidas-adistar-hombre",
      "nike-st-glow-hombre"
    ]
  },
  "adidas-glow-dama": {
    "title": "Adidas Glow - Dama",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e4ba92d6-6613-454b-9d80-5ff32801af4b.jpg?v=1791433709",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2e812da3-b0dd-4e8e-b2a8-01d66c1c28ed.jpg?v=1791433709",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f6d07c93-3fe2-4ecd-bd5b-9ef68ba9a6d9.jpg?v=1791433709",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_83635a9a-e939-44e9-9071-fd58fe2d5e4b.jpg?v=1791433709"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco- Verde",
          "Naranja",
          "Verde",
          "Negro"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco- Verde",
          "35"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "35"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "35"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "35"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "36"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "37"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco- Verde",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "36"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "37"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Naranja",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "36"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "37"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "36"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "37"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "38"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "adidas-glow-hombre",
      "nike-v2k-mujer-copia",
      "adidas-supermagma-mujer",
      "adidas-nuevo-mujer"
    ]
  },
  "nike-pegasus-42-mujer": {
    "title": "Nike Pegasus 42- Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_966ce6bc-1c1f-4271-a9f8-d8081fd966c8.jpg?v=1791433454",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fb5ce951-3013-4b6d-b1e1-b6d540dafa5c.jpg?v=1791433454"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Fuscia",
          "Negro"
        ]
      },
      {
        "name": "Talla del calzado",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Fuscia",
          "35"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "35"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "36"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "37"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Fuscia",
          "38"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "36"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "37"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Negro",
          "38"
        ],
        "price": 165000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-pegasus-hombre",
      "nike-pegasus-trail-hombre",
      "nike-v2k-mujer",
      "nike-p6000-mujer"
    ]
  },
  "adidas-eq21-run-unisex": {
    "title": "Adidas EQ21 Run- Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personaizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2ebf476c-26b9-4008-b22f-0cf35ef0ebe4.jpg?v=1791432439"
    ],
    "options": [
      {
        "name": "Talla del calzado",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "36"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "37"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "38"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "39"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "40"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "41-42"
        ],
        "price": 155000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "adidas-nuevo-mujer",
      "adidas-samba-unisex",
      "adidas-glow-hombre",
      "adidas-hyperboost-edge-hombre"
    ]
  },
  "nike-speed-x-hombre": {
    "title": "Nike Speed X - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eafafe71-3493-472a-b48f-2ce7a3381eca.jpg?v=1791431857",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_83fb2e4b-a0a3-4eea-9542-ce2746477857.jpg?v=1791431857"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 170000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-speed-x-mujer",
      "nike-air-max-90-hombre",
      "nike-air-max-hombre",
      "nike-p6000-hombre"
    ]
  },
  "nike-speed-x-mujer": {
    "title": "Nike Speed X - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fd260133-f48b-458a-8063-2fca951f2786.jpg?v=1791431857",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1f3119ca-55a5-4b22-a5e6-0314bf486695.jpg?v=1791431857",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b029553d-645f-42a2-bc12-97c0ce3a6768.jpg?v=1791431857",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eafafe71-3493-472a-b48f-2ce7a3381eca.jpg?v=1791431857",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_83fb2e4b-a0a3-4eea-9542-ce2746477857.jpg?v=1791431857"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 170000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-speed-x-hombre",
      "nike-zoom-x-mujer",
      "nike-zoom-mujer",
      "niketecno-mujer"
    ]
  },
  "new-balance-9060-dama": {
    "title": "New Balance 9060- Dama",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_3cb5c7dc-ba42-47b0-b17c-deee715fe03e.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ca77cadf-108f-4150-933e-df2a24e31778.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4fd91e13-10cf-4d81-8249-5e5669a6f967.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3327b95-1630-4a75-88f0-012f10c318a3.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_3884e7ca-2425-425e-b1eb-a613525c65f2.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1262383a-77c3-4570-92a4-41336abc74d6.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_49e39cb3-839c-4da5-8621-cfc6cff99a06.jpg?v=1791431160"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Beige- Cafe",
          "Cafe",
          "Negro-blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige- Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige- Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige- Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige- Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Cafe"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro-blanco"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "36",
          "Cafe"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro-blanco"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "37",
          "Cafe"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro-blanco"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "38",
          "Cafe"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro-blanco"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "new-balance-9060-cafe-negro-hombre",
      "new-balance-fresh-mujer",
      "new-balance-1906r-unisex",
      "new-balance-530-unisex"
    ]
  },
  "asics-ff-turbo-hombre-1": {
    "title": "Asics FF Turbo- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8f9011a3-3292-46a3-8a56-f0f0ede7d31c.jpg?v=1790607853",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fb4f5446-9f91-40b8-b2e7-395566787d94.jpg?v=1790607854"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Naranja",
          "Verde"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Naranja"
        ],
        "price": 185000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Naranja"
        ],
        "price": 185000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Naranja"
        ],
        "price": 185000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Naranja"
        ],
        "price": 185000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Naranja"
        ],
        "price": 185000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-running-hombre",
      "asics-nyc-hombre",
      "adidas-adizero-hombre-copia-2",
      "asics-gel"
    ]
  },
  "salomon-hombre": {
    "title": "Salomon- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_def4c76c-e716-4303-b7a2-d6f3dc23ed9e.jpg?v=1790610655",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_af18a58a-6b49-4b36-a24f-05d665c34db9.jpg?v=1790610655",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_677c1324-465b-4f02-a593-6924a3d6103d.jpg?v=1790610655"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige - Negro",
          "Beige - Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Beige - Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige - Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Beige - Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Beige - Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Beige - Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige - Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige - Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Beige - Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Beige - Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Beige - Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "salomon-mujer",
      "on-cloud-hombre",
      "adidas-adistar-hombre",
      "hoka-hombre"
    ]
  },
  "salomon-mujer": {
    "title": "Salomon - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_49c7fffc-3355-418f-ae5a-a244317809cf.jpg?v=1790610532",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c977afbe-7f5a-423d-a39a-4b3b08e7af29.jpg?v=1790610532"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "salomon-hombre",
      "nike-zoom-mujer-copia-2",
      "niketecno-mujer",
      "adidas-supermagma-mujer"
    ]
  },
  "new-balance-1906r-unisex": {
    "title": "New Balance 1906R - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_47a366ae-e11c-4a37-94f3-32016680a72b.jpg?v=1790610327",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_bbb4cd2e-ebf9-4275-8fd3-02b6a7b9d37f.jpg?v=1790610327",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_818a15a9-7cf2-456a-85a5-52dbcfb73a5e.jpg?v=1790610327"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-530-unisex",
      "new-balance-9060-dama",
      "new-balance-9060-cafe-negro-hombre",
      "new-balance-fresh-mujer"
    ]
  },
  "hoka-mujer-copia": {
    "title": "Hoka - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f7609c91-8bb9-45fa-945b-91ea1749934b.jpg?v=1790609995",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_604ca0f9-52db-4faf-801d-a942d13a0119.jpg?v=1790609995"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Rosado"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Rosado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Rosado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Rosado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Rosado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "hoka-hombre",
      "nike-zoom-mujer-copia-2",
      "salomon-mujer",
      "nike-v5k-mujer"
    ]
  },
  "nike-pegasus-trail-hombre": {
    "title": "Nike Pegasus Trail - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7a7e795d-f916-4e3c-9337-e12d4703ede2.jpg?v=1790609795",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f15acace-73d8-4bdf-9660-135394c9a3a9.jpg?v=1790609795",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a78737ab-1331-40cf-b6c6-b4bfc5db6f93.jpg?v=1790609795",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3b69699-c6ec-4c3e-9112-a10e12b0cb61.jpg?v=1790609795"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde",
          "Naranja",
          "Negro",
          "Negro - Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro - Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro - Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro - Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro - Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro - Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-pegasus-hombre",
      "nike-p6000-hombre",
      "nike-ava-hombre",
      "nike-speed-x-hombre"
    ]
  },
  "adidas-adizero-dropset-hombre-copia": {
    "title": "Adidas Adizero Dropset - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f3d2a2b9-1c9d-4aed-a70f-2c902530c190.jpg?v=1790609608",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_70265a98-72ce-47fe-a45b-4596ab117ef0.jpg?v=1790609608"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Naranja",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Naranja"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adizero-hombre",
      "adidas-adizero-mujer",
      "adidas-adistar-hombre",
      "adidas-terrex-hombre"
    ]
  },
  "hoka-hombre": {
    "title": "Hoka - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0c2e767f-0f6f-4ec7-b446-94e58a5fcd27.jpg?v=1790609448",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a76a4417-02d5-40d2-84ff-f1d416830e95.jpg?v=1790609448",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_dc21ba1b-2884-42fb-ab04-f954b51cc8ed.jpg?v=1790609448",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_98e740e4-a204-47dd-ad7e-28d60dc0e6ae.jpg?v=1790609448"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Negro",
          "Negro - Blanco",
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "hoka-mujer-copia",
      "asics-running-hombre",
      "brooks-running-hombre",
      "salomon-hombre"
    ]
  },
  "adidas-adizero-mujer": {
    "title": "Adidas Adizero - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\n Escríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_370099a2-1bec-44db-a412-2672ddaac955.jpg?v=1790608831",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2ebe4e32-09d6-4a97-b237-d55465421b63.jpg?v=1790608781",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_51fcad0a-7a2d-44b8-afdd-892b5de330fd.jpg?v=1790608781"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Morado",
          "Negro",
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adizero-hombre",
      "adidas-supermagma-mujer",
      "adidas-adizero-dropset-hombre-copia",
      "adidas-nuevo-mujer"
    ]
  },
  "new-balance-fresh-foam-mujer-copia-2": {
    "title": "Adidas Hyperboost Edge - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a694ff32-887d-4676-b809-551cc2186b8d.jpg?v=1790610075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_408eaf0b-097a-4306-b27d-28e2db832824.jpg?v=1790610075",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_40cf678f-e171-4856-9377-3c97d96dcc61.jpg?v=1790181891"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde",
          "Rojo",
          "Amarillo"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Rojo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Rojo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Rojo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Rojo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Rojo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Amarillo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Amarillo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Amarillo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Amarillo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Amarillo"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-glow-hombre",
      "adidas-terrex-hombre",
      "adizero-hombre",
      "adidas-adistar-hombre"
    ]
  },
  "new-balance-fresh-foam-mujer-copia": {
    "title": "Adidas Terrex Freehiker- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a10dd2aa-307b-4a9b-9e39-6f8767fcbe66.jpg?v=1790607697",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_969cf16c-764e-4beb-ae07-e7e5522b7954.jpg?v=1790607697",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a690bda9-b261-49ab-95fd-16585b3c8d92.jpg?v=1790607697"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Verde"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-terrex-hombre",
      "adizero-hombre",
      "adidas-adizero-dropset-hombre-copia",
      "new-balance-fresh-foam-mujer-copia-2"
    ]
  },
  "adidas-questar-mujer": {
    "title": "Adidas Questar - Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ceaf646a-aa78-48bf-b2ce-f539f4745e83.jpg?v=1790607156",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0738b6bd-7729-42b7-a81f-6a33ae53888d.jpg?v=1790607156",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5333ccbe-cfd9-480d-91d5-3f1fb3a761fb.jpg?v=1790607157"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro - Morado",
          "Moca",
          "Blanco"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro - Morado",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro - Morado",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro - Morado",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro - Morado",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Moca",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-hyperboost-edge-hombre",
      "adidas-adizero-mujer",
      "nike-v2k-mujer-copia",
      "adidas-supermagma-mujer"
    ]
  },
  "on-cloud-hombre": {
    "title": "On Cloud - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9efca52f-dc31-419f-b517-0ec807ca46b2.jpg?v=1790298378",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7f5ff8dc-9918-465c-b257-72ffa1b3a17f.jpg?v=1790298378",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f1df8da2-cdbb-460a-b504-8285282f52d4.jpg?v=1790298378",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_745b112f-9994-4e49-bd7e-fa7eb1cb9138.jpg?v=1790298378",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ee2d7039-6dc0-4c1f-bbe3-aeae90bdee4a.jpg?v=1790298378",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_11f1c797-c954-4342-8536-e7814887da17.jpg?v=1790298378"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Gris",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "on-cloud-trail-hombre",
      "nike-zoom-mujer-copia-2",
      "salomon-hombre",
      "nike-ava-hombre"
    ]
  },
  "on-cloud-trail-hombre": {
    "title": "On Cloud Trail - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2e512641-c23b-4c3b-882e-05a31f1f3610.jpg?v=1790298292",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_544aaa0b-ed6e-4a09-aa9a-37053612112e.jpg?v=1790298292",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c2d3d118-d658-42c8-b889-a6e4e3c21697.jpg?v=1790298292"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Gris",
          "Negro",
          "Marron"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Marron"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Marron"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Marron"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Marron"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Marron"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "on-cloud-hombre",
      "nike-zoom-mujer-copia-2",
      "asics-running-hombre",
      "salomon-hombre"
    ]
  },
  "nike-air-max-90-hombre": {
    "title": "Nike Air Max 90 - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a66ea03f-faa2-4ff7-bedd-26011ff76ec1.jpg?v=1790297728",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_38d19fb5-2166-465b-8bce-453fae587248.jpg?v=1790297729"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Gris",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-air-max-hombre",
      "nike-speed-x-hombre",
      "nike-p6000-hombre",
      "nike-ava-hombre"
    ]
  },
  "nike-zoom-trail-mujer": {
    "title": "Nike Zoom Trail - Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7bb73ba9-04e6-4d65-9fc3-3da70581fb92.jpg?v=1790297515",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_75085599-72d1-4556-99da-63931fd56cc5.jpg?v=1790297515",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9e307d2b-e7d3-4da7-b252-35de926cbcf0.jpg?v=1791433299"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco-Rosa",
          "Blanco",
          "Verde"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco-Rosa",
          "35"
        ],
        "price": 145000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco-Rosa",
          "36"
        ],
        "price": 145000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco-Rosa",
          "37"
        ],
        "price": 145000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco-Rosa",
          "38"
        ],
        "price": 145000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "35"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "36"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "37"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "38"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "35"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "36"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "37"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde",
          "38"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-mujer",
      "nike-zoom-x-mujer",
      "nike-zoomm-mujer",
      "nike-trail-10-unisex"
    ]
  },
  "nike-zoom-mujer-copia-3": {
    "title": "Nike Vomero - Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0637ee95-a308-49ad-9f6a-8a4cafade5b5.jpg?v=1790297360",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fe0891ab-be80-4fe6-b6ae-f89f37a66e0d.jpg?v=1790297360"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Top + Leggins",
          "Beige"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Top + Leggins",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-vomero-18-hombre",
      "nik-vomero-premium",
      "nike-vomero-gorotex-hombre",
      "nike-v5k-mujer"
    ]
  },
  "nike-zoom-mujer-copia-2": {
    "title": "On cloud - Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f2ef6a95-7a91-4a0b-ab12-9a6fd647f384.jpg?v=1790298053",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_055ec612-a6e1-4f5e-bc68-82cd893f9e2a.jpg?v=1790298053",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_cb224a16-5577-4404-95be-2856987ebde0.jpg?v=1790298053",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_df11472a-7abe-4e35-a77b-1474afa9ee52.jpg?v=1790298053",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_55426077-2fc6-4f8f-a93a-353c8dfdbcec.jpg?v=1790298053",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9081e66d-44c8-448f-adaf-f4649eeb4fba.jpg?v=1790298053",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5c085405-fa8a-49f6-95f3-a0a27762945b.jpg?v=1790298053"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Top + Leggins",
          "Blanco",
          "Beige",
          "Marrón",
          "Camiseta + Leggins"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Top + Leggins",
          "35"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "36"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "37"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "38"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "35"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "36"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "37"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco",
          "38"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "35"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "36"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "37"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Beige",
          "38"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Marrón",
          "35"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Marrón",
          "36"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Marrón",
          "37"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Marrón",
          "38"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "35"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "36"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "37"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Camiseta + Leggins",
          "38"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "on-cloud-hombre",
      "on-cloud-trail-hombre",
      "salomon-mujer",
      "new-balance-hierro-mujer-copia"
    ]
  },
  "adidas-supermagma-mujer": {
    "title": "Adidas Supermagma - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6a971529-099f-4ec0-a39c-719ac899a111.jpg?v=1790297127",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1379f4b7-48f6-4b6a-b672-0bda3b529ace.jpg?v=1790297127"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro",
          "Beige"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-v2k-mujer-copia",
      "adidas-adizero-mujer",
      "adidas-nuevo-mujer",
      "adidas-duramo-speed-mujer"
    ]
  },
  "nike-zoom-mujer": {
    "title": "Nike Zoom - Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_49fb28e2-517d-4e14-94a9-07448d7475c0.jpg?v=1790295775",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7bbdc3bb-65eb-4e2a-a476-0c0d256133d7.jpg?v=1790295775",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_37f2ac05-645c-4e4f-87fa-0e7f3db2efc8.jpg?v=1790295775"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Top + Leggins",
          "Violeta"
        ]
      },
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Top + Leggins",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "35"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Top + Leggins",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "36"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "37"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Violeta",
          "38"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-x-mujer",
      "nike-zoomm-mujer",
      "nike-zoom-trail-mujer",
      "nike-p6000-mujer"
    ]
  },
  "new-balance-hierro-mujer-copia-2": {
    "title": "Nike Metcon - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7e3332ee-b988-4850-9074-13f7e29dab22.jpg?v=1790296493",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_60ee8391-bff1-4c88-8ce7-cdfa5a49edf9.jpg?v=1790296493",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b91e7b86-592e-4e81-a081-841626e90931.jpg?v=1790296493"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Azul",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Azul"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Azul"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Azul"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Azul"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-metcon-v1-mujer",
      "niketecno-mujer",
      "nike-p6000-mujer",
      "nike-v5k-mujer"
    ]
  },
  "new-balance-hierro-mujer-copia": {
    "title": "Skechers Running - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c3e1e257-6976-4ff1-ba0a-043acce266d0.jpg?v=1790295473",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6afbb68a-df0a-4460-aa5f-339ed20ac9ab.jpg?v=1790295473",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_48a88e4b-e803-40ab-a4a2-ac9e1fe2a58d.jpg?v=1790295473",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d53c29ea-ee3b-48eb-b574-066974912def.jpg?v=1790295473"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-mujer-copia-2",
      "salomon-mujer",
      "adidas-adizero-hombre-copia-2",
      "hoka-mujer-copia"
    ]
  },
  "nike-zoom-mujer-copia-1": {
    "title": "Columbia Climbing - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_540a0167-bab5-46f1-a100-df0431da8749.jpg?v=1790294218",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_994252a0-81af-4ace-a55f-b88756638fa0.jpg?v=1790294218"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Verde"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "salomon-hombre",
      "asics-nyc-hombre",
      "puma-wildrider",
      "hoka-hombre"
    ]
  },
  "nike-v2k-mujer-copia": {
    "title": "Adidas Supernova- Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_623df56e-6cda-42a2-89cd-eddd6c33bb6e.jpg?v=1790296615",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_64972b4a-cd0c-4103-8ce2-090aed97ca5a.jpg?v=1790296615",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_58b6c4a3-ed6b-4703-ad6c-fa82b60fa91b.jpg?v=1790296615"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige",
          "Morada",
          "Morado- Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Morada"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Morado- Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Morada"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Morado- Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Morada"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Morado- Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Morada"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Morado- Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-supermagma-mujer",
      "adidas-nuevo-mujer",
      "adidas-adizero-mujer",
      "adidas-questar-mujer"
    ]
  },
  "new-balance-fresh-mujer": {
    "title": "New Balance Fresh Foam- Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c5013141-9014-4acb-a257-e1bb34ae74b9.jpg?v=1790293514",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c04f7576-1609-425b-b4e5-662ab624a314.jpg?v=1790293514",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5e72ef87-3e9c-448f-b27e-59816a9032eb.jpg?v=1791912852",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_40c050d2-1036-49e3-ad39-02b63dd4288b.jpg?v=1791912852"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Naranja",
          "Biege"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Naranja"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Biege"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Naranja"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Biege"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Naranja"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Biege"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Naranja"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Biege"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-574-mujer",
      "new-balance-530-unisex",
      "new-balance-9060-dama",
      "new-balance-hierro-hombre"
    ]
  },
  "new-balance-ellipse-hombre": {
    "title": "New Balance Ellipse - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7a322b40-cdd4-4262-8357-20c82c2b9631.jpg?v=1790182177",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8301b9ca-6623-4742-b4e3-6ed6c708d26a.jpg?v=1790182177",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b3f70263-eac2-4d7e-9f3d-7371a3680a66.jpg?v=1790182177",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_85a7d80c-9664-4c4b-ba68-ca46778373dc.jpg?v=1790182177"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Beige",
          "Blanco- Morado"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-hierro-hombre",
      "new-balance-9060-cafe-negro-hombre",
      "new-balance-574-mujer",
      "salomon-hombre"
    ]
  },
  "adidas-hyperboost-edge-hombre": {
    "title": "Adidas Questar - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_670f2305-4001-44c1-bfa0-f35781603726.jpg?v=1791430899",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_15e32145-2342-42b8-8ead-bd9fd286e1c7.jpg?v=1791430899",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_162c7c28-0344-4cbc-92c2-158e290fe746.jpg?v=1791430899"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-questar-mujer",
      "adidas-adistar-hombre",
      "adizero-hombre",
      "adidas-glow-hombre"
    ]
  },
  "adidas-terrex-hombre": {
    "title": "Adidas Terrex- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_02c81c5e-1e4b-4b2a-a693-0347bbf917bd.jpg?v=1790181571",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_11e05e04-53f1-4bf6-a90c-73c57a8f876c.jpg?v=1790181571",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5f056dba-0a63-4ca7-8f4c-d13ca404d1d6.jpg?v=1790181571",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c7bc9472-1816-4174-a4ba-9489a9355b86.jpg?v=1790181571"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Gris",
          "Negro",
          "Negro - Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro - Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-fresh-foam-mujer-copia",
      "adizero-hombre",
      "adidas-glow-hombre",
      "new-balance-fresh-foam-mujer-copia-2"
    ]
  },
  "nik-vomero-premium": {
    "title": "Nike Vomero Premium - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ad0b26d4-ed50-4f2a-a187-85964b0428bc.jpg?v=1790181782",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9e9829eb-b4ce-4730-a39e-9b7606c8f503.jpg?v=1790181782"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro - Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Negro - Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro - Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro - Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro - Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro - Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-vomero-18-hombre",
      "nike-zoom-mujer-copia-3",
      "nike-vomero-gorotex-hombre",
      "nike-ava-hombre"
    ]
  },
  "new-balance-hierro-hombre": {
    "title": "New Balance Hierro- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_3783a3d9-2427-4849-ba5c-f18d9ace73da.jpg?v=1790181332",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5d3bcbda-066f-4797-945a-b6e8ac02ee3e.jpg?v=1790181332"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 195000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-ellipse-hombre",
      "new-balance-9060-cafe-negro-hombre",
      "new-balance-530-unisex",
      "new-balance-fresh-mujer"
    ]
  },
  "nike-v2k-mujer": {
    "title": "Nike V2k - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3678a1f-459b-430d-95d4-754ea388a36a.jpg?v=1790051026",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b627f74e-bfd2-4f5c-a25a-c228e71903d8.jpg?v=1790051026",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_bc65938e-a722-4bac-841e-bed24cb2e5fe.jpg?v=1790051025",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6799d429-e864-4608-8184-47687055075d.jpg?v=1790051026",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_71fc1cfb-544c-415b-abfe-770450a4a7ea.jpg?v=1790606900",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_bdf1eb3b-52ef-43ca-86a9-3cc1f7e37126.jpg?v=1790606901",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_dd135127-e022-4108-b1fc-358a1a7e15ab.jpg?v=1790606901"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige - Negro",
          "Beige - Cafe",
          "Beige- Moca",
          "Moca"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Beige - Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige - Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige - Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige - Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige - Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige- Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige - Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige- Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige - Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige- Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige - Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige- Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Moca"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-v5k-mujer",
      "nike-p6000-mujer",
      "niketecno-mujer",
      "nike-zoom-mujer-copia-3"
    ]
  },
  "nike-v5k-mujer": {
    "title": "Nike V5k - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ac7bf46c-4205-4bcb-9f09-e467541df6f5.jpg?v=1790050839",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ab24d275-4dd1-4b1b-b2f6-6a7187d831ff.jpg?v=1790050840",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4ff000cb-f435-4598-8e40-0e2673585038.jpg?v=1790606901"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco- Negro",
          "Blanco- Cafe",
          "Beige"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco- Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco- Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-v2k-mujer",
      "niketecno-mujer",
      "nike-p6000-mujer",
      "nike-zoom-mujer-copia-3"
    ]
  },
  "asics-running-hombre": {
    "title": "Asics Running- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_078dbfef-8a44-48e7-975d-2ef9491f2643.jpg?v=1790050611",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4be2219c-74c3-4c1a-861b-e698a81d855c.jpg?v=1790050610"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-nyc-hombre",
      "asics-ff-turbo-hombre-1",
      "brooks-running-hombre",
      "asics-gel"
    ]
  },
  "nike-zoomm-mujer": {
    "title": "Nike Zoom -Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9758cb68-3249-4c08-9598-85f813decf64.jpg?v=1790050292",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_20f37c5f-fa4b-4e6b-a07f-f4bfbfe2725b.jpg?v=1790050292",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ff24b8ca-2bd5-4ce9-a3f7-380dfe67357b.jpg?v=1790050292"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cafe",
          "Rosa",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Cafe"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Rosa"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Cafe"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Rosa"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Cafe"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Rosa"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Cafe"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Rosa"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-mujer",
      "nike-zoom-x-mujer",
      "nike-zoom-trail-mujer",
      "nike-p6000-mujer"
    ]
  },
  "nike-p6000-hombre": {
    "title": "Nike P6000- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_31e2fb63-e38b-40ae-a359-5236513e5a89.jpg?v=1790048141",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_70a69316-aa7a-470f-8397-eb7ded473fe4.jpg?v=1790048199"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Plateado"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-p6000-mujer",
      "nike-ava-hombre",
      "nike-air-max-90-hombre",
      "nike-st-glow-hombre"
    ]
  },
  "nikeaf1-bota-unisex": {
    "title": "Nike Air Force One Bota - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_aa5cbe96-6c5e-4821-9eac-bf7b913661fb.jpg?v=1790049864",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fc6257ee-99ca-42d6-930e-7f5022e1b134.jpg?v=1790049864"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 155000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nikeaf1-unisex",
      "nike-skate-unisex",
      "nike-sb-unisex",
      "nike-tn-unisex"
    ]
  },
  "adidas-samba-unisex": {
    "title": "Adidas Samba - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7cd51b4c-b446-4e0b-bc55-54cdcc076140.jpg?v=1790049648",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_25a9751c-4d83-4668-8f97-6d83e19ab3de.jpg?v=1790049648"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-nuevo-mujer",
      "adidas-supermagma-mujer",
      "adidas-glow-hombre",
      "nike-v2k-mujer-copia"
    ]
  },
  "nike-jordanr1-unisex": {
    "title": "Nike Jordan R1 - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_01cb2257-fb5c-4fe6-b648-42c5eb32a8cf.jpg?v=1790049752",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6a76a1c4-2102-43ac-9a31-d8c49a0e0ac1.jpg?v=1790049752"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nikeaf1-unisex",
      "nike-tn-unisex",
      "nikeaf1-bota-unisex",
      "nike-skate-unisex"
    ]
  },
  "nike-sb-unisex": {
    "title": "Nike Sb - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_53c24482-2dc1-48da-bb05-e50302f94a0b.jpg?v=1790049495",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f0bd5a9b-5661-4808-ae66-0bf75e6c7526.jpg?v=1790049494"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-skate-unisex",
      "nike-tn-unisex",
      "nike-blazer-unisex",
      "niketecno-mujer"
    ]
  },
  "nike-blazer-unisex": {
    "title": "Nike Blazer - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d673abe9-ef76-4556-b27d-c6c5977c7f34.jpg?v=1790049285",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fb26f696-53af-4193-8aed-837a7a02fcca.jpg?v=1790049290"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-tn-unisex",
      "nike-sb-unisex",
      "nike-skate-unisex",
      "nikeaf1-unisex"
    ]
  },
  "nike-bailleli": {
    "title": "Nike Bailleli - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b484ff9d-c3ea-45d8-9b65-7a2d4556dc03.jpg?v=1790049140",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_83414c8e-59c9-4c58-89cd-6613b5db7793.jpg?v=1790049140",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_508f7b19-260f-4920-bfbc-5f95bde5e5a2.jpg?v=1790180633"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-tn-unisex",
      "nike-blazer-unisex",
      "nike-sb-unisex",
      "nike-skate-unisex"
    ]
  },
  "nike-skate-unisex": {
    "title": "Nike Skate - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_caa7f9e8-7613-4ea3-b5b0-9a06ba42c4d2.jpg?v=1790048338",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b9e9db9c-cc62-4a2f-b41c-af6c2183e285.jpg?v=1790048842"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-sb-unisex",
      "nike-tn-unisex",
      "nike-blazer-unisex",
      "nike-v5k-mujer"
    ]
  },
  "nike-p6000-mujer": {
    "title": "Nike P6000- Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9aba1bbc-fed1-4c79-b4c4-65d4913790d4.jpg?v=1790048141",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_31e2fb63-e38b-40ae-a359-5236513e5a89.jpg?v=1790048141",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1383cd3c-fcd9-4b53-bba7-5652269103c5.jpg?v=1790048141",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_70a69316-aa7a-470f-8397-eb7ded473fe4.jpg?v=1790048199",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_dcb7a468-3452-4405-a1bd-13f99b08f2f8.jpg?v=1790182006"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Plateado",
          "Beige",
          "Cafe"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Plateado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Cafe"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-p6000-hombre",
      "niketecno-mujer",
      "nike-v5k-mujer",
      "new-balance-hierro-mujer-copia-2"
    ]
  },
  "new-balance-530-unisex": {
    "title": "New Balance 530- Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_de0b0ee3-f798-4950-94de-377e62fdef08.jpg?v=1790047575",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_17364adf-98b0-4f52-84c7-46ed6cc43758.jpg?v=1790047675"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Blanco"
        ],
        "price": 145000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-574-mujer",
      "new-balance-hierro-hombre",
      "new-balance-1906r-unisex",
      "new-balance-fresh-mujer"
    ]
  },
  "niketecno-mujer": {
    "title": "Nike Tecno- Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e41c5bc0-f38b-409b-8d08-cc2026a502f3.jpg?v=1790047494",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_66f75fd2-3f86-4f42-bd6a-9e6a14b27094.jpg?v=1790047410",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6bab45ac-edf1-44a6-b983-32873fa956db.jpg?v=1790047494"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-v5k-mujer",
      "nike-initiator-hombre",
      "nike-p6000-mujer",
      "new-balance-hierro-mujer-copia-2"
    ]
  },
  "nike-tn-unisex": {
    "title": "Nike TN - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a7019935-94c7-4834-b7d4-a2d48b0e0803.jpg?v=1790045417",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_61ca6113-a634-49ee-bfd3-277505b37ef8.jpg?v=1790045417"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Blanco-Rosa",
          "Blanco- Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco-Rosa"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco-Rosa"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco-Rosa"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco-Rosa"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco- Azul"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco- Azul"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Azul"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Azul"
        ],
        "price": 135000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "niketecno-mujer",
      "nike-skate-unisex",
      "nike-sb-unisex",
      "nike-blazer-unisex"
    ]
  },
  "nike-trail-10-unisex": {
    "title": "Nike Trail Wildhorse 10 - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2e14897f-52b0-43ab-adc3-b01138c2db80.jpg?v=1790044592",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6d55d856-797b-464e-95ed-a2180e2cb45f.jpg?v=1790044592",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1db06a94-ab03-48b0-ae05-c6ef6f2bb5ef.jpg?v=1790044592",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_cf4aa6b6-5d48-46c2-9ba6-7bcdcdf90c7c.jpg?v=1790044592",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ad48c40c-40f4-4e82-a1bf-fe23b3afe3bd.jpg?v=1790044592",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_af812299-c06c-4e5d-8f74-8d340af387a0.jpg?v=1791432287"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "48"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Verde"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "48",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "48",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "48",
          "Verde"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-trail-mujer",
      "nike-speed-x-mujer",
      "nike-p6000-mujer",
      "niketecno-mujer"
    ]
  },
  "adidas-nuevo-mujer": {
    "title": "Adidas New -Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c64447a2-039e-45b4-901f-a357ecdf5bde.jpg?v=1790179766",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b5792809-4e4e-48c7-8324-a5ea43723d0e.jpg?v=1790179766",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9f3ba605-f214-41a0-bbe6-89b7ed73422f.jpg?v=1790179766"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Beige",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Beige"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-supermagma-mujer",
      "adidas-adizero-mujer",
      "nike-v2k-mujer-copia",
      "adidas-questar-mujer"
    ]
  },
  "nike-vomero-18-hombre": {
    "title": "Nike Vomero 18 - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9bd5d0ae-7469-493b-b339-a7781e8bf790.jpg?v=1790043996",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0635cdc2-7415-4d9c-8fbd-54900a6759f3.jpg?v=1790043996",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1b823c21-16be-48ac-bc97-079a03ed6e51.jpg?v=1790043996",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_91974178-05f6-4314-815d-948054165c6b.jpg?v=1790043996",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f5cff916-7c3c-4d28-ad08-8bb7f88b528e.jpg?v=1790043996",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fa202f32-c7bb-4948-b355-732671bf3a02.jpg?v=1790043996"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Gris- Negro",
          "Verde",
          "Negro-Blanco",
          "Morado"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Gris- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Gris- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Gris- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nik-vomero-premium",
      "nike-vomero-gorotex-hombre",
      "nike-zoom-mujer-copia-3",
      "nike-speed-x-hombre"
    ]
  },
  "nike-zoom-x-mujer": {
    "title": "Nike Zoom X - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c62c8bd6-be9e-40b5-8e07-b838d36686e1.jpg?v=1790043429",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0fd5d019-e87d-4af6-877c-42683e79e997.jpg?v=1790043429",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1bc6fd9f-9fdb-49b7-8663-1921c9367fce.jpg?v=1790043429",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b0508107-4b30-4b77-a69c-d950f550536a.jpg?v=1790043429",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_302aa633-d34f-413a-9076-93ceb2b876d1.jpg?v=1790043429",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_76a7a452-94ed-4973-9504-b0d710b3778f.jpg?v=1790043429",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5d1fe324-585b-4635-8803-0442269e26c7.jpg?v=1790043429"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco- Naranja",
          "Blanco- Amarillo",
          "Rosa",
          "Fuscia - Azul",
          "Fuscia- Morado",
          "Rosado- Negro",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco- Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco- Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco- Amarillo"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco- Amarillo"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Amarillo"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Amarillo"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Rosa"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Fuscia - Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Fuscia- Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Rosado- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Rosa"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Fuscia - Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Fuscia- Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Rosado- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Rosa"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Fuscia - Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Fuscia- Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Rosado- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Rosa"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Fuscia - Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Fuscia- Morado"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Rosado- Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-zoom-mujer",
      "nike-zoomm-mujer",
      "nike-zoom-trail-mujer",
      "nike-speed-x-mujer"
    ]
  },
  "new-balance-574-mujer": {
    "title": "New Balance 574 -Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0d5accc4-2f66-4e6a-a592-846492810259.jpg?v=1790042512",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_964cf39e-3484-469b-aaff-f2c8fa646514.jpg?v=1790042512",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_870f5a17-0b06-4af4-b7b0-6cb2ae1338b1.jpg?v=1790042511"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco- Azul",
          "Blanco - Morado",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco- Azul"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco- Azul"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Azul"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Azul"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Blanco - Morado"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco - Morado"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco - Morado"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco - Morado"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 150000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "new-balance-530-unisex",
      "new-balance-fresh-mujer",
      "adidas-nuevo-mujer",
      "new-balance-hierro-hombre"
    ]
  },
  "nikeaf1-unisex": {
    "title": "Nike Air Force One - Unisex",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4c15e168-38f5-4ddb-917e-88d31d92e220.jpg?v=1790042694",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0f8b25d1-446d-4aac-8e1b-0ada9209c431.jpg?v=1790042694"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nikeaf1-bota-unisex",
      "nike-tn-unisex",
      "nike-blazer-unisex",
      "nike-skate-unisex"
    ]
  },
  "underarmour-hombre": {
    "title": "Bota Under Armour - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\n Escríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eb364127-bbb2-41c0-91f9-952efd352ffd.jpg?v=1791432172",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5a79b02d-1f42-41c1-87d9-6ae3abca9f60.jpg?v=1791432171",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0d1ef8e9-8c6a-4bfe-baa5-47bdb50188f0.jpg?v=1791432172"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "49",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro",
          "Verde",
          "Marron"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Negro"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Marron"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Marron"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Verde"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Marron"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Marron"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Verde"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Marron"
        ],
        "price": 205000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "conjunto-underarmour",
      "conjunto-tela-fria-underarmour",
      "salomon-hombre",
      "camiseta-underarmour-dri-fit"
    ]
  },
  "adidas-adizero-hombre-copia-2": {
    "title": "Asics Súper Blast - Mujer",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\n Escríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83605.jpg?v=1793226329",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83604.jpg?v=1793226329",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83603.jpg?v=1793226329",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83602.jpg?v=1793226330"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Morado",
          "Gris"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Morado"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Morado"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Morado"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Morado"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-running-hombre",
      "asics-ff-turbo-hombre-1",
      "asics-gel-dama",
      "asics-nyc-hombre"
    ]
  },
  "nike-vomero-gorotex-hombre": {
    "title": "Nike Vomero 18 GoreTex- Hombre",
    "description": "Producto de prueba para validar el esquema de colecciones automáticas.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_35175541-0975-4469-b164-8bde8f6a0d8f.jpg?v=1790179503",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_548f15e5-cda7-4861-98a0-ede15a26620e.jpg?v=1790179503",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5eedc0c4-120b-46d2-adef-1d0e49446d91.jpg?v=1790179503"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41-42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Verde",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Verde"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41-42",
          "Azul"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-vomero-18-hombre",
      "nik-vomero-premium",
      "nike-zoom-mujer-copia-3",
      "nike-ava-hombre"
    ]
  },
  "adidas-duramo-speed-mujer": {
    "title": "Adidas Duramo Speed- Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_33dfbb93-4d70-4b1c-9616-9eef30f766d1.jpg?v=1790041169",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_02c298e3-9546-4969-938b-0d6112db304d.jpg?v=1790041169"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Morado"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-supermagma-mujer",
      "adidas-adizero-mujer",
      "nike-v2k-mujer-copia",
      "adidas-questar-mujer"
    ]
  },
  "asics-nyc-hombre": {
    "title": "Asics NYC - Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e8dd7301-cf5f-44e8-a561-0ca019394943.jpg?v=1790040762",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8eff1a0c-63ef-4c89-bd28-06373402afc3.jpg?v=1790040926",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_bb03ffe7-f3c3-454f-891f-664ae19d70ac.jpg?v=1790040926",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6a3961db-8db1-4cef-ad21-dd20567de680.jpg?v=1790040926"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "30",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "30",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "30",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "asics-running-hombre",
      "asics-ff-turbo-hombre-1",
      "adidas-adizero-hombre-copia-2",
      "asics-gel"
    ]
  },
  "nike-st-glow-hombre": {
    "title": "Nike St Glow - Hombre",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5f0df0c5-a268-4540-b15b-d57aa00220b9.jpg?v=1790180122",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_cc78c896-e260-45b1-915f-59be4113b2d9.jpg?v=1790180122"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41/42"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-glow-hombre",
      "nike-p6000-hombre",
      "nike-ava-hombre",
      "nike-speed-x-hombre"
    ]
  },
  "new-balance-9060-cafe-negro-hombre": {
    "title": "New Balance 9060- Hombre",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ccc676be-efa8-42e6-8574-3f1736c7a0d2.jpg?v=1790040425",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7be749cb-7a9b-426c-bed7-61364504788d.jpg?v=1790040425",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_df772248-3f85-409d-81d0-e5b26e450053.jpg?v=1790040425",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1262383a-77c3-4570-92a4-41336abc74d6.jpg?v=1791431160",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_49e39cb3-839c-4da5-8621-cfc6cff99a06.jpg?v=1791431160"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Gris",
          "Negro",
          "Cafe",
          "Blanco - Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Gris"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Cafe"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco - Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco - Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco - Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco - Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco - Negro"
        ],
        "price": 175000,
        "available": false,
        "image": ""
      }
    ],
    "related": [
      "new-balance-9060-dama",
      "new-balance-hierro-hombre",
      "new-balance-ellipse-hombre",
      "new-balance-1906r-unisex"
    ]
  },
  "nike-initiator-hombre": {
    "title": "Nike Initiator - Mujer",
    "description": "",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ba28743a-dbf4-41d2-abd9-884c13aa0618.jpg?v=1790179952",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ea3e2d41-2c7b-4991-90d4-1f232edaf831.jpg?v=1790179952"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "35",
          "36",
          "37",
          "38"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Plata"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "35",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "35",
          "Plata"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "36",
          "Plata"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Plata"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Plata"
        ],
        "price": 175000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "niketecno-mujer",
      "nike-v5k-mujer",
      "nike-p6000-mujer",
      "nike-zoom-mujer"
    ]
  },
  "nike-zoom-pegasus-hombre": {
    "title": "Nike Zoom Pegasus 42- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\nEscríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5b251eb4-fbe7-4381-be2f-50cb23a45cdf.jpg?v=1790180879",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a358daf7-bb90-4b2d-9cfa-94350d77662b.jpg?v=1790180879",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_77632616-0ff4-4bec-82c0-8271dbbbec75.jpg?v=1790180879",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_25921528-7b38-44ca-9107-abd1364d716b.jpg?v=1790180879",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_dc8c9b77-10a7-44cf-b202-15d40acf5d8f.jpg?v=1790180879",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_17489f48-69aa-4423-8d2c-6bc9a5fd67c4.jpg?v=1790180879",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_301347c1-07d0-4370-a0a5-e4c7a22c692a.jpg?v=1791433251"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "39",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Negro",
          "Blanco-Negro",
          "Negro-Blanco",
          "Verde",
          "Blanco- Morado"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco-Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro-Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco-Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro-Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco-Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Negro-Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco-Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro-Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco-Negro"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro-Blanco"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "39",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Verde"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco- Morado"
        ],
        "price": 165000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nike-pegasus-trail-hombre",
      "nike-p6000-hombre",
      "nike-speed-x-hombre",
      "nike-vomero-18-hombre"
    ]
  },
  "adizero-hombre": {
    "title": "Adidas Adizero- Hombre",
    "description": "Tu próximo par empieza aquí.\n\nDescubre nuestras referencias de calzado deportivo y lifestyle, seleccionadas para acompañarte en movimiento.\n\n¿No sabes cuál elegir o tienes dudas sobre tu talla y disponibilidad?\n\n Escríbenos por WhatsApp y recibe asesoramiento personalizado.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsAppImage2026-08-23at12.11.37.jpg?v=1787505764",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsApp_Image_2026-08-23_at_12.11.37_2.jpg?v=1787506302",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsApp_Image_2026-08-23_at_12.11.37_1.jpg?v=1787506302",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3394315-beb8-4757-bfbe-336f37e77a68.jpg?v=1790041643",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_77dcc988-8073-4d6b-bddb-c062ead23b35.jpg?v=1790041643",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_535ad418-3363-4a73-893a-583bb72910a3.jpg?v=1790041643",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1e4813c7-25ba-455f-b45e-bffc05c42e12.jpg?v=1790608671"
    ],
    "options": [
      {
        "name": "Talla",
        "values": [
          "37",
          "38",
          "49",
          "40",
          "41/42"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Negro-Plata",
          "Blanco",
          "Azul-Naranja",
          "Negro-Blanco",
          "Azul-Blanco",
          "Gris"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "37",
          "Negro-Plata"
        ],
        "price": 185000,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsAppImage2026-08-23at12.11.37.jpg?v=1787505764"
      },
      {
        "options": [
          "38",
          "Negro-Plata"
        ],
        "price": 185000,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsAppImage2026-08-23at12.11.37.jpg?v=1787505764"
      },
      {
        "options": [
          "49",
          "Negro-Plata"
        ],
        "price": 185000,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsAppImage2026-08-23at12.11.37.jpg?v=1787505764"
      },
      {
        "options": [
          "40",
          "Negro-Plata"
        ],
        "price": 185000,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsAppImage2026-08-23at12.11.37.jpg?v=1787505764"
      },
      {
        "options": [
          "37",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Azul-Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Azul-Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Azul-Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Azul-Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro-Plata"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Azul-Naranja"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Azul-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Azul-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Azul-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Azul-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Negro-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Azul-Blanco"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "37",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "38",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "49",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "40",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "41/42",
          "Gris"
        ],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "adidas-adizero-dropset-hombre-copia",
      "adidas-adizero-mujer",
      "adidas-adistar-hombre",
      "adidas-terrex-hombre"
    ]
  },
  "powerbeats": {
    "title": "Powerbeats",
    "description": "Ajuste seguro para entrenar.\nSonido potente y claro.\nResistentes al sudor.\nGran autonomía.\nConexión Bluetooth.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/4E74F429-6DCD-4AF4-A8FE-CD78DDC86CB2.jpg?v=1791263385",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C2E9C38B-27C2-4EDD-8404-2B9057FEC3A2.jpg?v=1791263385",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/80D5ECDD-809D-4B0D-B450-FBBDFFC11484.jpg?v=1791263385"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Blanco",
          "Rojo"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro"
        ],
        "price": 55000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Blanco"
        ],
        "price": 55000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rojo"
        ],
        "price": 55000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "audifono-deportivo-bt15",
      "airpods-4gth",
      "galaxy-buds2-pro",
      "airpods-pro3"
    ]
  },
  "airpods-4gth": {
    "title": "Airpods 4gth",
    "description": "Diseño renovado, audio espacial, cancelación de ruido y hasta 6h de música sin parar.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8b546642-513c-475b-a7d1-580a5d5adf77.jpg?v=1791263010",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b916b2e9-4713-4076-96e8-857f170c80d0.jpg?v=1791263011"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 90000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "airpods-pro3",
      "diadema-air-pods-max",
      "powerbeats",
      "galaxy-buds-3"
    ]
  },
  "airpods-pro3": {
    "title": "Airpods Pro3",
    "description": "Audio espacial \n\nCancelación de ruido \n\nAsistente de Voz\n\nSonido adaptativo \n\nHasta 30h de batería",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d1699073-f78c-475a-97aa-8fc069481ab0.jpg?v=1791262847",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1d5e49d3-2cbd-46cc-b4ee-11335c6edfef.jpg?v=1791262847",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f20d781b-4fee-404d-b7db-498ed9f7dc45.jpg?v=1791262847"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 100000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "airpods-4gth",
      "diadema-air-pods-max",
      "galaxy-buds-3",
      "powerbeats"
    ]
  },
  "diadema-air-pods-max": {
    "title": "Diadema Air Pods Max",
    "description": "AirPods Max\n\nSonido inmersivo, cancelación de ruido y comodidad para concentrarte en cada entrenamiento. Sube el volumen y baja las distracciones.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c6ebc083-5b01-4268-83ac-252ff7859fea.jpg?v=1791262523",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_015186a6-451b-4687-8de6-9a9f2a016d7b.jpg?v=1791262523",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_24adc631-bf6e-497b-a50b-7ec24de3dd8e.jpg?v=1791262522"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 125000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "airpods-4gth",
      "airpods-pro3",
      "diadema-bose",
      "powerbeats"
    ]
  },
  "diadema-bose": {
    "title": "Diadema Bose",
    "description": "Sonido premium y potente.\n\nCancelación de ruido.\n\nCómoda para largas sesiones.\n\nBatería de larga duración.\n\nConexión Bluetooth.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_198274dc-d9b2-4906-9308-125eb0edb583.jpg?v=1791262402",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_1dcba0c0-e704-4246-b11b-d31b70984f67.jpg?v=1791262402"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 115000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "diadema-air-pods-max",
      "powerbeats",
      "audifono-deportivo-bt15",
      "galaxy-buds2-pro"
    ]
  },
  "audifono-deportivo-bt15": {
    "title": "Audífono Deportivo BT15",
    "description": "Ajuste seguro para entrenar.\n\n Resistentes al sudor.\n\n Sonido potente.\n\n Batería de larga duración.\n\nConexión Bluetooth.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9048aa29-7daf-4327-aa2d-2716cdf9ac0f.jpg?v=1791262158",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_db28e5a4-85b2-415b-b0e4-c06e3496e6e4.jpg?v=1791262158"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "powerbeats",
      "diadema-bose",
      "conjunto-deportivo-dri-fit-nike",
      "galaxy-buds2-pro"
    ]
  },
  "galaxy-buds-air12": {
    "title": "Galaxy Buds Air12",
    "description": "Diseño cómodo para cuidar tus oídos.\n\nSonido claro y envolvente.\n\nDiseño ligero para mayor comodidad.\n\nBatería de larga duración.\n\nConexión Bluetooth estable.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4ad02066-e523-4371-92de-7c91f9935d03.jpg?v=1791261964",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ba27a6c1-0281-4409-8ee7-875caa2d73ad.jpg?v=1791261964"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 95000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "galaxy-buds-3",
      "galaxy-buds2-pro",
      "powerbeats",
      "airpods-4gth"
    ]
  },
  "galaxy-buds-3": {
    "title": "Galaxy Buds 3",
    "description": "Sonido Hi-Fi.\n\nCancelación activa de ruido.\n\nFunciones con Galaxy AI.\n\nResistencia al agua IP57.\n\nHasta 24 h con estuche.\n\nBluetooth 5.4.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fd9106db-35ae-43ea-afad-71b6fca981e5.jpg?v=1791261828",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9b82f92e-50dc-4e79-b339-df9486a4ac8d.jpg?v=1791261828"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 90000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "galaxy-buds2-pro",
      "galaxy-buds-air12",
      "airpods-pro3",
      "powerbeats"
    ]
  },
  "galaxy-buds2-pro": {
    "title": "Galaxy Buds2 Pro",
    "description": "Galaxy Buds2 Pro\n\nSonido Hi-Fi de alta calidad.\n\nCancelación de ruido activa.\n\nResistentes al agua IPX7.\n\nHasta 18 horas con estuche. \n\nConexión Bluetooth 5.3.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e686caa8-ee32-46ed-954b-767bfa665488.jpg?v=1791261645",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_feaad50c-0eb8-4075-9200-3b6c4077eda8.jpg?v=1791261645",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7658d41f-2436-4880-a6d6-c685e89af9fd.jpg?v=1791261644"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 85000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "galaxy-buds-3",
      "galaxy-buds-air12",
      "powerbeats",
      "airpods-pro3"
    ]
  },
  "smart-watch-serie-11": {
    "title": "Smart Watch Serie 11",
    "description": "Smart Watch Serie 11 con IA: salud inteligente, entrenos precisos y asistencia al instante en tu muñeca.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e44f050c-0c44-498f-b8e1-91325841a78e.jpg?v=1791261508",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_428314a3-69ef-4b6b-a190-8a4b7f0fbefd.jpg?v=1791261508",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9a127cce-202f-408e-94b4-135a7f6f9d0a.jpg?v=1791261508"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "watch-ultra-serie-11",
      "xiaomi-smart-band-10",
      "xiaomi-band-10-pro",
      "audifono-deportivo-bt15"
    ]
  },
  "watch-ultra-serie-11": {
    "title": "WATCH ULTRA SERIE 11",
    "description": "Smart Watch Ultra con IA: salud inteligente, entrenos precisos y asistencia al instante en tu muñeca.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_032198b3-92d5-4f00-ac78-4a285f3fb3b4.jpg?v=1791261302",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a7c0e3d3-8193-417b-8751-581223c8237c.jpg?v=1791261302",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e6672df1-0843-4182-9a1a-059580aefc3b.jpg?v=1791261302"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 195000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "smart-watch-serie-11",
      "xiaomi-band-10-pro",
      "xiaomi-smart-band-10",
      "enterizo-nova"
    ]
  },
  "xiaomi-band-10-pro": {
    "title": "Xiaomi Band 10 Pro",
    "description": "Pantalla AMOLED, monitoreo de actividad, frecuencia cardíaca y sueño. Diseño ligero, resistente al agua y con batería de larga duración. Ideal para acompañarte en cada entrenamiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_284bcad5-c7a2-485e-9a1c-125a40421af3.jpg?v=1791261198",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_aa68ef75-cfb4-4693-9d2a-f5558b3ecac7.jpg?v=1791261198"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 195000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "xiaomi-smart-band-10",
      "smart-watch-serie-11",
      "watch-ultra-serie-11",
      "powerbeats"
    ]
  },
  "xiaomi-smart-band-10": {
    "title": "Xiaomi Smart Band 10",
    "description": "Pantalla AMOLED, monitoreo de actividad, frecuencia cardíaca y sueño. Diseño ligero, resistente al agua y con batería de larga duración. Ideal para acompañarte en cada entrenamiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4a2a8e19-872d-417b-b633-892ea364c182.jpg?v=1791260997",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0088d8e1-1acc-4ee5-a7da-1a5ded3da3e6.jpg?v=1791260997",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e37b76f2-190e-4e2b-b96b-6aac879cd4dd.jpg?v=1791260997"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 185000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "xiaomi-band-10-pro",
      "smart-watch-serie-11",
      "watch-ultra-serie-11",
      "powerbeats"
    ]
  },
  "nitro-tech-whey-gold-proteina-5lb": {
    "title": "Nitro Tech Whey Gold - Proteina 5lb",
    "description": "Maximiza tu rendimiento con un producto con 24 g de proteína pura, rápida absorción. Ultrapremium y microfiltrada, aislada de suero de leche.\n\nServicios aprox: 69",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/846C60A3-B6AE-4E23-9A26-DB9F33D28AAE.jpg?v=1791950155",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/443B88E8-F820-406E-B8E6-A1DE64CE1918.jpg?v=1791950155"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 370000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nitro-tech-proteina-4lb",
      "nitro-tech-proteina-2lb",
      "sin-titulo-13oct_21-50-49",
      "super-mega-proteina-5lb"
    ]
  },
  "nitro-tech-proteina-4lb": {
    "title": "Nitro Tech- Proteina 4lb",
    "description": "Nitrotech Whey Protein Muscleteches un producto en polvo elaborado con una mezcla de proteína de suero.\n\nEstá disponible en presentaciones de 2 lb y 4 lb, con sabores que varían según el inventario.\nCaracterísticas\n\n30 gr de proteína de suero\nProducto en polvo\nPresentaciones disponibles de 2 lb y 4 lb\n3 gr de creatina por servicio\n\nSabores disponibles\n\n2 lb: galletas y crema, vainilla y chocolate\n\n4 lb: galletas y crema y vainilla\n\nLa disponibilidad puede cambiar según el inventario.\nModo de uso\nMezcla la porción indicada en la etiqueta con agua o con la bebida de tu preferencia. Revuelve, agita o licúa hasta obtener una mezcla uniforme.\n\nConsulta la etiqueta antes de usar para verificar el tamaño de la porción, la composición y la cantidad de líquido recomendada.\n\nEste producto es un suplemento dietario, no es un medicamento y no suple una alimentación equilibrada",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B6000D8A-4B38-4F81-9FA6-FC71DDED8322.jpg?v=1791949783",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/58A143DF-BFB3-4FB8-9959-1C073B310F8C.jpg?v=1791949783"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 325000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nitro-tech-proteina-2lb",
      "nitro-tech-whey-gold-proteina-5lb",
      "super-mega-proteina-5lb",
      "super-mega-proteina-1lb"
    ]
  },
  "nitro-tech-proteina-2lb": {
    "title": "Nitro Tech - Proteina 2lb",
    "description": "Nitrotech Whey Protein Muscleteches un producto en polvo elaborado con una mezcla de proteína de suero.\n\nEstá disponible en presentaciones de 2 lb y 4 lb, con sabores que varían según el inventario.\nCaracterísticas\n\n30 gr de proteína de suero\nProducto en polvo\nPresentaciones disponibles de 2 lb y 4 lb\n3 gr de creatina por servicio\n\nSabores disponibles\n\n2 lb: galletas y crema, vainilla y chocolate\n\n4 lb: galletas y crema y vainilla\n\nLa disponibilidad puede cambiar según el inventario.\nModo de uso\nMezcla la porción indicada en la etiqueta con agua o con la bebida de tu preferencia. Revuelve, agita o licúa hasta obtener una mezcla uniforme.\n\nConsulta la etiqueta antes de usar para verificar el tamaño de la porción, la composición y la cantidad de líquido recomendada.\n\nEste producto es un suplemento dietario, no es un medicamento y no suple una alimentación equilibrada",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/99E1DE07-00AF-45A2-A06A-D12CAB2B91A9.jpg?v=1791949485",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C95060D6-05F6-481D-85C4-9DF438C8B6CB.jpg?v=1791949485"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 215000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "nitro-tech-proteina-4lb",
      "nitro-tech-whey-gold-proteina-5lb",
      "super-mega-proteina-2lb",
      "super-mega-proteina-5lb"
    ]
  },
  "super-mega-proteina-5lb": {
    "title": "Súper Mega- Proteina 5lb",
    "description": "Alimento en polvo a base de maltodextrina, proteína concentrada de suero de leche para preparar bebida con L-glutamina y aminoácidos (L – Leucina, L – Isoleucina, L-Valina) con sabor artificial a vainilla gourmet\n\nCada porción preparada de SUPER MEGA te aporta:\n. 53 g.\n. 983 calorías.\n. 180 g carbohidratos.\n\nTamaño por porción: 260 g.\n\nNúmero de porciones por envase: Aprox. 9.\n\nContiene: Leche (lactosa), soja, huevo y cereales con gluten. Puede contener trazas de trigo, apio, mostaza, sulfitos, nueces de árbol y productos derivados, así como pescados y productos elaborados con ellos.\n\nPreparación: Cada porción de SUPER MEGA equivale a 7,5 cucharadas medidoras (260 g), que deben reconstruirse en 720 ml de agua.\nPaga en cuotas desde el 0% de interés con Addi.\nDespachos a todo el País",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B4708A65-15B9-4877-9C67-AB68C563DB23.jpg?v=1791949048",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/8A2C5CFB-FEC3-4B59-AA48-446BD68C23E8.jpg?v=1791949048",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/3FC481C6-F676-4A21-AC53-EF7F53333623.jpg?v=1791949048",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1807EB9E-331D-4C2D-BBAC-092AD72BFC6B.jpg?v=1791949048"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 150000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "super-mega-proteina-1lb",
      "super-mega-proteina-2lb",
      "mega-gainer-proteina-1lb",
      "mega-gainer-proteina-5lb"
    ]
  },
  "super-mega-proteina-2lb": {
    "title": "Súper Mega- Proteina 2lb",
    "description": "Alimento en polvo a base de maltodextrina, proteína concentrada de suero de leche para preparar bebida con L-glutamina y aminoácidos (L – Leucina, L – Isoleucina, L-Valina) con sabor artificial a vainilla gourmet\n\nCada porción preparada de SUPER MEGA te aporta:\n. 53 g.\n. 983 calorías.\n. 180 g carbohidratos.\n\nTamaño por porción: 260 g.\n\nNúmero de porciones por envase: Aprox. 3,5.\n\nContiene: Leche (lactosa), soja, huevo y cereales con gluten. Puede contener trazas de trigo, apio, mostaza, sulfitos, nueces de árbol y productos derivados, así como pescados y productos elaborados con ellos.\n\nPreparación: Cada porción de SUPER MEGA equivale a 7,5 cucharadas medidoras (260 g), que deben reconstruirse en 720 ml de agua. \n\nPaga en cuotas desde el 0% de interés con Addi.\nDespachos a todo el País",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/BCECCB5E-4BE3-4CA2-AC0D-021678D7F090.jpg?v=1791948772",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C2EE9FFC-A9AD-494E-8CE4-4A531DEA3D74.jpg?v=1791948772"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 70000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "super-mega-proteina-1lb",
      "super-mega-proteina-5lb",
      "mega-gainer-proteina-2lb",
      "mega-gainer-proteina-1lb"
    ]
  },
  "super-mega-proteina-1lb": {
    "title": "Súper Mega - Proteina 1lb",
    "description": "Alimento en polvo a base de maltodextrina, proteína concentrada de suero de leche para preparar bebida con L-glutamina y aminoácidos (L – Leucina, L – Isoleucina, L-Valina) con sabor artificial a vainilla gourmet\n\nCada porción preparada de SUPER MEGA te aporta:\n. 53 g.\n. 983 calorías.\n. 180 g carbohidratos.\n\nTamaño por porción: 260 g.\n\nNúmero de porciones por envase: Aprox. 1,5.\n\nContiene: Leche (lactosa), soja, huevo y cereales con gluten. Puede contener trazas de trigo, apio, mostaza, sulfitos, nueces de árbol y productos derivados, así como pescados y productos elaborados con ellos.\n\nPreparación: Cada porción de SUPER MEGA equivale a 7,5 cucharadas medidoras (260 g), que deben reconstruirse en 720 ml de agua.\n\nPaga en cuotas desde el 0% de interés con Addi.\nDespachos a todo el País",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1A3346D4-F503-470A-A1C7-79A9E90315AC.jpg?v=1791948485",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/CB44AD7F-FEC0-45A3-A89C-61096A77866E.jpg?v=1791948485"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 45000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "super-mega-proteina-2lb",
      "super-mega-proteina-5lb",
      "mega-gainer-proteina-1lb",
      "mega-gainer-proteina-2lb"
    ]
  },
  "mega-gainer-proteina-5lb": {
    "title": "Mega Gainer- Proteína 5lb",
    "description": "Es una mezcla en polvo a base de proteína aislada de suero de leche, sin colorantes adicionados, sin azúcar añadido y sin conservantes con avena molida, amilopectina, palatinosa, harina de arroz, harina de quinua y MCT (Triglicéridos de cadena media), con un alto contenido de calorías proveniente de la mezcla de carbohidratos, grasas y proteína.\n\n \n\n53 g PROTEÍNA Por porción preparada\n700 CALORÍAS Por porción preparada\n95 g CARBOHIDRATOS Por porción preparada\nSIN AZÚCAR AÑADIDO\nSIN COLORANTES ADICIONADOS\n\nCada porción de MEGA GAINER equivale a 6 cucharadas medidoras (180 g), que se recomienda diluir en 5 vasos con agua (1200 ml). Se sugiere dividir la porción en 2 tomas, diluyendo 3 cucharadas medidoras (90 g) del producto en 2,5 vasos con agua (600 ml) y consumir una vez preparado.\n\nRegistro sanitario: RSA-002405-2016\n\nIngredientes: Proteína aislada de suero, avena molida, almidón de maíz ceroso (amilopectina), albúmina pasteurizada en polvo, palatinosa, harina de arroz instantánea, harina de quinua instantánea, E412 goma guar (espesante natural), sabor artificial a vainilla gourmet (almidón, hidógeno, E551), triglicéridos de cadena media (MCT), fosfato tricálcico (antiaglutinante), premezcla de vitaminas (vitamina A, vitamina B12 (cobalamina), vitamina B1 (tiamina), vitamina B2 (riboflavina), vitamina B6 (piridoxina), vitamina C (ácido ascórbico), vitamina B3 (niacina), vitamina B5 (ácido pantoténico), vitamina B9 (ácido fólico), vitamina H (biotina), vitamina D, vitamina K1, vitamina E), zinc, magnesio, yodo, potasio, selenio, fósforo, cloro, cromo, manganeso, cobre, molibdeno, hierro, calcio, sodio, colina), enzimas digestivas (lactasa).",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C85A1405-BD8D-4819-831E-205E54F3EB78.webp?v=1791948212",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/EB068603-8564-4CEF-A50E-C5FD714CF4B7.webp?v=1791948212",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/519C0345-ED4E-4D6D-A337-DD1484EB4286.webp?v=1791948212",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/5D93A2C3-24D5-4274-A2B8-E4389D186173.webp?v=1791948212"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 170000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "mega-gainer-proteina-1lb",
      "mega-gainer-proteina-2lb",
      "super-mega-proteina-5lb",
      "super-mega-proteina-1lb"
    ]
  },
  "mega-gainer-proteina-2lb": {
    "title": "Mega Gainer - Proteina 2lb",
    "description": "Mega Gainer es una mezcla hipercalórica en polvo de la marca GMN, elaborada con proteína aislada de suero de leche y una combinación de avena molida, amilopectina, palatinosa, harina de arroz, harina de quinua y triglicéridos de cadena media (MCT).",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/93BC84FA-CF96-4D77-AD4B-282807BEF4F5.jpg?v=1791947731",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/6A41B93A-9C70-4BC2-96B7-6B0FD92F554F.jpg?v=1791947731"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "mega-gainer-proteina-1lb",
      "mega-gainer-proteina-5lb",
      "super-mega-proteina-2lb",
      "super-mega-proteina-1lb"
    ]
  },
  "mega-gainer-proteina-1lb": {
    "title": "Mega Gainer- Proteina 1lb",
    "description": "Mega Gainer es una mezcla hipercalórica en polvo de la marca GMN, elaborada con proteína aislada de suero de leche y una combinación de avena molida, amilopectina, palatinosa, harina de arroz, harina de quinua y triglicéridos de cadena media (MCT).\nInformación por porción preparada\n\n53 g de proteína\n700 calorías\n95 g de carbohidratos\nSin azúcar añadida\nSin colorantes añadidos\n\nPresentación disponible\n\n1 lb: Vainilla\n\nModo de preparación\nLa porción indicada equivale a 6 cucharadas medidoras (180 g), diluidas en 1.200 ml de agua. También puede dividirse en dos tomas, preparando cada una con 3 cucharadas medidoras (90 g) en 600 ml de agua. Consulta la etiqueta antes de consumir para confirmar la porción y las instrucciones.\n\nEste producto es un suplemento dietario, no es un medicamento y no suple una alimentación equilibrada",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/96CC64CC-911B-4372-86D4-CE925762FA51.jpg?v=1791947731",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/6A41B93A-9C70-4BC2-96B7-6B0FD92F554F.jpg?v=1791947731"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 48000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "mega-gainer-proteina-2lb",
      "mega-gainer-proteina-5lb",
      "super-mega-proteina-1lb",
      "super-mega-proteina-2lb"
    ]
  },
  "whey-phorm-proteina-2lb": {
    "title": "Whey Phorm- Proteina 2lb",
    "description": "Whey Phorm 2LB Dragon Pharma es una proteína de suero que combina concentrado y aislado de suero de leche. Con 25g de proteína y 150 calorías por porción, disponible en Brownie Doble de Chocolate y Helado de Chocolate y Vainilla.\n\n25g de proteína · 150 calorías por porción\nConcentrado + aislado de suero · Alta solubilidad\nSabores: Brownie Doble de Chocolate · Helado de Chocolate y Vainilla\n\nAlimento en polvo (INVIMA RSA-0029030-2023). No es un medicamento.\n\nEste producto es un alimento en polvo (INVIMA RSA-0029030-2023). No es un medicamento y no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulta con un profesional de la salud antes de consumirlo.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/966315B5-EED4-4773-AC8E-5FCC05BB0E17.webp?v=1791947266",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83C0B6D9-E137-4907-AC03-12A11B25C77E.jpg?v=1791947295",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/IMG-4866.webp?v=1791947479"
    ],
    "options": [
      {
        "name": "Sabor",
        "values": [
          "Chocolate",
          "Vainilla"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Chocolate"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Vainilla"
        ],
        "price": 210000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "super-mega-proteina-2lb",
      "sin-titulo-13oct_21-50-49",
      "super-mega-proteina-1lb",
      "nitro-tech-proteina-2lb"
    ]
  },
  "sin-titulo-13oct_21-50-49": {
    "title": "Elite 100% Whey - Proteina 5lb",
    "description": "GOURMET VANILLA\nTu compañero de entrenamiento. Tu observador. Está ahí para apoyarte, para que puedas ser mejor que tu mejor. Cargado con el sabor que anhelas, su proteína en polvo de rápida absorción ofrece los resultados que necesitas, cuando los necesitas. Mézclalo en tu batido favorito antes de un gran entrenamiento. Hornéalo en tu merienda para un impulso de proteínas entre comidas durante el día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B20EE79C-DBAC-4425-8406-9AE9FC03178C.jpg?v=1791946390",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/9F77162E-BE73-42A7-8A1C-8A846214461F.jpg?v=1791946303"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 390000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sin-titulo-13oct_21-39-17",
      "super-mega-proteina-5lb",
      "nitro-tech-whey-gold-proteina-5lb",
      "super-mega-proteina-1lb"
    ]
  },
  "sin-titulo-13oct_21-39-17": {
    "title": "ISO 100 Cookies And Cream - Proteína 1.3lb",
    "description": "COOKIES & CREAM\n\nVe más duro y apoya la recuperación muscular después de un entrenamiento extenuante con el poder de absorción y digestión rápida de ISO100. Una de las proteínas en polvo de la más alta calidad del juego, se filtra para eliminar el exceso de lactosa, carbohidratos, grasa y azúcar para una máxima capacidad de mezcla y ganancias.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/2C620D54-8CB9-461A-8699-2B17328069AC.jpg?v=1791945701",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/92078ED7-49C6-41E9-83E7-21383CF1262B.jpg?v=1791945701"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 230000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sin-titulo-13oct_21-50-49",
      "super-mega-proteina-2lb",
      "super-mega-proteina-1lb",
      "super-mega-proteina-5lb"
    ]
  },
  "calleras-crossfit": {
    "title": "Calleras Crossfit",
    "description": "Protege tus manos y mejora tu agarre durante tus entrenamientos. Ideales para dominadas, barras y ejercicios de fuerza, brindando mayor comodidad y seguridad en cada movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_07bce101-4451-44e5-bfce-800a9570bdb9.jpg?v=1791436139"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 75000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "straps",
      "munequera-cobra",
      "rodilleras-de-poder",
      "rodillera-rotular"
    ]
  },
  "rodillera-rotular": {
    "title": "Rodillera Rotular",
    "description": "Rodillera rotuliana\n\nSoporte y compresión para la zona de la rótula, ideal para entrenamientos y actividades deportivas. Brinda estabilidad y comodidad en cada movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0c3ffa9d-6180-49bf-ad19-ccdaa47a0afc.jpg?v=1791437099"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 48000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "rodilleras-de-poder",
      "straps",
      "calleras-crossfit",
      "munequera-cobra"
    ]
  },
  "rodilleras-de-poder": {
    "title": "Rodilleras de Poder",
    "description": "Mayor soporte y estabilidad para tus rodillas durante entrenamientos de fuerza y levantamientos pesados.\n\nDiseñadas para brindar compresión y seguridad en cada movimiento.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4a642da1-9ef1-4de4-be79-2e2ad30f10d9.jpg?v=1791436834"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 130000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "rodillera-rotular",
      "munequera-cobra",
      "straps",
      "conjunto-deportivo-dri-fit-nike"
    ]
  },
  "munequera-cobra": {
    "title": "Muñequera Cobra",
    "description": "Muñequera Cobra \n\nBrinda soporte y estabilidad durante tus entrenamientos, ayudando a proteger las muñecas y mejorar el agarre al levantar peso. Ideal para gym, fuerza y levantamientos pesados.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_475b9f26-11f9-484c-b806-86b402dca5a8.jpg?v=1791435915",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e461d328-48df-41d7-a0bd-730b91919bed.jpg?v=1791435915",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8a534f11-e321-4460-af7b-fec9a463400f.jpg?v=1791435915"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 65000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "straps",
      "calleras-crossfit",
      "rodilleras-de-poder",
      "rodillera-rotular"
    ]
  },
  "straps": {
    "title": "Straps",
    "description": "Straps de agarre para pesas \n\nMejora tu agarre y entrena con mayor seguridad y estabilidad. Ideales para levantamientos pesados, espalda, peso muerto y otros ejercicios de fuerza. Perfectos para llevar tus entrenamientos al siguiente nivel.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_72f31d64-d85c-49bf-9a69-e31e6f9074f8.jpg?v=1791435798",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_21feaeb9-dc6d-4f1a-ba34-c50a9f9949ed.jpg?v=1791435797"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 50000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "calleras-crossfit",
      "munequera-cobra",
      "rodilleras-de-poder",
      "rodillera-rotular"
    ]
  },
  "termo-owala-32oz": {
    "title": "Termo Owala 32oz",
    "description": "Diseño práctico, cierre antifugas y mantiene tus bebidas frías o calientes por horas. Perfecto para el gym, la universidad, oficina y el día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c4f05658-efc0-453f-97b0-867e49d1f84f.jpg?v=1791435307"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Rosa",
          "Fuscia",
          "Morado",
          "Azul",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "sin-titulo-7oct_23-48-10",
      "termo-stanley-vaso",
      "termo-stanley-20oz",
      "termo-stanley-40oz"
    ]
  },
  "sin-titulo-7oct_23-48-10": {
    "title": "Termo Owala 32oz Con Agarre",
    "description": "Diseño práctico, cierre antifugas y mantiene tus bebidas frías o calientes por horas. Perfecto para el gym, la universidad y el día a día.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_29e3d48b-e83e-4e12-8fbb-ba3f19e825ea.jpg?v=1791434916"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Blanco",
          "Rosa",
          "Morado",
          "Gris oscuro",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Blanco"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Morado"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris oscuro"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro"
        ],
        "price": 130000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "termo-owala-32oz",
      "termo-stanley-vaso",
      "termo-stanley-20oz",
      "termo-stanley-40oz"
    ]
  },
  "termo-stanley-vaso": {
    "title": "Termo Stanley Vaso",
    "description": "Mantiene tus bebidas frías o calientes por horas, diseño resistente y listo para acompañarte a cualquier aventura.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b76f38d2-b548-4933-8423-f2c6db5f28d6.jpg?v=1791434733"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Negro",
          "Gris",
          "Verde",
          "Azul"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Negro"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Gris"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Verde"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul"
        ],
        "price": 110000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "termo-stanley-20oz",
      "termo-stanley-40oz",
      "termo-owala-32oz",
      "sin-titulo-7oct_23-48-10"
    ]
  },
  "termo-stanley-20oz": {
    "title": "Termo Stanley 20oz",
    "description": "Termo Stanley con Agarre mantiene tus bebidas frías o calientes por horas, diseño resistente y listo para acompañarte a cualquier aventura.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_df1c34f8-d25b-4fd8-bb79-aac0ddc5bb09.jpg?v=1791434505"
    ],
    "options": [],
    "variants": [
      {
        "options": [],
        "price": 125000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "termo-stanley-40oz",
      "termo-stanley-vaso",
      "termo-owala-32oz",
      "sin-titulo-7oct_23-48-10"
    ]
  },
  "termo-stanley-40oz": {
    "title": "Termo Stanley 40oz",
    "description": "Mantiene tus bebidas frías o calientes por horas, diseño resistente y listo para acompañarte a cualquier aventura.",
    "images": [
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f96971a4-b8ba-4231-b91d-37f093273103.jpg?v=1791434236",
      "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_57aa7168-6d5c-48e2-8748-500072bcb3a7.jpg?v=1791434253"
    ],
    "options": [
      {
        "name": "Color",
        "values": [
          "Beige",
          "Rosa",
          "Fuscia",
          "Azul",
          "Negro"
        ]
      }
    ],
    "variants": [
      {
        "options": [
          "Beige"
        ],
        "price": 120000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Rosa"
        ],
        "price": 120000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Fuscia"
        ],
        "price": 120000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Azul"
        ],
        "price": 120000,
        "available": true,
        "image": ""
      },
      {
        "options": [
          "Negro"
        ],
        "price": 120000,
        "available": true,
        "image": ""
      }
    ],
    "related": [
      "termo-stanley-20oz",
      "termo-stanley-vaso",
      "sin-titulo-7oct_23-48-10",
      "termo-owala-32oz"
    ]
  }
}

export function getProductDetail(handle: string) {
  return productDetails[handle];
}
