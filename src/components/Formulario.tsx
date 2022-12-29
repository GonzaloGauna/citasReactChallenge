import React from "react";

const Formulario = () => {
    return (
        <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold text-center">
                    Administralos
                </span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-10">
                <div className="mb-5 font-medium">
                    <label className="block text-gray-700 uppercase" htmlFor="mascota">Nombre Mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5 font-medium">
                    <label className="block text-gray-700 uppercase" htmlFor="nombrePropietario">Nombre Propietario</label>
                    <input id="nombrePropietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5 font-medium">
                    <label className="block text-gray-700 uppercase" htmlFor="emailPropietario">Email del Propietario</label>
                    <input id="emailPropietario" type="email" placeholder="Email del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5 font-medium">
                    <label className="block text-gray-700 uppercase" htmlFor="alta">Alta</label>
                    <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5 font-medium">
                    <label className="block text-gray-700 uppercase" htmlFor="alta">Alta</label>
                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Síntomas"></textarea>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" value="Agregar Paciente" />
            </form>
        </div>
    );
};

export default Formulario;
