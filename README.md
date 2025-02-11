## Next.js Ecommerce-Web Application

This is a full-featured eCommerce website built using modern web technologies. The platform allows users to browse category add items to their cart, and complete purchases securely with Admin dashboard pannel



## Features
- 🔐 User authentication (Login/Signup)
- 🛍️ Product catalog with category
- 🛒 Shopping cart and checkout system
- 💳 Payment gateway integration
- 📦 Order management for users and admins
- 📱 Responsive design for mobile and desktop

## Technologies Used
- FullStack: Next.js,  Tailwind CSS, TypeScript
- Database: Neon
- Authentication: JWT
- Payment Integration: Stripe

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (latest version)
- MongoDB
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   cd ecommerce-website
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add necessary configurations like database connection, JWT secret, and Stripe API keys.

4. Start the development server:
   ```bash
   cd backend
   npm start
   ```
   Open a new terminal and start the frontend:
   ```bash
   cd frontend
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature-branch`.
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, feel free to reach out via email at `support@example.com` or create an issue in the repository.

