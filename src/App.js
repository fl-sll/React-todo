import React from "react";
import { Toaster } from "react-hot-toast";
import Content from "./components/Content";
import Header from "./components/Header";
import Title from "./components/Title";
import styles from "./styles/modules/app.module.scss";
import Name from "./components/Name";

function App() {
  return (
    <>
      <div className="container">
        <Title>TO-DO List</Title>
        <Name />
        <div className={styles.app__wrapper}>
          <Header />
          <Content />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.5rem",
          },
        }}
      />
    </>
  );
}

export default App;
