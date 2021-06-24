function showLoadingSkeleton(name, order) {
  // PASO A PASO:
  // 1 - Deberás acceder a las cards que se encuentran renderizadas en la página,
  // las que se encuentran vacías ya que están aguardando la información que proviene
  // de la API.
  // 2 - Existen dos maneras de realizar el ejercicio: puedes manipular cada una de los estilos
  // de las cards que ya existen, o bien puedes crear un nuevo componente que represente el skeleton
  // en su totalidad. En uno u otro caso, deberás mostrar el skeleton hasta tanto se complete el
  // pedido de la API y tengas la información para rellenar cada una de las cards de los pokemnons.
  // TIPS:
  // - Si optas por crear un nuevo componente, puedes tomar como ejemplo la estructura HTML que se encuentra
  // en el archivo utils_NO_TOCAR.js. Recuerda no editar ese archivo directamente, sino que debes escribir el
  // código necesario en este archivo script.js
  // - En cualquier caso, puedes utilizar los estilos que se encuentran en el archivo styles.css, dentro de los
  // cuales podrás encontrar algunos que te serán de utilidad para realizar la actividad.
  // - Recuerda prestar atención al momento en que tienes que mostrar/ocultar los skeletons y las cards de los
  // pokemons. Puede que no todo el código deba escribirse en el mismo lugar 👀
}

async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);

  // EL SIGUIENTE CODIGO RENDERIZARÁ LAS CARDS DE LOS POKEMONS, UNA VEZ OBTENIDA
  // LA INFORMACION DEL SERVIDOR.
  const imagen = document.querySelector(`#imagen-pokemon-${order}`);
  imagen.src = pokemonData.imagen;

  pokemonData.stats.forEach((stat) => {
    const barra = document.querySelector(`#barra-${stat.name}-${order}`);

    barra.style.width = `${stat.amount}%`;

    if (stat.amount < 35) {
      barra.classList.add("rojo");
    } else if (stat.amount < 70) {
      barra.classList.add("amarillo");
    } else {
      barra.classList.add("verde");
    }
  });
}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  showLoadingSkeleton(pokemon, pokemonNumber);
  // Simulamos una demora en la carga de los recursos.
  setTimeout(() => fillPokemonData(pokemon, pokemonNumber), 3000);
});
