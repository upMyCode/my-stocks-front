import { gql } from "@apollo/client";

export const ADD_STOCK = gql`
	mutation AddStock($input: Stock) {
		addStock(input: $input) {
			ticker
			cost
		}
	}
`