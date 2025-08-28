📱 Metal Prices App

A React Native mobile application that displays real-time prices of precious metals including Gold, Silver, Platinum, and Palladium.
The app is built with Redux Toolkit and Redux-Saga for robust state management and asynchronous API handling, while React Navigation powers smooth navigation between screens.

This app provides a clean, modern, and responsive UI where each metal has its own card with live updates, error handling, and detailed information on selection.

🚀 Features

📊 Real-time Metal Prices
Fetches and displays 24K price for multiple metals (Gold, Silver, Platinum, Palladium) directly from GoldAPI.

⏳ Independent Loaders
Each card has its own loader, ensuring the user sees live progress for individual metals instead of blocking the entire screen.

🕒 Timestamps Included
Alongside prices, the time and date of the last updated price is displayed so users know when data was last refreshed.

🔄 Error Handling

Each metal card handles errors separately (e.g., network failure, API errors).

Displays a readable error message directly inside the card instead of breaking the entire app.

📑 Detail Screen
Tapping on a metal card navigates to a Detail Screen, where the user can view:

Current 24K Price

Previous Close Price

Previous Open Price

Date of the data

Exact Time of last update

🎨 Polished UI

Cards with shadows, rounded corners, and light background colors.

Intro/Splash screen that enhances the user experience with branding.

Responsive design that adapts well on both Android and iOS.

🛠️ Tech Stack

React Native (0.80.2) – Core framework for building cross-platform mobile apps.

React (19.1.0) – UI library powering components.

Redux Toolkit (2.8.2) – Modern Redux state management with slices and actions.

Redux-Saga (1.2.3) – Handles asynchronous flows like API calls.

React Navigation (7.x) – Smooth navigation between screens (Stack navigation).

Axios (1.11.0) – For API requests and error handling.

📖 Approach
🔹 State Management

Implemented Redux Toolkit slice (metalsSlice) to manage data, loading states, and error states.

Designed independent flags for each metal (Gold, Silver, Platinum, Palladium) so that the loading/error of one doesn’t block others.

🔹 Async Handling with Saga

Used Redux-Saga watchers (takeLatest) to handle API calls.

Implemented sequential API fetching with yield call to avoid hitting API rate limits (GoldAPI has strict free-tier limits).

Each request dispatches either fetchMetalSuccess (on success) or fetchMetalFailure (on error).

🔹 Navigation

Used React Navigation Stack for a smooth multi-screen experience:

IntroScreen → Splash/branding screen shown for 3 seconds (header hidden).

HomeScreen → Main dashboard showing all metal prices in cards.

DetailScreen → Shows full details of the selected metal.

🔹 Error Handling

All API errors are caught in Saga and then displayed in the respective card.

Each card shows its own error message ("Request failed with status code XXX").

Ensures the app never crashes even if one or more metals fail to fetch.

🔹 UI/UX Design

Used FlatList for smooth scrolling of metal cards.

Cards UI:

Background color with shadows.

Rounded corners for a modern look.

Each card shows metal name, current price, and last update time.

Detail Screen styled with info cards to neatly separate each data point.

Splash Screen provides branding ("Metal Prices") before loading the app.

⚠️ Challenges

API Rate Limit (429 Too Many Requests)

GoldAPI restricts free accounts to a limited number of requests per minute.

✅ Fixed by switching from parallel requests (yield all) to sequential requests (for loop with yield call).

API Authentication (403 Forbidden)

If the API key is invalid or expired, GoldAPI rejects requests.

✅ Handled with proper error messages at the card level.

✅ Future Enhancements

Add more metals like Rhodium, Copper, Nickel, Aluminium.

Show price charts (e.g., 7-day, 30-day trends) using chart libraries.

Implement dark mode toggle for better UX.

Add offline persistence with AsyncStorage or SQLite so last fetched data remains available without internet.

Auto-refresh data every few minutes for live market updates.

✨ This project is part of the Simplify Money Internship Assignment (Front End Track).
Built with ❤️ by Divyanshi Awasthi.
