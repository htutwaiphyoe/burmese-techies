//Module Pattern

var bugetController = (function () {
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totIncome) {
        this.percentage = data.totals.inc === 0 ? -1 : ((this.value / totIncome) * 100).toFixed(0);
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };
    var data = {
        allItems: {
            inc: [],
            exp: [],
        },
        totals: {
            inc: 0,
            exp: 0,
        },
        budget: 0,
        percentage: -1,
    };

    var storeNewData = function (newData) {
        var id = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
        var item;
        if (newData.type === "exp") {
            item = new Expense(id, newData.description, newData.value);
        } else {
            item = new Income(id, newData.description, newData.value);
        }

        data.allItems[newData.type].push(item);
        return item;
    };

    var calculateTotals = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (item) {
            sum += item.value;
        });

        data.totals[type] = sum;
    };
    return {
        addInputData: function (inputData) {
            return storeNewData(inputData);
        },
        calculateBudget: function () {
            calculateTotals("exp");
            calculateTotals("inc");

            data.budget = data.totals.inc - data.totals.exp;
            data.totals.inc > 0
                ? (data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100))
                : (data.percentage = -1);
        },
        getBudget: function () {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalIncome: data.totals.inc,
                totalExpense: data.totals.exp,
            };
        },
        getData: function () {
            return data;
        },
        deleteBudgetItem: function (id) {
            var index;

            if (id[0] === "income") {
                index = data.allItems.inc.findIndex((item) => item.id.toString() === id[1]);
                if (index !== -1) {
                    data.allItems.inc.splice(index, 1);
                }
            } else {
                index = data.allItems.exp.findIndex((item) => item.id.toString() === id[1]);
                if (index !== -1) {
                    data.allItems.exp.splice(index, 1);
                }
            }
        },

        calculateExpPercentages: function () {
            data.allItems.exp.forEach(function (item) {
                item.calcPercentage(data.totals.inc);
            });
        },
        getExpPercentages: function () {
            var expPercentages = data.allItems.exp.map(function (item) {
                return item.getPercentage();
            });
            return expPercentages;
        },
    };
})();

var UIController = (function () {
    var DOM = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expenseContainer: ".expenses__list",
        budgetTotal: ".budget__value",
        incomeTotal: ".budget__income--value",
        expenseTotal: ".budget__expenses--value",
        percentage: ".budget__expenses--percentage",
        today: ".budget__title--month",
        container: ".container",
        expPercentage: ".item__percentage",
    };
    var formatUINumber = function (data) {
        return parseInt(data.split(".")[0]).toLocaleString() + "." + data.split(".")[1];
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOM.inputType).value,
                description: document.querySelector(DOM.inputDescription).value,
                value: parseFloat(document.querySelector(DOM.inputValue).value),
            };
        },
        clearInputs: function () {
            var list = document.querySelectorAll(DOM.inputDescription + "," + DOM.inputValue);
            var listArr = Array.prototype.slice.call(list);
            listArr.forEach(function (curr) {
                curr.value = "";
            });
            listArr[0].focus();
        },
        getDOM: function () {
            return DOM;
        },
        addListItem: function (type, item) {
            var container;
            var itemString;
            if (type === "inc") {
                container = document.querySelector(DOM.incomeContainer);
                itemString = `<div class="item clearfix" id="income-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">+ ${formatUINumber(item.value.toFixed(2))}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><ion-icon name="close-circle-outline"></ion-icon></button>
                    </div>
                </div>
            </div>`;
            } else {
                container = document.querySelector(DOM.expenseContainer);
                itemString = `<div class="item clearfix" id="expense-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">- ${formatUINumber(item.value.toFixed(2))}</div>
                    <div class="item__percentage">-</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><ion-icon name="close-circle-outline"></ion-icon></button>
                    </div>
                </div>
            </div>
`;
            }

            container.insertAdjacentHTML("beforeend", itemString);
        },
        displayBudget: function (data) {
            document.querySelector(DOM.budgetTotal).textContent =
                data.budget >= 0
                    ? "+ " + formatUINumber(data.budget.toFixed(2))
                    : formatUINumber(data.budget.toFixed(2));
            document.querySelector(DOM.incomeTotal).textContent =
                "+ " + formatUINumber(data.totalIncome.toFixed(2));
            document.querySelector(DOM.expenseTotal).textContent =
                "- " + formatUINumber(data.totalExpense.toFixed(2));
            document.querySelector(DOM.percentage).textContent =
                data.percentage >= 0 ? data.percentage + "%" : "---";
        },
        updateExpPercentages: function (data) {
            var percentageNodeList = document.querySelectorAll(DOM.expPercentage);
            var percentageNodeArr = Array.prototype.slice.call(percentageNodeList);
            percentageNodeArr.forEach(function (item, index) {
                item.textContent = data[index] >= 0 ? data[index] + "%" : "---";
            });
        },
        changeInputColor: function () {
            var list = document.querySelectorAll(
                DOM.inputType + "," + DOM.inputDescription + "," + DOM.inputValue
            );
            Array.prototype.slice.call(list).forEach(function (item) {
                item.classList.toggle("red-focus");
            });
            document.querySelector(DOM.inputBtn).classList.toggle("red");
        },
    };
})();

var mainController = (function (budget, UI) {
    var setUpTodayDate = function () {
        var DOMs = UI.getDOM();
        var today = new Date();
        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        document.querySelector(DOMs.today).textContent =
            today.getFullYear() + "-" + months[today.getMonth()] + "-" + today.getDate();
    };
    var setUpEventListeners = function () {
        var DOMs = UI.getDOM();
        document.querySelector(DOMs.inputBtn).addEventListener("click", addItemHandler);
        document.addEventListener("keypress", function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                addItemHandler();
            }
        });

        document.querySelector(DOMs.container).addEventListener("click", deleteItemHandler);
        document.querySelector(DOMs.inputType).addEventListener("change", changeInputColorHandler);
    };
    var changeInputColorHandler = function () {
        UI.changeInputColor();
    };
    var deleteItemHandler = function (e) {
        var itemDOM = e.target.parentNode.parentNode.parentNode.parentNode;

        var id = itemDOM.id;
        if (id) {
            id = id.split("-");
            budget.deleteBudgetItem(id);

            itemDOM.parentNode.removeChild(itemDOM);
            updateBudgetHandler();
            updateExpPercentageHandler();
        }
    };
    var updateBudgetHandler = function () {
        budget.calculateBudget();
        var budgetData = budget.getBudget();
        UI.displayBudget(budgetData);
    };
    var updateExpPercentageHandler = function () {
        budget.calculateExpPercentages();
        UI.updateExpPercentages(budget.getExpPercentages());
    };
    var addItemHandler = function () {
        var inputs, newItem;
        inputs = UI.getInput();

        if (inputs.description && inputs.value && inputs.value > 0) {
            newItem = budget.addInputData(inputs);
            UI.addListItem(inputs.type, newItem);
            updateBudgetHandler();
            updateExpPercentageHandler();
        }

        UI.clearInputs();
    };

    return {
        init: function () {
            setUpEventListeners();
            UI.displayBudget({
                budget: 0,
                percentage: -1,
                totalIncome: 0,
                totalExpense: 0,
            });
            setUpTodayDate();
        },
    };
})(bugetController, UIController);

mainController.init();
