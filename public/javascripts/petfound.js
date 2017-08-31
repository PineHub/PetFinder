/*
Event listener for 'found a pet' button.
@creates a form below button to submit new pet to database
*/

var getToken = 0;      //keeps track of button clicks for the found button

document.getElementById("found_button").addEventListener("click", function(){
    
    if (getToken == 0){
    
   
    var foundForm = document.createElement("form");   //form for lost pets
    foundForm.innerHTML = 'found a pet: ';
    foundForm.setAttribute('method', "get");
    foundForm.setAttribute('action', "/insert");  
    foundForm.setAttribute('id', "found_form");
    
    
    var foundPetSpecies = document.createElement("input"); //input element, petspecies
    foundPetSpecies.setAttribute('type',"text");
    foundPetSpecies.setAttribute('id',"fPet_species");
    foundPetSpecies.setAttribute('placeholder', "Your pet's species");
    foundForm.appendChild(foundPetSpecies);
    
    
    var foundPetBreed = document.createElement("input"); //input element, petbreed
    foundPetBreed.setAttribute('type',"text");
    foundPetBreed.setAttribute('id',"fPet_breed");
    foundPetBreed.setAttribute('placeholder', "Your pet's breed");
    foundForm.appendChild(foundPetBreed);
    
    var foundPetColor1 = document.createElement("input"); //input element, petcolor1
    foundPetColor1.setAttribute('type',"text");
    foundPetColor1.setAttribute('id',"fPet_color1");
    foundPetColor1.setAttribute('placeholder', "Your pet's primary color");
    foundForm.appendChild(foundPetColor1);
    
    var foundPetColor2 = document.createElement("input"); //input element, petcolor2
    foundPetColor2.setAttribute('type',"text");
    foundPetColor2.setAttribute('id',"fPet_color2");
    foundPetColor2.setAttribute('placeholder', "Your pet's secondary color");
    foundForm.appendChild(foundPetColor2);
    
    var lostPetColor3 = document.createElement("input"); //input element, petcolor3
    lostPetColor3.setAttribute('type',"text");
    lostPetColor3.setAttribute('id',"fPet_color3");
    lostPetColor3.setAttribute('placeholder', "A colorful pet! -Third color");
    foundForm.appendChild(lostPetColor3);
    
    var foundPetWeight = document.createElement("input"); //input element, petweight
    foundPetWeight.setAttribute('type',"number");
    foundPetWeight.setAttribute('id',"fPet_weight");
    foundPetWeight.setAttribute('placeholder', "Your pet's weight in lbs");
    foundForm.appendChild(foundPetWeight);
    
    
    //////////////Pet Gender
    
    var fGenderParagraph = document.createElement("p");
    var fGenderPnode = document.createTextNode("Gender?");
    fGenderParagraph.appendChild(fGenderPnode);
    foundForm.appendChild(fGenderParagraph);
    
    var fGenderSelect = document.createElement("select");  //input element, petgender
    fGenderSelect.setAttribute('id', "fGender_choice");
    fGenderParagraph.appendChild(fGenderSelect);
    
    
    var foundMaleOption = document.createElement("option"); 
    foundMaleOption.setAttribute('name',"Male");
    var maleText = document.createTextNode("Male");
    foundMaleOption.appendChild(maleText);
    fGenderSelect.appendChild(foundMaleOption);
   
    var foundFemaleOption = document.createElement("option"); 
    foundFemaleOption.setAttribute('name',"Female");
    var femaleText = document.createTextNode("Female");
    foundFemaleOption.appendChild(femaleText);
    fGenderSelect.appendChild(foundFemaleOption);
    
    var genderValue = fGenderSelect.value;
    
    ///////////Pet gender
    
     //////////////Pet Size
    
    var fSizeParagraph = document.createElement("p");
    var fSizePnode = document.createTextNode("Size?");
    fSizeParagraph.appendChild(fSizePnode);
    foundForm.appendChild(fSizeParagraph);
    
    var fSizeSelect = document.createElement("select");  //input element, petSize
    fSizeSelect.setAttribute('id', "fSize_choice");
    fSizeParagraph.appendChild(fSizeSelect);
    
    
    var foundSmallOption = document.createElement("option"); 
    foundSmallOption.setAttribute('name',"Small");
    var SmallText = document.createTextNode("Small");
    foundSmallOption.appendChild(SmallText);
    fSizeSelect.appendChild(foundSmallOption);
   
    var foundMediumOption = document.createElement("option"); 
    foundMediumOption.setAttribute('name',"Medium");
    var MediumText = document.createTextNode("Medium");
    foundMediumOption.appendChild(MediumText);
    fSizeSelect.appendChild(foundMediumOption);
    
    var foundLargeOption = document.createElement("option"); 
    foundLargeOption.setAttribute('name',"Large");
    var LargeText = document.createTextNode("Large");
    foundLargeOption.appendChild(LargeText);
    fSizeSelect.appendChild(foundLargeOption);
    
    var foundXLOption = document.createElement("option"); 
    foundXLOption.setAttribute('name',"XL");
    var XLText = document.createTextNode("XL");
    foundXLOption.appendChild(XLText);
    fSizeSelect.appendChild(foundXLOption);
    
    var SizeValue = fSizeSelect.value;
    
    ///////////Pet Size
    /// Location found
    /*
    var fLocParagraph = document.createElement("p");
    var fLocPnode = document.createTextNode("Location?");
    fLocParagraph.appendChild(fLocPnode);
    
    
    var locationFound = document.createElement("input"); //input element, petbreed
    locationFound.setAttribute('type',"text");
    locationFound.setAttribute('id',"fLocation_found");
    locationFound.setAttribute('placeholder', "Location found");
    fLocParagraph.appendChild(locationFound);
    foundForm.appendChild(fLocParagraph);*/
    
    //Pet Name
    var petName = document.createElement("input"); //input element, ownername
    petName.setAttribute('type',"text");
    petName.setAttribute('id',"petName");
    petName.setAttribute('placeholder', "Pet Name");
    foundForm.appendChild(petName);
    
    
    
    var fDateParagraph = document.createElement("p");
    var fDatePnode = document.createTextNode("Date Found?");
    fDateParagraph.appendChild(fDatePnode);
    foundForm.appendChild(fDateParagraph);
    var dateFound = document.createElement("input"); //input element, datelost
    dateFound.setAttribute('type',"date");
    dateFound.setAttribute('id',"date_found");
    fDateParagraph.appendChild(dateFound);
    
    var submitFoundPet = document.createElement("input"); //input element, Submit button
    submitFoundPet.setAttribute('type',"submit");
    submitFoundPet.setAttribute('value',"Submit");
    submitFoundPet.setAttribute('id', "found_submit");

    
    foundForm.appendChild(submitFoundPet);


    document.getElementsByTagName('body')[0].appendChild(foundForm);
    
   
////////////////////////////get stuff 6/4 9:25pm   

    var binParagraph = document.createElement("p");
    binParagraph.setAttribute("id", "httpbinResponse");
    //document.getElementsByTagName('body')[0].appendChild(binParagraph);
    document.getElementById('found_form').appendChild(binParagraph);
    //binParagraph.innerHTML = 'binPlaceholder';

    document.getElementById('found_submit').addEventListener('click', function(event){
    var foundReq = new XMLHttpRequest();
    //var lPayload = {form:null};
    //lPayload.form = document.getElementById('found_form').value;
    var addPet = document.getElementById("found_form");
    var qString = "insert";    //6-9-17 2:12am took out leading /
    
    console.log("addPet: ", document.getElementById('fPet_species').value);
    
    // var parameters = "species="+ addPet.elements.species.value + 
    //                     "&breed=" + addPet.elements.breed.value + 
    //                     "&color1=" + addPet.elements.color1.value +
    //                     "&color2=" + addPet.elements.color2.value +
    //                     "&color3=" + addPet.elements.color3.value +
    //                     "&gender=" + addPet.elements.fGenderSelect.value + 
    //                     "&size=" + addPet.elements.fSizeSelect.value +
    //                     "&pet_name=" + addPet.elements.petName.value +
    //                     "&date_found=" + addPet.elements.dateFound.value;
    
    
    var parameters = "species="+ document.getElementById('fPet_species').value + 
                        "&breed=" + document.getElementById('fPet_breed').value + 
                        "&color1=" + document.getElementById('fPet_color1').value +
                        "&color2=" + document.getElementById('fPet_color2').value +
                        "&color3=" + document.getElementById('fPet_color3').value +
                        "&gender=" + document.getElementById('fGender_choice').value + 
                        "&size=" + document.getElementById('fSize_choice').value +
                        "&pet_name=" + document.getElementById('petName').value +
                        "&date_found=" + document.getElementById('date_found').value;
                        
    console.log("going to insert: " + qString + "?" + parameters);
    
    foundReq.open('GET', qString + "?" + parameters, true);
    foundReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');     //probably remove for incoming db content
    foundReq.addEventListener('load', function(){
        if(foundReq.status >=200 && foundReq.status < 400){
            //alert("got response from bin");
            //var response = JSON.parse(foundReq.responseText);
            var confirmationResponse = "Your pet " + document.getElementById('petName').value + " added to database! Click 'Found a Pet' again to reset form."/* with response: " + response.data*/;
            
            binParagraph.innerHTML = confirmationResponse;
            
            //console.log(response.data);
            
        }   
        else{
            alert("Error in network request: " + foundReq.statusText);
        }});
        foundReq.send(qString +"?"+ parameters);
        event.preventDefault();
        }
        
        
    );
    
    getToken = 1;

    }
 else{
    
    var formdivElement = document.getElementById("found_form");
    formdivElement.parentNode.removeChild(formdivElement);  
    getToken = 0;
    
    }
    
    
    }
);
////////////////////////////get stuff 6/4 9:25pm


/*
End of Event listener for 'found a pet' button.
*/