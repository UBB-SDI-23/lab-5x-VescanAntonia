const PROD_BACKEND_API_URL = "ec2-16-170-108-25.eu-north-1.compute.amazonaws.com/app1/clin";
const DEV_BACKEND_API_URL = "http://127.0.0.1:8000/snippets";

export const BACKEND_API_URL = 
    process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;

// export const BACKEND_API_URL = "http://localhost:80/snippets";