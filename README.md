# WeatherApp

A React weather dashboard that lets you search for a city and view its current weather conditions and forecast details.

## Features

- Search for cities using an asynchronous, debounced search field.
- Display current temperature, weather description, feels-like temperature, wind speed, humidity, and pressure.
- Display forecast entries in an expandable accordion.
- Show weather condition icons from the `public/icons` directory.
- Responsive single-page interface powered by React and Vite.

## Tech stack

- React 18
- Vite 5
- JavaScript / JSX
- CSS
- [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities) for city search and coordinates
- [OpenWeatherMap API](https://openweathermap.org/api) for current weather and forecast data
- `react-select-async-paginate` for city search
- `react-accessible-accordion` for forecast details

## Project structure

```text
src/
  App.jsx                         Main application state and API orchestration
  api.jsx                         Weather and city-search API configuration
  main.jsx                        React application entry point
  Components/
    search/search.jsx             City search component
    Current-Weather/              Current weather card
    Forecast/                     Expandable forecast component
public/
  icons/                          Weather condition icons
```

## Getting started

### Prerequisites

- Node.js and npm
- A GeoDB Cities RapidAPI key
- An OpenWeatherMap API key

### Installation

```bash
git clone https://github.com/ArnabSen123/WeatherApp.git
cd WeatherApp
npm install
```

### Configure API access

The application reads its API configuration from `src/api.jsx`. Add valid credentials there for local development, or preferably refactor the values to Vite environment variables before deploying. Never commit real API keys to a public repository.

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## How it works

1. The search component queries GeoDB Cities as the user types.
2. Selecting a city provides its latitude and longitude to `App`.
3. `App` requests current conditions and forecast data from OpenWeatherMap in parallel.
4. `CurrentWeather` renders the current conditions.
5. `Forecast` renders forecast entries with expandable weather details.

## Security note

API keys should be treated as secrets. If a key has been committed to version control, revoke or rotate it through the relevant provider and move the replacement values to environment variables before using the application in production.
