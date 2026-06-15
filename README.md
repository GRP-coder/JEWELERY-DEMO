# 💎 Jewelry Shop - Full Stack E-Commerce Website

A modern, responsive jewelry e-commerce website built with the MERN stack (MongoDB, Express, React, Node.js), featuring Google OAuth authentication, shopping cart functionality, and Stripe payment integration.

## 🌟 Features

### Frontend (React)
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Product Catalog**: Browse jewelry by category and material
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Email/password and Google OAuth login
- **Checkout Process**: Multi-step checkout with shipping information
- **Payment Integration**: Secure Stripe payment processing
- **User Profile**: Manage account and view order history
- **Modern UI**: Gradient design with smooth animations

### Backend (Node.js/Express)
- **RESTful API**: Complete API endpoints for all operations
- **Authentication**: JWT-based authentication + Google OAuth
- **Database**: MongoDB for data persistence
- **Payment Processing**: Stripe integration
- **Security**: Password hashing with bcryptjs, CORS configuration
- **Validation**: Input validation with validator.js

## 📁 Project Structure

```
project-file/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── ProductCard.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Products.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   ├── Payment.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── [component-styles].css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── server/
    ├── config/
    │   └── passport.js
    ├── controllers/
    │   ├── authController.js
    │   ├── productController.js
    │   ├── cartController.js
    │   ├── orderController.js
    │   ├── paymentController.js
    │   └── userController.js
    ├── middleware/
    │   └── auth.js
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   ├── Cart.js
    │   └── Order.js
    ├── routes/
    │   ├── auth.js
    │   ├── products.js
    │   ├── cart.js
    │   ├── orders.js
    │   ├── users.js
    │   └── payment.js
    ├── .env
    ├── server.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Stripe account
- Google OAuth credentials

### Backend Setup

1. **Navigate to server directory:**
```bash
cd server
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env` file with:
```
MONGODB_URI=mongodb://localhost:27017/jewelry-shop
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
SESSION_SECRET=your_session_secret
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
```

4. **Start the server:**
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory:**
```bash
cd client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env.local` file:**
```
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. **Start the React app:**
```bash
npm start
```

The app will run on `http://localhost:3000`

## 🔐 Authentication

### Email/Password Registration
- User can register with email and password
- Password is hashed using bcryptjs
- JWT token is generated for session management

### Google OAuth
- Users can sign in with Google account
- Automatic user creation on first login
- Profile information is saved

## 🛒 Shopping Features

### Product Browsing
- Filter by category (Rings, Necklaces, Bracelets, Earrings)
- Filter by material (Gold, Silver, Platinum, Diamond)
- Search functionality
- Product rating and reviews

### Cart Management
- Add/remove items
- Update quantities
- Persistent cart storage
- Cart item counter in header

### Checkout Process
1. View cart summary
2. Enter shipping address
3. Proceed to payment
4. Complete payment with Stripe

## 💳 Payment Integration

- **Stripe**: Secure credit/debit card payments
- **Payment Intent**: Creates payment intent for transaction
- **Confirmation**: Confirms payment and updates order status

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 1200px, 768px, 480px
- Touch-friendly UI elements
- Optimized for all devices

## 🎨 Design Features

- **Color Scheme**: Purple gradient (#667eea - #764ba2)
- **Typography**: Modern sans-serif fonts
- **Animations**: Smooth transitions and hover effects
- **Icons**: React Icons for UI elements
- **Toast Notifications**: Real-time feedback with react-hot-toast

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/google` - Google OAuth login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/update` - Update cart item
- `POST /api/cart/clear` - Clear cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id` - Update order status

### Payment
- `POST /api/payment/create-intent` - Create payment intent
- `POST /api/payment/confirm` - Confirm payment

## 🌐 Database Schema

### User Model
```javascript
{
  name, email, password (hashed),
  googleId, profileImage,
  phone, address, createdAt
}
```

### Product Model
```javascript
{
  name, description, price,
  category, material, image, images,
  rating, reviews, stock, sku, createdAt
}
```

### Cart Model
```javascript
{
  userId, items: [{productId, quantity, price}],
  totalPrice, createdAt, updatedAt
}
```

### Order Model
```javascript
{
  userId, items, totalAmount,
  shippingAddress, paymentMethod,
  paymentStatus, orderStatus,
  stripePaymentId, createdAt, updatedAt
}
```

## 📦 Dependencies

### Frontend
- react, react-dom, react-router-dom
- axios, react-icons
- @stripe/react-stripe-js, @stripe/stripe-js
- react-hot-toast

### Backend
- express, mongoose, cors
- jsonwebtoken, bcryptjs
- stripe, passport, passport-google-oauth20
- validator, multer

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcryptjs
- CORS protection
- Google OAuth 2.0
- Secure Stripe integration
- Input validation

## 📝 Future Enhancements

- Admin dashboard
- Product reviews and ratings
- Wishlist functionality
- Email notifications
- Order tracking
- Social media integration
- Multiple payment methods
- Inventory management

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for jewelry enthusiasts

## 📞 Support

For issues or questions, please contact: info@jewelryshop.com

---

**Note**: Remember to add your own products to the database before going live!
