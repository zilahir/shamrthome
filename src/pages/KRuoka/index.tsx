import React, { ReactElement, useState } from "react";
import classnames from "classnames";

import { apiendPoints } from "../../api/apiEndpoints";
import { asyncRequest } from "../../utils/requests";
import { insertNewProductItem } from "../../api/kruoka";
import Modal from "../../components/common/Modal";
import Loading from "../../components/common/Loading";

import styles from "./KRuoka.module.scss";

const KRuoka = (): ReactElement => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
  const [customName, setCustomName] = useState<string>("");
  const [currentProduct, setCurrentProduct] = useState<Record<string, any>>({});
  const [isLoading, toggleLoading] = React.useState<boolean>(false);

  function handleSearch(searchQuery: string) {
    toggleLoading(true);
    asyncRequest(apiendPoints.kruoka.findProduct, {
      itemToSearch: searchQuery.toLowerCase(),
    }).then((result: any) => {
      toggleLoading(false);
      if (Array.isArray(result.result)) {
        setProducts(result.result);
      }
    });
  }

  function addProduct() {
    console.debug('currentProduct', currentProduct)
    const productObject = {
      productId: currentProduct.id,
      productName: currentProduct.localizedName.finnish,
      customProductName: customName,
    };
    insertNewProductItem(productObject);
  }

  function handleProductAdding(chosenProduct: any) {
    setCurrentProduct(chosenProduct);
    toggleModalOpen(true);
  }
  return (
    <>
      <div className={styles.listContainer}>
        <input
          className={styles.input}
          type="text"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <Loading isLoading={isLoading} />
        <ul className={classnames(styles.list, isLoading ? styles.hidden : "")}>
          {products.map((currentProduct: any, index: number) => (
            <li
              key={`product-${index}`}
              role="button"
              onClick={() => handleProductAdding(currentProduct)}
            >
              <div className={styles.productMetaContainer}>
                <p>{currentProduct.localizedName.finnish}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isModal={isModalOpen}
        setModal={toggleModalOpen}
        containerClassName={styles.modal}
      >
        <div className={styles.modalContainer}>
          <label>
            Custom product name
            <input
              type="text"
              className={styles.customNameInput}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCustomName(event.target.value)
              }
              value={customName}
            />
          </label>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={styles.addBtn}
            type="button"
            onClick={() =>
              addProduct()
            }
          >
            Add this product
          </button>
        </div>
      </Modal>
    </>
  );
};

export default KRuoka;
