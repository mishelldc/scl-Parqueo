//localiza el nodo en el DOM
//nodo: etiqueta en su archivo .html
// el DOM es el HTML
 let header_del_DOM = document.querySelector(".header");
 //almacenar en una variable el contenido agregar
 let header =`
 <div>
 <img src ="./img/ujum.png">
 <p> Parqueo el Cuchurru </p>
 <nav>
  <ul>
  <li> 🚗 Carro </li>
  <li> 🚚 Camion </li>
  <li> 🚌 Autobús </li>
  <li> 🏍 Moto </li>
  <li> 🛹 Monopatín </li>
  </nav>
  </div>
 `;
 header_del_DOM.innerHTML = header;