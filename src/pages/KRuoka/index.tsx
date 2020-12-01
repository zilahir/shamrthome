import React, { ReactElement, useState } from "react";

import { apiendPoints } from "../../api/apiEndpoints";
import { asyncRequest } from "../../utils/requests";

import styles from "./KRuoka.module.scss";

const KRuoka = (): ReactElement => {
  const [products, setProducts] = useState([]);

  function handleSearch(searchQuery: string) {
    asyncRequest(apiendPoints.kruoka.findProduct, {
      itemToSearch: searchQuery.toLowerCase(),
    }).then((result: any) => {
      if (Array.isArray(result.result)) {
        setProducts(result.result);
      }
    });
  }
  return (
    <>
      <input
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
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
