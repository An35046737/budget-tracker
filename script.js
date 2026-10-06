javascript
// SpendWise Budget Tracker
// Week 6 JavaScript


// Monthly budget
const monthlyBudget = 50000;


// Array for storing expenses
let expenses = [];


// Get elements from the HTML
const expenseForm = document.getElementById("expenseForm");
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseCategoryInput = document.getElementById("expenseCategory");

const expenseTableBody = document.getElementById("expenseTableBody");
const budgetAmount = document.getElementById("budgetAmount");
const totalExpenses = document.getElementById("totalExpenses");
const remainingBudget = document.getElementById("remainingBudget");
const expenseCount = document.getElementById("expenseCount");

const budgetMessage = document.getElementById("budgetMessage");
const budgetPercentage = document.getElementById("budgetPercentage");
const progressFill = document.getElementById("progressFill");
const transactionStatus = document.getElementById("transactionStatus");


// Format money as Kenyan Shillings
function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE");
}


// Calculate the total amount spent
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update everything on the dashboard
function updateDashboard() {
    const total = calculateTotalExpenses();
    const remaining = monthlyBudget - total;

    let percentage = (total / monthlyBudget) * 100;

    if (percentage > 100) {
        percentage = 100;
    }

    budgetAmount.textContent = formatCurrency(monthlyBudget);
    totalExpenses.textContent = formatCurrency(total);
    remainingBudget.textContent = formatCurrency(remaining);
    expenseCount.textContent = expenses.length;

    budgetPercentage.textContent = Math.round(percentage) + "%";
    progressFill.style.width = percentage + "%";

    updateBudgetMessage(total, remaining);
    displayExpenses();
    updateTransactionStatus();
}


// Give the user feedback about their budget
function updateBudgetMessage(total, remaining) {

    if (total === 0) {
        budgetMessage.textContent =
            "Add an expense to start tracking your spending.";
    }

    else if (remaining < 0) {
        budgetMessage.textContent =
            "Warning: You have exceeded your monthly budget.";
    }

    else if (remaining <= 5000) {
        budgetMessage.textContent =
            "You are close to your budget limit. Watch your spending.";
    }

    else if (remaining <= 15000) {
        budgetMessage.textContent =
            "Your spending is increasing. Keep monitoring your budget.";
    }

    else {
        budgetMessage.textContent =
            "Good job! You are currently within your monthly budget.";
    }
}


// Handle the expense form
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;


    // Validate the user's input
    if (name === "" || amount <= 0 || category === "") {
        alert("Please enter a valid expense name, amount and category.");
        return;
    }


    // Create an expense object
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };


    // Add the expense to the array
    expenses.push(newExpense);


    // Update the dashboard
    updateDashboard();


    // Clear the form
    expenseForm.reset();

    expenseNameInput.focus();
});


// Display all expenses in the table
function displayExpenses() {

    expenseTableBody.innerHTML = "";


    // Show message when there are no expenses
    if (expenses.length === 0) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td colspan="4">
                <div class="empty-state">
                    <h3>No expenses yet</h3>
                    <p>
                        Add your first expense to start
                        tracking your budget.
                    </p>
                </div>
            </td>
        `;

        expenseTableBody.appendChild(row);

        return;
    }


    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const row = document.createElement("tr");


        // Expense name
        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;


        // Category
        const categoryCell = document.createElement("td");

        const categoryBadge = document.createElement("span");

        categoryBadge.className = "category-badge";
        categoryBadge.textContent = expense.category;

        categoryCell.appendChild(categoryBadge);


        // Amount
        const amountCell = document.createElement("td");

        amountCell.className = "amount";
        amountCell.textContent = formatCurrency(expense.amount);


        // Action
        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";


        // Delete expense when button is clicked
        deleteButton.addEventListener("click", function() {
            deleteExpense(expense.id);
        });


        actionCell.appendChild(deleteButton);


        // Add cells to the row
        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(actionCell);


        // Add row to the table
        expenseTableBody.appendChild(row);
    }
}


// Delete an expense
function deleteExpense(id) {

    const expenseIndex = expenses.findIndex(function(expense) {
        return expense.id === id;
    });


    if (expenseIndex !== -1) {
        expenses.splice(expenseIndex, 1);
    }


    updateDashboard();
}


// Update transaction count
function updateTransactionStatus() {

    const count = expenses.length;


    if (count === 0) {
        transactionStatus.textContent = "No transactions";
    }

    else if (count === 1) {
        transactionStatus.textContent = "1 transaction";
    }

    else {
        transactionStatus.textContent = count + " transactions";
    }
}


// Start the application
updateDashboard();

