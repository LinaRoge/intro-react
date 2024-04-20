import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <Header titulo={"Adopta un perrito"} />
        <div className="tarjeta">
          <MyCard
            image="https://t1.ea.ltmcdn.com/es/razas/9/2/0/border-terrier_29_0_300_square.webp"
            titulo="Bartolo"
            descripcion="Es pequeño pero con gran personalidad y su excelente carácter"
            colorButton="success"
            textButton="Terrier"
          />
          <MyCard
            image="https://media.istockphoto.com/id/178834349/es/foto/encantadores-perros-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=_ofobYDzOAsXCxvdyrlZ2hKkHijB2fZATpmTF5MnZVU="
            titulo="Messi"
            descripcion="Su aspecto entrañable, se lleva bien con los niños y otros animales"
            colorButton="primary"
            textButton="Cockapoo"
          />
          <MyCard
            image="https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Gohan"
            descripcion="Un perro cariñoso y de tamaño mediano. Ideal para hacerte compañia"
            colorButton="danger"
            textButton="Adoptar"
          />
          <MyCard
            image="https://th.bing.com/th/id/OIP.7TAwhk6NJuPKeIG5iBNrPAHaE7?rs=1&pid=ImgDetMain"
            titulo="Princesa"
            descripcion="Es una raza de perro pequeña muy popular por su reducido tamaño."
            colorButton="warning"
            textButton="Chihuahua"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
