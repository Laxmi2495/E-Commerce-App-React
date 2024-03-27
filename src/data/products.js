const products = [
  {
    id: 1,
    name: "Blue Sofa",
    image: "https://media.istockphoto.com/id/952206646/photo/interior-design-minimal-style-concept.jpg?s=612x612&w=0&k=20&c=7KASbqrLuHoqQb81uexpRsRJjGNIimhCYLInC23MpeM=",
    price: 499.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 2,
    name: "Smartphone",
    image: "https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-81688.jpg",
    price: 699.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 3,
    name: "Laptop",
    image: "https://img.freepik.com/premium-psd/realistic-macbook-pro-laptop-16-inch-screen-mockup-template_384205-870.jpg",
    price: 1099.99,
    category: "Electronics",
    inStock: false
  },
  {
    id: 4,
    name: "Coffee Table",
    image: "https://media.istockphoto.com/id/1161176490/photo/set-of-retro-wooden-coffee-table-on-white-background-included-clipping-path.jpg?s=612x612&w=0&k=20&c=L3rB1u5syuTwS9e0QoOqeou0AZwhNyLpU2nxxhYKRX0=",
    price: 199.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 5,
    name: "Running Shoes",
    image: "https://media.istockphoto.com/id/185246744/photo/sports-shoe.jpg?s=612x612&w=0&k=20&c=d3KKioU6TLO_iyUdA0f-1BxKxBByR_8tU0I6FpMZzX8=",
    price: 79.99,
    category: "Sporting Goods",
    inStock: true
  },
  {
    id: 6,
    name: "TV",
    image: "https://img.freepik.com/free-photo/technology-meets-nature-wide-landscape-view-generative-ai_188544-12133.jpg",
    price: 899.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 7,
    name: "Dining Table",
    image: "https://media.istockphoto.com/id/1309042044/photo/interior-design-of-stylish-dining-room-interior-with-family-wooden-table-modern-chairs-plate.jpg?s=612x612&w=0&k=20&c=_r5TNzVXvZwgbHEKiEvguyq-kmAzR9U667It3mDpWQo=",
    price: 399.99,
    category: "Furniture",
    inStock: false
  },
  {
    id: 8,
    name: "T-shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1t7EhWOSW_fDwj06M3K1Gbr_T_RtgLsqfQ&usqp=CAU",
    price: 29.99,
    category: "Clothing",
    inStock: true
  },
  {
    id: 9,
    name: "Backpack",
    image: "https://media.istockphoto.com/id/1339055637/photo/back-to-school-background-stationery-supplies-in-the-school-bag-banner-design-education-on.jpg?s=612x612&w=0&k=20&c=64U8pLGMWIV7ldiv23XaU5tGUuXqTrEemo_HEueIs40=",
    price: 49.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 10,
    name: "Desk Lamp",
    image: "https://media.istockphoto.com/id/534400418/photo/desk-lamp.jpg?s=612x612&w=0&k=20&c=r8fSNGuqsgUrZHWBswRPMv8sdgwP5l67f-ECg-Djoh8=",
    price: 39.99,
    category: "Home Decor",
    inStock: true
  },
  {
    id: 11,
    name: "Bed",
    image: "https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?s=612x612&w=0&k=20&c=yxOoaz2IAd9zvtlXeS-Th-AiXhaCtMIxOONfGbtGeG8=",
    price: 799.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 12,
    name: "Headphones",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-6109-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    price: 149.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 13,
    name: "Sunglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePKGo4Bft-1GTIXG34SsDCK0PgxZe2-UeZe5VRvD6jKQzUVACE4uIL40bGk2r4MoIsFY&usqp=CAU",
    price: 59.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 14,
    name: "Yoga Mat",
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/696/983/small/close-up-hands-o-pregnant-woman-rolling-out-a-mat-while-practicing-yoga-prenatal-stretching-breathing-exercises-indoor-photo.jpg",
    price: 24.99,
    category: "Sporting Goods",
    inStock: false
  },
  {
    id: 15,
    name: "Couch",
    image: "https://media.istockphoto.com/id/1366569235/photo/sofa-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xgW5MftmEjjelM-ikdVF-7F91MNx7cgh9qiLb-qoyYU=",
    price: 899.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 16,
    name: "Watch",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?cs=srgb&dl=pexels-pixabay-277390.jpg&fm=jpg",
    price: 199.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 17,
    name: "Desk",
    image: "https://img.freepik.com/free-photo/online-school-equipment-home_23-2149041148.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais",
    price: 299.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 18,
    name: "Printer",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/best-photo-printers-top-image.jpg?c=16x9",
    price: 249.99,
    category: "Electronics",
    inStock: false
  },
  {
    id: 19,
    name: "Dumbbells",
    image: "https://img.freepik.com/free-photo/gym-with-dumbbells-floor_1340-37013.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711324800&semt=sph",
    price: 49.99,
    category: "Sporting Goods",
    inStock: true
  },
  {
    id: 20,
    name: "Kitchen Blender",
    image: "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/digital-assets/pages/articles/oc-articles/how-to-choose-a-blender/how-to-choose-a-blender_Masthead.png?fit=constrain&fmt=jpg&wid=2875",
    price: 79.99,
    category: "Home Appliances",
    inStock: true
  },

    {
    id: 21,
    name: "Blue Sofa",
    image: "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/digital-assets/pages/articles/oc-articles/how-to-choose-a-blender/how-to-choose-a-blender_Masthead.png?fit=constrain&fmt=jpg&wid=2875",
    price: 499.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 22,
    name: "Smartphone",
    image: "https://img.freepik.com/free-photo/new-cell-phone-colorful-background_58702-4819.jpg",
    price: 699.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 23,
    name: "Laptop",
    image: "https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711324800&semt=ais",
    price: 1099.99,
    category: "Electronics",
    inStock: false
  },
  {
    id: 24,
    name: "Coffee Table",
    image: "https://media.istockphoto.com/id/1161176490/photo/set-of-retro-wooden-coffee-table-on-white-background-included-clipping-path.jpg?s=612x612&w=0&k=20&c=L3rB1u5syuTwS9e0QoOqeou0AZwhNyLpU2nxxhYKRX0=",
    price: 199.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 25,
    name: "Running Shoes",
    image: "https://media.istockphoto.com/id/185246744/photo/sports-shoe.jpg?s=612x612&w=0&k=20&c=d3KKioU6TLO_iyUdA0f-1BxKxBByR_8tU0I6FpMZzX8=",
    price: 79.99,
    category: "Sporting Goods",
    inStock: true
  },
  {
    id: 26,
    name: "TV",
    image: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg",
    price: 899.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 27,
    name: "Dining Table",
    image: "https://media.istockphoto.com/id/1309042044/photo/interior-design-of-stylish-dining-room-interior-with-family-wooden-table-modern-chairs-plate.jpg?s=612x612&w=0&k=20&c=_r5TNzVXvZwgbHEKiEvguyq-kmAzR9U667It3mDpWQo=",
    price: 399.99,
    category: "Furniture",
    inStock: false
  },
  {
    id: 28,
    name: "T-shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1t7EhWOSW_fDwj06M3K1Gbr_T_RtgLsqfQ&usqp=CAU",
    price: 29.99,
    category: "Clothing",
    inStock: true
  },
  {
    id: 29,
    name: "Backpack",
    image: "https://media.istockphoto.com/id/1339055637/photo/back-to-school-background-stationery-supplies-in-the-school-bag-banner-design-education-on.jpg?s=612x612&w=0&k=20&c=64U8pLGMWIV7ldiv23XaU5tGUuXqTrEemo_HEueIs40=",
    price: 49.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 30,
    name: "Desk Lamp",
    image: "https://media.istockphoto.com/id/534400418/photo/desk-lamp.jpg?s=612x612&w=0&k=20&c=r8fSNGuqsgUrZHWBswRPMv8sdgwP5l67f-ECg-Djoh8=",
    price: 39.99,
    category: "Home Decor",
    inStock: true
  },
  {
    id: 31,
    name: "Bed",
    image: "https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?s=612x612&w=0&k=20&c=yxOoaz2IAd9zvtlXeS-Th-AiXhaCtMIxOONfGbtGeG8=",
    price: 799.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 32,
    name: "Headphones",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-6109-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    price: 149.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 33,
    name: "Sunglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePKGo4Bft-1GTIXG34SsDCK0PgxZe2-UeZe5VRvD6jKQzUVACE4uIL40bGk2r4MoIsFY&usqp=CAU",
    price: 59.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 34,
    name: "Yoga Mat",
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/696/983/small/close-up-hands-o-pregnant-woman-rolling-out-a-mat-while-practicing-yoga-prenatal-stretching-breathing-exercises-indoor-photo.jpg",
    price: 24.99,
    category: "Sporting Goods",
    inStock: false
  },
  {
    id: 35,
    name: "Couch",
    image: "https://media.istockphoto.com/id/1366569235/photo/sofa-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xgW5MftmEjjelM-ikdVF-7F91MNx7cgh9qiLb-qoyYU=",
    price: 899.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 36,
    name: "Watch",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?cs=srgb&dl=pexels-pixabay-277390.jpg&fm=jpg",
    price: 199.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 37,
    name: "Desk",
    image: "https://img.freepik.com/free-photo/online-school-equipment-home_23-2149041148.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais",
    price: 299.99,
    category: "Furniture",
    inStock: true
  },
  {
    id: 38,
    name: "Printer",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/best-photo-printers-top-image.jpg?c=16x9",
    price: 249.99,
    category: "Electronics",
    inStock: false
  },
  {
    id: 39,
    name: "Dumbbells",
    image: "https://img.freepik.com/free-photo/gym-with-dumbbells-floor_1340-37013.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711324800&semt=sph",
    price: 49.99,
    category: "Sporting Goods",
    inStock: true
  },
  {
    id: 40,
    name: "Kitchen Blender",
    image: "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/digital-assets/pages/articles/oc-articles/how-to-choose-a-blender/how-to-choose-a-blender_Masthead.png?fit=constrain&fmt=jpg&wid=2875",
    price: 79.99,
    category: "Home Appliances",
    inStock: true
  }
];

export default products;