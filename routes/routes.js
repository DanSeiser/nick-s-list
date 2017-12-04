var Task = require("./models/task");
var User = require("./models/user");

// app/routes.js
module.exports = function(app, passport) {
   
        // =====================================
        // HOME PAGE (with login links) ========
        // =====================================
        app.get('/', function(req, res) {
            res.render('Home.js'); // load the index.ejs file
        });
    
        // =====================================
        // LOGIN ===============================
        // =====================================
        // show the login form
        app.get('/login', function(req, res) {
            // render the page and pass in any flash data if it exists
            res.render('Login.js', { message: req.flash('loginMessage') }); 
        });    
        // process the login form
        // app.post('/login', do all our passport stuff here);
        // =====================================
        // SIGNUP ==============================
        // =====================================
        // show the signup form
        app.get('/signup', function(req, res) {
            // render the page and pass in any flash data if it exists
            res.render('SignUp.js', { message: req.flash('signupMessage') });
        });
    
        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // =====================================
        // PROFILE SECTION =====================
        // =====================================
        // we will want this protected so you have to be logged in to visit
        // we will use route middleware to verify this (the isLoggedIn function)
        app.get('/profile', isLoggedIn, function(req, res) {
            res.render('Profile.js', {
                user : req.user // get the user out of session and pass to template
            });
        });
    
        // =====================================
        // LOGOUT ==============================
        // =====================================
        app.get('/logout', function(req, res) {
            req.logout();
            res.redirect('/');
        });

        //GETS THE LIST OF TASKS BY CURRENTLY LOGGED IN USER
        app.get('/list',isLoggedIn,function(req,res){
            res.render('List.js',{
                user : req.user,//passes in the currently logged in user to the page (because I copied this from profile)
                tasks : Task//passes in the list of tasks to the page
                .find({ userID: req.user._id },function(err,res){
                    console.log(res)
                })
            })
        });
        //CREATE A NEW TASK BASED OFF OF A FORM SUBMISSION

        //switch this to do the create and then redirect to list.js
        //this probably doesn't needd a render
        app.post('/task',isLoggedIn,function(req,res){
            res.render('List.js',{
                user : req.user,
                tasks : Task
                
                .create({
                    //REPLACE THIS STUFF WITH THE REQUEST SCOPE FROM THE FORM THAT KATE IS SO KINDLY POSTING TO US LAVEN HOYVEN 
                    name            :   'test task',
                    description     :   'test description',
                    taskMaster      :   '',//SELECT TASKMASTER FIELD FROM KATE'S FORM
                    userID          :   '5a22f1604319ac15a435d15f', //REPLACE WITH req.user._id
                    completeBy      :   '01/01/2018'
                }).then(console.log('inserted'))//CHANGE THIS TO REDIRECT TO LISTLAVEN MCFLAYVENHOYGLE
            })
        });
        
        //RENDER THE LIST OF TASKS THAT THE CURRENTLY LOGGED IN USER IS MASTER OF
        app.get('/masterList',isLoggedIn,function(req,res){
            res.render('MasterList.js',{
                user : req.user,
                tasks : taskDB
                //THIS IS WRONG
                .find({ taskMaster: req.user._id })
                //FIND WHERE THE taskMaster ARRAY FIELD CONTAINS THE CURRENTLY LOGGED IN USER'S ID (req.user._id)
            })
        }); 

        //CREATE THE FORM ROUTE HERE
        app.get('/taskForm',isLoggedIn,function(req,res){//UPDATE THIS TO THE APPROPRIATE ROUTE TO CREATE A NEW ONE
            res.render('TaskForm.js',{
                user : req.user,
                users :  User.find()//UPDATE THIS FIND TO WHERE THE objectId is *not* the currently logged in user
            })
        })
    };
    
    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
    