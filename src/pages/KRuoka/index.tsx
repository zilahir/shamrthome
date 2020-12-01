import React, { ReactElement, useState } from "react";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

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

  function addProduct(productName: number, productId: string) {
    const productObect = {
      productId,
      productName,
    };
    console.debug("productObject", productObect);
  }
  return (
    <div className={styles.listContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <ul className={styles.list}>
        {products.map((currentProduct: any, index: number) => (
          <li key={`product-${index}`}>
            <div className={styles.productMetaContainer}>
              <p>{currentProduct.localizedName.finnish}</p>
            </div>
            <div className={styles.actionBtnContainer}>
              <button
                type="button"
                onClick={() =>
                  addProduct(
                    currentProduct.localizedName.finnish,
                    currentProduct.id
                  )
                }
              >
                <AddCircleRoundedIcon htmlColor="#ffffff" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KRuoka;
