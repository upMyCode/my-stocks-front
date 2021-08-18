import { gql } from "@apollo/client";

export const GET_ALL_STOCKS = gql`
	query GetAllStocks {
		getAllStocks {
			id
			ticker
			cost
			extra {
				peRatio
			}
		}
	}
`