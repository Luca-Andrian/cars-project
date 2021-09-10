import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';
import { CarDetails } from './carDetails';
import { useParams } from "react-router-dom";


const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function SingleCar() {

    const { id }: { id: string } = useParams()
    const [cars, setCar] = useState([] as any[]);

    useEffect(() => {
        axios.get(`http://localhost:9000/cars/${id}`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    }).then((response) => {
        setCar(response.data)
        });
    }, []);

    console.log(cars)

    return (
        <PageContainer>
            <Navbar />
            {cars.map((car) => <CarDetails {...car} />)}
        </PageContainer>
    )
}