import { gql } from "@apollo/client";

export const ADD_STOCK = gql`
	mutation AddStock($input: StocksInput) {
		addStock(input: $input) {
			ticker
			cost
		}
	}
`