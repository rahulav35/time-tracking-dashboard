import react from "react";
import task from "../../styles/Task.module.css";
function Tasks({ backgroundColor, backgroundImage, todo, duration, weeks }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={task.seconddiv}
    >
      <div className={task.innerdiv}>
        <div className={task.workdiv}>
          <h1 className={task.work}> {todo}</h1>
          <img className={task.image} src="/assets/images/icon-ellipsis.svg" />
        </div>
        <div className={task.timediv}>
          <h1 className={task.time}>{duration}hrs</h1>
          <h2 className={task.week}>Last week-{weeks}hrs</h2>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
