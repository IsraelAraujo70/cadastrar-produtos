import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { RootState } from "../../store/store"
import { useEffect } from "react";
import { fetchProducts } from "../../store/reducers/productSlice";
import { ProductTableTitle, Table } from "./styles";

const ListaDeProd = () => {
  const dispatch: AppDispatch = useDispatch();
  const {products, loading, error} = useSelector((state: RootState) => state.products);
  useEffect(()=> {
    dispatch(fetchProducts())
  },[dispatch])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };
  
  return ( <>
    <ProductTableTitle>Lista de Produtos</ProductTableTitle>
        {
          loading && <p>Carregando...</p>
        }
        {
          error && <p>Erro ao carregar produtos</p>
        }
        {
          products.length === 0 && !loading && <p>Nenhum produto encontrado</p>
        }
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{formatPrice(product.price)}</td>
                </tr>
              ))}
          </tbody>
      </Table>
        
    </> );
}

export default ListaDeProd;