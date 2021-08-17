import React, { useState } from 'react'
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  useMutation,
} from "@apollo/client";
import StockSection from './components/StockSection';
import { Box } from '@material-ui/core';
import AddStockButton from './components/AddStockButton';
import Title from './components/Title';
import { GET_ALL_STOCKS } from './apiCalls/queries/getAllStocks';
import { ADD_STOCK } from './apiCalls/mutations/addStock';
import useFetchStocks from './hooks/useFetchStocks';

export const APOLLO_CLIENT_ENTITY = new ApolloClient({
  name: 'MyStocks [QL]',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [stocks, setStocks] = useState([]); 
  const { data, loading, error, refetch } = useQuery(GET_ALL_STOCKS);
  const [ addNewStock ] = useMutation(ADD_STOCK);

  useFetchStocks(loading, data, setStocks);

  return (
    <Box 
      component="main"
      display="flex" 
      justifyContent="center" 
      flexDirection="column"
    >
      <Title />
      <AddStockButton
        refetch={refetch}
        addNewStock={addNewStock}
      />
      <StockSection 
        loading={loading}
        error={error}
        stocks={stocks}
      />
    </Box>
  );
}

export default App;
