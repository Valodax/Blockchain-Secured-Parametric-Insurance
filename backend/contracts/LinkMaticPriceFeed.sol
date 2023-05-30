// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract LinkMaticPriceFeed {
  AggregatorV3Interface internal priceFeed;

  /**
   * Network: Matic
   * Aggregator: LINK/MATIC
   * Address: 0x12162c3E810393dEC01362aBf156D7ecf6159528
   */
  constructor() {
    priceFeed = AggregatorV3Interface(0x12162c3E810393dEC01362aBf156D7ecf6159528);
  }

  /**
   * Returns the latest price.
   */
  function getLatestPrice() public view returns (int) {
    // prettier-ignore
    (
            /* uint80 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
    return price;
  }
}
