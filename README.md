ONLY .gitignore node_modules\*\*\*

Create an express simple CR app

- [x] 1. Make a new directory called express-cr-hw
- [x] 2. Go inside express-intro-hw folder
- [x] 3. In terminal, Make an app.js file using touch
- [x] 4. In terminal, npm init -y
- [x] 5. Open folder
- [x] 6. Add express, Morgan, and ejs through npm i and call them inside app.js file
- [x] 7. Create a server using Express, and use logger (Morgan) in App.js (don’t forger to use .json())
- [x] 8. Create a router folder and create an index router and a todo router files then connect in App.js (index = /, todo = /api/todo).
- [ ] 9. In index router:<br/>
   - [x] a. Make router and export out (modules.export)<br/>
   - [ ] b. Make a GET "/" route that returns a json of a message that says 'Welcome to my App'
- [ ] 10. In todo router:<br/>
    - [ ] a. Make router, export out and add uuidv4 (install and require)<br/>
    - [ ] b. Add this dummy data to your todo router (do not change anything in this array and don't add anything!, make sure this array in your!):<br/>
    let todos = [<br/>
    {<br/>
    id: "haf24jd",<br/>
    todo: "do laundry",<br/>
    done: "false"<br/>
    },<br/>
    {<br/>
    id: "jp2nkl2",<br/>
    todo: "wash dishes",<br/>
    done: "true"<br/>
    }<br/>
    ]<br/>
    - [ ] c. Make a GET "/get-all-todos" route that responds with the array of dummy data.<br/>
    - [ ] d. Make a GET "/get-todo-by-id" route that takes in a params and responds with the id and todo. If ID is not found respond with the message "The Todo ID you are looking for does not exists, please check ID"<br/>
    - [ ] e. Make a GET "/get-todos-by-done" route that takes in a params that is either true or false. If the params is false, respond with a newDoneArray that has done === false. If the params is true, respond with a newDoneArray that done === true.<br/>
    - [ ] f. Make a POST "/create-new-todo" route that POSTs a new todo (don't forget the id) with a done that is always false (don't need to pass in done since its always false) and responds with the whole todos array.

- [ ] 11. Add modules.export = app to the bottom of the app.js file and comment out the app.listen ***
