import React, { ReactElement, useState } from "react";

import { searchForKruokaProducts } from "../../api/kruoka";

import styles from "./KRuoka.module.scss";

const KRuoka = (): ReactElement => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch() {
    searchForKruokaProducts(searchQuery).then((result: any) => {
      console.debug('result', result)
      setProducts(result);
    });
  }
  return (
    <>
      <input
        type="text"
        onChange={(event) => setSearchQuery(event.target.value)}
        onBlur={() => handleSearch()}
        value={searchQuery}
      />
      <ul className={styles.list}>
        {products.map((currentProduct: any, index: number) => (
          <li key={`product-${index}`}>
            {currentProduct.localizedName.finnish}
          </li>
        ))}
      </ul>
    </>
  );
};

export default KRuoka;
