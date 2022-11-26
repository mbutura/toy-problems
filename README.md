# Toy problems

Solutions for toy problems as part of the moringa school curriculum.

## Setup instructions

### Running locally

  Open index.html - it contains links to the various solutions and will open in browser.

### Running on a Virtual Private Server(VPS)

- Setup the moringa school development environment (Tested on an ubuntu 20.04 VPS). This will expose the docker port 5050 to port 5050 of the VPS.

```console
user@host:~$ sudo snap install docker git
user@host:~$ git clone https://github.com/mbutura/moringa-environment.git
user@host:~$ bash moringa-environment/setup-env.sh ed25519
```
- Run http-server on port 5050 in the docker image to serve index.html to requests.

```console
moringastudent@e634b4b6087d:~$ cd toy-problems
moringastudent@e634b4b6087d:~$ bash start-http-server.sh
```

## Author

[Alois Mbutura](mailto: alois.mbutura@student.moringaschool.com).

## Licence

Apache License 2.0