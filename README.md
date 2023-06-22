# Path of Exile Market Arbitrage and Analysis

## Table of Contents

- [Path of Exile Market Arbitrage and Analysis](MVP)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Authors and Contributors](#authors-and-contributors)
  - [Wins and Improvements](#wins-and-improvements)

## Description

MVP is a project that was created to demonstrate the use of a full stack application with React, Express, Node.js, and PostgreSQL. It consolidates and transforms game market information and ingame crafting weighting, allowing users to quickly take advantage of market inefficiencies.

## Technologies Used

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
[![Axios](https://img.shields.io/badge/Tailwindcss-000000?style=for-the-badge&logo=tailwindcss&logoColor=blue)](https://tailwindcss.com/)

## Installation

Clone the repository and run `npm install`:

```
git clone https://github.com/Chugale/MVP.git
cd MVP
npm install
```

## Authors and Contributors

MVP was created by Eric Lee.

## Wins and Improvements

MVP was a success in that it allowed us to create a full stack application with React, Express, Node.js, and PostgreSQL. I was able to create an application that automated ETL of data-mined ingame crafting weights and shape it to match with market data from the market API. In addition, market API provides no parameters to chunk several million data points, but server-side rendering, chunking, and lazy loading was able to bring down render time from 10 seconds to approximately 2 seconds.

However, there are some areas that could be improved upon. One of these areas is the styling of the application. We could also add more features, such as market data for other segments of the game economy, multiple filters, more information regarding market ineffieciences(TODO).

<img width="1137" alt="Screen Shot 2023-06-22 at 3 40 27 PM" src="https://github.com/Chugale/MVP/assets/42364784/cbf4d92e-9cec-4357-939e-2f360317ecd4">


