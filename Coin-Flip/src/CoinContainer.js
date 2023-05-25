import React, { useState } from "react";
import Coin from "./Coin";
import "./CoinContainer.css";
import coin_head from "./coin-head.jpg";
import coin_tail from "./coin-tail.jpg";
import { choice } from "./helpers";

function CoinContainer(props) {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  const flipcoin = () => {
    const newCoin = choice(props.coins);
    setCoin(newCoin);
    if (newCoin.side === "head") {
      setHeadCount((headCount) => headCount + 1);
    } else {
      setTailCount((tailCount) => tailCount + 1);
    }
  };

  const currCoin = coin ? <Coin side={coin.side} imgSrc={coin.imgSrc} /> : null;

  return (
    <div className="CoinContainer">
      <h2>Let's flip a coin</h2>
      {currCoin}
      <button onClick={flipcoin}>Flip Me!</button>
      <p>
        Out of {headCount + tailCount} flips , there have been {headCount} heads
        and {tailCount} tails.
      </p>
    </div>
  );
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc: coin_head,
    },
    {
      side: "tail",
      imgSrc: coin_tail,
    },
  ],
};

export default CoinContainer;
