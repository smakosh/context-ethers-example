const exampleCollection = {
	primary_asset_contracts: [],
	traits: {},
	stats: {
		one_day_volume: 0.0,
		one_day_change: 0.0,
		one_day_sales: 0.0,
		one_day_average_price: 0.0,
		seven_day_volume: 0.0,
		seven_day_change: 0.0,
		seven_day_sales: 0.0,
		seven_day_average_price: 0.0,
		thirty_day_volume: 0.0,
		thirty_day_change: 0.0,
		thirty_day_sales: 0.0,
		thirty_day_average_price: 0.0,
		total_volume: 0.0,
		total_sales: 0.0,
		total_supply: 4.0,
		count: 4.0,
		num_owners: 1,
		average_price: 0.0,
		num_reports: 0,
		market_cap: 0.0,
		floor_price: 0.01,
	},
	banner_image_url:
		"https://lh3.googleusercontent.com/L48RyTIjxBE7p5YLWJcLOIySe-1WVxSrkC9wZnGl-xs2tuDFWkgSMe5-TPLaoaYAgjyQm8y94bMLSHz4NKahVKmugql0WG3QJHPyA5U=s2500",
	chat_url: null,
	created_date: "2021-09-24T22:15:27.623471",
	default_to_fiat: false,
	description: "Smakosh's own collection for fun",
	dev_buyer_fee_basis_points: "0",
	dev_seller_fee_basis_points: "1",
	discord_url: null,
	display_data: {
		card_display_style: "contain",
	},
	external_url: "https://smakosh.com",
	featured: false,
	featured_image_url:
		"https://lh3.googleusercontent.com/L48RyTIjxBE7p5YLWJcLOIySe-1WVxSrkC9wZnGl-xs2tuDFWkgSMe5-TPLaoaYAgjyQm8y94bMLSHz4NKahVKmugql0WG3QJHPyA5U=s300",
	hidden: true,
	safelist_request_status: "not_requested",
	image_url:
		"https://lh3.googleusercontent.com/L48RyTIjxBE7p5YLWJcLOIySe-1WVxSrkC9wZnGl-xs2tuDFWkgSMe5-TPLaoaYAgjyQm8y94bMLSHz4NKahVKmugql0WG3QJHPyA5U=s120",
	is_subject_to_whitelist: false,
	large_image_url:
		"https://lh3.googleusercontent.com/L48RyTIjxBE7p5YLWJcLOIySe-1WVxSrkC9wZnGl-xs2tuDFWkgSMe5-TPLaoaYAgjyQm8y94bMLSHz4NKahVKmugql0WG3QJHPyA5U=s300",
	medium_username: null,
	name: "Smakosh",
	only_proxied_transfers: false,
	opensea_buyer_fee_basis_points: "0",
	opensea_seller_fee_basis_points: "250",
	payout_address: "0xe892089198409fe72dab959abe75fa68292efd2b",
	require_email: false,
	short_description: null,
	slug: "smakosh",
	telegram_url: null,
	twitter_username: "smakosh",
	instagram_username: "smakosh19",
	wiki_url: null,
	owned_asset_count: 6,
};

export type Collection = typeof exampleCollection;

export interface CollectionsState {
	isLoading: boolean;
	error: string | null;
	data: Collection[] | null;
}

export type CollectionsActions =
	| { type: "SAVE_COLLECTIONS"; payload: Collection[] }
	| { type: "SET_LOADING"; payload: boolean }
	| { type: "SET_ERROR"; payload: string };

export type DispatchCollections = (action: CollectionsActions) => void;
