function Todolist() {
  return (
    <div class="container">
      <div class="row">
        <div class="col col-6">
          <input type="text" placeholder="Enter Task Here:" />
        </div>
        <div class="col col-4">
          <input type="date" placeholder="Enter Task Date:" />
        </div>
        <div class="col col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Todolist;
