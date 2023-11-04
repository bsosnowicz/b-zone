import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div id="aboutUs">
      <div className={css.AboutUsContainer}>
        <div className={css.AboutUsTextContainer}>
          <span className={css.AboutUsDate}>8 Sierpnia 2023</span>
          <h2 className={css.AboutUsHeader}>Cześć! </h2>
          <div className={css.AboutUsDescription}>
            Lörem ipsum kvasiaktiv ygt diagram intrabel surärar. Beskap den
            krovis till kinde. Telekäras kökäpiligt. Trisk yning. Presylig
            nitevis. Exott kymir ifall kroning trollfabrik. Lörem ipsum
            kvasiaktiv ygt diagram intrabel surärar. Beskap den krovis till
            kinde. Telekäras kökäpiligt. Trisk yning. Presylig nitevis. Exott
            kymir ifall kroning trollfabrik.Lörem ipsum kvasiaktiv ygt diagram
            intrabel surärar. Beskap den krovis till kinde. Telekäras kik.
          </div>
          <p className={css.AboutUsOwnerSpan}>
            <img className={css.AboutUsTrainerImage} src="/trainer1.png" />
            Adam Bizoń, właściciel B-zone
          </p>
        </div>
        <img className={css.AboutUsLogo} src="/bzonelogo.png" />
      </div>
    </div>
  );
};

export default AboutUs;
