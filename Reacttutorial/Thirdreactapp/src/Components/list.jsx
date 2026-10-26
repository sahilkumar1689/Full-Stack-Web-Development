// import the css modules.
import styles from "./list.module.css";

function ListItems(element) {
  // Catch it as a parameter.
  // You can also see the value of the parameter,it is basically a object.
  console.log(element);
  return (
    <>
      {/* You can simply get the value of any object by using their "key". */}

      <li key={element.data} className={styles.listCss}>
        {/* Claerly see you use the custom css */}
        {element.data}
      </li>
    </>
  );
}

export default ListItems;
