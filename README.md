# ConnectMe

## Description

[Connect Me](https://connect-me-seven.vercel.app/) is an information application which includes data from [jsonplaceholder](https://jsonplaceholder.typicode.com), built with Nextjs, Tailwind, Redux, Shadcn-ui, and axios by [RohittCodes](https://github.com/rohittcodes)

## Contributing

You can easily contribute to the application by forking it here on github, and sending a PR(Pull Request). You can also share your feedbacks or features in the Issues tab or Discussion tab

## Installation and Setup

#### Setup
1. Clone the repo into your local system or fork the repo

```
# Clone the repository
git clone https://github.com/rohittcodes/connect-me.git

# Navigate into the directory
cd connect-me

# Install dependencies
npm install

# Start the application
npm run dev
```

2. Check it running on `https://localhost:3000`

## Docker setup and deployment

To run the docker image pull the image using

```
docker pull rohittcodes/connect-me:1.0
```

Run the image using

```
docker run -p {your-dedicated-port}:3000 imageId
```

You can get the imageId by running the following command:

```
docker images
```