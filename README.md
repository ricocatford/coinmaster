# CoinMaster

A powerful and intuitive cryptocurrency application designed to provide **real-time market data** and a **personalized asset tracking experience**. Stay on top of your crypto investments with live metrics, detailed asset information, and an asset tracker.

---

## ✨ Features

**CoinMaster** offers a comprehensive suite of features to help you navigate the dynamic world of cryptocurrencies:

-   **📊 Real-time Market Data:** Get instant access to live prices, market capitalization, 24-hour trading volume, and percentage changes for a vast array of cryptocurrencies.
-   **🔍 Detailed Asset Pages:** Dive deeper into individual cryptocurrencies with dedicated pages showcasing historical data, supply information, and more.
-   **📈 Intuitive Data Visualization:** Easily digest complex market trends with clear and concise data presentation.
-   **⭐ Personalized Tracker:** Create a customized watchlist of your favorite cryptocurrencies to monitor their performance at a glance.
-   **⚡ Blazing Fast Performance:** Built with modern web technologies to ensure a smooth and responsive user experience.
-   **📱 Responsive Design:** Access your crypto data seamlessly across desktops, tablets, and mobile devices.

---

## 🚀 Technologies Used

**CoinMaster** is built with a modern and robust tech stack:

-   **Frontend:**
    -   **Next.js**
    -   **TypeScript**
    -   **Zustand**
    -   **Custom CSS Modules + Tailwind**
    -   **Recharts.js**
-   **Data Fetching:**
    -   **Coincap OpenAPI**
-   **Deployment:**
    -   **Vercel**

---

## 🛠️ Installation & Setup

To run CoinMaster locally for development:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ricocatford/coinmaster.git
    cd coinmaster
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project. This file will store sensitive information, therefore remember adding it to your `.gitignore` file if it's not ignored already!
    Create an account for Coincap API and navigate to your dashboard for generating the API Key and implement it in your project:

    ```
    API_KEY=your_api_key_here
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Live Demo

Experience **CoinMaster**:
[https://coinmaster-delta.vercel.app](https://coinmaster-delta.vercel.app)

---

## 📂 Project Structure

A high-level overview of the project's directory structure:

```

├── public/
│   └── assets/
│       ├── images/
│       └── svg/
└── src/
    ├── app/
    │   ├── layout.tsx                          # Root layout
    │   ├── (app)/
    │   │   ├── layout.tsx                      # Dashboard layout
    │   │   ├── asset/[id]/page.tsx             # Asset Details page
    │   │   ├── market/page.tsx                 # Market (Explore) page
    │   │   └── tracker/page.tsx                # Tracker page
    │   ├── (public)/
    │   │   ├── layout.tsx                      # Public layout
    │   │   ├── page.tsx                        # Home page
    │   │   └── about/page.tsx                  # About page
    │   └── api/                                # Serverless API
    │       ├── asset/[id]/route.ts             # Asset Details endpoint
    │       ├── asset/[id]/history/route.ts     # Asset Price History endpoint
    │       └── assets/route.ts                 # All Assets endpoint
    ├── assets/
    │   ├── data/                               # JSON files containing data such as About info sections, Nav links...
    │   └── styles/                             # All CSS modules
    │       ├── components/                     # Mirrors components folder holding all *.tsx files, for their corresponding CSS modules
    │       │   ├── buttons/
    │       │   ├── cards/
    │       │   └── ...
    │       └── globals.css                     # Global styles
    ├── components/                             # Holds all components available across the app
    │   ├── buttons/
    │   ├── cards/
    │   ├── layout/
    │   │   ├── footer/
    │   │   ├── navbar/
    │   │   └── responsive-navbar/
    │   ├── pages/
    │   │   ├── about/
    │   │   ├── asset/
    │   │   ├── home/
    │   │   ├── market/
    │   │   └── tracker/
    │   └── ...
    ├── hooks/                                  # Custom hooks folder
    ├── lib/                                    # Utility functions
    ├── providers/                              # Zustand store provider
    ├── stores/                                 # Zustand store
    └── types/                                  # Folder containing types

```
