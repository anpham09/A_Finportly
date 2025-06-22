

// Enable swipe

goToStep = (step) => {
    document.querySelectorAll('.step').forEach((element) => {
        element.classList.add('hidden');
    });
    document.getElementById(`step${step}`).classList.remove('hidden');
}

addRow = (tableId, step) => {
    const table = document.getElementById(tableId).querySelector('tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td contenteditable="true" class="step${step}Category">New Category</td>
        <td><input type="number" placeholder="Amount($)" class="number-input step${step}Number"></td>
    `;
    table.appendChild(newRow);
    
}

//step 1 
const step1 = document.querySelector('#step1');
const companyName = document.querySelector('#companyName');
const address = document.querySelector('#address');
const dateCreated = document.querySelector('#dateCreated');
const dateIssued = document.querySelector('#dateIssued');
const firstStepRequired = document.querySelectorAll('.firstStepRequired');
const dateIssuedLabel = document.querySelector('#dateIssuedLabel');

const data = {};
step1.addEventListener('submit', (e)=>{
    e.preventDefault();
    let isValidStep1 = true;

    if (!companyName.value) {
        firstStepRequired[0].style.display = "inline";
        isValidStep1 = false;
    };

    if (!address.value) {
        firstStepRequired[1].style.display = "inline";
        isValidStep1 = false;
    };

    if (!dateCreated.value) {
        dateIssuedLabel.style.marginLeft = "53px";
        firstStepRequired[2].style.display = "inline";
        isValidStep1 = false;
    };

    if (!dateIssued.value) {
        firstStepRequired[3].style.display = "inline";
        isValidStep1 = false;
    };
    if (isValidStep1) {
        data.companyName = companyName.value;
        data.address = address.value;
        data.dateCreated = dateCreated.value;
        data.dateIssued = dateIssued.value;

        firstStepRequired[0].style.display = "none";
        firstStepRequired[1].style.display = "none";
        firstStepRequired[2].style.display = "none";
        firstStepRequired[3].style.display = "none";

        goToStep(2);
        
        //step 2
        const step2 = document.querySelector('#step2');
        

        step2.addEventListener('submit', (e) => {
            e.preventDefault();
            const step2Category = document.querySelectorAll('.step2Category');
            const step2Number = document.querySelectorAll('.step2Number');
            const secondStepRequiredAmount = document.querySelector('.secondStepRequiredAmount');

            let isValid = true;

            step2Number.forEach((input) => {
                if (!input.value) {
                    secondStepRequiredAmount.style.display = "inline";
                    isValid = false;
                } 

            });

            step2Category.forEach((input) => {
                if (input.textContent == "New Category" || !input.textContent) {
                    input.textContent = "Please input valid value";
                    input.style.color = "red";
                    input.addEventListener(('input'), (e)=>{
                        input.style.color = "#2c2c5f";
                    })
                    isValid = false;
                }
            });

            console.log(step2Number);
            
            if(isValid) {
                let step2Items = [];
                //save every input
                for (let i = 0; i < step2Number.length; i++){
                    item = {
                        number: step2Number[i].value,
                        category: step2Category[i].textContent
                    }
                    step2Items.push(item);
                    
                } 
                data.step2Items = step2Items;
                

                goToStep(3);


                //step 3
                const step3 = document.querySelector('#step3');

                step3.addEventListener('submit', (e) =>{
                    e.preventDefault();

                    const step3Category = document.querySelectorAll('.step3Category');
                    const step3Number = document.querySelectorAll('.step3Number');
                    const thirdStepRequiredAmount = document.querySelector('.thirdStepRequiredAmount');

                    //set isValid = false if there's blank cell
                    step3Number.forEach((input) => {
                        if(!input.value){
                            thirdStepRequiredAmount.style.display = "inline";
                            isValid = false;
                        }
                    });
                    step3Category.forEach((input) => {
                        if(input.textContent == "New Category" || !input.textContent){
                            input.textContent = "Please input valid value";
                            input.style.color = "red";
                            input.addEventListener(('input'), (e)=>{
                                input.style.color = "#2c2c5f";
                            });
                            isValid = false;
                        }
                    });
                    if (isValid){
                        let step3Items = [];
                        //save every input
                        for (let i = 0; i < step3Number.length; i++){
                            item = {
                                number: step3Number[i].value,
                                category: step3Category[i].textContent
                            }
                            step3Items.push(item);
                            
                        } 
                        data.step3Items = step3Items;

                        goToStep(4);

                        //step4
                        const step4 = document.querySelector('#step4');

                        step4.addEventListener('submit', (e) =>{
                            e.preventDefault();

                            const step4Category = document.querySelectorAll('.step4Category');
                            const step4Number = document.querySelectorAll('.step4Number');
                            const fourthStepRequiredAmount = document.querySelector('.fourthStepRequiredAmount');

                            //set isValid = false if there's blank cell
                            step4Number.forEach((input) => {
                                if(!input.value){
                                    thirdStepRequiredAmount.style.display = "inline";
                                    isValid = false;
                                };
                            });
                            step4Category.forEach((input) => {
                                if(input.textContent == "New Category" || !input.textContent){
                                    input.textContent = "Please input valid value";
                                    input.style.color = "red";
                                    input.addEventListener(('input'), (e)=>{
                                        input.style.color = "#2c2c5f";
                                    })
                                    isValid = false;
                                };
                            });
                            if (isValid){
                                let step4Items = [];
                                //save every input
                                for (let i = 0; i < step4Number.length; i++){
                                    item = {
                                        number: step4Number[i].value,
                                        category: step4Category[i].textContent
                                    };
                                    step4Items.push(item);
                                    
                                };
                                data.step4Items = step4Items;

                                goToStep(5);

                                //step5
                                const step5 = document.querySelector('#step5');

                                step5.addEventListener('submit', (e) =>{
                                    e.preventDefault();

                                    const step5Category = document.querySelectorAll('.step5Category');
                                    const step5Number = document.querySelectorAll('.step5Number');
                                    const fifthStepRequiredAmount = document.querySelector('.fifthStepRequiredAmount');

                                    //set isValid = false if there's blank cell
                                    step5Number.forEach((input) => {
                                        if(!input.value){
                                            thirdStepRequiredAmount.style.display = "inline";
                                            isValid = false;
                                        }
                                    });
                                    step5Category.forEach((input) => {
                                        if(input.textContent == "New Category" || !input.textContent){
                                            input.textContent = "Please input valid value";
                                            input.style.color = "red";
                                            input.addEventListener(('input'), (e)=>{
                                                input.style.color = "#2c2c5f";
                                            })
                                            isValid = false;
                                        }
                                    });
                                    if (isValid){
                                        let step5Items = [];
                                        //save every input
                                        for (let i = 0; i < step5Number.length; i++){
                                            item = {
                                                number: step5Number[i].value,
                                                category: step5Category[i].textContent
                                            }
                                            step5Items.push(item);

                                            console.log(step5Items);
                                            
                                            
                                        } 
                                        data.step5Items = step5Items;
                                

                                        goToStep(6);

                                        const step6 = document.querySelector('#step6');

                                        step6.addEventListener('submit', (e) =>{
                                            e.preventDefault();

                                            const step6Category = document.querySelectorAll('.step6Category');
                                            const step6Number = document.querySelectorAll('.step6Number');
                                            const sixthStepRequiredAmount = document.querySelector('.sixthStepRequiredAmount');

                                            //set isValid = false if there's blank cell
                                            step6Number.forEach((input) => {
                                                if(!input.value){
                                                    sixthStepRequiredAmount.style.display = "inline";
                                                    isValid = false;
                                                }
                                            });
                                            step6Category.forEach((input) => {
                                                if(input.textContent == "New Category" || !input.textContent){
                                                    input.textContent = "Please input valid value";
                                                    input.style.color = "red";
                                                    input.addEventListener(('input'), (e)=>{
                                                        input.style.color = "#2c2c5f";
                                                    })
                                                    isValid = false;
                                                }
                                            })
                                            if (isValid){
                                                let step6Items = [];
                                                //save every input
                                                for (let i = 0; i < step6Number.length; i++){
                                                    item = {
                                                        number: step6Number[i].value,
                                                        category: step6Category[i].textContent
                                                    }
                                                    step6Items.push(item);
                                                    
                                                } 
                                                data.step6Items = step6Items;

                                                goToStep(7);

                                                const taxRates = {
                                                    alabama: 4,
                                                    alaska: 0,
                                                    arizona: 5.6,
                                                    arkansas: 6.5,
                                                    california: 7.25,
                                                    colorado: 2.9,
                                                    connecticut: 6.35,
                                                    delaware: 0,
                                                    florida: 6,
                                                    georgia: 4,
                                                    hawaii: 4,
                                                    idaho: 6,
                                                    illinois: 6.25,
                                                    indiana: 7,
                                                    iowa: 6,
                                                    kansas: 6.5,
                                                    kentucky: 6,
                                                    louisiana: 4.45,
                                                    maine: 5.5,
                                                    maryland: 6,
                                                    massachusetts: 6.25,
                                                    michigan: 6,
                                                    minnesota: 6.875,
                                                    mississippi: 7,
                                                    missouri: 4.225,
                                                    montana: 0,
                                                    nebraska: 5.5,
                                                    nevada: 6.85,
                                                    newHampshire: 0,
                                                    newJersey: 6.625,
                                                    newMexico: 5.125,
                                                    newYork: 4,
                                                    northCarolina: 4.75,
                                                    northDakota: 5,
                                                    ohio: 5.75,
                                                    oklahoma: 4.5,
                                                    oregon: 0,
                                                    pennsylvania: 6,
                                                    rhodeIsland: 7,
                                                    southCarolina: 6,
                                                    southDakota: 4.5,
                                                    tennessee: 7,
                                                    texas: 6.25,
                                                    utah: 4.85,
                                                    vermont: 6,
                                                    virginia: 5.3,
                                                    washington: 6.5,
                                                    westVirginia: 6,
                                                    wisconsin: 5,
                                                    wyoming: 4,
                                                };
                                                
                        
                        
                                                const step7 = document.querySelector('#step7');
                                                const stateSelect = document.querySelector('#state');
                        
                                                step7.addEventListener('submit', (e) => {
                                                    e.preventDefault();
                        
                                                    const selectedState = stateSelect.value; // Lấy giá trị của state đã chọn
                                                    const taxRate = taxRates[selectedState]; // Lấy thuế suất dựa trên state
                        
                                                    data.state = selectedState;
                                                    data.taxRate = taxRate;
                        
                                                    console.log(data.taxRate);
                                                    localStorage.setItem("financialData", JSON.stringify(data));
                                                    window.location.href = "../html/financialReport.html";
                                                });
                                            };
                                        });
                                    };
                                });
                            };
                        });
                        


                        
                    };

                    
                });
            }
        });
    }
    
});


