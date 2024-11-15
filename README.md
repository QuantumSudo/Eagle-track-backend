# **Eagle Track Backend**

**A backend API for the Eagle Track inventory management application.**

By **Chris Ndegwa**


## **Description**

Eagle Track Backend is a simple API built using **json-server** to support the **Eagle Track** inventory management app. This API provides endpoints to manage inventory items, including CRUD operations such as adding, editing, deleting, and fetching items.

The backend uses **CORS** to allow cross-origin requests and provides a mock database (`db.json`) for storing item data. This setup is ideal for local development or as a starting point for a more complex backend.

---

## **Features**

- **CRUD operations** for managing inventory items:
  - **GET**: Retrieve the list of items.
  - **POST**: Add a new item.
  - **PUT**: Update an existing item.
  - **DELETE**: Remove an item.
- **CORS enabled** for easy integration with frontend applications.
- **Custom logging** of requests for debugging and development purposes.
- **Simulated delay** in the `/items` route to test response handling.

---

## **How to Use**

### **Requirements**

- **Node.js** (version 16.x recommended).
- **Terminal/Command Line** for running commands.

---

### **View Live API**

You can interact with the live API endpoint hosted here:  
[**Live API URL**](https://eagle-track-backend-4.onrender.com/items)

---

## **Local Development**

To run the backend locally, follow these steps:

### **Installation**

1. **Clone the Repository:**

   bash
   
   git clone https://github.com/QuantumSudo/eagle-track-backend.git
   
2.**Navigate to the Project Directory:**

bash

cd eagle-track-backend

3.**Install Dependencies:**

bash

npm install

4.**Start the Development Server:**

bash

npm run dev

This will start the server using nodemon for automatic restarts during development.

5.**Visit the API in Your Browser:**

Open http://localhost:5000 to interact with the API.

**Technologies Used**
json-server: A full fake REST API for rapid prototyping and development.

CORS: For enabling cross-origin requests to allow the frontend to communicate with the backend.

nodemon: For automatically restarting the server during development.

Node.js: JavaScript runtime used to run the backend server.

**Related Repositories**

Frontend Application: https://eagle-track007.vercel.app/

**Support and Contact Details**
If you have any questions, suggestions, or need assistance, feel free to reach out:

Email: chriswndegwa@gmail.com

**License**
MIT License

**Copyright**

Copyright © 2024 Chris Ndegwa

**License Terms:**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
