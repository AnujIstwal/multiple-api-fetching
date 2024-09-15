# Data Fetching Project

This project demonstrates how to fetch data from multiple APIs and serve it through a backend proxy. It includes integration with the following APIs:

- **Google YouTube API** for fetching videos.
- **Bing Web Search API** for fetching blogs and articles.
- **Serp API** for fetching academic papers.

## Overview

The application fetches and aggregates data from these APIs to provide a unified interface for accessing videos, articles, and research papers. The backend serves as a proxy for accessing the Serp API, ensuring secure and efficient data retrieval.

## Project Structure

- **Frontend**: A web application that interacts with the APIs to display data. Deployed on [Netlify](https://www.netlify.com/).
- **Backend**: A Node.js server that acts as a proxy for the Serp API. Deployed on [Vercel](https://vercel.com/).

## Features

- **Google YouTube Integration**: Retrieve and display videos based on search queries.
- **Bing Web Search Integration**: Fetch and show blogs and articles related to the search terms.
- **Serp API Integration**: Fetch academic papers and related research content. The backend proxy handles requests to the Serp API to avoid exposing the API key.

