import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  tweetList: [
    {
      displayName: "Samad",
      username: "samk101",
      text: "this is an image I guess",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
      image:
        "https://images.unsplash.com/photo-1618215978188-1b72c6da19c0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      displayName: "Samad",
      username: "samk101",
      text: "hello people",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    },
    {
      displayName: "Samad",
      username: "samk101",
      text: "This stuff is lit yo",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    },
    {
      displayName: "Samad",
      username: "samk101",
      text: "Welcome to the Twilight Zone",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
      image:
        "https://media4.giphy.com/media/7Z6WWKCO2lpwA/200.webp?cid=ecf05e47oahha0z2dr9x7el2ommgiyvbn2z1a6y7kblz9ysh&rid=200.webp&ct=g",
    },
    {
      displayName: "Samad",
      username: "samk101",
      text: "Testing testing 1 2 3... ",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
      image:
        "https://media3.giphy.com/media/ghHDuqJ1uh9vP2gKdC/200.webp?cid=ecf05e47y2b3xankpiykyjfqkhfwkff33f4vi5avp6dbi3w0&rid=200.webp&ct=g",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addTweet(data) {
    dispatch({
      type: "ADD_TWEET",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tweetList: state.tweetList,
        addTweet,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
