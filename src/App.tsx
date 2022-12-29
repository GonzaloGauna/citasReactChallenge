import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";

function App() {
    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="px-5 md:flex gap-5 w-full">
                <Formulario />
                <ListadoPacientes />
            </div>
        </div>
    );
}

export default App;
