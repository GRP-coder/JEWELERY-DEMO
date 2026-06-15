# Backend Setup Instructions

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

### Database
```
MONGODB_URI=mongodb://localhost:27017/jewelry-shop
```

### Authentication
```
JWT_SECRET=your_jwt_secret_key_change_this_in_production
SESSION_SECRET=your_session_secret_key
```

### Google OAuth
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Stripe Payment
```
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Server Configuration
```
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Database Setup

MongoDB should be running locally on `mongodb://localhost:27017` or use MongoDB Atlas.

### Sample Products (optional)

You can add sample products via POST request to `/api/products`:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gold Ring",
    "description": "Beautiful gold ring",
    "price": 299,
    "category": "rings",
    "material": "gold",
    "image": "image_url",
    "stock": 10,
    "sku": "RING001"
  }'
```

## API Testing

You can test the API using:
- Postman
- cURL
- VS Code REST Client extension

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in .env

### Port Already in Use
- Change PORT in .env or kill existing process

### CORS Error
- Verify CLIENT_URL matches your React app URL

## Production Deployment

Before deploying:
1. Set `NODE_ENV=production`
2. Use strong JWT_SECRET
3. Configure proper MongoDB URI
4. Add real Stripe keys
5. Set CORS_ORIGIN to production URL
