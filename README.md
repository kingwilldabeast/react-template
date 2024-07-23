# Steps for making a MERN application in VS Code

## Images:
![alt text description](folder/image.png)

## To Deploy a React project on Surge:
1. be in the folder that has index.html as a listed file
1. npm run build //this will add folder 'dist' 
1. surge ./dist
1. choose domain name < NAME >.surge.sh

## React project
1. npm create vite@latest
1. name project (and package)
1. choose framework: React
1. choose variant: JavaScript
1. (this creates public folder, src > assets, App.css, index.css, App.jsx, main.jsx, index.html etc)
1. cd into the project folder
1. npm install //adds node modules
1. add two **rules** into .eslintrc.cjs file //optional
1.  'react/prop-types': 'off', // prevents warnings if you’re not declaring types for your props 
1.  'react/no-unescaped-entities': 'off' // prevents warnings if you’re using contractions within JSX.
1. mkdir src > components folder
1. create component files like Header.jsx, Main.jsx, Home.jsx, Footer.jsx, Nav.jsx

## router-react
1. npm install react-router-dom
1. In main.jsx, add import { BrowserRouter } from 'react-router-dom'
1. In main.jsx, add  < BrowserRouter > and < /BrowserRouter > before and after < App />
1. In App.jsx (or Main.jsx), add import {Route, Routes} from 'react-router-dom'
1. In App.jsx (or Main.jsx), add <Routes> //routes go here// </Routes>
1. In App.jsx (or Main.jsx), add <Route path="/" element={<Home/>}/>
1. In App.jsx (or Main.jsx), add <Route path="/componentA" element={<ComponentA/>}/> 
1. In App.jsx (or Main.jsx), add <Route path="/componentA/:id" element={<ComponentADetails/>}/> 
1. In Nav.jsx, add <Link to="/"> <h 2> Home </h 2> </Link>
1. In Nav.jsx, add <Link to="/componentA"> <h 2> Component A</h 2> </Link>

## Hooks and State and Effect
1. In App.jsx, add import { useState, useEffect } from 'react'
1. const [array, setArray] = useState([])

## React Axios API 
1. npm install axios
1. App.jsx -> import { useState, useEffect } from 'react'
1. App.jsx -> import axios from 'axios'
1. touch .env (optional)
1. add API key: REACT_APP_TMDB_KEY=<Your secret token> (optional)
1. include .env in gitIgnore (optional)
1. include /node_modules and .DS_store in gitIgnore (optional)

## To Run Front End React:
* ensure you are in react folder
* npm run dev

## Mongoose and Express
1. step out of react folder into project folder
1. npm init -y //creates package.json
1. npm install express cors mongoose body-parser morgan nodemon --save-dev //all at once, or separate:
1. npm install express //creates package-lock.json and node modules
1. npm install cors //for middleware
1. npm install mongoose 
1. npm install body-parser //used to create and update json in thunder client
1. npm install morgan //shows commands that are in command line
1. npm install nodemon --save-dev
Those steps will add these items:
1. manually add to package.json **scripts**:  
* "start":"node server.js",
*  "dev":"nodemon server.js"
1. mkdir db models seed controllers
1. touch db/index.js 
1. touch models/{modelA,modelB,index}.js 
1. touch server.js
1. touch controllers/{DogController,CatController}.js
1. touch seed/initialData.js //create seed file
1. node seed/initialData.js //to actually run the seed file
1. add lines to server.js
* const bodyParser = require('body-parser')
* const logger = require('morgan');
* app.use(bodyParser.json()) 
* app.use(logger('dev'))

## To Run Back End Mongoose:
* npm run dev ?

## Master list for Django

mkdir back-end //or whatever you want to name it
cd back-end
brew install pipenv
pipenv shell //creates the Pipfile in project
Add to Pipfile, under [packages]: 
django = "*"
psycopg2-binary = "*"
pipenv install django // adds the Pipfile.lock to project
pipenv install psycopg2-binary
pipenv run django-admin startproject NAME_django .               //creates the name_django folder with five files, and manage.py file in project level
django-admin startapp NAME_app //create app folder with six files and migrations folder with one file at first
In settings.py, under INSTALLED_APPS add NAME_app
brew services list //switch to Postgres as opposed to sqlite
touch settings.sql

Inside settings.sql -> add:
CREATE DATABASE < database_NAME >;
CREATE USER < user > WITH PASSWORD 'my_password';
GRANT ALL PRIVILEGES ON DATABASE < database_NAME > TO < user >;

psql -f settings.sql
(If error, run -> psql -U postgres -f settings.sql )

Add to settings.py -> 
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '< name >',
        'USER': '< user >',
        'PASSWORD': 'password',
        'HOST': 'localhost'
    }
}

In models.py ->
Add models 
Optional: add to settings.sql -> ALTER DATABASE < database_NAME > OWNER TO < user >;
Optional: psql -f settings.sql
python3 manage.py makemigrations
python3 manage.py migrate

//Admin stuff
python3 manage.py createsuperuser
//fill in username, email, password if needed
Go to admin.py and add:
from django.contrib import admin
from .models import model1, model2, model3
admin.site.register(model1)
admin.site.register(model2)
admin.site.register(model3)
python3 manage.py runserver
Go to localhost:8000/admin


## REST API 
pipenv shell //if you haven't already. opens shell with parentheses around the folder name 
pipenv install djangorestframework //adds djangorestframework = "*" to Pipfile

In settings.py, under INSTALLED_APPS add 'rest_framework'
In settings.py, Also add:
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
        #    'rest_framework.permissions.AllowAny', #// alternate
    ]
}

Include in NAME_DJANGO/urls.py
from django.conf.urls import include
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path('admin/‘, admin.site.urls),
    path('', include(‘<NAME_APP>.urls')),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
    ]

In app folder -> touch serializers.py 
In serializers.py -> Add lots of stuff. ALSO, update the fields to match the models.py
In views.py -> add lots of stuff 
In APP -> touch urls.py (another one!)
In APP/urls.py, add some stuff

python3 manage.py runserver
Go to localhost:8000/admin


CORS:
pip install django-cors-headers
In settings.py, under INSTALLED_APPS add 'corsheaders'
In settings.py, under MIDDLEWARE, add:
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',

In settings.py, add:
CORS_ALLOWED_ORIGINS = [
    "https://example.com",
    "https://sub.example.com",
    "http://localhost:5173",
    "http://127.0.0.1:5555",
]
CORS_ALLOW_ALL_ORIGINS = True

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
    'http://yourwebsite.com'
]



## NOTES on ERRORS for Django:

If getting can’t import Django or rest_framework not imported:

pip install django
pip install djangorestframework 
pip install psycopg2-binary

