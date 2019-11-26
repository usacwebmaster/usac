// compile the template

var source = document.getElementById('card-template').innerHTML;
var template = Handlebars.compile(source);


function compileFundCards(fundArray, deadlineDict, causeDict, cardTemplate) {
    console.log(fundArray)

    var compiled = "";
    var tempCard = null;
    
    for (var i = 0; i < 1; i++) {
        tempCard = JSON.parse(JSON.stringify(fundArray[i]))
        tempCard.tags.deadline = deadlineDict[tempCard.tags.deadline];
        tempCard.tags.cause = tempCard.tags.cause.map( n => causeDict[n]);
        eligibility_group_str = ""
        eligibility_individual_str = ""

        // console.log(tempCard.eligibility)
        if (tempCard.eligibility.group == true) {
            eligibility_group_str = "Groups must be registered with SOLE"
        }
        if (tempCard.eligibility.individual == true) {
            eligibility_individual_str = "individuals may also apply"
        }
        tempCard.eligibility.group = eligibility_group_str
        tempCard.eligibility.individual = eligibility_individual_str
        // console.log(tempCard)
        compiled += cardTemplate(tempCard);

    }
    
    return compiled;
}
function displayFunds(fundArray) {
    var fundHTML = compileFundCards(fundArray, deadline_dict, cause_dict, template)
    document.getElementById('cards-list').innerHTML = fundHTML
}
function displayFundsById(fundIdArray) {
    var fundsToDisplay = fundData.filter(fund => fundIdArray.includes(fund.id))
   displayFunds(fundsToDisplay)
}
// var fundHTML = compileFundCards(fundData, deadline_dict, cause_dict, template)
// document.getElementById("cards-list").innerHTML = fundHTML;

displayFunds(fundData)