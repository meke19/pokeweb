import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";


// Este componente é criado com a finalidade de definir conteúdos que serão renderizados em qualquer página visualizada
// Esses componentes fixos aqui serão o Navbar e o Footer

export default function Layout({children}) { //Propriedade Children define o conteúdo principal renderizado, e os conponentes ficam fixos em qualquer página
  return (
    <>
      <Head> 
        <title>Pokeweb</title> 
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
