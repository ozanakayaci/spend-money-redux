import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        photo: "https://neal.fun/spend/images/big-mac.jpg",
        title: "Big Mac",
        count: 0,
        price: 2,
      },
      {
        id: 2,
        photo: "https://neal.fun/spend/images/flip-flops.jpg",
        title: "Flip Flop",
        count: 0,
        price: 3,
      },
      {
        id: 3,
        photo: "https://neal.fun/spend/images/coca-cola-pack.jpg",
        title: "Coca-Cola Pack",
        count: 0,
        price: 5,
      },
      {
        id: 4,
        photo: "https://neal.fun/spend/images/movie-ticket.jpg",
        title: "Movie Ticket",
        count: 0,
        price: 12,
      },
      {
        id: 5,
        photo: "https://neal.fun/spend/images/book.jpg",
        title: "Book",
        count: 0,
        price: 15,
      },
      {
        id: 6,
        photo: "https://neal.fun/spend/images/lobster-dinner.jpg",
        title: "Lobster Dinner",
        count: 0,
        price: 45,
      },
      {
        id: 7,
        photo: "https://neal.fun/spend/images/video-game.jpg",
        title: "Video Game",
        count: 0,
        price: 60,
      },
      {
        id: 8,
        photo: "https://neal.fun/spend/images/amazon-echo.jpg",
        title: "Amazon Echo",
        count: 0,
        price: 99,
      },
      {
        id: 9,
        photo: "https://neal.fun/spend/images/year-of-netflix.jpg",
        title: "Year of Netflix",
        count: 0,
        price: 100,
      },
      {
        id: 10,
        photo: "https://neal.fun/spend/images/air-jordans.jpg",
        title: "Air Jordans",
        count: 0,
        price: 125,
      },
      {
        id: 11,
        photo: "https://neal.fun/spend/images/airpods.jpg",
        title: "Airpods",
        count: 0,
        price: 199,
      },
      {
        id: 12,
        photo: "https://neal.fun/spend/images/gaming-console.jpg",
        title: "Gaming Console",
        count: 0,
        price: 299,
      },
      {
        id: 13,
        photo: "https://neal.fun/spend/images/drone.jpg",
        title: "Drone",
        count: 0,
        price: 350,
      },
      {
        id: 14,
        photo: "https://neal.fun/spend/images/smartphone.jpg",
        title: "Smartphone",
        count: 0,
        price: 699,
      },
      {
        id: 15,
        photo: "https://neal.fun/spend/images/bike.jpg",
        title: "Bike",
        count: 0,
        price: 800,
      },
      {
        id: 16,
        photo: "https://neal.fun/spend/images/kitten.jpg",
        title: "Kitten",
        count: 0,
        price: 1500,
      },
      {
        id: 17,
        photo: "https://neal.fun/spend/images/puppy.jpg",
        title: "Puppy",
        count: 0,
        price: 1500,
      },
      {
        id: 18,
        photo: "https://neal.fun/spend/images/auto-rickshaw.jpg",
        title: "Auto Rickshaw",
        count: 0,
        price: 2300,
      },
      {
        id: 19,
        photo: "https://neal.fun/spend/images/horse.jpg",
        title: "Horse",
        count: 0,
        price: 2500,
      },
      {
        id: 20,
        photo: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        title: "Acre of Farmland",
        count: 0,
        price: 3000,
      },
      {
        id: 21,
        photo: "https://neal.fun/spend/images/designer-handbag.jpg",
        title: "Designer Handbag",
        count: 0,
        price: 5500,
      },
      {
        id: 22,
        photo: "https://neal.fun/spend/images/hot-tub.jpg",
        title: "Hot Tub",
        count: 0,
        price: 6000,
      },
      {
        id: 23,
        photo: "https://neal.fun/spend/images/luxury-wine.jpg",
        title: "Luxury Wine",
        count: 0,
        price: 7000,
      },
      {
        id: 24,
        photo: "https://neal.fun/spend/images/diamond-ring.jpg",
        title: "Diamond Ring",
        count: 0,
        price: 10000,
      },
      {
        id: 25,
        photo: "https://neal.fun/spend/images/jet-ski.jpg",
        title: "Jet Ski",
        count: 0,
        price: 12000,
      },
      {
        id: 26,
        photo: "https://neal.fun/spend/images/rolex.jpg",
        title: "Rolex",
        count: 0,
        price: 15000,
      },
      {
        id: 27,
        photo: "https://neal.fun/spend/images/ford-f-150.jpg",
        title: "Ford F-150",
        count: 0,
        price: 30000,
      },
      {
        id: 28,
        photo: "https://neal.fun/spend/images/tesla.jpg",
        title: "Tesla",
        count: 0,
        price: 75000,
      },
      {
        id: 29,
        photo: "https://neal.fun/spend/images/monster-truck.jpg",
        title: "Monster Truck",
        count: 0,
        price: 150000,
      },
      {
        id: 30,
        photo: "https://neal.fun/spend/images/ferrari.jpg",
        title: "Ferrari",
        count: 0,
        price: 250000,
      },
      {
        id: 31,
        photo: "https://neal.fun/spend/images/single-family-home.jpg",
        title: "Single Family Home",
        count: 0,
        price: 300000,
      },
      {
        id: 32,
        photo: "https://neal.fun/spend/images/gold-bar.jpg",
        title: "Gold Bar",
        count: 0,
        price: 700000,
      },
      {
        id: 33,
        photo: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
        title: "McDonalds Franchise",
        count: 0,
        price: 1500000,
      },
      {
        id: 34,
        photo: "https://neal.fun/spend/images/superbowl-ad.jpg",
        title: "Superbowl Ad",
        count: 0,
        price: 5250000,
      },
      {
        id: 35,
        photo: "https://neal.fun/spend/images/yacht.jpg",
        title: "Yacht",
        count: 0,
        price: 7500000,
      },
      {
        id: 36,
        photo: "https://neal.fun/spend/images/m1-abrams.jpg",
        title: "M1 Abrams",
        count: 0,
        price: 8000000,
      },
      {
        id: 37,
        photo: "https://neal.fun/spend/images/formula-1-car.jpg",
        title: "Formula 1 Car",
        count: 0,
        price: 15000000,
      },
      {
        id: 38,
        photo: "https://neal.fun/spend/images/apache-helicopter.jpg",
        title: "Apache Helicopter",
        count: 0,
        price: 31000000,
      },
      {
        id: 39,
        photo: "https://neal.fun/spend/images/mansion.jpg",
        title: "Mansion",
        count: 0,
        price: 45000000,
      },
      {
        id: 40,
        photo: "https://neal.fun/spend/images/make-a-movie.jpg",
        title: "Make a Movie",
        count: 0,
        price: 100000000,
      },
      {
        id: 41,
        photo: "https://neal.fun/spend/images/boeing-747.jpg",
        title: "Boeing 747",
        count: 0,
        price: 148000000,
      },
      {
        id: 42,
        photo: "https://neal.fun/spend/images/mona-lisa.jpg",
        title: "Mona Lisa",
        count: 0,
        price: 780000000,
      },
      {
        id: 43,
        photo: "https://neal.fun/spend/images/skyscraper.jpg",
        title: "Skyscraper",
        count: 0,
        price: 850000000,
      },
      {
        id: 44,
        photo: "https://neal.fun/spend/images/cruise-ship.jpg",
        title: "Cruise Ship",
        count: 0,
        price: 930000000,
      },
      {
        id: 45,
        photo: "https://neal.fun/spend/images/nba-team.jpg",
        title: "NBA Team",
        count: 0,
        price: 2120000000,
      },
    ],
    totalMoney: 100000000000,
  },
  reducers: {
    addBasket: (state, action) => {
      if (state.totalMoney >= 0 + action.payload.price) {
        state.products.filter((item) =>
          item.id === action.payload.id ? (item.count += 1) : false
        );
      }
    },
    removeBasket: (state, action) => {
      state.products.filter((item) =>
        item.id === action.payload.id ? (item.count -= 1) : false
      );
    },
    updateBasket: (state, action) => {
      state.products.filter((item) =>
        item.id == action.payload[0].id
          ? (item.count = Number(action.payload[1]))
          : false
      );
    },
    totalMoneyCalculate: (state, action) => {
      state.totalMoney =
        100000000000 -
        Object.keys(state.products).reduce(
          (prev, key) =>
            (prev += state.products[key].count * state.products[key].price),
          0
        );
    },
  },
});

export const { addBasket, removeBasket, updateBasket, totalMoneyCalculate } =
  productsSlice.actions;
export default productsSlice.reducer;
