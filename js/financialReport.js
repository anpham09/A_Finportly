const financialData = JSON.parse(localStorage.getItem("financialData"));
console.log(financialData);


const companyName = document.querySelector("#companyName");
const address = document.querySelector("#address");
const dateCreated = document.querySelector('#dateCreated');
const dateIssued = document.querySelector('#dateIssued');



companyName.textContent = financialData.companyName;
address.textContent = financialData.address;
dateCreated.textContent = financialData.dateCreated;
dateIssued.textContent = financialData.dateIssued



const revenueContainer = document.querySelector(".financialReportMain");

const revenueHeading = document.querySelector(".financialReportHeading"); 
const totalRevenueContainer = revenueHeading.nextElementSibling.nextElementSibling;
let totalRevenue = 0;

financialData.step2Items.forEach(item => {
    const revenueRow = document.createElement("div");
    revenueRow.classList.add("categoryAmount");
    revenueRow.innerHTML = `
        <p class="revenueCategory">${item.category}</p>
        <p class="alignRight revenueAmount">$${parseFloat(item.number).toFixed(2)}</p>
    `;

    revenueContainer.insertBefore(revenueRow, totalRevenueContainer);

    totalRevenue += parseFloat(item.number);
});

const totalRevenueElement = totalRevenueContainer.querySelector(".alignRight");
totalRevenueElement.textContent = `$${totalRevenue.toFixed(2)}`;




const expensesHeading = document.querySelector(".financialReportHeading:nth-of-type(2)"); 
const totalExpensesContainer = expensesHeading.nextElementSibling.nextElementSibling;
let totalExpenses = 0;


financialData.step3Items.forEach(item => {
    const expenseRow = document.createElement("div");
    expenseRow.classList.add("categoryAmount");
    expenseRow.innerHTML = `
        <p>${item.category}</p>
        <p class="alignRight">$${parseFloat(item.number).toFixed(2)}</p>
    `;

    revenueContainer.insertBefore(expenseRow, totalExpensesContainer);

    totalExpenses += parseFloat(item.number);
});

financialData.step4Items.forEach(item => {
    const expenseRow = document.createElement("div");
    expenseRow.classList.add("categoryAmount");
    expenseRow.innerHTML = `
        <p>${item.category}</p>
        <p class="alignRight">$${parseFloat(item.number).toFixed(2)}</p>
    `;

    revenueContainer.insertBefore(expenseRow, totalExpensesContainer);

    totalExpenses += parseFloat(item.number);
});

financialData.step5Items.forEach(item => {
    const expenseRow = document.createElement("div");
    expenseRow.classList.add("categoryAmount");
    expenseRow.innerHTML = `
        <p>${item.category}</p>
        <p class="alignRight">$${parseFloat(item.number).toFixed(2)}</p>
    `;

    revenueContainer.insertBefore(expenseRow, totalExpensesContainer);

    totalExpenses += parseFloat(item.number);
});

financialData.step6Items.forEach(item => {
    const expenseRow = document.createElement("div");
    expenseRow.classList.add("categoryAmount");
    expenseRow.innerHTML = `
        <p>${item.category}</p>
        <p class="alignRight">$${parseFloat(item.number).toFixed(2)}</p>
    `;

    revenueContainer.insertBefore(expenseRow, totalExpensesContainer);

    totalExpenses += parseFloat(item.number);
});

const totalExpensesElement = totalExpensesContainer.querySelector(".alignRight");
totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;




const ebt = totalRevenue - totalExpenses;

const ebtElement = document.querySelector("#ebtValue"); 
if (ebtElement) {
    ebtElement.textContent = `${ebt.toFixed(2)}`;
}


let taxRate = financialData.taxRate;

console.log("Tax Rate:", taxRate);

if (isNaN(taxRate) || taxRate === undefined || taxRate === null) {
    taxRate = 0; 
}

const netProfit = ebt - ebt * taxRate/100

console.log("EBT:", ebt, "Tax Rate:", taxRate, "Net Profit:", netProfit);

const netProfitElement = document.querySelector("#netProfitValue"); 
if (netProfitElement) {
    netProfitElement.textContent = `${netProfit.toFixed(2)}`;
}

document.getElementById("downloadPDF").addEventListener("click", () => {
    const reportElement = document.querySelector(".financialReportContainer");

    const options = {
        margin: 0, 
        filename: 'financial_report.pdf', 
        image: { type: 'jpg', quality: 0.98 },
        html2canvas: { scale: 2 }, 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
    };

    html2pdf().set(options).from(reportElement).save();
});
