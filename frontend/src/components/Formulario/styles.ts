import styled from "styled-components";

export const FormTitle = styled.h1`
    font-size: 24px;
    margin-top: 1em;
`

export const SForm = styled.form`
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    gap: 10px;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }

` 

export const Input = styled.input`
    resize: none;
    border-radius: 0.5rem;
    border: 1.5px solid #000;
    box-shadow: 2.5px 3px 0 #000;
    width: 100%;
    padding: 0.8rem;
    font-size: 1em;
    background-color: #fff;
    color: #000;
    transition:
        box-shadow 0.25s ease,
        transform 0.2s ease;

    &:focus {
        box-shadow: 5px 6px 0 #000;
        transform: translateY(-2px);
    }
`
export const TextArea = styled.textarea`
    resize: none;
    border-radius: 0.5rem;
    border: 1.5px solid #000;
    box-shadow: 2.5px 3px 0 #000;
    width: 100%;
    padding: 0.8rem;
    font-size: 1em;
    background-color: #fff;
    color: #000;
    transition:
        box-shadow 0.25s ease,
        transform 0.2s ease;

    &:focus {
        box-shadow: 5px 6px 0 #000;
        transform: translateY(-2px);
    }
`
export const Select = styled.select`
    border-radius: 0.5rem;
    border: 1.5px solid #000;
    box-shadow: 2.5px 3px 0 #000;
    width: 100%;
    padding: 0.8rem;
    font-size: 1em;
    background-color: #fff;
    color: #000;
    transition:
        box-shadow 0.25s ease,
        transform 0.2s ease;

    &:focus {
        box-shadow: 5px 6px 0 #000;
        transform: translateY(-2px);
    }
`
export const Option = styled.option`
    background-color: #fff;
    color: #000;
    padding: 0.8rem;
    font-size: 1em;
    border: 1.5px solid #000;
    box-shadow: 2.5px 3px 0 #000;
    transition:
        box-shadow 0.25s ease,
        transform 0.2s ease;

    &:focus {
        box-shadow: 5px 6px 0 #000;
        transform: translateY(-2px);
    }
`

export const Button = styled.button`
    position: relative;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: 1.5px solid #000;
    box-shadow: 2.5px 3px 0 #000;
    font-weight: 600;
    background-color: #fff;
    color: #000;
    background-color: #fff;
    transition:
        box-shadow 0.25s ease,
        transform 0.2s ease;
    &:hover {
        box-shadow: 5px 6px 0 #000;
        transform: translateY(-2px);
    }
`