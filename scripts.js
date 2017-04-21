// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. getCurrentValue should return the last answer returned from multiply.

var currentValue = 1;
var multiplyNum;
var callCounter = 0;


function Multiplier(){
	this.multiply = multiply;
	this.getCurrentValue = getCurrentValue;
}

function multiply(num){
	callCounter += 1;
	if (callCounter <= 1) {
		currentValue = num * 1;
	} else {
		currentValue = currentValue * num;
	}
	console.log(currentValue);
	return currentValue;
}

function getCurrentValue(){
	console.log(currentValue);
	return currentValue;
}
var mathNum = new Multiplier();

mathNum.multiply(5);
mathNum.multiply(5);
mathNum.multiply(5);
mathNum.getCurrentValue(5);

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. 
//Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
//Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

var photo0 = document.getElementsByClassName("photo")[0];
var photo1 = document.getElementsByClassName("photo")[1];
var photo2 = document.getElementsByClassName("photo")[2];
var photo3 = document.getElementsByClassName("photo")[3];
var photo4 = document.getElementsByClassName("photo")[4];
var photo5 = document.getElementsByClassName("photo")[5];
// var phillySunrise = document.getElementsByClassName("cityBtn")[0];
// var beachSunrise = document.getElementsByClassName("beachBtn")[0];
// var allPhotos = document.getElementsByClassName("allBtn")[0];
// var buttons = [phillySunrise, beachSunrise, allPhotos];

var album = [];
var city = [];
var beach = [];

function Album(array){
	this.photos = array;
	this.city
	this.addPhoto = addPhoto;
	this.listPhotos = listPhotos;
}

function addPhoto(location, tag, link){
	Photo.apply(this, arguments);
	url(link);
}

function listPhotos(array){
	for(i = 0; i < array.length; i++){
		console.log(array[i]);
	}
}

function Photo(location, tag){
	this.url = url;
	this.location = location;
	this.tag = tag;
	window[tag].push(this);
	album.push(this);
}

function url(link){
	this.url = "url(" + link + ")";
}

//do I not give a variable name to photos that I put directly into the album array?
//then access them through a for loop?

var sunriseAlbum = new Album(album);
// sunriseAlbum.addPhoto("island", ["beach"], "beach1.jpg");
var sunrise = new Photo("island", "beach");
var sunrise2 = new Photo("island", "beach");
var sunrise3 = new Photo("island", "beach");
var sunrise6 = new Photo("philly", "city");
var sunrise4 = new Photo("philly", "city");
var sunrise5 = new Photo("philly", "city");

listPhotos(sunriseAlbum.photos);

sunrise.url("beach1.jpg");
sunrise2.url("beach2.jpg");
sunrise3.url("beach3.jpg");
sunrise4.url("city1.jpg");
sunrise5.url("city2.jpg");
sunrise6.url("city3.jpg");

for(let i = 0; i < album.length; i++){
	var photo = window["photo" + i];
	(photo).style.backgroundImage = album[i].url;
}

document.addEventListener("keydown", function(event){
	if (event.keyCode > 50){
		photo0.classList.add("translate");
	}
	setTimeout(function(){photo0.classList.remove("translate")}, 2000)
})

//Attempt at looping button listeners

// for(let i = 0; i < buttons.length; i++){
// 	buttons[i].addEventListener("click", function(){
// 		for(i = 0; i < album.length; i++){
// 			album[i].style.display = "none";
// 		}
// 	})
// }

//attempting to add event listeners to filter buttons 

// phillySunrise.addEventListener("click", function(){
// 	for(let i = 0; i < album.length; i++){
// 	var photo = eval("photo" + 	i);
// 		if (photo.location === "philly" && photo.style.display != "none"){
// 			photo.style.display = "none";
// 		} else if (photo.location === "philly" && photo.style.display === "none"){
// 			photo.style.display = "block";
// 		}
// 	}
// })

// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object. Potential methods: A teacher can change the grades of a student, give detention to a student, or send a student to the principal. A student can do her or his homework, skip class, or give the teacher an apple. The school could open or close. 

var school = [];
var teachers = [];
var students = [];
var teach = new Teacher("Teach", 50, "decent");
var teach2 = new Teacher("Teach", 50, "good");
var kid = new Student("Johan", 2, 90);
var kid2 = new Student("Emma", 2, 60);
var kid3 = new Student("Alice", 2, -80);
var newSchool = new School(students, teachers);

function Person(name, age){
	this.name = name;
	this.age = age;
	school.push(this, arguments);
}

function Teacher(name, age, isGood){
	this.quality = isGood;
	this.changeGrade = changeGrade;
	teachers = [];
	Person.apply(this, arguments);
}

function Student(name, age, grade){
	this.grade = grade;
	this.doHomework = doHomework;
	this.skipClass = skipClass;
	students.push(this);
	Person.apply(this, arguments);
}

function School(students, teachers){
	this.students = students;
	this.teachers = teachers;
	this.status = changeStatus;
}

function changeGrade(varName, gradeTo){
	students[students.indexOf(varName)].grade = gradeTo;
}

function doHomework(){
	this.grade += 5;
}

function skipClass(){
	this.grade -= 5;
}

function changeStatus(newStatus){
	this.status = newStatus;
}

newSchool.status("closed");
teach.changeGrade(kid2, 100);
kid.doHomework()
kid3.skipClass()




// Extra: Use your solution to problem 2 to create a simple one page photo gallery. This page should display all photos stored in your photo gallery object. Try your best to implement modern design trends. Then give a user the option to press a button to animate the images on the page somehow. Use CSS keyframes to make this happen.

// Extra 2: Use your calculator from a few days ago or create a new calculator app. Create a Calculator object that has a list of methods associated with it that can be called in response to DOM events.