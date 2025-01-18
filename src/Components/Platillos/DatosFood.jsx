import React from "react";
import DatosFoodCss from "./DatosFood.module.css";
import Card from "../UI/Card";
import ProductosItem from "./ProductosItem/ProductosItem";

const Productos = [
  {
    id: "1",
    name: "Pozole de pollo",
    description: "Maíz pozolero, orégano, chile de árbol, Cebolla, Rábanos, Lechuga, Tostadas.",
    price: 60,
  },
  {
    id: "2",
    name: "Pozole de puerco",
    description: "Maíz pozolero, orégano, chile de árbol, Cebolla, Rábanos, Lechuga, Tostadas.",
    price: 60,
  },
  {
    id: "3",
    name: "Enchiladas rojas",
    description: "Elaboradas con tortillas de maíz, bañadas en salsa picante roja, rellenas de pollo, acompañadas con cebolla, crema y queso rallado.",
    price: 45.50,
  },
  {
    id: "4",
    name: "Chalupas",
    description: "La orden viene con 6 tortillas de maíz chicas, 3 tortillas con salsa roja y verde, fritas con manteca, acompañadas con cebolla y carne de res.",
    price: 25.00,
  },
  {
    id: "5",
    name: "Mole poblano",
    description: "Autentico mole poblano, acompañado con una pieza de pollo o cerdo, servido con ajonjolí y cebollas.",
    price: 70.50,
  },
  {
    id: "6",
    name: "Tamales",
    description: " de Mole, Rajas, Salsa verde, Dulce de pasas, Dulce de crema, Chocolate, Nutella, Jarocho",
    price: 16.50,
  },
];

const DatosFood = () => {
  const ListaProductos = Productos.map((producto) => (
    <ProductosItem
      id={producto.id}
      key={producto.id}
      name={producto.name}
      description={producto.description}
      price={producto.price}
    />
  ));
  return (
    <section className={DatosFoodCss.platillos}>
      <Card>
        <ul> {ListaProductos} </ul>
      </Card>
    </section>
  );
};

export default DatosFood;
