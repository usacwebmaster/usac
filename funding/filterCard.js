function causeIsPresent(card_causes, cause)
{
	console.log(cause);
	for(var i = 0; i<card_causes.length; i++)
		if(cause.includes(card_causes[i]))
			return true;
	return false;
}

function filterCards()
{
	var checked = [];
	var c = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"),document.getElementById("4"),document.getElementById("5"),document.getElementById("6")];
	for(var i = 0; i < 6; i++)
		if(c[i].checked==true)
			checked.push(i+1);
    if (checked.length == 0) {
        for(var i = 0; i < 6; i++) {
            checked.push(i);
        }
    }
	var deadline = [];
	var d = [document.getElementById("d1"), document.getElementById("d2")];
	for(var i = 0; i<2; i++)
		if(d[i].checked==true)
			deadline.push(i+1);
    if (deadline.length == 0) {
        for(var i = 0; i < 2; i++) {
            deadline.push(i)
        }
    }
	var filteredIds = [];
	for(var i = 0; i<fundData.length; i++){
		if(deadline.includes(fundData[i]["tags"]["deadline"]) && causeIsPresent(fundData[i]["tags"]["cause"], checked))
			filteredIds.push(fundData[i]["id"]);
    }
	if (filteredIds.length!=0)
        document.getElementById("text1").innerHTML = filteredIds;
        displayFundsById(filteredIds)
	//document.getElementById("t1").innerHTML = "Hello";
		
  //for(var i = 0; i<cards.length; i++)
  //{
    //if(isMatch(cards[i], deadline, cause, eligibility))
      //filtered_cards.push(cards[i];
  //}
}