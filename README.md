# Movie Search App

## Overview

The Movie Search App allows users to search for movies using the TMDb (The Movie Database) API. The application displays a list of movies based on the user's query, allowing sorting by release date or rating. It supports pagination to navigate through multiple pages of search results.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces. React is used to create reusable UI components and manage the state of the application.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs quickly. Tailwind CSS is used to style the application and ensure it is visually appealing across different devices.
- **JavaScript ES6**: Modern JavaScript features are used throughout the codebase for cleaner and more efficient code.

### API

- **TMDb API**: The Movie Database (TMDb) API is used to fetch movie data. This API provides movie details, including titles, release dates, ratings, and posters.

## How It Works

### Components

1. **SearchBar**: 
   - Allows users to enter a search query.
   - On submitting the query, it triggers a search request to the TMDb API.

2. **MoviesTable**: 
   - Displays a table of movie results.
   - Includes sorting functionality by release date and rating.
   - Shows movie details like poster, title, release date, rating, and description.

3. **Pagination**:
   - Manages navigation between pages of search results.
   - Displays the current page number and total pages.
   - Provides buttons to navigate to the next or previous page.

### Functionality

1. **Searching**:
   - Users enter a movie name into the search bar.
   - The app sends a request to the TMDb API with the search query.
   - Results are fetched and displayed in a paginated table.

2. **Sorting**:
   - Users can click on table headers to sort results by release date or rating.
   - The table updates to reflect the selected sorting order.

3. **Pagination**:
   - The app calculates the total number of pages based on the total number of results and the number of movies displayed per page.
   - Users can navigate between pages using "Next" and "Previous" buttons.
   - The current page number and total pages are displayed to the user.

### API Integration

- **Base URL**: `https://api.themoviedb.org/3/search/movie`
- **API Key**: `da128f0f40bdeb2660ba6801fe504117`
- **Query Parameters**:
  - `query`: The search term entered by the user.
  - `page`: The current page number for pagination.
  - `include_adult`: Set to `false` to exclude adult content.

### Setup and Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/movie-search-app.git
    cd movie-search-app
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the Development Server**:

    ```bash
    npm start
    ```

    The app will be accessible at `http://localhost:3000`.

### Usage

1. **Search for Movies**:
   - Enter a movie name in the search bar and click "Search".
   - Results will be displayed in a table.

2. **Sort Results**:
   - Click on the "Release Date" or "Rating" column headers to sort the movies by those attributes.

3. **Navigate Pages**:
   - Use the "Next" and "Previous" buttons to navigate through the pages of results.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and create a pull request.

## License

This project is licensed under the MIT License. 

---

For any questions or issues, feel free to open an issue on GitHub or contact the project maintainers.
