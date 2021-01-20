import Head from "next/head";
import Header from "../components/Header";
import Item from "../components/Item";
import Add from "../components/Add";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home(props) {
  const [addItem, setAddItem] = useState(false);
  const [listArray, setListArray] = useState([...props.res.items]);

  function addButtonClicked() {
    setAddItem(true);
  }

  function modalAddButtonClicked(item) {
    const objectToBeSent = {
      newItem: item,
    };

    setListArray((prevValue) => {
      return [...prevValue, item];
    });

    fetch(process.env.URL, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(objectToBeSent),
    }).catch((err) => console.log(err));

    setAddItem(false);
  }

  function cancelButtonClicked() {
    setAddItem(false);
  }

  function removeItem(detail) {
    setListArray((prevValue) => {
      let newOne = prevValue.filter((element) => {
        return element != detail;
      });
      return newOne;
    });

    let objectToBeSent = {
      content: detail,
    };

    fetch(process.env.URL, {
      method: "DELETE",
      contentType: "application/json",
      body: JSON.stringify(objectToBeSent),
    }).catch((err) => console.log(err));
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-first to-second">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-full grid grid-cols-1 md:grid-cols-3  pt-6">
        <div className="md:col-start-2 md:col-end-3 px-2">
          <Header text="Todo-list" />
          <div className="flex justify-end">
            <Add text="+" onClick={addButtonClicked} />
          </div>

          <div className="flex flex-col pt-5">
            {listArray && listArray.map((element, index) => {
              return <Item key={index} text={element} remove={removeItem} />;
            })}
            {addItem && (
              <Modal
                onClick={modalAddButtonClicked}
                cancelClick={cancelButtonClicked}
              />
            )}
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    process.env.URL
  ).then((response) => response.json());
  return {
    props: {
      res,
    },
  };
}
