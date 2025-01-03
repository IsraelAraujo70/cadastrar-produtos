import styled from "styled-components";

export const ProductTableTitle = styled.h2`
    margin-top: 1em;
    margin-bottom: 1em;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
    margin-bottom: 1em;
    box-shadow: 2.5px 3px 0 #000;
    transition: box-shadow 0.25s ease, transform 0.2s ease;

    th, td {
        border: 1.5px solid #000;
        padding: 0.8rem;
        text-align: left;
        background-color: #fff;
        color: #000;
    }

    th {
        font-weight: bold;
    }
`