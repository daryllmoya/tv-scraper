
# TV Scraper Project

This project is a Node.js application that scrapes TV show and cast information from the TVMaze API, stores it in a MongoDB database, and provides a REST API to access the data.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Windows](#windows)
  - [Linux](#linux)
- [Running the Application](#running-the-application)
  - [Pull and Run MongoDB with Docker](#pull-and-run-mongodb-with-docker)
  - [Install Dependencies](#install-dependencies)
  - [Running the Tests](#running-the-tests)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Docker**: For running MongoDB in a container.
- **pnpm**: For managing Node.js packages.
- **Node.js**: Ensure you have Node.js installed (LTS version recommended).

## Installation

### Windows

#### 1. Install Docker Desktop

1. Download Docker Desktop from the [official Docker website](https://www.docker.com/products/docker-desktop).
2. Run the installer and follow the instructions.
3. After installation, launch Docker Desktop. It should start running in the background.

#### 2. Install `pnpm`

1. Open a terminal (you can use Command Prompt, PowerShell, or Git Bash).
2. Install `pnpm` globally by running:
   ```bash
   npm install -g pnpm
   ```

### Linux

#### 1. Install Docker

1. Open your terminal.
2. Run the following commands to install Docker:
   ```bash
   sudo apt-get update
   sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg-agent \
     software-properties-common
   ```

3. Add Docker’s official GPG key:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. Add Docker’s official repository:
   ```bash
   sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
   ```

5. Install Docker Engine:
   ```bash
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

6. Start Docker:
   ```bash
   sudo systemctl start docker
   ```

7. (Optional) Enable Docker to start on boot:
   ```bash
   sudo systemctl enable docker
   ```

8. Verify Docker installation:
   ```bash
   docker --version
   ```

#### 2. Install `pnpm`

1. Open your terminal.
2. Install `pnpm` globally by running:
   ```bash
   npm install -g pnpm
   ```

## Running the Application

### Pull and Run MongoDB with Docker

1. **Pull the MongoDB Docker Image**

   In your terminal, run the following command to pull the official MongoDB image:
   ```bash
   docker pull mongo
   ```

2. **Run the MongoDB Docker Container**

   After pulling the image, run the following command to start a MongoDB container:
   ```bash
   docker run -d -p 27017:27017 --name tvscraper-mongo mongo
   ```

   This will start a MongoDB instance accessible at `localhost:27017`.

### Install Dependencies

1. Navigate to the project directory:
   ```bash
   cd path/to/your/project
   ```

2. Install the dependencies using `pnpm`:
   ```bash
   pnpm install
   ```

### Running the Tests

1. Run the tests using the following command:
   ```bash
   pnpm run test
   ```

   The tests include both unit tests and integration tests for the API endpoints.

## API Endpoints

### 1. Fetch and Store Shows and Cast Data

- **Endpoint**: `/api/shows/fetch-and-store`
- **Method**: `GET`
- **Description**: This endpoint fetches TV shows and their cast from the TVMaze API and stores the data in the MongoDB database.

### 2. Get Paginated List of Shows

- **Endpoint**: `/api/shows`
- **Method**: `GET`
- **Query Parameters**:
  - `page`: The page number (default is 1).
  - `limit`: The number of shows per page (default is 10).
- **Description**: This endpoint returns a paginated list of TV shows, including the show ID, name, and a list of cast members ordered by birthday.

## Conclusion

This README provides a step-by-step guide to setting up, running, and testing the TV Scraper project. If you encounter any issues, please consult the official documentation for Docker, `pnpm`, and Node.js.
