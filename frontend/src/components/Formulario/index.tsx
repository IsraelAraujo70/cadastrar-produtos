import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { productSchema } from '../../validation/productSchema';
import { addProduct, fetchProducts } from '../../store/reducers/productSlice';
import { AppDispatch } from '../../store/store';
import { Button, FormTitle, Input, Option, Select, SForm, TextArea } from './styles';

const Formulario: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    available: false,
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'available' ? value === 'true' : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = {
        ...form,
        price: parseFloat(form.price),
      };
      productSchema.parse(formData);

      await dispatch(addProduct(formData));
      await dispatch(fetchProducts()); 
      
      setErrors([]);
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors.map(err => err.message));
      }
    }
  };

  return (
    <>
      <FormTitle>Cadastro de Produtos</FormTitle>
      <SForm onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} required />
        <TextArea name="description" placeholder="Descrição" value={form.description} onChange={handleChange} required />
        <Input type="number" name="price" placeholder="Preço" value={form.price} onChange={handleChange} required />
        <Select name="available" value={form.available.toString()} onChange={handleChange} required>
          <Option value="false">Indisponível</Option>
          <Option value="true">Disponível</Option>
        </Select>
        <Button type="submit">Cadastrar</Button>
      </SForm>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Formulario;