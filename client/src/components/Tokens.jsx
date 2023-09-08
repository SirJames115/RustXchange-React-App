import React from "react";
import tokenList from "../tokenList.json";

function Token() {
  return (
    <>
      <div className="row dflex">
        <p className="h3 justify-content-start">
          List of White-listed Tokens in RustXchange DEX
        </p>
        <div className="">
          <table className="table table-dark table-striped-columns mb-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbole</th>
                <th>Decimal</th>
              </tr>
            </thead>
            <tbody>
              {tokenList.map((e, i) => {
                return (
                  <tr className="ts" key={i}>
                    <td>
                      <img src={e.img} height={30} alt="tokenLogo" />
                      {" " + e.name}
                    </td>
                    <td>{e.ticker}</td>
                    <td>{e.decimals}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Token;
