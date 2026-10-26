function ErrorMessage({ foodItemsData }) {
  if (foodItemsData.length == 0)
    return (
      <h3 style={{ marginTop: "20px", textAlign: "center" }}>
        No Healty Items Available
      </h3>
    );
}

export default ErrorMessage;
