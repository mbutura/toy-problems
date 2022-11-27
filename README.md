# Toy problems

Solutions for toy problems as part of the moringa school curriculum.

## Instructions

### Viewing the webpage on github pages

Webpage built from this repository can be accessed [here](https://mbutura.github.io/toy-problems/)

### Clone and run webpage locally (Tested on ubuntu 20.04)

- Install git

```console
user@host:~$ sudo snap install git
```
- Clone repository using https

```console
user@host:~$ git clone https://github.com/mbutura/toy-problems.git
```
- Enter into the cloned repository and open index.html in the Google Chrome

```console
user@host:~$ cd toy-problems && google-chrome index.html
```

### Clone to extend the codebase in the moringa dev environment

This section covers extending and running the codebase using within the moringa development enviornment such as npm, nvm etc. This allows the development to be carried out both locally or a Virtual Private Server(VPS).

- install git and docker.
```console
user@host:~$ sudo snap install docker git
```

- Download the moringa environment docker repository.
```console
user@host:~$ git clone https://github.com/mbutura/moringa-environment.git
```

- Build and run the docker image, and expose port 5050.
```console
user@host:~$ bash moringa-environment/setup-env.sh ed25519
```
- While in the docker container clone this repository. 
```console
moringastudent@e634b4b6087d:~$ git clone https://github.com/mbutura/toy-problems.git
```
- Enter into the cloned repository and start server on port 5050
```console
moringastudent@e634b4b6087d:~$ cd toy-problems && bash start-http-server.sh
```

Locally, the webpage can be accessed on htpp://localhost:5000

On a VPS, the webpage can be accessed on https://[vps public ip X.X.X.X]:5000

## Author

[Alois Mbutura](mailto:alois.mbutura@student.moringaschool.com)

## Licence

Apache License 2.0