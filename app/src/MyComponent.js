import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <h1>Kovan Storage</h1>
        <p>
          Smart contracts via Kovan TestNet.
        </p>
      </div>

      <div className="section">
        <h2>Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>Number Storage</h2>
        <p>
          Last number
        </p>
        <p>
          <strong>Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SimpleStorage"
            method="storedData"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="SimpleStorage" method="set" />
      </div>

      <div className="section">
        <h2>Data</h2>
        <a class="badge badge-success" href="https://kovan.etherscan.io/address/0xfbbb46e12c8c639680b2e5468f7a07cc66e2f481" target="_blank">https://kovan.etherscan.io</a>
      </div>
    </div>
  );
};