const verTitulos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url);
    const data = await response.json();
    let contador = 0;
    data.forEach((element) => {
      if (contador < 20) {
        console.log(element.title);
        contador++;
      } else {
        return;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

verTitulos();
