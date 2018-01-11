## Angular web interface implementation for Clustered Warehouse API.

Angular version 5.0.0 is used to visualize API requests, upload files.
Depended on https://github.com/snavruzov/bloomberg_warehouse

### How To Run:
Go to the project folder and execute the below command line, but before make sure angular-cli is installed, : 
```sh
$ npm install -g angular-cli
$ ng init
$ ng serve
```
Angular-cli main commands can be found on their [Getting Started](https://angular.io/guide/quickstart) documentation.
The command *ng serve* will build the project and run the server on http://localhost:4200.

Run with Docker
```sh
$ docker run -d \
    --name frontweb \
    -p 4200:4200 \ 
    snavruzov/bloomberg_web
```
Docker will run Angular application on 4200 port.

Dashboard:
![N|Solid](http://res.cloudinary.com/dapw81cmq/image/upload/v1515668949/screenshot-1_dcdox9.png)

Valid Deals page:
![N|Solid](http://res.cloudinary.com/dapw81cmq/image/upload/v1515668949/screenshot-localhost-2_utdpl5.png)

Invalid Deals page:
![N|Solid](http://res.cloudinary.com/dapw81cmq/image/upload/v1515668949/screenshot-localhost-3_c1fczb.png)

Ordering Amoun Statistic page:
![N|Solid](http://res.cloudinary.com/dapw81cmq/image/upload/v1515668949/screenshot-localhost-4200-2018-01-11-15-07-57-937_jxe8tc.png)

You can test it out here: http://173.249.12.140:4200/upload
