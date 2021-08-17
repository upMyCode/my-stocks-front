import { gql } from "@apollo/client";

export const GET_ALL_STOCKS = gql`
	query GetAllStocks {
		stocks() {
			id
			ticker
			cost
			extra {
				peRatio
			}
		}
	}
`