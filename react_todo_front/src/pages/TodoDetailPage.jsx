import { useEffect, useState } from "react";
import styles from "./pagelayout.module.css";
import axios from "axios";
import TodoDetail from "../components/todo/TodoDetail";
const TodoDetailPage = () => {
  const [todoDetail, setTodoDetail] = useState([]);
  const backServer = import.meta.env.VITE_BACKSERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/todos`)
      .then((res) => {
        if (res !== "") {
          setTodoDetail(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세 보기</h3>
      <TodoDetail todoDetail={todoDetail} />
    </div>
  );
};

export default TodoDetailPage;
