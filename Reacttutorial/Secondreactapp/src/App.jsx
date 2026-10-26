import Navbar from "./pages/Customnavbar.jsx";
// In this we see how to intergrate the bootstrap in our react project.
// You simple need to run one command in the terminal:
// 1. npm i bootstrap@latest.
// 2. After that simply import the bootstrap by using command:
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Navbar />
      <button type="button" class="btn btn-warning">
        Click
      </button>
    </>
  );
}

export default App;
