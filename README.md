# Set up Instructions
- Download Project Folder
- Go to folder in your destop and run **npm i**
- Once the dependencies get installed run **npm run dev** for test environment.

# Available Pages
- **localhost:3000** (Page to POST data and GET text messages from database)
- **localhost:3000/feedback** (Shows text messages as a List)
- **localhost:3000/api** (Shows Database)

# NextJS - API Notes
- All backend API files will be stored in **/pages/api/**
- **localhost:3000/api** will access the API file and show the result if the file under **/pages/api** is **index.js**. If it is a specially named file, for example **aras.js**, then it can be accessed from **localhost:3000/api/aras**
- **localhost:3000** designed to have email address and feedback field. Once sent, it will write the data to **/data/database.json**
- The database data can be requested by going to **localhost:3000/api**
- getStaticProps function can connect to API file. **/pages/feedback/index.js** has getStaticProps which can connect to **/pages/api/index.js**