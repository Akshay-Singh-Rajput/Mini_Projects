import "./App.css";
import { Carousel } from "./Carousel";

function App() {
  return (
    <div className="App">
      <Carousel
        carouselItems={ [
          <div>
            { " " }
            <img
              src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <p>Hello</p>
          </div>,
          <div>
            { " " }
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt=""
            />
            <p>Hello</p>
          </div>,
          <div>
            { " " }
            <img
              src="https://images.unsplash.com/photo-1615406839587-0276084b72bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <p>Hello</p>
          </div>,
        ] }
      />
    </div>
  );
}

export default App;
