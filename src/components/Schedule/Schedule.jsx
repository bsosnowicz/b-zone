import css from "./Schedule.module.css";

const Schedule = () => {
  return (
    <div className={css.ScheduleContainer}>
      <div className={css.ScheduleGridContainer}>
        <ul className={css.ScheduleGrid}>
          <p className={css.ScheduleHeader}>PONIEDZIAŁEK</p>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}></li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
        </ul>
        <ul className={css.ScheduleGrid}>
          <p className={css.ScheduleHeader}>WTOREK</p>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
        </ul>
        <ul className={css.ScheduleGrid}>
          <p className={css.ScheduleHeader}>ŚRODA</p>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
        </ul>
        <ul className={css.ScheduleGrid}>
          <p className={css.ScheduleHeader}>CZWARTEK</p>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
        </ul>
        <ul className={css.ScheduleGrid}>
          <p className={css.ScheduleHeader}>PIĄTEK</p>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
        </ul>
        <ul className={css.ScheduleGrid}>
          <p className={css.ScheduleHeader}>SOBOTA</p>
          <li className={css.ScheduleGridItem}></li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
          <li className={css.ScheduleGridItem}></li>
          <li className={css.ScheduleGridItem}>
            <h4 className={css.ScheduleGridTrainingType}>TRENING MMA</h4>
            <p className={css.ScheduleGridTime}> 7:15 - 8:30</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
