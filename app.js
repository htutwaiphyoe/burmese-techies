// Budget Controller
var budgetController = (function () {
    //Expense
    var Expense = function (id, description, value) {
        (this.id = id),
            (this.description = description),
            (this.value = value),
            (this.percentage = -1);
    };
    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };
    //Income
    var Income = function (id, description, value) {
        (this.id = id), (this.description = description), (this.value = value);
    };

    var data = {
        items: {
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
    function calcTotal(type) {
        var sum = 0;
        data.items[type].forEach(function (current) {
            sum += current.value;
        });
        data.totals[type] = sum;
    }
    return {
        addItem: function (type, desc, val) {
            var newItem, id;
            //create Id
            if (data.items[type].length > 0) {
                id = data.items[type][data.items[type].length - 1].id + 1;
            } else {
                id = 0;
            }
            //define constructor
            if (type === "inc") {
                newItem = new Income(id, desc, val);
            } else if (type === "exp") {
                newItem = new Expense(id, desc, val);
            }
            //push data
            data.items[type].push(newItem);
            //return data
            return newItem;
        },
        calcBudget: function () {
            //calculate total income & expense
            calcTotal("exp");
            calcTotal("inc");

            //calculate budget
            data.budget = data.totals.inc - data.totals.exp;

            //calculate percentage
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        calcExpPercent: function () {
            data.items.exp.forEach(function (current) {
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentage: function () {
            var allPercentages = data.items.exp.map(function (current) {
                return current.getPercentage();
            });
            return allPercentages;
        },
        deleteItem: function (type, id) {
            var ids, index;
            ids = data.items[type].map(function (current) {
                return current.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                data.items[type].splice(index, 1);
            }
        },
        getData: function () {
            return {
                budget: data.budget,
                totalinc: data.totals.inc,
                totalexp: data.totals.exp,
                percent: data.percentage,
            };
        },

        test: function () {
            console.log(data);
        },
    };
})();

//UI Controller
var UIController = (function () {
    var DOMStrings = {
        type: ".add__type",
        description: ".add__description",
        value: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expenseContainer: ".expenses__list",
        budget: ".budget__value",
        totinc: ".budget__income--value",
        totexp: ".budget__expenses--value",
        percentage: ".budget__expenses--percentage",
        container: ".container",
        expPercent: ".item__percentage",
        date: ".budget__title--month",
    };
    var formatNumber = function (num, type) {
        var numSplit, int, dec;
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split(".");

        int = numSplit[0];
        int = int.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        // if(int.length > 3){
        //     int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        // }

        dec = numSplit[1];

        return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.type).value, //inc || exp
                description: document.querySelector(DOMStrings.description).value.trim(), //desc
                value: parseFloat(document.querySelector(DOMStrings.value).value), //value
            };
        },
        addListItem: function (object, type) {
            var html, newHtml, element;
            //create HTML string with placeholder text
            if (type === "inc") {
                element = DOMStrings.incomeContainer;
                html =
                    '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp") {
                element = DOMStrings.expenseContainer;
                html =
                    '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%p%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placeholder text with actual value
            newHtml = html.replace("%id%", object.id);
            newHtml = newHtml.replace("%description%", object.description);
            newHtml = newHtml.replace("%value%", formatNumber(object.value, type));
            //insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
        },
        clearFields: function () {
            var fields, fieldArray;
            fields = document.querySelectorAll(DOMStrings.description + ", " + DOMStrings.value);
            fieldArray = Array.prototype.slice.call(fields);
            fieldArray.forEach(function (element, index, array) {
                element.value = "";
            });
            fieldArray[0].focus();
        },
        displayData: function (data) {
            document.querySelector(DOMStrings.budget).textContent = formatNumber(
                data.budget,
                data.budget >= 0 ? "inc" : "exp"
            );

            document.querySelector(DOMStrings.totinc).textContent = formatNumber(
                data.totalinc,
                "inc"
            );
            document.querySelector(DOMStrings.totexp).textContent = formatNumber(
                data.totalexp,
                "exp"
            );

            if (data.percent > 0) {
                document.querySelector(DOMStrings.percentage).textContent = data.percent + "%";
            } else {
                document.querySelector(DOMStrings.percentage).textContent = "---";
            }
        },
        displayExpPercentages: function (percentages) {
            var fields = document.querySelectorAll(DOMStrings.expPercent);

            var nodeListForEach = function (nodeList, callBack) {
                for (var i = 0; i < nodeList.length; i++) {
                    callBack(nodeList[i], i);
                }
            };
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
        },
        deleteListItem: function (selector) {
            var element;
            element = document.getElementById(selector);
            element.parentNode.removeChild(element);
        },
        displayDate: function () {
            var now, date;
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
            var aestTime = new Date().toLocaleString("en-US", {
                timeZone: "Asia/Rangoon",
            });
            now = new Date(aestTime);

            date = days[now.getDay()] + " / " + months[now.getMonth()] + " / " + now.getFullYear();
            document.querySelector(DOMStrings.date).textContent = date;
        },
        changeType: function () {
            var fields = document.querySelectorAll(
                DOMStrings.type + "," + DOMStrings.description + "," + DOMStrings.value
            );
            var fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function (current) {
                current.classList.toggle("red-focus");
            });
            document.querySelector(DOMStrings.inputBtn).classList.toggle("red");
        },
        getDOMStrings: function () {
            return DOMStrings;
        },
    };
})();

//Global App Controller
var controller = (function (budget, UI) {
    var setUpEventListener = function () {
        var DOM = UI.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener("click", addItemInController);

        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                addItemInController();
            }
        });

        document.querySelector(DOM.container).addEventListener("click", deleteItemByController); //Event Delegation

        document.querySelector(DOM.type).addEventListener("change", UIController.changeType);
    };

    var updateBudget = function () {
        var data;
        //1. Calculate budget
        budgetController.calcBudget();

        //2. Return budget
        data = budgetController.getData();

        //3. Display budget in UI
        UIController.displayData(data);
    };
    var updateExpPercent = function () {
        var percentages;
        //1. Calculate percentage
        budgetController.calcExpPercent();

        //2. Read percentage from budget controller
        percentages = budgetController.getPercentage();

        //3. Update UI
        UIController.displayExpPercentages(percentages);
    };
    var addItemInController = function () {
        var inputs, newItem;
        // 1. Get input data

        inputs = UI.getInput();

        //2. Add the item to the budget controller
        if (inputs.description !== "" && !isNaN(inputs.value) && inputs.value > 0) {
            newItem = budgetController.addItem(inputs.type, inputs.description, inputs.value);
            //3. Add the item to UI
            UI.addListItem(newItem, inputs.type);

            //4. Clear fields
            UI.clearFields();

            //Calculate budget
            updateBudget();

            //update percenteage

            updateExpPercent();
        }
    };
    var deleteItemByController = function (event) {
        var itemID, splitID, type, id;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; //DOM traversing
        if (itemID) {
            //type-id
            splitID = itemID.split("-"); // return array by split
            type = splitID[0];
            id = parseInt(splitID[1]);

            //1. delete item from data structure
            budgetController.deleteItem(type, id);

            //2. delete item from UI
            UIController.deleteListItem(itemID);
            //3. update the budget
            updateBudget();

            //4. update percentage

            updateExpPercent();
        }
    };
    return {
        init: function () {
            UIController.displayData({
                budget: 0,
                totalinc: 0,
                totalexp: 0,
                percent: -1,
            });
            setUpEventListener();
            UIController.displayDate();
        },
    };
})(budgetController, UIController);

controller.init();
