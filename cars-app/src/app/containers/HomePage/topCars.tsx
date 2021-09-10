import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";


const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;


export function TopCars() {

  const [cars, setCar] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/cars', {
      headers: { "Access-Control-Allow-Origin": "*" }
  }).then((response) => {
      setCar(response.data)
    });
  }, []);

  return (
    <TopCarsContainer>
      <Title>Découvrez nos meilleures offres</Title>
        <CarsContainer>
          {cars.map((car) => <Car {...car} />)}
        </CarsContainer>
    </TopCarsContainer>
  );
}
