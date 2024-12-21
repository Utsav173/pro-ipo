# pro-ipo

A Next.js application to track live Grey Market Premium (GMP) data, estimated listing prices, and provide analysis for upcoming and ongoing IPOs in the Indian stock market.

[![Vercel](https://vercelbadge.vercel.app/api/other/pro-ipo)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FUtsav173%2Fpro-ipo)

## Overview

pro-ipo is designed to help investors stay informed about the IPO landscape in India. It provides real-time Grey Market Premium (GMP) updates, estimated listing prices, and key dates for upcoming and active Initial Public Offerings. The platform aims to simplify IPO research and provide crucial insights for potential investments.

**Key Features:**

*   **Live IPO GMP Data:** Get the latest Grey Market Premium figures for IPOs.
*   **Estimated Listing Prices:** View calculated estimated listing prices based on GMP.
*   **IPO Analysis:**  Provides key information like IPO size, lot size, and important dates.
*   **Upcoming and Ongoing IPOs:** Track both upcoming IPOs and those currently open for subscription.
*   **Search and Filtering:** Easily find specific IPOs using the search functionality.
*   **Sorting:** Sort IPO data by various criteria like opening date, GMP, etc.
*   **Mobile-Friendly Design:**  Optimized for viewing on both desktop and mobile devices.
*   **Automatic Data Refresh:**  Data is automatically updated periodically.
*   **Key Statistics:** View summarized information on active and upcoming IPOs, and average GMP.

## Technologies Used

*   **Next.js:**  A React framework for building performant web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:**  A strongly typed superset of JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for styling.
*   **Radix UI:** A library of unstyled, accessible UI primitives (Accordion, Select).
*   **Framer Motion:** A library for creating smooth and engaging animations.
*   **Lucide React:** A collection of beautiful SVG icons.
*   **next-pwa:**  Library for adding Progressive Web App functionalities.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   Node.js (version 18 or higher recommended)
*   npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Utsav173/pro-ipo
    cd pro-ipo
    ```

2. Install dependencies:
    ```bash
    npm install  # or yarn install
    ```

### Environment Variables

While this project doesn't explicitly require environment variables based on the provided code, it's good practice to mention their potential use. If you intend to integrate with external APIs or services in the future, you might need to create a `.env.local` file in the root of your project and add your environment variables there.

### Running the Development Server

```bash
npm run dev # or yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Building and Running for Production

1. Build the application:
    ```bash
    npm run build # or yarn build
    ```

2. Start the production server:
    ```bash
    npm run start # or yarn start
    ```

## Usage

*   **Homepage:**  The main page displays a dashboard with the latest IPO GMP data in a table format for desktop and as an accordion list on mobile.
*   **Searching:** Use the search bar to filter the IPO list by name.
*   **Sorting:** Click on the table headers (desktop view) to sort the data by that column. The sorting order will toggle between ascending and descending on subsequent clicks.
*   **Refreshing Data:** Click the refresh button to fetch the latest data manually. The data also automatically refreshes periodically.
*   **Mobile View:** On smaller screens, the data is presented in an accordion format, allowing you to expand each IPO for detailed information.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## Future Enhancements

*   **User Authentication:**  Allow users to create accounts and save their preferences.
*   **Watchlist Feature:**  Enable users to add IPOs to a personal watchlist.
*   **Notifications:** Implement notifications for GMP updates or IPO openings/closings.
*   **Historical Data:**  Provide historical GMP data and charting.
*   **More Detailed IPO Analysis:** Include information on financial performance, company details, etc.
*   **Integration with Broker APIs:** Potentially integrate with brokerage APIs for direct application.

## Data Source

The IPO GMP data is sourced from the Varise website.

## License

This project is licensed under the MIT License.
