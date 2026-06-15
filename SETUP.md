# Jewelry Shop E-Commerce Platform

A full-stack MERN (MongoDB, Express, React, Node.js) jewelry e-commerce application with:

✨ **Modern UI** - Responsive design with beautiful gradients and animations
🛍️ **Shopping Features** - Product catalog, cart, and checkout
💳 **Payment** - Stripe integration for secure payments
🔐 **Authentication** - Email/password and Google OAuth login
📱 **Mobile Ready** - Fully responsive on all devices
💎 **Premium Design** - Professional jewelry shop interface

## Quick Start

### Prerequisites
- Node.js v14+
- MongoDB
- Stripe Account
- Google OAuth Credentials

### Backend
```bash
cd server
npm install
# Configure .env file
npm run dev
```

### Frontend
```bash
cd client
npm install
npm start
```

## Project Structure

```
project-file/
├── client/          # React frontend
│   ├── src/
│   │   ├── pages/   # Home, Products, Cart, etc.
│   │   ├── components/  # Header, Footer, ProductCard
│   │   ├── context/  # Auth & Cart context
│   │   └── styles/   # CSS files
│   └── package.json
├── server/          # Express backend
│   ├── routes/      # API endpoints
│   ├── controllers/ # Business logic
│   ├── models/      # MongoDB schemas
│   ├── middleware/  # Auth middleware
│   └── package.json
└── README.md
```

## Features

- Product browsing with filters
- Shopping cart management
- User authentication (email/Google)
- Checkout with shipping info
- Stripe payment processing
- Responsive design
- Real-time notifications

## API Documentation

See [Backend README](./server/README.md) for complete API documentation.

## Frontend Setup

See [Frontend README](./client/README.md) for detailed setup instructions.

## Configuration

Update environment variables in:
- `.env` (server)
- `.env.local` (client)

## Production Deployment

See individual README files in server and client directories.

## License

MIT License

## Support

For issues or questions: info@jewelryshop.com
