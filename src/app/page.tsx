"use client"
import { BannerComponent } from "./components/Banner/Banner";
import GridComponent from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <BannerComponent />
      <GridComponent />
    </Container>
  );
}
