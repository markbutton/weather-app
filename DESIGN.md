# Angular Weather App Design Questions

### Q: What should I name this application?
For simplicity and not to limit the use of this app we will name it weather-app.

### Q: How will users interact with the application?
I can imagine the user getting a weather forecast for their local area or an city they may be traveling to.

### Q: How can I build a modular solution?
For the purpose of demonstrating lazy loading I will create view components as separate modules.

### Q: What libraries can I leverage to help me quickly meet my design objectives?
I can use bootstrap for responsive layout. Material Design for fast styling.

### Q: How should I structure the application and maintain best practices?
Use John Papas style guide.  Scaffold with Angular CLI.

### Q: What design patterns will I use?
Dependency Injection, Model View Controller.

### Q: How will I manage state?
Injectable state classes with controller.

### Q: What services will I need?
A: At the moment we need a five day forecast service.

### Q: What is the shape of the data in/out
Interfaces. src/forecast/models

### Q: Do I really need a middle tier for my app?
We are just building a small self-contained UI for the time being.  But I should be able to add mid tier at any time.

### Q: Can this app be grown organically?
A: Yes.

### Q: How will I mock data for unit test?
A: mock data class.  Need more research on mock data frameworks.  What level of unit test should I have?

### Q: Deployment considerations?
A: FREE for now.  Will there be automation?  How easy is it to build?

### Q: Will I need end to end test?
A: Set up basic e2e framework with a simple test.  What end to end test should I run?S

## Problems:
RXJS major version change with major breaking changes.
