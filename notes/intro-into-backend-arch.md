## MVC Architecture

Model - Controller - View

Model - Business Logic
Controller - Application Logic 
View - Presentation logic

## Application vs Business Logic 

### Application Logic 

- Code is only concerned about the application's implementation, not the underlying business problems we trying to resolve (e.g showing/selling tours)
- Concerned about managing requests and responses
- About the App's more technical aspects
- The Bridge between model and view layers

### Business Logic 

- Code that actually solves the business problem 
- Directly related to business, how the business works and business needs
- This App: Examples
  - Creating new tours in db 
  - Checking if user's password is correct 
  - Validating users inputs data
  - Ensuring only users who bought a tour can review it