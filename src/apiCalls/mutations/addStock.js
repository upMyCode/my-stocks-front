import { gql } from "@apollo/client";

export const ADD_STOCK = gql`
	mutation AddStock {
		stocks() {
			ticker
			cost
		}
	}
`