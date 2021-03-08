# PiggyBank 💰

**"PiggyBank"** is a student project developed by <a href=https://www.kelseaportfolio.com/>Kelsea McAllister</a>. In 2019, a survey revealed two in five U.S. adults said they have a budget and follow it to keep track of spending. But the survey also revealed three in five U.S. adults self-reported that they do not budget. The idea of this project was to create an application that simplified saving money by helping the user organize and visualize their savings based on goals. 

**Try Out PiggyBank here:** https://www.pigbnkapp.com/

In PiggyBank, users will be able to create virtual "piggy banks" for each of their savings goals. Each "piggy bank" will have a goal amount and a user will assign money 💸 from their Total Savings to those piggy banks to keep track of every dollar in their savings. "Piggy banks" are assigned a category of Personal, Emergency, and Retirement, and a breakdown of the amount of money assigned to those categories is shown in a chart. 📊

## How It Was Built 💪👩‍💻

This is a **multi-page React app built using React Router and Redux with Toolkit**.
I started by building the Sign Up and Log In flow, which will take first users to an initial form to create a new Account, while returning users will be taken directly to the Dashboard.
The Dashboard and Accounts page are restricted areas: we have implemented **authentication**  using **JSON Web Tokens** and **Bycrypt**, so only registered users can access it.
This is all achieved with redirecting between components thanks to Router, in combination with state management in the Redux Store.

- Main sections are performing a **fetch to the backend to either GET, POST, PATCH or DELETE data**.
- "Piggy bank" and Account tiles will show EDIT and DELETE options, which gives the user the possibility to update an older entry or remove it.
- Styling is mostly done using React-Bootstrap UI, with a small amount of custom CSS in the mix.

## Additional Packages used
- react-chartjs-2
- react-bootstrap
- react-planet-menu

## Backend 😎

We have also developed the Backend for this application which consists of a **RESTful API built with Ruby on Rails**.

You can find the repository for it here: https://github.com/kelseamc/piggybank-backend


