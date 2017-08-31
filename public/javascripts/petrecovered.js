/*
Event listener for 'recovered lost for pet' button.
@
*/
document.getElementById("recovered_button").addEventListener("click", function(){
    
   
    var searchForm = document.createElement("form");   //form for lost pets
    searchForm.setAttribute('method', "get");
    searchForm.setAttribute('action', "/recover");  
    searchForm.setAttribute('id', "recovered_form");
    
    
    var searchPetSpecies = document.createElement("input"); //input element, petspecies
    searchPetSpecies.setAttribute('type',"text");
    searchPetSpecies.setAttribute('id',"sPet_species");
    searchPetSpecies.setAttribute('placeholder', "Your pet's species");
    searchForm.appendChild(searchPetSpecies);
    
    
    var searchPetBreed = document.createElement("input"); //input element, petbreed
    searchPetBreed.setAttribute('type',"text");
    searchPetBreed.setAttribute('id',"sPet_breed");
    searchPetBreed.setAttribute('placeholder', "Your pet's breed");
    searchForm.appendChild(searchPetBreed);
    
    var searchPetColor1 = document.createElement("input"); //input element, petcolor1
    searchPetColor1.setAttribute('type',"text");
    searchPetColor1.setAttribute('id',"sPet_color1");
    searchPetColor1.setAttribute('placeholder', "Your pet's primary color");
    searchForm.appendChild(searchPetColor1);
    
    var searchPetColor2 = document.createElement("input"); //input element, petcolor2
    searchPetColor2.setAttribute('type',"text");
    searchPetColor2.setAttribute('id',"sPet_color2");
    searchPetColor2.setAttribute('placeholder', "Your pet's secondary color");
    searchForm.appendChild(searchPetColor2);
    
    var searchPetColor3 = document.createElement("input"); //input element, petcolor3
    searchPetColor3.setAttribute('type',"text");
    searchPetColor3.setAttribute('id',"sPet_color3");
    searchPetColor3.setAttribute('placeholder', "A colorful pet! -Third color");
    searchForm.appendChild(searchPetColor3);
    
    
    var searchPetWeight = document.createElement("input"); //input element, petweight
    searchPetWeight.setAttribute('type',"number");
    searchPetWeight.setAttribute('id',"sPet_weight");
    searchPetWeight.setAttribute('placeholder', "Your pet's weight in lbs");
    searchForm.appendChild(searchPetWeight);
    
    
    //////////////Pet Gender
    
    var sGenderParagraph = document.createElement("p");
    var sGenderPnode = document.createTextNode("Gender?");
    sGenderParagraph.appendChild(sGenderPnode);
    searchForm.appendChild(sGenderParagraph);
    
    var sGenderSelect = document.createElement("select");  //input element, petgender
    sGenderSelect.setAttribute('id', "sGender_choice");
    sGenderParagraph.appendChild(sGenderSelect);
    
    
    var searchMaleOption = document.createElement("option"); 
    searchMaleOption.setAttribute('name',"Male");
    var maleText = document.createTextNode("Male");
    searchMaleOption.appendChild(maleText);
    sGenderSelect.appendChild(searchMaleOption);
   
    var searchFemaleOption = document.createElement("option"); 
    searchFemaleOption.setAttribute('name',"Female");
    var femaleText = document.createTextNode("Female");
    searchFemaleOption.appendChild(femaleText);
    sGenderSelect.appendChild(searchFemaleOption);
    
    var genderValue = sGenderSelect.value;
    
    ///////////Pet gender
    
     //////////////Pet Size
    
    var sSizeParagraph = document.createElement("p");
    var sSizePnode = document.createTextNode("Size?");
    sSizeParagraph.appendChild(sSizePnode);
    searchForm.appendChild(sSizeParagraph);
    
    var sSizeSelect = document.createElement("select");  //input element, petSize
    sSizeSelect.setAttribute('id', "sSize_choice");
    sSizeParagraph.appendChild(sSizeSelect);
    
    
    var searchSmallOption = document.createElement("option"); 
    searchSmallOption.setAttribute('name',"Small");
    var SmallText = document.createTextNode("Small");
    searchSmallOption.appendChild(SmallText);
    sSizeSelect.appendChild(searchSmallOption);
   
    var searchMediumOption = document.createElement("option"); 
    searchMediumOption.setAttribute('name',"Medium");
    var MediumText = document.createTextNode("Medium");
    searchMediumOption.appendChild(MediumText);
    sSizeSelect.appendChild(searchMediumOption);
    
    var searchLargeOption = document.createElement("option"); 
    searchLargeOption.setAttribute('name',"Large");
    var LargeText = document.createTextNode("Large");
    searchLargeOption.appendChild(LargeText);
    sSizeSelect.appendChild(searchLargeOption);
    
    var searchXLOption = document.createElement("option"); 
    searchXLOption.setAttribute('name',"XL");
    var XLText = document.createTextNode("XL");
    searchXLOption.appendChild(XLText);
    sSizeSelect.appendChild(searchXLOption);
    
    var SizeValue = sSizeSelect.value;
    
    ///////////Pet Size
   /*
    /// Location found
    var fLocParagraph = document.createElement("p");
    var fLocPnode = document.createTextNode("Location?");
    fLocParagraph.appendChild(fLocPnode);
    
    
    var searchLocation = document.createElement("input"); //input element, petbreed
    searchLocation.setAttribute('type',"text");
    searchLocation.setAttribute('id',"fsearch_location");
    searchLocation.setAttribute('placeholder', "Location");
    fLocParagraph.appendChild(searchLocation);
    searchForm.appendChild(fLocParagraph);
    */
    
    
    var submitSearchPet = document.createElement("input"); //input element, Submit button
    submitSearchPet.setAttribute('type',"submit");
    submitSearchPet.setAttribute('value',"Submit");
    submitSearchPet.setAttribute('id', "recover_submit");

    
    searchForm.appendChild(submitSearchPet);
    

    document.getElementsByTagName('body')[0].appendChild(searchForm);

   
////////////////////////////get stuff 6/4 9:25pm   



var binParagraph = document.createElement("p");
    binParagraph.setAttribute("id", "httpbinResponse");
    document.getElementsByTagName('body')[0].appendChild(binParagraph);
    binParagraph.innerHTML = 'binPlaceholder';


document.getElementById("recovered_button").addEventListener("click", function(){
    //start copying petsearch.js from line 155
    var searchReq = new XMLHttpRequest();
    var qString = "recover";
    
    var parameters = "species="+ document.getElementById('sPet_species').value + 
                        "&breed=" + document.getElementById('sPet_breed').value + 
                        "&color1=" + document.getElementById('sPet_color1').value +
                        "&color2=" + document.getElementById('sPet_color2').value +
                        "&color3=" + document.getElementById('sPet_color3').value +
                        "&gender=" + document.getElementById('sGender_choice').value + 
                        "&size=" + document.getElementById('sSize_choice').value;
    
    
    console.log("in recovered button listener");
     searchReq.open('GET', qString + "?" + parameters, true);
     
    searchReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');     //probably remove for incoming db content
    searchReq.addEventListener('load', function(){
        if(searchReq.status >=200 && searchReq.status < 400){
            console.log("got response from recover");
            //var response = JSON.parse(searchReq.responseText);
            //binParagraph.innerHTML = response.data;
            //console.log(response.data);
           
            
        }   
        else{
            alert("Error in network request: " + searchReq.statusText);
        }});
        searchReq.send(qString +"?"+parameters);
        event.preventDefault(qString +"?"+parameters);
        }
        
        );
////////////////////////////get stuff 6/4 9:25pm
        
        
    });//end of event listener for recovered button
    
    
    
    
    
    
    
    
    
      