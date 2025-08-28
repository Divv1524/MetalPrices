// src/redux/saga/metalsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchMetalsRequest, fetchMetalSuccess, fetchMetalFailure } from '../slices/metalsSlice';

const API_KEY = "goldapi-1j4kio19mevkaoek-io";

const METALS = {
  gold: "XAU",
  silver: "XAG",
  platinum: "XPT",
  palladium: "XPD",
};

// fetch a single metal
function* fetchMetal(metalName) {
  try {
    const res = yield call(axios.get, `https://www.goldapi.io/api/${METALS[metalName]}/USD`, {
      headers: { "x-access-token": API_KEY },
    });

    const metalData = {
      name: metalName.charAt(0).toUpperCase() + metalName.slice(1),
      price24k: res.data.price,
      previousClose: res.data.prev_close_price,
      previousOpen: res.data.open_price,
      date: new Date(res.data.timestamp * 1000).toLocaleDateString(),
      time: new Date(res.data.timestamp * 1000).toLocaleTimeString(),
      timestamp: res.data.timestamp,
    };

    yield put(fetchMetalSuccess({ metalName, metalData }));
  } catch (error) {
    yield put(fetchMetalFailure({ metalName, error: error.message }));
  }
}

function* fetchAllMetals() {
  const names = Object.keys(METALS);
  for (let name of names) {
    yield call(fetchMetal, name);

  }
  // yield all(names.map((name) => call(fetchMetal, name)));     through this we can fetch data parallel, but since I am using free resouce It is restricted
}

// root saga for metals
export default function* metalsSaga() {
  yield takeLatest(fetchMetalsRequest.type, fetchAllMetals);
}
