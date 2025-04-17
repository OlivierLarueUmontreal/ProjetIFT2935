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

### 🔹 **🛠️ Database Setup (PostgreSQL + Sequelize)**
1. Start PosrgreSQL: 
``` sh
sudo service postgresql start  # Linux
net start postgresql           # Windows (Admin CMD)
```
2. Create the Database in PostgreSQL
Connect to PostgreSQL:
``` sh 
psql -U prostges
```
Then create a database: 
``` sh 
CREATE DATABASE your_database_name;
```
3. Configure sequelize
Edit backend/config.config.json and update the database credentials:
``` json
{
  "development": {
    "username": "postgres",
    "password": "your_password",
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
4. Run Migrations
``` sh 
cd backend 
npx sequelize-cli db:migrate
```

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