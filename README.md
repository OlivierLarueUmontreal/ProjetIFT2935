# Projet IFT2935 (PostgreSQL, Express, React)

Collaborators: (Olivier Larue:20269986, Claudéric DeRoy:20102789, x, x)

This project consists of:
- **Backend:** Node.js with Express and Sequelize (PostgreSQL)
- **Frontend:** React (JavaScript)
- **Database:** PostgreSQL
- **Docker:** To start to PostgreSQL server.

---

## Getting Started  

### **Install Dependencies**  

#### 🔹 **Backend Setup**  
```sh
cd backend
npm install
```

### 🔹 **Frontend Setup**  
``` sh
cd frontend
npm install
```

### 🔹 **🛠️ Database Setup (Docker + PostgreSQL + Sequelize)**
1. Run the Docker-compose script at the root project folder to start the Bibliotheque db
``` sh
docker compose up -d
```
And that's pretty much it...   

Make sur your own Postgresql service is down, or else the port will colide and the docker compose command will fail.  
If this happens, use this command:  

```sh 
sudo systemctl stop postgresql 
```

IMPORTANT: If you want to restart the db completely (ex: if you messed with the data and want to start fresh from seed.sql) you need to delete your db-data locateed at the root of the project. This folder contains all the database files of PostgreSQL to make sure your data is persisted even after the docker container goes down.

.env file was pushed on purpose so that everyone can just plug in the docker compose command and run the DB without any other configuration

🚀 Run the Project
🔹 Start Backend
``` sh
cd backend
npm start 
```
The backend listens on localhost:5000. You can check if it is running buy doing a GET at http://localhost:5000/api
🔹 Start Frontend
``` sh
cd frontend
npm run dev 
```
The frontend listens on localhost:5173.
📌 Useful Commands
``` sh
npm start	# Start the backend
npm run dev	# Start frontend 
docker compose up -d # start docker compose script that will start a PostgreSQL server.
```
