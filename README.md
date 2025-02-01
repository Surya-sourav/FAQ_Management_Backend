# **FAQ Management System**

![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)  
![Express](https://img.shields.io/badge/Express-v4.17+-blue.svg)  
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-yellow.svg)  
![Redis](https://img.shields.io/badge/Redis-v6.0+-red.svg)

A robust, scalable, and high-performance **FAQ Management System** designed to streamline FAQ management with seamless multi-language support, leveraging the power of Node.js, Express, MongoDB, and Redis. This application allows dynamic and real-time translation of FAQs in multiple Indian languages with integrated caching for faster response times.

## **Live Deployment**
🚀 **Backend API:** [FAQ Management Backend](https://faq-management-backend.onrender.com/api/faqs)

## **Table of Contents**

- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Multi-language Support](#multi-language-support)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## **Key Features**

### 🌍 **Multi-language Support**
- **Seamless translations** for Indian languages such as:
  - Hindi (hi)
  - Bengali (bn)
  - Urdu (ur)
  - Kannada (kn)
  - Gujarati (gu)
- **Automatic fallback** to English when translations are unavailable.
- Real-time translations powered by the **Google Translate API**.

### 🚀 **Performance Optimizations**
- **Redis-based caching** for significantly improved response times.
- **Efficient MongoDB querying** ensures smooth database interactions.
- **Automatic cache invalidation** on content updates for consistency.

### ⚡ **Core Functionalities**
- CRUD operations for **FAQ management**.
- **WYSIWYG editor** for rich text formatting.
- **Admin panel** for easy FAQ management.
- RESTful **API architecture** for integration.
- Extensive **test coverage** to ensure reliable performance.

## **System Architecture**

```plaintext
📦 FAQ Management System
 ┣ 📂 config/
 ┃ ┗ 📜 database.js        # MongoDB configuration & connection handling
 ┣ 📂 controllers/
 ┃ ┗ 📜 faqController.js   # Business logic & CRUD operations
 ┣ 📂 middleware/
 ┃ ┗ 📜 cache.js           # Redis caching implementation
 ┣ 📂 models/
 ┃ ┗ 📜 Faq.js             # MongoDB schema with translation support
 ┣ 📂 routes/
 ┃ ┣ 📜 admin.js           # Admin panel routes
 ┃ ┗ 📜 faqRoutes.js       # API endpoints
 ┣ 📂 services/
 ┃ ┗ 📜 translationService.js  # Multi-language translation handling
 ┣ 📂 tests/
 ┃ ┣ 📂 integration/       # API & system integration tests
 ┃ ┗ 📂 unit/               # Unit tests for components
 ┣ 📜 server.js            # Application entry point
 ┣ 📜 .env                 # Environment configuration
 ┗ 📜 package.json         # Project dependencies
```

## **Screenshots**
![Schema](https://github.com/user-attachments/assets/0632a827-e57c-4aae-88a4-d148ede5d68f)
![GET_ALL](https://github.com/user-attachments/assets/bc66e454-cba1-4001-8b1e-11653e2d909e)
![POST](https://github.com/user-attachments/assets/de56bdaa-5141-4f10-8957-2cfaefef0e5f)
![image](https://github.com/user-attachments/assets/3a905e79-aca9-4009-9c76-01554c7e96fb)
![image](https://github.com/user-attachments/assets/1b3ff290-4f7c-486e-8dc8-733b3fa21f84)


## **Installation**
```sh
# Clone the repository
git clone https://github.com/your-repo/faq-management.git
cd faq-management

# Install dependencies
npm install

# Start the server
npm start
```

## **Configuration**
Ensure you set up your `.env` file with the necessary environment variables:
```sh
MONGO_URI=mongodb+srv://<your-mongo-url>
REDIS_HOST=localhost
REDIS_PORT=6379
TRANSLATION_API_KEY=your-google-translate-api-key
```

## **Testing**
```sh
npm test
```

❤️ Made with love for BharatFD by Surya Parida

