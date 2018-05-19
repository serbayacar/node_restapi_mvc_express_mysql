# RestFull API with NodeJS + Express + MVC + MySQL

The project to train people who is new developer about RestAPI and NodeJS .


##### Main Features

1. _NodeJS_ is a popular backend programming language with JS
2. _MVC_ is a design pattern to seperate codes as Model, View, Controller
3. _Express_ is a routing module for NodeJS.
4. _MySQL_ is a Database Client for RDMS.


## Installation

### NodeJS

Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.


##### Linux

First of all, you need to node.js PPA in our system provides by Nodejs official website. We also need to install python-software-properties package if not installed already. You can choose either to install Latest Node.js version or LTS version.


```shell
$ sudo apt-get install curl python-software-properties
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
```

Secondly , we must install NodeJS and NPM . NPM will be installed with NodeJS.

```shell
$ sudo apt-get install nodejs
```

##### Windows

Please to install on Windows , follow the offical [download page](https://nodejs.org/en/download/current/).


### MySQL

MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation.
The MySQL [website](http://www.mysql.com/) provides the latest information about MySQL software.

##### Linux

For simplicity and clarity, we will install the package application called XAMPP in the setup. This application will install basic components for MySQL server.

To install,

1. Open the XAMPP official [download page](https://www.apachefriends.org/tr/index.html).
2. Select installer for your OS, installation will start automatically.
3. Go to Download Folder and extract compresed files.
4. Change this folder's permission to 777 . ( May using terminal is more efficient !)
5. To start installer (in the same destination with installer),

```shell
$ sudo ./xammp-installer-name
```

##### Windows

For simplicity and clarity, we will install the package application called XAMPP in the setup. This application will install basic components for MySQL server.

To install,

1. Open the XAMPP official [download page](https://www.apachefriends.org/tr/index.html).
2. Select installer for your OS, installation will start automatically.
3. Go to Download Folder and start installer.


## Preparing the Application

#### NodeJS and Application Server

##### Linux

After clone or download this repos,


```shell
$ cd path/for/application\folder
$ npm install
```

To run NodeJS server,

```shell
$ npm start
```

##### Windows

After clone or download this repos,
With CMD,

```shell
$ cd path/for/application\folder
$ npm install
```

To run NodeJS server,

```shell
$ npm start
```

#### Database

A sample data set is provided with the application. You just import the database to your MySQL Servers.

To import the databases ( both of OS are in the same ) ,

1. Please run XAMPP
2. Please turn on Apache and MySQL Servers in XAMPP Control Panel (just click on 'Start' button and waiting for being online)
3. Open any Internet browser and go to 'localhost/phpmyadmin'
4. Create a database which named same with provided database ( in /database )
5. Select created database and go to Import page.
6. Import the provided database.

