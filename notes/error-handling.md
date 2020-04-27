### Operational Errors 

Problems that we can predict will happen at some point, so we just need to handle them in advance. 

- Invalid Path Accessed
- Invalid User Input 
- Failed to connect to server 
- Failed to connect to DB
- Request Timeout

### Programming Errors

Bugs that we developers introduce into our code. Difficult to find and handle. 

- Reading Properties on undefined 
- Passing a number where an object is expected
- Using await without async 
- ect...


We will build a Error Handling Middleware to send back to the client