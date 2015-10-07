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
        data?: any;
        errors?: Array<Error>;
    }
}
