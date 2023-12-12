import Image from "next/image";

import Styles from '../styles/Home.module.css'

import Card from "../../components/Card";

// Com a função getStaticProps é possível Pré-renderizar algum retorno, no caso os dados da Api.
// Assim quando acessarmos o sistema, a chamada da Api com os dados já estaram pré renderizados, sem o Loading padrão.
export async function getStaticProps() {
  const numberOfPokemon = 300; // O retorno da api exige uma quantidade máxima de pokemons, aqui setamos a quantidade que queremos.
  const api = "https://pokeapi.co/api/v2/pokemon/"; //Constante que armazena o EndPoint da api

  const res = await fetch(`${api}/?limit=${numberOfPokemon}`); //Utilizando Template literals para aplicar uma variável dinamicamente na rota da Api, a variável Api possuí o EndPoint e o paramêtro Limit apliquei a quantidade máxima de pokemon
  const data = await res.json();

  // Como os dados da Api não retorna um índice, podemos converter o número padrão de retorno de pokemons para um índice válido
  // O forEatch vai auxíliar percorendo todos os itens da api, criando uma propriedade nova que é o ITEM.ID e atribuí o índice + 1
  // Como a contagem de um array se inicia com zero, com esse valor setado iniciará com o 1 normal.
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  // Esse retorno seta o valor a props, que no caso são os dados da Api já convertidos
  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={Styles.title_home}>
        <h1 className={Styles.title}>
          Poke<span className={Styles.span}>Web</span>
        </h1>
        <Image
          src="/images/pokelogo.png"
          width="50"
          height="50"
          alt="Pokeweb"
        />
      </div>
      <div className={Styles.poke_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
}
