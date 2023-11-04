import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import css from "./HomePage.module.css";
import React from "react";

const Header = () => {
  return (
    <div>
      <Swiper
        className={css.HeaderBackgroundContainer}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: `.${css.HeaderSwiper}`,
          bulletClass: `${css.HeaderSwiperItem}`,
          bulletActiveClass: `${css.ActiveItem}`,
        }}
        navigation={{
          prevEl: `.${css.HeaderSwiperButtonPrev}`,
          nextEl: `.${css.HeaderSwiperButtonNext}`,
        }}
        nextEl={`.${css.ActiveItem}`}
        autoplay={{ delay: "3000" }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className={css.HeaderBackground} src="/headerbackground.png" />
          <div className={css.HeaderContainer}>
            <p class={css.HeaderSpan}>SEKCJA</p>
            <h2 className={css.HeaderTitle}>MMA</h2>
            <p className={css.HeaderDescription}>
              Zapraszamy do naszej akademii BOKSU, gdzie oferujemy ekscytujące
              treningi dla wszystkich poziomów umiejętności! Nasze zajęcia to
              doskonała okazja dla osób pragnących poprawić swoją kondycję
              fizyczną, nauczyć się skutecznych technik walki oraz zyskać
              pewność siebie.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={css.HeaderBackground} src="/SignupPhoto1.jpg" />
          <div className={css.HeaderContainer}>
            <p class={css.HeaderSpan}>SEKCJA</p>
            <h2 className={css.HeaderTitle}>BOKS</h2>
            <p className={css.HeaderDescription}>
              Zapraszamy do naszej akademii BOKSU, gdzie oferujemy ekscytujące
              treningi dla wszystkich poziomów umiejętności! Nasze zajęcia to
              doskonała okazja dla osób pragnących poprawić swoją kondycję
              fizyczną, nauczyć się skutecznych technik walki oraz zyskać
              pewność siebie.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={css.HeaderBackground} src="/SignupPhoto2.jpg" />
          <div className={css.HeaderContainer}>
            <p class={css.HeaderSpan}>SEKCJA</p>
            <h2 className={css.HeaderTitle}>BJJ</h2>
            <p className={css.HeaderDescription}>
              Zapraszamy do naszej akademii BJJ, gdzie oferujemy ekscytujące
              treningi dla wszystkich poziomów umiejętności! Nasze zajęcia to
              doskonała okazja dla osób pragnących poprawić swoją kondycję
              fizyczną, nauczyć się skutecznych technik walki oraz zyskać
              pewność siebie.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={css.HeaderSwiperPagination}>
        <div className={`${css.HeaderSwiper}`}></div>
      </div>
      <div className={css.HeaderSwiperButtonContainer}>
        <div className={css.HeaderSwiperButtonPrev}>
          <svg className={css.HeaderButtonIcon} width="8" height="14">
            <use href="../../../arrow-left.svg#arrow-left"></use>
          </svg>
        </div>
        <div className={css.HeaderSwiperButtonNext}>
          <svg className={css.HeaderButtonIcon} width="8" height="14">
            <use href="../../../arrow-right.svg#arrow-right"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
