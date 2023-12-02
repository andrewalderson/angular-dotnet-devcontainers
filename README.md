# Angular and Dotnet in Devcontainers

This repository contains a reference sample for setting up an Angular app and a Dotnet API in Dev Containers. This sample also uses a 'root' container to set up [Mookme](https://mookme.org/) to globally manage git hooks. This isn't necessary and is only here as areference. Mookme is an npm package so the dotnet container needs to have node installed or you won't be able to commit when working in that container. The root container is Linux Alpine and also needs to have node installed.

The inspiration for this came from this forked [repo](https://github.com/andrewalderson/multiple-dev-container-vscode) which contains some additional information about working with containers.

### Additonal Notes
- Dev Container config files need to be in the root ```.devcontainers``` folder for the [Visual Studio Code Dev Containers Extnesion](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) commands in the command palette to find them.
- When using VS Code you can create the dev containers in the sub directories where the source code will be but they need to be moved.
- If you open the root folder in VS Code by using the command palette to open a folder in a container you will get a list of all the container to select the one you want to work in.
- You can run the dotnet API without openning the container in VS Code by opening a terminal in Docker Desktop and invoking ```dotnet run``` in the project directory.
- The Angualr and Dotnet container will both start when either is opened in VS Code. This is because they use a docker comnpose file and this is the default behaviour.
- You can open each container in a seperate VS Code instance but if you close one both the Angualr and Dotnet containers will probably stop. To prevent this you can set the ```shutDownAction``` to ```none``` in the devcontaier config files.
