# 1. App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Deploy angular app to server [issue #1]

:warning: text in <> mean you have to change it.


1. build angular app

``` bash
    $ ng build --prod
```

for a production build.

``` bash
    $ ng build --prod --base-href /
```

2. create a dir for html page in server, and put there the all the content in folder `./dist/app/*`

``` bash
    $ mkdir /var/www/html/<domain-name>

    # ex.
    $ mkdir /var/www/html/salalba.cktech.eu
```

3. create conf file for virtual host.

``` bash
    $ vi /etc/apache2/sites-available/<domain-name>.conf

    # ex.

    $ vi /etc/apache2/sites-available/salalba.cktech.eu.conf

```

and then add

``` conf
<VirtualHost *:80>
#       ProxyPreserveHost On
#       ProxyRequests Off
#       ServerAdmin webmaster@localhost
        #ServerName example.com
        #ServerAlias www.example.pl
        ServerAdmin webmaster@localhost
        ServerName salalba.cktech.eu
        #ServerAlias www.salalba.cktech.eu
        #ServerAlias salalba.cktech.eu
        DocumentRoot /var/www/html/salalba.cktech.eu
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        <Directory "/var/www/html">
                AllowOverride All
        </Directory>
</VirtualHost>

```

4. add virtual host to apache

``` bash
    $ a2ensite <virtual-host-conf-file>

    # ex.
    $ a2ensite salalba.cktech.eu.conf
```

5. restart apache.

``` bash
    $ service apache2 restart
```

you can now check your website [click](http://salalba.cktech.eu/)



## Add to server

* add project to

```
mkdir /var/www/brainiverse.cktech.eu/html
```

* create `/etc/nginx/sites-available/brainiverse.cktech.eu`

``` 
server {
        listen 80;
        listen [::]:80;

        root /var/www/brainiverse.cktech.eu/html/;
        index index.html index.html index.nginx-debian.html;

        server_name brainiverse.cktech.eu www.brainiverse.cktech.eu;


        #MAIN
        location / {
            try_files $uri $uri/ @ci_index;
        }

        location @ci_index{
            rewrite ^(.*) /index.html?$1 last;
        }
}

```

* then add link
``` bash
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```


* run server
``` bash
$ sudo systemctl restart nginx
$ sudo systemctl status nginx
```


# Docker


## To build image and container

``` bash
$ docker build -t angular-app .
```

``` bash
$ docker run --name ng-app-container -d -p 2020:80 angular-app
```

Navigate to `http://localhost:2020/`.


## Build docker image and push into Github packge [src1](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac)

1. create tokan [here](https://github.com/settings/tokens)

2. login to GitHub Docker Registry

```
$ docker login -u USERNAME -p TOKEN docker.pkg.github.com
```

```

WARNING! Using --password via the CLI is insecure. Use --password-stdin.
WARNING! Your password will be stored unencrypted in /home/$USER/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

```

3. get the docker image ID

```
$ docker images
```

``` bash
REPOSITORY          TAG                IMAGE ID       CREATED             SIZE
angular-app         latest             14acbf473de5   3 minutes ago       134MB

```

4. publish docker image

``` bash
$ docker tag IMAGE_ID docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION

//ex.
$ docker tag 14acbf473de5 docker.pkg.github.com/salalba/simple-angular-app-template-bootstrap/angular-app:0.0.1
```

5. push docker image into github.

``` bash

$ docker push docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION

// ex.
$ docker push docker.pkg.github.com/salalba/simple-angular-app-template-bootstrap/angular-app:0.0.1

```

# 2. Git

+ Quick setup — if you’ve done this kind of thing before

```
https://github.com/SalAlba/simple-angular-app-template-bootstrap.git
```

+ or create a new repository on the command line.
``` bash
echo "# simple-angular-app-template-bootstrap" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/SalAlba/simple-angular-app-template-bootstrap.git
git push -u origin master

```

+ or push an existing repository from the command line
``` bash
git remote add origin https://github.com/SalAlba/simple-angular-app-template-bootstrap.git
git push -u origin master
```

# 3. Other informations

## Add Bootstrap [[src]](https://getbootstrap.com/docs/4.4/getting-started/introduction/)


1. add bootstrap css to index.html.

``` HTML
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

2. add bootstrap js to index.html.

``` HTML
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

```

## Icons [[src]](https://google.github.io/material-design-icons/)

Using the icons in HTML

``` HTML
<i class="material-icons">face</i>
```



