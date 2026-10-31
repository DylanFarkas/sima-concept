export type Product = {
  title: string;
  handle: string;
  price: number;
  available: boolean;
  variantCount: number;
  image: string;
};

export type CategorySlug =
  | "hombre"
  | "mujer"
  | "zapatillas"
  | "tech"
  | "suplementos"
  | "accesorios";

export type Category = {
  label: string;
  products: Product[];
};

export const categories: Record<CategorySlug, Category> = {
  "hombre": {
    "label": "HOMBRE",
    "products": [
      {
        "title": "Sudadera Antifluido Cargo",
        "handle": "sudadera-antifluido-cargo",
        "price": 110000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B7877B90-FDD4-4FEE-BFA7-85D1D881867B.jpg?v=1793212499"
      },
      {
        "title": "Conjunto Corto Algodón Nike",
        "handle": "conjunto-corto-algodon-nike",
        "price": 150000,
        "available": true,
        "variantCount": 9,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/9E29CE77-D510-4951-9BF4-1B8EB5221431.jpg?v=1792544222"
      },
      {
        "title": "Conjunto Deportivo Dri-Fit Nike",
        "handle": "conjunto-deportivo-dri-fit-nike-1",
        "price": 105000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_266ca2e9-6652-48e6-8116-e3f7baaafe70.jpg?v=1792693978"
      },
      {
        "title": "Conjunto Deportivo Dri-Fit Adidas",
        "handle": "conjunto-deportivo-dri-fit-adidas-1",
        "price": 105000,
        "available": true,
        "variantCount": 16,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c49e4a4d-6f70-4e6a-9576-d2270c7d90cc.jpg?v=1792693733"
      },
      {
        "title": "Conjunto Deportivo Dri-Fit Adidas",
        "handle": "conjunto-deportivo-dri-fit-adidas",
        "price": 105000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_78c9376f-f095-4e20-8d97-1184a45d66d2.jpg?v=1792693394"
      },
      {
        "title": "Conjunto Deportivo Dri-Fit Nike",
        "handle": "conjunto-deportivo-dri-fit-nike",
        "price": 105000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8a796765-1c85-4026-8c3a-9a37b1b385e2.jpg?v=1792692471"
      },
      {
        "title": "Conjunto Deportivo Dri-Fit Puma",
        "handle": "conjunto-deportivo-dri-fit-puma",
        "price": 105000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b31ed7a1-bcb9-47c6-83f3-b8eff4e483d5.jpg?v=1792693135"
      },
      {
        "title": "Conjunto Corto Algodón Adidas",
        "handle": "conjunto-corto-algodon-adidas",
        "price": 150000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E78688DE-5A7E-496B-8ACA-2A9300CEC77F.jpg?v=1792544491"
      },
      {
        "title": "Camiseta Dri-Fit Ref Serena Wiliams",
        "handle": "camiseta-dri-fit-ref-serena-wiliams",
        "price": 75000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_61492075-4e82-48e8-9e56-9f1badcdef41.jpg?v=1792543671"
      },
      {
        "title": "Camiseta Dri-Fit Puma",
        "handle": "camiseta-dri-fit-puma",
        "price": 75000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_917603b9-1e73-4a4e-9772-c1a3bbd4f1bf.jpg?v=1792543568"
      },
      {
        "title": "Camiseta Dri-Fit Adidas",
        "handle": "camiseta-dri-fit-adidas",
        "price": 75000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_384f904e-6118-4fac-bf1c-c4001e826610.jpg?v=1792543433"
      },
      {
        "title": "Camiseta Dri-Fit Nike",
        "handle": "camiseta-dri-fit-nike",
        "price": 75000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_02869020-35ac-4f59-ac64-6c17f06818a9.jpg?v=1792543313"
      },
      {
        "title": "Camiseta Dri-Fit On Cloud",
        "handle": "camiseta-dri-fit-on-cloud",
        "price": 75000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2dbba6a9-9c6c-4964-86ff-2d71947b5da5.jpg?v=1792543016"
      },
      {
        "title": "Pantaloneta Under Armour Dri-Fit",
        "handle": "pantaloneta-under-armour-dri-fit",
        "price": 88000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d330b8b5-bc4e-49b0-b4b3-21aeadaff75f.jpg?v=1792541533"
      },
      {
        "title": "Pantaloneta Nike Dri-Fit",
        "handle": "pantaloneta-nike-dri-fit",
        "price": 88000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_471c98d7-93ce-40b0-bbf7-43a4377d2ca5.jpg?v=1792541207"
      },
      {
        "title": "Conjunto Nike Tech",
        "handle": "conjunto-nike-tech",
        "price": 210000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9933b532-bc75-470c-b965-8322aedc2ccc.jpg?v=1792536335"
      },
      {
        "title": "Camiseta Puma Dri-Fit",
        "handle": "camiseta-puma-dri-fit",
        "price": 65000,
        "available": true,
        "variantCount": 3,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0e8bb9c1-d3d3-4e41-9905-836ddf9863a5.jpg?v=1791926098"
      },
      {
        "title": "Camiseta Underarmour Dri-Fit",
        "handle": "camiseta-underarmour-dri-fit",
        "price": 65000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6b9d1a72-80be-44ab-90f5-dea940bd83f0.jpg?v=1791925054"
      },
      {
        "title": "Camiseta Nike Dri-Fit",
        "handle": "camiseta-nike-dri-fit",
        "price": 65000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ee5fa69f-fc37-4a72-8ea2-84fefab0c0fa.jpg?v=1791925808"
      },
      {
        "title": "Camisa Sisa Puma",
        "handle": "camisa-sisa-puma",
        "price": 92000,
        "available": true,
        "variantCount": 9,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_71fd8204-8607-4beb-a8a2-de32b9bdbb75.jpg?v=1791924223"
      },
      {
        "title": "Camiseta Sisa Nike",
        "handle": "camiseta-sisa-nike",
        "price": 92000,
        "available": true,
        "variantCount": 3,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_defeb48e-5eae-42c0-92ea-9fa6f2b6408b.jpg?v=1791923633"
      },
      {
        "title": "Pantaloneta Jordan Diamond",
        "handle": "pantaloneta-jordan-diamond",
        "price": 90000,
        "available": true,
        "variantCount": 35,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2388b37f-caac-4190-8a33-074c03b5526c.jpg?v=1791923075"
      },
      {
        "title": "Camisilla Adidas Telafria",
        "handle": "camisilla-adidas-telafria",
        "price": 82000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/613F7C29-A375-4639-B5DA-71BBBB4DF2E7.jpg?v=1791430424"
      },
      {
        "title": "Camisilla Nike Telafria",
        "handle": "camisilla-nike-telafria",
        "price": 82000,
        "available": true,
        "variantCount": 21,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/2EEEC6E7-8F1F-424C-A75A-1122EF784551.jpg?v=1791430301"
      },
      {
        "title": "Camisilla UnderArmour Telafria",
        "handle": "camisilla-underarmour-telafria",
        "price": 82000,
        "available": true,
        "variantCount": 18,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/D10C0B8B-E1FD-4C32-AB21-AF4A6B81975E.jpg?v=1791430018"
      },
      {
        "title": "Basics Pants",
        "handle": "basics-pants",
        "price": 95000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C82D3246-D1B8-4F93-9850-0096D6D78C60.jpg?v=1791245856"
      },
      {
        "title": "Basics Algodón",
        "handle": "basics-algodon",
        "price": 85000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C6FB231A-1B20-49CC-AA38-2871E959190F.jpg?v=1791245587"
      },
      {
        "title": "Camisilla Básica",
        "handle": "camisilla-basica",
        "price": 55000,
        "available": true,
        "variantCount": 3,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/97F4FDC7-0443-4074-BCC4-ACF0947A7961.jpg?v=1791245336"
      },
      {
        "title": "Conjunto Tela Fría Nike",
        "handle": "conjunto-tela-fria-nike",
        "price": 95000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/34903E56-1C19-4DA9-AF2D-56EDD0B3DDCB.jpg?v=1791244682"
      },
      {
        "title": "Conjunto Tela Fría UnderArmour",
        "handle": "conjunto-tela-fria-underarmour",
        "price": 95000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FBF396B2-5D72-4C7E-B722-B267695778CE.jpg?v=1791244514"
      },
      {
        "title": "Conjunto UnderArmour",
        "handle": "conjunto-underarmour",
        "price": 110000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_9cabf2eb-66e7-42df-9efb-ec2d2855fea2.jpg?v=1791243549"
      },
      {
        "title": "Conjunto Adidas",
        "handle": "conjunto-adidas",
        "price": 110000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_29e8f0b7-a0dc-44fd-85f9-af0c7fc1e87b.jpg?v=1791243708"
      },
      {
        "title": "Conjunto Nike",
        "handle": "conjunto-nike",
        "price": 110000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/0BC5FF66-5EA9-419C-916E-44C6306927E8.jpg?v=1791243287"
      },
      {
        "title": "Compresión Manga Larga",
        "handle": "compresion-manga-larga",
        "price": 105000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/92035F43-A5D0-4B42-9DEE-DBE8BD093504.jpg?v=1791242687"
      },
      {
        "title": "Sudadera Antifluido Puma",
        "handle": "sudadera-antifluido-puma",
        "price": 100000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/302452AD-FC7A-4A60-A43B-18710F9E67B1.jpg?v=1791241881"
      },
      {
        "title": "Sudadera Antifluido Nike",
        "handle": "sudadera-antifluido-nike-3",
        "price": 100000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/93E881D4-CD0C-4459-9580-D45F853459EF.jpg?v=1791241836"
      },
      {
        "title": "Sudadera Antifluido Jordan",
        "handle": "sudadera-antifluido-jordan",
        "price": 100000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/ED5F7FBD-681C-474C-9EDF-4B543F10E796.jpg?v=1791241788"
      },
      {
        "title": "Sudadera Antifluido Adidas",
        "handle": "sudadera-antifluido-adidas",
        "price": 100000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/4681B716-DBF1-4939-9004-DC50B3CD96CF.jpg?v=1791241731"
      },
      {
        "title": "Sudadera Antifluido Nike",
        "handle": "sudadera-antifluido-nike-copy",
        "price": 100000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/5A0C0B04-CC57-4A7A-8C5E-51D116C70FEF.jpg?v=1791241530"
      },
      {
        "title": "Sudadera Antifluido Nike",
        "handle": "sudadera-antifluido-nike-2",
        "price": 100000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/40F83CE4-F941-4A6D-84BC-2482593EA919.jpg?v=1791241431"
      },
      {
        "title": "Sudadera Antifluido Nike",
        "handle": "sudadera-antifluido-nike-1",
        "price": 100000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/9EACC0E8-6156-4CD6-80FD-2B1471B35F3D.jpg?v=1791241350"
      },
      {
        "title": "Sudadera Antifluido Nike",
        "handle": "sudadera-antifluido-nike",
        "price": 100000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/AC5436DD-0836-4E28-8757-025691BEC796.jpg?v=1791241192"
      },
      {
        "title": "Camisilla Puma Running",
        "handle": "camisilla-puma-running",
        "price": 82000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/A0423595-B3DD-4BD7-9AF1-31270BFF1294.jpg?v=1791240745"
      },
      {
        "title": "Camisilla UnderArmour Running",
        "handle": "camisilla-underarmour-running",
        "price": 82000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/7E83E021-8673-4732-A0D5-B6AE632A0174.jpg?v=1791240682"
      },
      {
        "title": "Camisilla Nike Running",
        "handle": "camisilla-nike-running",
        "price": 82000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/14C4C868-0D0E-41AE-9495-A75290C49805.jpg?v=1791240599"
      },
      {
        "title": "Camisilla Adidas Running",
        "handle": "camisilla-adidas",
        "price": 82000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/IMG-2436.jpg?v=1791240251"
      },
      {
        "title": "Pantaloneta Reebok Running",
        "handle": "pantaloneta-reebok-running",
        "price": 88000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_1aed75a5-b601-4f87-8a18-b85dd830a643.jpg?v=1791240103"
      },
      {
        "title": "Pantaloneta Adidas Running",
        "handle": "pantaloneta-adidas-running",
        "price": 88000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_fddf5bd1-ea1f-47d9-89e9-275d3cbd3093.jpg?v=1791239981"
      },
      {
        "title": "Pantaloneta Nike Running",
        "handle": "pantaloneta-nike-running",
        "price": 88000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/519385AA-66FD-4C02-B57C-87B40AC324D5.jpg?v=1791239723"
      },
      {
        "title": "Pantaloneta Algodón Jordan",
        "handle": "pantaloneta-algodon-jordan",
        "price": 95000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/94768CE5-C812-42A3-B466-3C25AA9EFD38.jpg?v=1791239207"
      },
      {
        "title": "Pantaloneta Algodón Puma",
        "handle": "pantaloneta-algodon-puma",
        "price": 95000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/E2EE3DA3-0A2C-44DF-BC41-D0CE31B4F86C.jpg?v=1791239102"
      },
      {
        "title": "Pantaloneta Algodón Nike",
        "handle": "pantaloneta-algodon-nike",
        "price": 95000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/DA990574-8DD0-420D-A8FC-B57D02D15DDA.jpg?v=1791238809"
      }
    ]
  },
  "mujer": {
    "label": "MUJER",
    "products": [
      {
        "title": "Pantaloneta Running Nike Plizada",
        "handle": "pantaloneta-running-nike-plizada",
        "price": 110000,
        "available": true,
        "variantCount": 33,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83457.jpg?v=1793219353"
      },
      {
        "title": "Pantaloneta Running Puma",
        "handle": "pantaloneta-running-puma",
        "price": 80000,
        "available": true,
        "variantCount": 18,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a67d4c3e-6da5-4810-8c07-1f503a603496.jpg?v=1791492590"
      },
      {
        "title": "Pantaloneta Running Nike",
        "handle": "pantaloneta-running-nike",
        "price": 80000,
        "available": true,
        "variantCount": 18,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e572c33a-5b26-43c4-96e1-b38b2a75d2fe.jpg?v=1791492444"
      },
      {
        "title": "Pantaloneta Running Adidas",
        "handle": "sin-titulo-8oct_15-37-30",
        "price": 80000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_72177cca-9b4c-4847-be06-cb48999c6d40.jpg?v=1791491956"
      },
      {
        "title": "Chaqueta Dri-Fit",
        "handle": "chaqueta-drifit",
        "price": 95000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/08A80CA0-0DC8-403C-B14B-5274B2F78794.jpg?v=1791226299"
      },
      {
        "title": "Sudadera Fit",
        "handle": "sudadera-fit",
        "price": 85000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/3D0CB5DE-34DE-407B-A01E-0CB3D54D5001.jpg?v=1791226081"
      },
      {
        "title": "Short",
        "handle": "short",
        "price": 35000,
        "available": true,
        "variantCount": 12,
        "image": ""
      },
      {
        "title": "Basics",
        "handle": "basics",
        "price": 65000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/164908E3-E395-4464-898D-AEA23EF1543D.jpg?v=1791224887"
      },
      {
        "title": "Basics Leggins",
        "handle": "basics-leggins",
        "price": 65000,
        "available": true,
        "variantCount": 9,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/345BE60F-6DCB-4720-98FA-A12441817431.jpg?v=1791224516"
      },
      {
        "title": "Set 2 piezas",
        "handle": "set-2-piezas",
        "price": 85000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_2bfe325e-a682-48b4-8ea6-d9bc67c64da7.jpg?v=1791223806"
      },
      {
        "title": "Set 2 piezas",
        "handle": "enterizo-nova-copy",
        "price": 65000,
        "available": true,
        "variantCount": 9,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/8E67228B-FAF4-48F1-B862-A2DAA0260A1D.jpg?v=1791223315"
      },
      {
        "title": "Enterizo Nova",
        "handle": "enterizo-nova",
        "price": 105000,
        "available": true,
        "variantCount": 3,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/ADAEAB6B-84C9-4558-859E-5847D6681174.jpg?v=1791222230"
      },
      {
        "title": "Vestido Yoga Rose",
        "handle": "vestido-yoga-rose",
        "price": 95000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/FullSizeRender_252f9d32-06ff-48c1-9996-24bc744ed94b.jpg?v=1791221925"
      },
      {
        "title": "Enterizo Eva",
        "handle": "enterizo-eva",
        "price": 85000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/50827E1C-2C33-4EEF-9AC6-389F1C4D9DB4.jpg?v=1791221125"
      },
      {
        "title": "Enterizo Vitalia",
        "handle": "enterizo-vitalia",
        "price": 110000,
        "available": true,
        "variantCount": 9,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/07344C87-F049-4B7A-9F05-898492ECFC5D.jpg?v=1791226494"
      }
    ]
  },
  "zapatillas": {
    "label": "ZAPATILLAS",
    "products": [
      {
        "title": "Asics FF Leap - Hombre",
        "handle": "asics-ff-leap",
        "price": 175000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83580.jpg?v=1793226381"
      },
      {
        "title": "Nike Air Max Moto2K",
        "handle": "nike-air-max-moto2k",
        "price": 155000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6af4bf34-04ce-4a0f-b7ee-e2049c4ffb3d.jpg?v=1792551190"
      },
      {
        "title": "Brooks Running - Hombre",
        "handle": "brooks-running-hombre",
        "price": 195000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e9fad65f-235f-4264-8320-98a54e3f3359.jpg?v=1792550566"
      },
      {
        "title": "Nike Metcon V1 - Mujer",
        "handle": "nike-metcon-v1-mujer",
        "price": 125000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8253325b-db3d-4b72-b6fe-d4f6f661babf.jpg?v=1792550021"
      },
      {
        "title": "Nike Air Max- Hombre",
        "handle": "nike-air-max-hombre",
        "price": 165000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_86c3b7df-a8cb-405b-a75a-46b3d78e7fec.jpg?v=1792549433"
      },
      {
        "title": "Nike Air 270- Mujer",
        "handle": "nike-air-270-mujer",
        "price": 175000,
        "available": true,
        "variantCount": 3,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6a6ddf7c-c537-4cb4-97eb-3dd89948c546.jpg?v=1792548965"
      },
      {
        "title": "Puma Wildrider- Hombre",
        "handle": "puma-wildrider",
        "price": 135000,
        "available": true,
        "variantCount": 2,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f3a1853a-6737-4e48-b945-3ee7421bffa0.jpg?v=1792547985"
      },
      {
        "title": "Asics Gel- Dama",
        "handle": "asics-gel-dama",
        "price": 165000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2176a050-f512-428b-863e-0b06b2d1d812.jpg?v=1792547734"
      },
      {
        "title": "Asics Gel - Unisex",
        "handle": "asics-gel",
        "price": 165000,
        "available": true,
        "variantCount": 7,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_676d1ecd-f40d-49c1-9776-82b3c74af7e4.jpg?v=1792547472"
      },
      {
        "title": "Adidas Adistar- Hombre",
        "handle": "adidas-adistar-hombre",
        "price": 175000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ff262e57-9728-4224-960a-933f926356c7.jpg?v=1791913191"
      },
      {
        "title": "Nike Ava - Hombre",
        "handle": "nike-ava-hombre",
        "price": 165000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5a9bfb84-e343-4c30-a117-48807a291c6b.jpg?v=1791912932"
      },
      {
        "title": "Adidas Glow - Hombre",
        "handle": "adidas-glow-hombre",
        "price": 175000,
        "available": true,
        "variantCount": 25,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a083cfa0-c077-4932-a8c2-b6d29af51703.jpg?v=1791433870"
      },
      {
        "title": "Adidas Glow - Dama",
        "handle": "adidas-glow-dama",
        "price": 175000,
        "available": false,
        "variantCount": 16,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e4ba92d6-6613-454b-9d80-5ff32801af4b.jpg?v=1791433709"
      },
      {
        "title": "Nike Pegasus 42- Mujer",
        "handle": "nike-pegasus-42-mujer",
        "price": 165000,
        "available": false,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_966ce6bc-1c1f-4271-a9f8-d8081fd966c8.jpg?v=1791433454"
      },
      {
        "title": "Adidas EQ21 Run- Unisex",
        "handle": "adidas-eq21-run-unisex",
        "price": 155000,
        "available": false,
        "variantCount": 7,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2ebf476c-26b9-4008-b22f-0cf35ef0ebe4.jpg?v=1791432439"
      },
      {
        "title": "Nike Speed X - Hombre",
        "handle": "nike-speed-x-hombre",
        "price": 170000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eafafe71-3493-472a-b48f-2ce7a3381eca.jpg?v=1791431857"
      },
      {
        "title": "Nike Speed X - Mujer",
        "handle": "nike-speed-x-mujer",
        "price": 170000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fd260133-f48b-458a-8063-2fca951f2786.jpg?v=1791431857"
      },
      {
        "title": "New Balance 9060- Dama",
        "handle": "new-balance-9060-dama",
        "price": 175000,
        "available": true,
        "variantCount": 24,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_3cb5c7dc-ba42-47b0-b17c-deee715fe03e.jpg?v=1791431160"
      },
      {
        "title": "Asics FF Turbo- Hombre",
        "handle": "asics-ff-turbo-hombre-1",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8f9011a3-3292-46a3-8a56-f0f0ede7d31c.jpg?v=1790607853"
      },
      {
        "title": "Salomon- Hombre",
        "handle": "salomon-hombre",
        "price": 210000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_def4c76c-e716-4303-b7a2-d6f3dc23ed9e.jpg?v=1790610655"
      },
      {
        "title": "Salomon - Mujer",
        "handle": "salomon-mujer",
        "price": 210000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_49c7fffc-3355-418f-ae5a-a244317809cf.jpg?v=1790610532"
      },
      {
        "title": "New Balance 1906R - Unisex",
        "handle": "new-balance-1906r-unisex",
        "price": 185000,
        "available": true,
        "variantCount": 7,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_47a366ae-e11c-4a37-94f3-32016680a72b.jpg?v=1790610327"
      },
      {
        "title": "Hoka - Mujer",
        "handle": "hoka-mujer-copia",
        "price": 185000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f7609c91-8bb9-45fa-945b-91ea1749934b.jpg?v=1790609995"
      },
      {
        "title": "Nike Pegasus Trail - Hombre",
        "handle": "nike-pegasus-trail-hombre",
        "price": 175000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7a7e795d-f916-4e3c-9337-e12d4703ede2.jpg?v=1790609795"
      },
      {
        "title": "Adidas Adizero Dropset - Hombre",
        "handle": "adidas-adizero-dropset-hombre-copia",
        "price": 175000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f3d2a2b9-1c9d-4aed-a70f-2c902530c190.jpg?v=1790609608"
      },
      {
        "title": "Hoka - Hombre",
        "handle": "hoka-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0c2e767f-0f6f-4ec7-b446-94e58a5fcd27.jpg?v=1790609448"
      },
      {
        "title": "Adidas Adizero - Mujer",
        "handle": "adidas-adizero-mujer",
        "price": 185000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_370099a2-1bec-44db-a412-2672ddaac955.jpg?v=1790608831"
      },
      {
        "title": "Adidas Hyperboost Edge - Hombre",
        "handle": "new-balance-fresh-foam-mujer-copia-2",
        "price": 175000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a694ff32-887d-4676-b809-551cc2186b8d.jpg?v=1790610075"
      },
      {
        "title": "Adidas Terrex Freehiker- Hombre",
        "handle": "new-balance-fresh-foam-mujer-copia",
        "price": 175000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a10dd2aa-307b-4a9b-9e39-6f8767fcbe66.jpg?v=1790607697"
      },
      {
        "title": "Adidas Questar - Mujer",
        "handle": "adidas-questar-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ceaf646a-aa78-48bf-b2ce-f539f4745e83.jpg?v=1790607156"
      },
      {
        "title": "On Cloud - Hombre",
        "handle": "on-cloud-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9efca52f-dc31-419f-b517-0ec807ca46b2.jpg?v=1790298378"
      },
      {
        "title": "On Cloud Trail - Hombre",
        "handle": "on-cloud-trail-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2e512641-c23b-4c3b-882e-05a31f1f3610.jpg?v=1790298292"
      },
      {
        "title": "Nike Air Max 90 - Hombre",
        "handle": "nike-air-max-90-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a66ea03f-faa2-4ff7-bedd-26011ff76ec1.jpg?v=1790297728"
      },
      {
        "title": "Nike Zoom Trail - Mujer",
        "handle": "nike-zoom-trail-mujer",
        "price": 145000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7bb73ba9-04e6-4d65-9fc3-3da70581fb92.jpg?v=1790297515"
      },
      {
        "title": "Nike Vomero - Mujer",
        "handle": "nike-zoom-mujer-copia-3",
        "price": 165000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0637ee95-a308-49ad-9f6a-8a4cafade5b5.jpg?v=1790297360"
      },
      {
        "title": "On cloud - Mujer",
        "handle": "nike-zoom-mujer-copia-2",
        "price": 185000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f2ef6a95-7a91-4a0b-ab12-9a6fd647f384.jpg?v=1790298053"
      },
      {
        "title": "Adidas Supermagma - Mujer",
        "handle": "adidas-supermagma-mujer",
        "price": 185000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_6a971529-099f-4ec0-a39c-719ac899a111.jpg?v=1790297127"
      },
      {
        "title": "Nike Zoom - Mujer",
        "handle": "nike-zoom-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_49fb28e2-517d-4e14-94a9-07448d7475c0.jpg?v=1790295775"
      },
      {
        "title": "Nike Metcon - Mujer",
        "handle": "new-balance-hierro-mujer-copia-2",
        "price": 165000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7e3332ee-b988-4850-9074-13f7e29dab22.jpg?v=1790296493"
      },
      {
        "title": "Skechers Running - Mujer",
        "handle": "new-balance-hierro-mujer-copia",
        "price": 185000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c3e1e257-6976-4ff1-ba0a-043acce266d0.jpg?v=1790295473"
      },
      {
        "title": "Columbia Climbing - Hombre",
        "handle": "nike-zoom-mujer-copia-1",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_540a0167-bab5-46f1-a100-df0431da8749.jpg?v=1790294218"
      },
      {
        "title": "Adidas Supernova- Mujer",
        "handle": "nike-v2k-mujer-copia",
        "price": 185000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_623df56e-6cda-42a2-89cd-eddd6c33bb6e.jpg?v=1790296615"
      },
      {
        "title": "New Balance Fresh Foam- Mujer",
        "handle": "new-balance-fresh-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c5013141-9014-4acb-a257-e1bb34ae74b9.jpg?v=1790293514"
      },
      {
        "title": "New Balance Ellipse - Hombre",
        "handle": "new-balance-ellipse-hombre",
        "price": 165000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7a322b40-cdd4-4262-8357-20c82c2b9631.jpg?v=1790182177"
      },
      {
        "title": "Adidas Questar - Hombre",
        "handle": "adidas-hyperboost-edge-hombre",
        "price": 165000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_670f2305-4001-44c1-bfa0-f35781603726.jpg?v=1791430899"
      },
      {
        "title": "Adidas Terrex- Hombre",
        "handle": "adidas-terrex-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_02c81c5e-1e4b-4b2a-a693-0347bbf917bd.jpg?v=1790181571"
      },
      {
        "title": "Nike Vomero Premium - Hombre",
        "handle": "nik-vomero-premium",
        "price": 165000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ad0b26d4-ed50-4f2a-a187-85964b0428bc.jpg?v=1790181782"
      },
      {
        "title": "New Balance Hierro- Hombre",
        "handle": "new-balance-hierro-hombre",
        "price": 195000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_3783a3d9-2427-4849-ba5c-f18d9ace73da.jpg?v=1790181332"
      },
      {
        "title": "Nike V2k - Mujer",
        "handle": "nike-v2k-mujer",
        "price": 185000,
        "available": true,
        "variantCount": 16,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e3678a1f-459b-430d-95d4-754ea388a36a.jpg?v=1790051026"
      },
      {
        "title": "Nike V5k - Mujer",
        "handle": "nike-v5k-mujer",
        "price": 185000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ac7bf46c-4205-4bcb-9f09-e467541df6f5.jpg?v=1790050839"
      },
      {
        "title": "Asics Running- Hombre",
        "handle": "asics-running-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_078dbfef-8a44-48e7-975d-2ef9491f2643.jpg?v=1790050611"
      },
      {
        "title": "Nike Zoom -Mujer",
        "handle": "nike-zoomm-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9758cb68-3249-4c08-9598-85f813decf64.jpg?v=1790050292"
      },
      {
        "title": "Nike P6000- Hombre",
        "handle": "nike-p6000-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_31e2fb63-e38b-40ae-a359-5236513e5a89.jpg?v=1790048141"
      },
      {
        "title": "Nike Air Force One Bota - Unisex",
        "handle": "nikeaf1-bota-unisex",
        "price": 155000,
        "available": true,
        "variantCount": 7,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_aa5cbe96-6c5e-4821-9eac-bf7b913661fb.jpg?v=1790049864"
      },
      {
        "title": "Adidas Samba - Unisex",
        "handle": "adidas-samba-unisex",
        "price": 135000,
        "available": true,
        "variantCount": 14,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_7cd51b4c-b446-4e0b-bc55-54cdcc076140.jpg?v=1790049648"
      },
      {
        "title": "Nike Jordan R1 - Unisex",
        "handle": "nike-jordanr1-unisex",
        "price": 145000,
        "available": true,
        "variantCount": 14,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_01cb2257-fb5c-4fe6-b648-42c5eb32a8cf.jpg?v=1790049752"
      },
      {
        "title": "Nike Sb - Unisex",
        "handle": "nike-sb-unisex",
        "price": 135000,
        "available": true,
        "variantCount": 14,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_53c24482-2dc1-48da-bb05-e50302f94a0b.jpg?v=1790049495"
      },
      {
        "title": "Nike Blazer - Unisex",
        "handle": "nike-blazer-unisex",
        "price": 185000,
        "available": true,
        "variantCount": 7,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d673abe9-ef76-4556-b27d-c6c5977c7f34.jpg?v=1790049285"
      },
      {
        "title": "Nike Bailleli - Unisex",
        "handle": "nike-bailleli",
        "price": 185000,
        "available": true,
        "variantCount": 14,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b484ff9d-c3ea-45d8-9b65-7a2d4556dc03.jpg?v=1790049140"
      },
      {
        "title": "Nike Skate - Unisex",
        "handle": "nike-skate-unisex",
        "price": 185000,
        "available": true,
        "variantCount": 14,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_caa7f9e8-7613-4ea3-b5b0-9a06ba42c4d2.jpg?v=1790048338"
      },
      {
        "title": "Nike P6000- Mujer",
        "handle": "nike-p6000-mujer",
        "price": 185000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9aba1bbc-fed1-4c79-b4c4-65d4913790d4.jpg?v=1790048141"
      },
      {
        "title": "New Balance 530- Unisex",
        "handle": "new-balance-530-unisex",
        "price": 145000,
        "available": true,
        "variantCount": 7,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_de0b0ee3-f798-4950-94de-377e62fdef08.jpg?v=1790047575"
      },
      {
        "title": "Nike Tecno- Mujer",
        "handle": "niketecno-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e41c5bc0-f38b-409b-8d08-cc2026a502f3.jpg?v=1790047494"
      },
      {
        "title": "Nike TN - Unisex",
        "handle": "nike-tn-unisex",
        "price": 135000,
        "available": true,
        "variantCount": 16,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_a7019935-94c7-4834-b7d4-a2d48b0e0803.jpg?v=1790045417"
      },
      {
        "title": "Nike Trail Wildhorse 10 - Mujer",
        "handle": "nike-trail-10-unisex",
        "price": 175000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_2e14897f-52b0-43ab-adc3-b01138c2db80.jpg?v=1790044592"
      },
      {
        "title": "Adidas New -Mujer",
        "handle": "adidas-nuevo-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c64447a2-039e-45b4-901f-a357ecdf5bde.jpg?v=1790179766"
      },
      {
        "title": "Nike Vomero 18 - Hombre",
        "handle": "nike-vomero-18-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 30,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9bd5d0ae-7469-493b-b339-a7781e8bf790.jpg?v=1790043996"
      },
      {
        "title": "Nike Zoom X - Mujer",
        "handle": "nike-zoom-x-mujer",
        "price": 185000,
        "available": true,
        "variantCount": 28,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c62c8bd6-be9e-40b5-8e07-b838d36686e1.jpg?v=1790043429"
      },
      {
        "title": "New Balance 574 -Mujer",
        "handle": "new-balance-574-mujer",
        "price": 150000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0d5accc4-2f66-4e6a-a592-846492810259.jpg?v=1790042512"
      },
      {
        "title": "Nike Air Force One - Unisex",
        "handle": "nikeaf1-unisex",
        "price": 165000,
        "available": true,
        "variantCount": 14,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4c15e168-38f5-4ddb-917e-88d31d92e220.jpg?v=1790042694"
      },
      {
        "title": "Bota Under Armour - Hombre",
        "handle": "underarmour-hombre",
        "price": 205000,
        "available": true,
        "variantCount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_eb364127-bbb2-41c0-91f9-952efd352ffd.jpg?v=1791432172"
      },
      {
        "title": "Asics Súper Blast - Mujer",
        "handle": "adidas-adizero-hombre-copia-2",
        "price": 175000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/83605.jpg?v=1793226329"
      },
      {
        "title": "Nike Vomero 18 GoreTex- Hombre",
        "handle": "nike-vomero-gorotex-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_35175541-0975-4469-b164-8bde8f6a0d8f.jpg?v=1790179503"
      },
      {
        "title": "Adidas Duramo Speed- Mujer",
        "handle": "adidas-duramo-speed-mujer",
        "price": 165000,
        "available": true,
        "variantCount": 8,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_33dfbb93-4d70-4b1c-9616-9eef30f766d1.jpg?v=1790041169"
      },
      {
        "title": "Asics NYC - Hombre",
        "handle": "asics-nyc-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 10,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e8dd7301-cf5f-44e8-a561-0ca019394943.jpg?v=1790040762"
      },
      {
        "title": "Nike St Glow - Hombre",
        "handle": "nike-st-glow-hombre",
        "price": 175000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5f0df0c5-a268-4540-b15b-d57aa00220b9.jpg?v=1790180122"
      },
      {
        "title": "New Balance 9060- Hombre",
        "handle": "new-balance-9060-cafe-negro-hombre",
        "price": 175000,
        "available": true,
        "variantCount": 20,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ccc676be-efa8-42e6-8574-3f1736c7a0d2.jpg?v=1790040425"
      },
      {
        "title": "Nike Initiator - Mujer",
        "handle": "nike-initiator-hombre",
        "price": 175000,
        "available": true,
        "variantCount": 12,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_ba28743a-dbf4-41d2-abd9-884c13aa0618.jpg?v=1790179952"
      },
      {
        "title": "Nike Zoom Pegasus 42- Hombre",
        "handle": "nike-zoom-pegasus-hombre",
        "price": 165000,
        "available": true,
        "variantCount": 30,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_5b251eb4-fbe7-4381-be2f-50cb23a45cdf.jpg?v=1790180879"
      },
      {
        "title": "Adidas Adizero- Hombre",
        "handle": "adizero-hombre",
        "price": 185000,
        "available": true,
        "variantCount": 30,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/WhatsAppImage2026-08-23at12.11.37.jpg?v=1787505764"
      }
    ]
  },
  "tech": {
    "label": "TECH",
    "products": [
      {
        "title": "Powerbeats",
        "handle": "powerbeats",
        "price": 55000,
        "available": true,
        "variantCount": 3,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/4E74F429-6DCD-4AF4-A8FE-CD78DDC86CB2.jpg?v=1791263385"
      },
      {
        "title": "Airpods 4gth",
        "handle": "airpods-4gth",
        "price": 90000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_8b546642-513c-475b-a7d1-580a5d5adf77.jpg?v=1791263010"
      },
      {
        "title": "Airpods Pro3",
        "handle": "airpods-pro3",
        "price": 100000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_d1699073-f78c-475a-97aa-8fc069481ab0.jpg?v=1791262847"
      },
      {
        "title": "Diadema Air Pods Max",
        "handle": "diadema-air-pods-max",
        "price": 125000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c6ebc083-5b01-4268-83ac-252ff7859fea.jpg?v=1791262523"
      },
      {
        "title": "Diadema Bose",
        "handle": "diadema-bose",
        "price": 115000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_198274dc-d9b2-4906-9308-125eb0edb583.jpg?v=1791262402"
      },
      {
        "title": "Audífono Deportivo BT15",
        "handle": "audifono-deportivo-bt15",
        "price": 95000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_9048aa29-7daf-4327-aa2d-2716cdf9ac0f.jpg?v=1791262158"
      },
      {
        "title": "Galaxy Buds Air12",
        "handle": "galaxy-buds-air12",
        "price": 95000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4ad02066-e523-4371-92de-7c91f9935d03.jpg?v=1791261964"
      },
      {
        "title": "Galaxy Buds 3",
        "handle": "galaxy-buds-3",
        "price": 90000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_fd9106db-35ae-43ea-afad-71b6fca981e5.jpg?v=1791261828"
      },
      {
        "title": "Galaxy Buds2 Pro",
        "handle": "galaxy-buds2-pro",
        "price": 85000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e686caa8-ee32-46ed-954b-767bfa665488.jpg?v=1791261645"
      },
      {
        "title": "Smart Watch Serie 11",
        "handle": "smart-watch-serie-11",
        "price": 185000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_e44f050c-0c44-498f-b8e1-91325841a78e.jpg?v=1791261508"
      },
      {
        "title": "WATCH ULTRA SERIE 11",
        "handle": "watch-ultra-serie-11",
        "price": 195000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_032198b3-92d5-4f00-ac78-4a285f3fb3b4.jpg?v=1791261302"
      },
      {
        "title": "Xiaomi Band 10 Pro",
        "handle": "xiaomi-band-10-pro",
        "price": 195000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_284bcad5-c7a2-485e-9a1c-125a40421af3.jpg?v=1791261198"
      },
      {
        "title": "Xiaomi Smart Band 10",
        "handle": "xiaomi-smart-band-10",
        "price": 185000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4a2a8e19-872d-417b-b633-892ea364c182.jpg?v=1791260997"
      }
    ]
  },
  "suplementos": {
    "label": "SUPLEMENTOS",
    "products": [
      {
        "title": "Nitro Tech Whey Gold - Proteina 5lb",
        "handle": "nitro-tech-whey-gold-proteina-5lb",
        "price": 370000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/846C60A3-B6AE-4E23-9A26-DB9F33D28AAE.jpg?v=1791950155"
      },
      {
        "title": "Nitro Tech- Proteina 4lb",
        "handle": "nitro-tech-proteina-4lb",
        "price": 325000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B6000D8A-4B38-4F81-9FA6-FC71DDED8322.jpg?v=1791949783"
      },
      {
        "title": "Nitro Tech - Proteina 2lb",
        "handle": "nitro-tech-proteina-2lb",
        "price": 215000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/99E1DE07-00AF-45A2-A06A-D12CAB2B91A9.jpg?v=1791949485"
      },
      {
        "title": "Súper Mega- Proteina 5lb",
        "handle": "super-mega-proteina-5lb",
        "price": 150000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B4708A65-15B9-4877-9C67-AB68C563DB23.jpg?v=1791949048"
      },
      {
        "title": "Súper Mega- Proteina 2lb",
        "handle": "super-mega-proteina-2lb",
        "price": 70000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/BCECCB5E-4BE3-4CA2-AC0D-021678D7F090.jpg?v=1791948772"
      },
      {
        "title": "Súper Mega - Proteina 1lb",
        "handle": "super-mega-proteina-1lb",
        "price": 45000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/1A3346D4-F503-470A-A1C7-79A9E90315AC.jpg?v=1791948485"
      },
      {
        "title": "Mega Gainer- Proteína 5lb",
        "handle": "mega-gainer-proteina-5lb",
        "price": 170000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/C85A1405-BD8D-4819-831E-205E54F3EB78.webp?v=1791948212"
      },
      {
        "title": "Mega Gainer - Proteina 2lb",
        "handle": "mega-gainer-proteina-2lb",
        "price": 75000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/93BC84FA-CF96-4D77-AD4B-282807BEF4F5.jpg?v=1791947731"
      },
      {
        "title": "Mega Gainer- Proteina 1lb",
        "handle": "mega-gainer-proteina-1lb",
        "price": 48000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/96CC64CC-911B-4372-86D4-CE925762FA51.jpg?v=1791947731"
      },
      {
        "title": "Whey Phorm- Proteina 2lb",
        "handle": "whey-phorm-proteina-2lb",
        "price": 210000,
        "available": true,
        "variantCount": 2,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/966315B5-EED4-4773-AC8E-5FCC05BB0E17.webp?v=1791947266"
      },
      {
        "title": "Elite 100% Whey - Proteina 5lb",
        "handle": "sin-titulo-13oct_21-50-49",
        "price": 390000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/B20EE79C-DBAC-4425-8406-9AE9FC03178C.jpg?v=1791946390"
      },
      {
        "title": "ISO 100 Cookies And Cream - Proteína 1.3lb",
        "handle": "sin-titulo-13oct_21-39-17",
        "price": 230000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/2C620D54-8CB9-461A-8699-2B17328069AC.jpg?v=1791945701"
      }
    ]
  },
  "accesorios": {
    "label": "ACCESORIOS",
    "products": [
      {
        "title": "Calleras Crossfit",
        "handle": "calleras-crossfit",
        "price": 75000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_07bce101-4451-44e5-bfce-800a9570bdb9.jpg?v=1791436139"
      },
      {
        "title": "Rodillera Rotular",
        "handle": "rodillera-rotular",
        "price": 48000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_0c3ffa9d-6180-49bf-ad19-ccdaa47a0afc.jpg?v=1791437099"
      },
      {
        "title": "Rodilleras de Poder",
        "handle": "rodilleras-de-poder",
        "price": 130000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_4a642da1-9ef1-4de4-be79-2e2ad30f10d9.jpg?v=1791436834"
      },
      {
        "title": "Muñequera Cobra",
        "handle": "munequera-cobra",
        "price": 65000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_475b9f26-11f9-484c-b806-86b402dca5a8.jpg?v=1791435915"
      },
      {
        "title": "Straps",
        "handle": "straps",
        "price": 50000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_72f31d64-d85c-49bf-9a69-e31e6f9074f8.jpg?v=1791435798"
      },
      {
        "title": "Termo Owala 32oz",
        "handle": "termo-owala-32oz",
        "price": 130000,
        "available": true,
        "variantCount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_c4f05658-efc0-453f-97b0-867e49d1f84f.jpg?v=1791435307"
      },
      {
        "title": "Termo Owala 32oz Con Agarre",
        "handle": "sin-titulo-7oct_23-48-10",
        "price": 130000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_29e3d48b-e83e-4e12-8fbb-ba3f19e825ea.jpg?v=1791434916"
      },
      {
        "title": "Termo Stanley Vaso",
        "handle": "termo-stanley-vaso",
        "price": 110000,
        "available": true,
        "variantCount": 4,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_b76f38d2-b548-4933-8423-f2c6db5f28d6.jpg?v=1791434733"
      },
      {
        "title": "Termo Stanley 20oz",
        "handle": "termo-stanley-20oz",
        "price": 125000,
        "available": true,
        "variantCount": 1,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_df1c34f8-d25b-4fd8-bb79-aac0ddc5bb09.jpg?v=1791434505"
      },
      {
        "title": "Termo Stanley 40oz",
        "handle": "termo-stanley-40oz",
        "price": 120000,
        "available": true,
        "variantCount": 5,
        "image": "https://cdn.shopify.com/s/files/1/1027/2342/0436/files/rn-image_picker_lib_temp_f96971a4-b8ba-4231-b91d-37f093273103.jpg?v=1791434236"
      }
    ]
  }
};

export function isCategorySlug(value: string): value is CategorySlug {
  return value in categories;
}
