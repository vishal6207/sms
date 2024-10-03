


// const NODE_ENV = "production"
const NODE_ENV = "develoment"

const HOST_NAME = NODE_ENV === "develoment" ? "http://localhost:3000" : "https://www.school.com"
const API_URL = NODE_ENV === "develoment" ? "http://localhost:8000/api/v1/" : "https://api.school.com" // change laterw



export { HOST_NAME, API_URL, NODE_ENV }