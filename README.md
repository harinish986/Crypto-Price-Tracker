Absolutely! Here's a combined `README.md` that includes both the frontend and backend sections:

````markdown
# Crypto Tracker App

The **Crypto Tracker App** is a React application that allows users to track and display information about various cryptocurrencies. This app retrieves cryptocurrency data from the CoinRanking API and provides features such as sorting by price, searching for specific cryptocurrencies, and displaying relevant details.

## Components

### CryptoInfo

The `CryptoInfo` component serves as the main component of the app. It fetches cryptocurrency data from the CoinRanking API, displays a search bar for filtering cryptocurrencies by name, and dynamically sorts and renders the cryptocurrency data. Key features and functionality include:

- **State Management**: It uses the `useState` hook to manage the state of `cryptocurrency`, `search`, and `ascending` (sorting order) variables.

- **API Data Fetching**: The component uses the `useEffect` hook to fetch initial cryptocurrency data from the API using the Axios library. It then sets the fetched data to the `cryptocurrency` state.

- **Sorting**: The component has a `handleSort` function that toggles the sorting order (`ascending`) and then calls the `sortCryptocurrency` function to re-sort the cryptocurrency data based on the new sorting order.

- **Filtering**: The input in the search bar triggers a change in the `search` state, which filters the `cryptocurrency` data based on the entered search query.

- **Rendering**: The `currencyFilter` array (filtered cryptocurrency data) is mapped to the `Crypto` component to display each cryptocurrency's details.

### Crypto

The `Crypto` component is responsible for rendering individual cryptocurrency information within the `CryptoInfo` component. It receives props such as `name`, `img`, `symbol`, `price`, `volume`, and `btc` from its parent component. Key features and functionality include:

- **Props Handling**: The component accepts props such as `name`, `img`, `symbol`, `price`, `volume`, and `btc`.

- **Number Formatting**: The component uses the `Number.toFixed` method to format `price`, `volume`, and `btc` values to have five decimal places.

- **Rendering**: It renders each cryptocurrency's details, including its name, icon image, symbol, price, trading volume, and price in Bitcoin (btc).

## How It Works

1. When the app is loaded, the `CryptoInfo` component fetches cryptocurrency data from the external API and displays it.
2. Users can use the search bar to filter cryptocurrencies by name, which triggers the `changeHandler` function to update the `search` state.
3. Clicking the "Sort Ascending/Descending" button toggles the sorting order (`ascending`) and re-sorts the cryptocurrency data.
4. The `Crypto` component is responsible for displaying each cryptocurrency's information in a visually organized manner.

## How to Build and Run the Project

To build and run the Crypto Tracker App locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```
````

### Start the Development Server

Run the following command to start the development server:

```bash
npm start
```

This will launch the app in your default web browser. You can access it at `http://localhost:3000`.

## Backend Implementation

The Crypto Tracker App's backend is responsible for fetching cryptocurrency data from the CoinRanking API and serving it to the frontend. The backend is built using Node.js and the Express framework, providing a simple and efficient API for the frontend to interact with.

### Server (server.js or app.js)

The server component initializes the Express application, configures CORS (Cross-Origin Resource Sharing) to allow requests from the frontend, and defines the API routes to fetch cryptocurrency data.

The backend follows these key steps:

1. **Dependencies**: The `express`, `axios`, and `cors` packages are used. Install them using `npm install express axios cors`.

2. **Server Setup**: The backend initializes the Express application, sets up CORS with allowed origins, and defines the API port.

3. **API Route**: The `/api/crypto` route is defined to handle GET requests. When a request is made to this route, the server fetches cryptocurrency data from the CoinRanking API using the `axios` library.

4. **Data Transformation**: The fetched data is then sent as a JSON response to the frontend after being processed, and if there's an error, an appropriate error response is sent.

### How It Works

1. When the frontend app is loaded, it makes API requests to the backend's `/api/crypto` route to retrieve cryptocurrency data.

2. The backend, in response to the API request, fetches the cryptocurrency data from the CoinRanking API using the `axios` library.

3. The fetched data is then returned to the frontend as a JSON response.

4. The frontend receives the cryptocurrency data and renders it on the screen, allowing users to interact with and sort the data as desired.

## How to Run the Backend

To run the backend of the Crypto Tracker App, follow these steps:

1. Navigate to the backend directory in the terminal.

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Start the Backend Server

Run the following command to start the backend server:

```bash
node Server.js
```

The backend server will start, and it will be ready to handle API requests from the frontend.
