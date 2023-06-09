// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract MaticUsdPriceFeed {
  AggregatorV3Interface internal priceFeed;

  /**
   * Network: Matic
   * Aggregator: MATIC/USD
   * Address: 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada
   */
  constructor() {
    priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
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
