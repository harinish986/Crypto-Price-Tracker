# Crypto Tracker App

The **Crypto Tracker App** is a React application that allows users to track and display information about various cryptocurrencies. This app retrieves cryptocurrency data from https://api.coinranking.com/v2/coins API and provides features such as sorting by price, searching for specific cryptocurrency, and displaying relevant details.

## Components

### CryptoInfo

The `CryptoInfo` component serves as the main component of the app. It fetches cryptocurrency data from https://api.coinranking.com/v2/coins API, displays a search bar for filtering cryptocurrencies by name, and dynamically sorts and renders the cryptocurrency data. Key features and functionality include:

- **State Management**: It uses the `useState` hook to manage the state of `cryptocurrency`, `search`, and `ascending` (sorting order) variables.

- **API Data Fetching**: The component uses the `useEffect` hook to fetch initial cryptocurrency data from the API using the Axios library. It then sets the fetched data to the `cryptocurrency` state.

- **Sorting**: The component has a `handleSort` function that toggles the sorting order (`ascending`) and then calls the `fetchCoins` function to re-fetch and re-sort the cryptocurrency data based on the new sorting order.

- **Filtering**: The input in the search bar triggers a change in the `search` state, which filters the `cryptocurrency` data based on the entered search query.

- **Rendering**: The `currencyFilter` array (filtered cryptocurrency data) is mapped to the `Crypto` component to display each cryptocurrency's details.

### Crypto

The `Crypto` component is responsible for rendering individual cryptocurrency information within the `CryptoInfo` component. It receives props such as `name`, `img`, `symbol`, `price`, `volume`, and `btc` from its parent component. Key features and functionality include:

- **Props Handling**: The component accepts props such as `name`, `img`, `symbol`, `price`, `volume`, and `btc`.

- **Number Formatting**: The component uses the `Number.toFixed` method to format `price`, `volume`, and `btc` values to have three decimal places.

- **Rendering**: It renders each cryptocurrency's details, including its name, icon image, symbol, price, trading volume, and price in Bitcoin (btc).

## How It Works

1. When the app is loaded, the `CryptoInfo` component fetches cryptocurrency data from the external API and displays it.
2. Users can use the search bar to filter cryptocurrencies by name, which triggers the `changeHandler` function to update the `search` state.
3. Clicking the "Sort Ascending/Descending" button toggles the sorting order (`ascending`) and re-fetches and re-sorts the cryptocurrency data.
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

### Start the Development Server

Run the following command to start the development server:

```bash
npm start
```

This will launch the app in your default web browser. You can access it at `http://localhost:3000`.
Live project is available at

## What the Project Does

The Crypto Tracker App allows users to:

- View a list of cryptocurrencies with their names, symbols, prices, trading volumes, and prices in Bitcoin.
- Search for specific cryptocurrencies by name.
- Sort the list of cryptocurrencies in either ascending or descending order based on their prices.

In summary, the app provides a user-friendly interface to track and visualize cryptocurrency data, offering filtering and sorting functionalities to enhance the user experience.
