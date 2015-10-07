declare module models {
	interface IPost {
		author: string;
		title: string;
		content: string;
		date?: any;
	}
	
	 interface IResponse {
        status: string;
        message?: string;
        results?: any;
        errors?: Array<Error>;
    }
}
