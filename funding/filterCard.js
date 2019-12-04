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
	var c = [];
	for(var key in cause_dict)
	{
		c.push(document.getElementById("c"+key));
	}
	
	for(var i = 0; i < c.length; i++)
		if(c[i].checked==true)
			checked.push(i+1);
    if (checked.length == 0) {
        for(var i = 0; i < c.length; i++) {
            checked.push(i);
        }
    }
	var deadline = [];
	var d = [];
	for(var key in deadline_dict)
	{
		d.push(document.getElementById("d"+key));
	}
	for(var i = 0; i<d.length; i++)
		if(d[i].checked==true)
			deadline.push(i+1);
    if (deadline.length == 0) {
        for(var i = 0; i < d.length; i++) {
            deadline.push(i)
        }
    }
	var filteredIds = [];
	for(var i = 0; i<fundData.length; i++){
		if(deadline.includes(fundData[i]["tags"]["deadline"]) && causeIsPresent(fundData[i]["tags"]["cause"], checked))
			filteredIds.push(fundData[i]["id"]);
    }
	if (filteredIds.length!=0)
	{
    	document.getElementById("text1").innerHTML = checked;
    	displayFundsById(filteredIds)
    }
}

createCheckboxes();
function createCheckboxes() {
	for (var key in deadline_dict) {
		var chk = document.createElement('input'); // CREATE CHECK BOX.
		chk.setAttribute('type', 'checkbox'); // SPECIFY THE TYPE OF ELEMENT.
		chk.setAttribute('id', "d" + key); // SET UNIQUE ID.
		chk.setAttribute('value', deadline_dict[key]);

		var lbl = document.createTextNode(deadline_dict[key] + ": ");
		dline.appendChild(lbl)
		dline.appendChild(chk);
		document.getElementById("dline").innerHTML += ("<br/>");
	}

	for (var key in cause_dict) {
		var chk = document.createElement('input'); // CREATE CHECK BOX.
		chk.setAttribute('type', 'checkbox'); // SPECIFY THE TYPE OF ELEMENT.
		chk.setAttribute('id', "c" + key); // SET UNIQUE ID.
		chk.setAttribute('value', cause_dict[key]);

		var lbl = document.createTextNode(cause_dict[key] + ": ");
		cse.appendChild(lbl)
		cse.appendChild(chk);
		document.getElementById("cse").innerHTML += ("<br/>");
	}
}