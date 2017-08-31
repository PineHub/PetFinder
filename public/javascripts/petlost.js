/**
 * Created by Clarence on 6/3/2017.
 */

////

/*
Event listener for 'lost a pet' button.
@creates a form below button to submit new pet to database
*/

var getToken = 0;  //keeps track of button clicks for lost button


document.getElementById("lost_button").addEventListener("click", function(){
    
    
    if (getToken == 0){
        
    
    
    var lostForm = document.createElement("form");   //form for lost pets
    lostForm.innerHTML = 'lost a pet: ';
    lostForm.setAttribute('method', "get");
    lostForm.setAttribute('action', "/insert");  
    lostForm.setAttribute('id', "lost_form");
    
    var lostPetName = document.createElement("input"); //input element, petname
    lostPetName.setAttribute('type',"text");
    lostPetName.setAttribute('id',"lPet_name");
    lostPetName.setAttribute('placeholder', "Your lost pet's name");
    lostForm.appendChild(lostPetName);
    
    var lostPetSpecies = document.createElement("input"); //input element, petspecies
    lostPetSpecies.setAttribute('type',"text");
    lostPetSpecies.setAttribute('id',"lPet_species");
    lostPetSpecies.setAttribute('placeholder', "Your pet's species");
    lostForm.appendChild(lostPetSpecies);
    
    
    var lostPetBreed = document.createElement("input"); //input element, petbreed
    lostPetBreed.setAttribute('type',"text");
    lostPetBreed.setAttribute('id',"lPet_breed");
    lostPetBreed.setAttribute('placeholder', "Your pet's breed");
    lostForm.appendChild(lostPetBreed);
    
    var lostPetColor1 = document.createElement("input"); //input element, petcolor1
    lostPetColor1.setAttribute('type',"text");
    lostPetColor1.setAttribute('id',"lPet_color1");
    lostPetColor1.setAttribute('placeholder', "Your pet's primary color");
    lostForm.appendChild(lostPetColor1);
    
    var lostPetColor2 = document.createElement("input"); //input element, petcolor2
    lostPetColor2.setAttribute('type',"text");
    lostPetColor2.setAttribute('id',"lPet_color2");
    lostPetColor2.setAttribute('placeholder', "Your pet's secondary color");
    lostForm.appendChild(lostPetColor2);
    
    var lostPetColor3 = document.createElement("input"); //input element, petcolor3
    lostPetColor3.setAttribute('type',"text");
    lostPetColor3.setAttribute('id',"lPet_color3");
    lostPetColor3.setAttribute('placeholder', "A colorful pet! -Third color");
    lostForm.appendChild(lostPetColor3);
    
    var lostPetWeight = document.createElement("input"); //input element, petweight
    lostPetWeight.setAttribute('type',"number");
    lostPetWeight.setAttribute('id',"lPet_weight");
    lostPetWeight.setAttribute('placeholder', "Your pet's weight in lbs");
    lostForm.appendChild(lostPetWeight);
    
    
    //////////////Pet Gender
    
    var lGenderParagraph = document.createElement("p");
    var lGenderPnode = document.createTextNode("Gender?");
    lGenderParagraph.appendChild(lGenderPnode);
    lostForm.appendChild(lGenderParagraph);
    
    var lGenderSelect = document.createElement("select");  //input element, petgender
    lGenderSelect.setAttribute('id', "lGender_choice");
    lGenderParagraph.appendChild(lGenderSelect);
    
    
    var lostMaleOption = document.createElement("option"); 
    lostMaleOption.setAttribute('name',"Male");
    var maleText = document.createTextNode("Male");
    lostMaleOption.appendChild(maleText);
    lGenderSelect.appendChild(lostMaleOption);
   
    var lostFemaleOption = document.createElement("option"); 
    lostFemaleOption.setAttribute('name',"Female");
    var femaleText = document.createTextNode("Female");
    lostFemaleOption.appendChild(femaleText);
    lGenderSelect.appendChild(lostFemaleOption);
    
    var genderValue = lGenderSelect.value;
    
    ///////////Pet gender
    
     //////////////Pet Size
    
    var lSizeParagraph = document.createElement("p");
    var lSizePnode = document.createTextNode("Size?");
    lSizeParagraph.appendChild(lSizePnode);
    lostForm.appendChild(lSizeParagraph);
    
    var lSizeSelect = document.createElement("select");  //input element, petSize
    lSizeSelect.setAttribute('id', "lSize_choice");
    lSizeParagraph.appendChild(lSizeSelect);
    
    
    var lostSmallOption = document.createElement("option"); 
    lostSmallOption.setAttribute('name',"Small");
    var SmallText = document.createTextNode("Small");
    lostSmallOption.appendChild(SmallText);
    lSizeSelect.appendChild(lostSmallOption);
   
    var lostMediumOption = document.createElement("option"); 
    lostMediumOption.setAttribute('name',"Medium");
    var MediumText = document.createTextNode("Medium");
    lostMediumOption.appendChild(MediumText);
    lSizeSelect.appendChild(lostMediumOption);
    
    var lostLargeOption = document.createElement("option"); 
    lostLargeOption.setAttribute('name',"Large");
    var LargeText = document.createTextNode("Large");
    lostLargeOption.appendChild(LargeText);
    lSizeSelect.appendChild(lostLargeOption);
    
    var lostXLOption = document.createElement("option"); 
    lostXLOption.setAttribute('name',"XL");
    var XLText = document.createTextNode("XL");
    lostXLOption.appendChild(XLText);
    lSizeSelect.appendChild(lostXLOption);
    
    var SizeValue = lSizeSelect.value;
    
    ///////////Pet Size
    
    
    var lDateParagraph = document.createElement("p");
    var lDatePnode = document.createTextNode("Date Last Seen?");
    lDateParagraph.appendChild(lDatePnode);
    lostForm.appendChild(lDateParagraph);
    var dateLost = document.createElement("input"); //input element, datelost
    dateLost.setAttribute('type',"date");
    dateLost.setAttribute('id',"date_lost");
    lDateParagraph.appendChild(dateLost);
    
    var lPhone = document.createElement("input"); //input element, phone
    lPhone.setAttribute('type',"tel");
    lPhone.setAttribute('id',"owner_phone");
    lPhone.setAttribute('placeholder', "Owner Phone Number");
    lostForm.appendChild(lPhone);
    
    
    var owner = document.createElement("input"); //input element, ownername
    owner.setAttribute('type',"text");
    owner.setAttribute('id',"owner_name");
    owner.setAttribute('placeholder', "Owner Name");
    lostForm.appendChild(owner);
    
    

    var submitLostPet = document.createElement("input"); //input element, Submit button
    submitLostPet.setAttribute('type',"submit");
    submitLostPet.setAttribute('value',"Submit");
    submitLostPet.setAttribute('id', "lost_submit")

    
    lostForm.appendChild(submitLostPet);


    
   

    document.getElementsByTagName('body')[0].appendChild(lostForm);
    




////////////////////////////get stuff///////////////////
var binParagraph = document.createElement("p");
    binParagraph.setAttribute("id", "httpbinResponse");
    //document.getElementsByTagName('body')[0].appendChild(binParagraph);
    document.getElementById('lost_form').appendChild(binParagraph);
    //binParagraph.innerHTML = 'binPlaceholder';

    document.getElementById('lost_submit').addEventListener('click', function(event){
    var lostReq = new XMLHttpRequest();
    
    var addPet = document.getElementById("lost_form");
    var qString = "insertLost";   
    
    console.log("addPet: ", document.getElementById('lPet_species').value);
    
    // var parameters = "species="+ addPet.elements.species.value + 
    //                     "&breed=" + addPet.elements.breed.value + 
    //                     "&color1=" + addPet.elements.color1.value +
    //                     "&color2=" + addPet.elements.color2.value +
    //                     "&color3=" + addPet.elements.color3.value +
    //                     "&gender=" + addPet.elements.fGenderSelect.value + 
    //                     "&size=" + addPet.elements.fSizeSelect.value +
    //                     "&pet_name=" + addPet.elements.petName.value +
    //                     "&date_found=" + addPet.elements.dateFound.value;
    
    
    var parameters = "species="+ document.getElementById('lPet_species').value + 
                        "&breed=" + document.getElementById('lPet_breed').value + 
                        "&color1=" + document.getElementById('lPet_color1').value +
                        "&color2=" + document.getElementById('lPet_color2').value +
                        "&color3=" + document.getElementById('lPet_color3').value +
                        "&gender=" + document.getElementById('lGender_choice').value + 
                        "&size=" + document.getElementById('lSize_choice').value +
                        "&weight=" + document.getElementById('lPet_weight').value +
                        "&pet_name=" + document.getElementById('lPet_name').value +
                        "&owner_name=" + document.getElementById('owner_name').value +
                        "&owner_phone=" + document.getElementById('owner_phone').value +
                        "&date_lost=" + document.getElementById('date_lost').value;
                        
    console.log("going to insert: " + qString + "?" + parameters);
    
    lostReq.open('GET', qString + "?" + parameters, true);
    lostReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');     //probably remove for incoming db content
    lostReq.addEventListener('load', function(){
        if(lostReq.status >=200 && lostReq.status < 400){
            //alert("got response from bin");
            //var response = JSON.parse(lostReq.responseText);
            
            var confirmationResponse = "Your pet " + document.getElementById('lPet_name').value + " added to database! Click 'Lost a Pet' again to reset form."/* with response: " + response.data*/;
            
            binParagraph.innerHTML = confirmationResponse;    
            //console.log(response.data);
            
        }   
        else{
            alert("Error in network request: " + lostReq.statusText);
        }});
        lostReq.send(qString +"?"+parameters);
        event.preventDefault();
        }
        
        
    );
    
    getToken = 1;

    }
 else{
    
    var formdivElement = document.getElementById("lost_form");
    formdivElement.parentNode.removeChild(formdivElement);  
    getToken = 0;
    
    }
    
    
    
    
    });

////////////////////get stuff////////////////////////////


/*
End of Event listener for 'lost a pet' button.
*/



