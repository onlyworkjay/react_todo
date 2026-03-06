import styles from "./TodoDetail.module.css";
const TodoDetail = ({ todoDetail }) => {
  return (
    <div className={input_wrap}>
      <form onSubmit={submit} className={styles.form}>
        <div className={styles.button_wrap}>
          <button className={styles.btn} type="submit">
            완료 처리
          </button>
        </div>
        ;
        <div className={styles.button_wrap}>
          <button className={styles.btn} type="submit">
            삭제
          </button>
        </div>
        ;
      </form>
    </div>
  );
};

export default TodoDetail;
