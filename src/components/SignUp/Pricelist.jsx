import css from "./Pricelist.module.css";

import "react-slideshow-image/dist/styles.css";

const Pricelist = () => {
  return (
    <div className={css.PricelistContainer}>
      <div className={css.PricelistTabsContainer}>
        <div>
          <ul className={css.PricelistItemlist}>
            <h4 className={css.PricelistHeader}>SEKCJA</h4>
            <li className={css.PriceListText}>BJJ</li>
            <li className={css.PriceListText}>Kickboxing</li>
            <li className={css.PriceListText}>Box</li>
            <li className={css.PricelistSpan}>120 PLN</li>
          </ul>
        </div>
        <div>
          <ul className={css.PricelistItemlist}>
            <h4 className={css.PricelistHeader}>INDYWIDUALNE</h4>
            <li className={css.PriceListText}>BJJ</li>
            <li className={css.PriceListText}>Kickboxing</li>
            <li className={css.PriceListText}>Box</li>
            <li className={css.PricelistSpan}>120 PLN</li>
          </ul>
        </div>
        <div>
          <ul className={css.PricelistItemlist}>
            <h4 className={css.PricelistHeader}>KIDDO</h4>
            <li className={css.PriceListText}>BJJ</li>
            <li className={css.PriceListText}>Kickboxing</li>
            <li className={css.PriceListText}>Box</li>
            <li className={css.PricelistSpan}>120 PLN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
