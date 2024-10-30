import styled from "styled-components";
import theme from "../../utils/theme";
import Header from "./Header/Header";
import Hero from "./Header/Hero";



export default function HomePage() {


  return (

    <HomePageStyle>
    
     <Header/>
     <Hero />
     
    </HomePageStyle>
  
    
    )

}


const HomePageStyle = styled.div`

    background-color:${theme.colors.primary};
    height:100vh;



`
