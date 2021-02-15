# Ghibli Project

Ghibli project is a nodeJS project for Ghibli Studio lovers made for Madrid's Ironhack Bootcamp
.

## Description

Ghibli project integrates Google maps to show the user nearby stores which sell Ghibli merch. It also displays a search bar to search for Ghibli movies using Ghibli Studios API (<https://ghibliapi.herokuapp.com/>).

It also provides all users with a profile page to classify Ghibli movies as pending or watched.

## Endpoints table

| Id  | Method | Path                                        | Description                                                            |
| --- | ------ | ------------------------------------------- | ---------------------------------------------------------------------- |
| 1   | get    | /                                           | Renders homepage                                                       |
| 2   | post   | /search                                     | Searches for movie                                                     |
| 3   | get    | /search/movie/:id                           | Renders searched movie details                                         |
| 4   | get    | /login                                      | Renders login form                                                     |
| 5   | post   | /login                                      | Validates user login info                                              |
| 6   | get    | /signup                                     | Renders signup form                                                    |
| 7   | post   | /signup                                     | Validates user signup info                                             |
| 8   | post   | /logout                                     | Logs user out                                                          |
| 9   | get    | /stores                                     | Renders nearby stores view                                             |
| 11  | get    | /profile                                    | Renders user profile                                                   |
| 12  | get    | /profile/movie/:id                          | Renders user's rating and comments for a movie as well as editing form |
| 13  | post   | /profile/movie/:id                          | Updates user's rating and comments for a movie                         |
| 14  | get    | <https://ghibliapi.herokuapp.com/films>     | Get all movies from Studio Ghibli API                                  |
| 15  | get    | <https://ghibliapi.herokuapp.com/films/:id> | Get movie with specified ID from Studio Ghibli API                     |
