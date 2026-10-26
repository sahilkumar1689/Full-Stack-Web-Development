import Li from "./li";

function Lists({ tasks, onDeleteIndex }) {
  return (
    <>
      {tasks.map((elem, index) => (
        <Li
          key={index}
          TaskName={elem.name}
          TaskDate={elem.date}
          getIndex={() => {
            onDeleteIndex(index);
          }}
        ></Li>
      ))}
    </>
  );
}

export default Lists;
