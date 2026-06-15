const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const demoProducts = [
  {
    name: 'Gold Diamond Ring',
    description: 'Elegant gold ring with a sparkling diamond center stone. Perfect for engagements or special occasions.',
    price: 2499.99,
    category: 'rings',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    stock: 15,
    sku: 'GDR-001',
    rating: 4.8
  },
  {
    name: 'Silver Pendant Necklace',
    description: 'Beautiful silver necklace with an elegant pendant. A timeless piece for everyday wear.',
    price: 349.99,
    category: 'necklaces',
    material: 'silver',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    stock: 25,
    sku: 'SPN-001',
    rating: 4.6
  },
  {
    name: 'Platinum Diamond Bracelet',
    description: 'Luxurious platinum bracelet with brilliant diamonds. A statement piece for any occasion.',
    price: 4999.99,
    category: 'bracelets',
    material: 'platinum',
    image: 'https://images.unsplash.com/photo-1515562141207-5dab665231df?w=500&h=500&fit=crop',
    stock: 8,
    sku: 'PDB-001',
    rating: 5.0
  },
  {
    name: 'Gold Stud Earrings',
    description: 'Classic gold stud earrings with gemstones. Perfect gift for any woman.',
    price: 599.99,
    category: 'earrings',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    stock: 30,
    sku: 'GSE-001',
    rating: 4.7
  },
  {
    name: 'Silver Gemstone Ring',
    description: 'Stunning silver ring featuring a vibrant gemstone. A versatile piece for every wardrobe.',
    price: 449.99,
    category: 'rings',
    material: 'silver',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    stock: 20,
    sku: 'SGR-001',
    rating: 4.5
  },
  {
    name: 'Gold Luxury Watch',
    description: 'Premium gold watch with automatic movement and sapphire crystal. A timeless investment piece.',
    price: 3999.99,
    category: 'watches',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1523170335684-f3d5d9c93b1e?w=500&h=500&fit=crop',
    stock: 5,
    sku: 'GLW-001',
    rating: 4.9
  },
  {
    name: 'Silver Link Bracelet',
    description: 'Sleek silver link bracelet with a polished finish. Ideal for both casual and formal wear.',
    price: 279.99,
    category: 'bracelets',
    material: 'silver',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    stock: 22,
    sku: 'SLB-001',
    rating: 4.4
  },
  {
    name: 'Diamond Drop Earrings',
    description: 'Elegant diamond drop earrings with a timeless design. Perfect for special events.',
    price: 1899.99,
    category: 'earrings',
    material: 'diamond',
    image: 'https://images.unsplash.com/photo-1515562141207-5dab665231df?w=500&h=500&fit=crop',
    stock: 10,
    sku: 'DDE-001',
    rating: 4.8
  },
  {
    name: 'Platinum Necklace with Gemstone',
    description: 'Sophisticated platinum necklace featuring a beautiful gemstone. A statement piece.',
    price: 2799.99,
    category: 'necklaces',
    material: 'platinum',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    stock: 12,
    sku: 'PNG-001',
    rating: 4.7
  },
  {
    name: 'Gold Hoop Earrings',
    description: 'Classic gold hoop earrings with a modern twist. Versatile and timeless.',
    price: 449.99,
    category: 'earrings',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    stock: 28,
    sku: 'GHE-001',
    rating: 4.6
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert demo products
    const result = await Product.insertMany(demoProducts);
    console.log(`Successfully seeded ${result.length} products`);

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDatabase();
