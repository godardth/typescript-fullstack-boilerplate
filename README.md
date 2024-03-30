<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">TypeScript Fullstack Boilerplate</h3>
  <p align="center">
    A production-ready fully dockerized fullstack app boilerplate with its CI/CD pipeline
    <br />
    Your app is up and running in production with a single command!
    <br />
    <a href="https://github.com/godardth/typescript-fullstack-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/godardth/typescript-fullstack-boilerplate/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

![Screen Shot][product-screenshot]

TypeScript Fullstack Boilerplate provides developers with a robust foundation for building scalable web applications. Leveraging the power of NestJS for the backend and Angular for the frontend, this boilerplate accelerates development while maintaining best practices.

Key Features:
- **TypeScript Stack** throughout ensures type safety and enhanced development experience.
- **NestJS Backend** offering a modular, scalable, and highly testable architecture.
- **Angular Frontend** providing a powerful and feature-rich user interface.
- **Preconfigured Docker Environments** for development and production ensuring consistency and ease of setup.
- **User Management** functionalities already implemented, including authentication and authorization.
- **Sample Components** showcasing common implementation patterns are provided.
- **Single Command Setup** to spin off a production-ready server enabling deployment in minutes.
- **Preconfigured Jenkins CI/CD pipeline** to easily deploy changes to production.
<br />
With the boilerplate, developers can focus on building innovative features and functionality, confident in the robustness and scalability of the underlying architecture. Whether you're a seasoned developer or just starting, this TypeScript Fullstack Boilerplate streamlines the development process and empowers you to create exceptional web applications with ease.

## Architecture

![Architecture][product-architecture]

[Original File](https://docs.google.com/presentation/d/1zd2_xOD3Uk10fGAiYYR8osOaK6qYwUFT5rRdG4voFEA/edit?usp=sharing)

<!-- GETTING STARTED -->
## Getting Started

You can setup either development environment or production server following the few steps below.

### Make it your own

Start by forking the project on GitHub, so that you can work on your own project.

### Setup a development environment

You must have docker installed on your local machine.  
It is recommended to use VS Code, but not mandatory.

Clone the project on your local machine
```sh
git clone git@github.com:godardth/typescript-fullstack-boilerplate.git # Replace by your own fork
```

Make a copy of the template env file and fill in the configuration
```sh
cp .env-template .env
nano .env
```

Launch the backend and frontend development server
```sh
cd typescript-fullstack-boilerplate
docker compose up
```
Access the [frontend](http://localhost) and [backend](http://localhost:3000)

### Setup a production server

The server-setup.sh script is designed and tested on Ubuntu 22.04.  
You also need to have a domain name and DNS configure with subdomains pointing to your server IP.

Clone the project on your server and cd to prod
```sh
git clone git@github.com:godardth/typescript-fullstack-boilerplate.git # Replace by your own fork
cd typescript-fullstack-boilerplate/prod
```

Configure the production server.
```sh
cp .env-template .env
nano .env
```

Startup the production server
```sh
./server-setup.sh
```

After running the previous command, a first build is automatically triggered.  
Wait for the build to complete and launch the remaining services.
```sh
docker compose up api web watchtower -d
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Theo Godard - theo.godard@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/godardth/typescript-fullstack-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/godardth/typescript-fullstack-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/godardth/typescript-fullstack-boilerplate.svg?style=for-the-badge
[forks-url]: https://github.com/godardth/typescript-fullstack-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/godardth/typescript-fullstack-boilerplate.svg?style=for-the-badge
[stars-url]: https://github.com/godardth/typescript-fullstack-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/godardth/typescript-fullstack-boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/godardth/typescript-fullstack-boilerplate/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/godardth
[product-screenshot]: images/Screenshot-1.png
[product-architecture]: images/architecture.png
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
