


// const NODE_ENV = "production"
const NODE_ENV = "develoment"

const HOST_NAME = NODE_ENV == "develoment" ? "https://localhost:3000" : "https://www.school.com"
const API_URL = NODE_ENV == "develoment" ? "https://localhost:8000" : "https://api.school.com" // change later



export { HOST_NAME, API_URL, NODE_ENV }