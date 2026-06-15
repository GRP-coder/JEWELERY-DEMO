# Frontend Setup Instructions

## Environment Variables

Create a `.env.local` file in the `client` directory:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
REACT_APP_API_URL=http://localhost:5000
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Key Features

### Responsive Design
- Mobile: 480px and below
- Tablet: 768px to 1024px
- Desktop: 1200px and above

### Components
- **Header**: Navigation and cart icon
- **Footer**: Company information and social links
- **ProductCard**: Individual product display
- **Auth Pages**: Login and registration
- **Checkout**: Multi-step checkout process
- **Payment**: Stripe payment form

### Context APIs
- **AuthContext**: User authentication state
- **CartContext**: Shopping cart management

## Available Scripts

### `npm start`
Runs the app in development mode

### `npm build`
Builds the app for production

### `npm test`
Runs the test suite

### `npm eject`
Ejects from create-react-app (irreversible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 already in use
```bash
PORT=3001 npm start
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build failures
Clear cache:
```bash
npm cache clean --force
npm install
npm run build
```

## Performance Optimization

- Code splitting with React.lazy()
- Image optimization
- CSS minification
- Production build with source maps disabled

## Deployment

### Netlify
```bash
npm run build
# Deploy the build folder
```

### Vercel
```bash
vercel
```

### GitHub Pages
Configure package.json with homepage and deploy
