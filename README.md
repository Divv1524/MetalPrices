📱 Metal Prices App

A React Native application that displays real-time prices of precious metals (Gold, Silver, Platinum, Palladium).
The app is built with Redux Toolkit + Redux-Saga for state management and API handling, and React Navigation for screen navigation.

🚀 Features

📊 Fetch and display real-time metal prices (24k price).

⏳ Each metal shows its own loader until the data is fetched.

🕒 Shows time & date for the price fetched.

🔄 Handles API errors (shows error messages when request fails).

📑 Detail Screen for each metal with:

Current 24k Price

Previous Close Price

Previous Open Price

Date & Time

🎨 Clean & attractive UI with styled cards.

⛓ Powered by GoldAPI for fetching data.

🛠️ Tech Stack

React Native (0.80.2)

React (19.1.0)

Redux Toolkit (2.8.2)

Redux-Saga (1.2.3)

React Navigation (7.x)

Axios (for API calls)

📖 Approach

State Management:

Used Redux Toolkit slices to manage metal state (data, loading, error).

Each metal has independent loading/error flags.

Async Handling:

Used Redux-Saga (takeLatest) to handle API calls.

Implemented sequential fetching to avoid hitting API rate limits.

Navigation:

Used React Navigation (Stack) for:

IntroScreen → splash screen (3 sec)

HomeScreen → metal list

DetailScreen → full details

Error Handling:

API errors caught in saga and displayed on UI per metal.

Loading indicator shown until data is available.

UI:

Cards with shadow, rounded corners, and background colors.

Each card shows metal name, price, and time.

⚠️ Challenges

Hitting API too quickly (429 errors → Too Many Requests).

✅ Fixed by fetching sequentially in saga.

GoldAPI free plan sometimes returns 403 (Forbidden) if key is invalid/expired.

✅ Added proper error messages.

✅ Future Enhancements

Add more metals (Rhodium, Copper, etc.).

Integrate charts for price trends.

Dark mode UI.

Persist data offline with AsyncStorage.
