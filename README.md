# Full-Stack Project (PostgreSQL, Express, React)

This project consists of:
- **Backend:** Node.js with Express and Sequelize (PostgreSQL)
- **Frontend:** React (JavaScript)
- **Database:** PostgreSQL

---

## 🚀 Getting Started  

### **1️⃣ Install Dependencies**  

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
(Make sur your own Postgresql service is down, or else the port will colide and the docker compose)

IMPORTANT: If you want to restart the db completely (if you messed with the data and want to start fresh from seed.sql) you need to delete db-data from root of project. Otherwise, this folder contains all the database files of PostgreSQL to make the db data persistent after the docker container goes down.

🚀 Run the Project
🔹 Start Backend
``` sh
cd backend
npm start 
```
🔹 Start Frontend
``` sh
cd frontend
npm run dev 
```
📌 Useful Commands
🛠 Backend Commands
Command	Description
``` sh
npm start	# Start the backend
npm run dev	# Start frontend 
npx sequelize-cli db:migrate	# Run all migrations
npx sequelize-cli model:generate --name ModelName --attributes column:type	#Create a new Sequelize model
npx sequelize-cli db:seed:all	# Run seed data
```