import React, { ReactElement, useEffect, useState } from "react";
import classnames from "classnames";
import DeleteIcon from "@material-ui/icons/Delete";

import { getAllProducts } from "../../../../api/shopping";
import styles from "../../KRuoka.module.scss";
import { MyKRUokaProducts } from "../../../../types";

const MyKRukoa = (): ReactElement => {
  const [myProducts, setMyProducts] = useState<Array<MyKRUokaProducts>>([]);
  useEffect(() => {
    const getAllMyProductsPromise = getAllProducts();
    getAllMyProductsPromise.then((productsResult: Array<MyKRUokaProducts>) => {
      setMyProducts(productsResult);
    });
  }, []);
  return (
    <ul className={classnames(styles.list)}>
      {myProducts.map((currentProduct: MyKRUokaProducts, index: number) => (
        <li
          key={`product-${index}`}
          role="button"
          onClick={() => console.debug("hello")}
        >
          <div className={styles.productMetaContainer}>
            <p>{currentProduct.productName}</p>
          </div>
          <div className={styles.btnContainer}>
            <button
              onClick={() => console.debug("hello")}
              className={styles.removeBtn}
              type="button"
            >
              <DeleteIcon htmlColor="#ffffff" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MyKRukoa;
