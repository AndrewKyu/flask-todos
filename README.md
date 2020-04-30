# To-Do App
A Task manager app that's uses Python Flask as the backend frameworks, React Js in the frontend, and SQLite for the database. Project made to be familiar with creating RESTful APIs in Python

# Pre Requisites
| Development Tool | Version | Link |
| ---------------- | ------- | ---- |
| Node Js | v10.16.1 | https://nodejs.org/en/download/releases/ |
| Python3 | v3.8.2 | https://www.python.org/downloads/ |

# Tech Stack
| Technology | Framework Type |
| ---------- | -------------- |
| React Js | Frontend |
| Flask | Backend |
| Sqlite | Database |

# Setting Up Backend Development Environment
### Setting Up Pipenv Virtual Environment
- Install pipenv: `pip3 install pipenv`
- Starting pipenv shell: `pipenv shell`

### Installing Python Packages
- Installing pip packages: `pip install`

### Initializing database instance 
- Run: `python3`
- Import db and create instance: `from app import db`
- Create `db.sqlite` file: `db.create_all()`
- Exit Python3 shell: `exit()`

### Setting Up Frontned Development Environment
- Go into the client folder: `cd client`
- Install npm packages: `npm install` 
- Run Frontend and Backend Concurrently: `npm run dev`


