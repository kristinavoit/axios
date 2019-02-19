  var div = document.getElementById("postsDiv");
  var con = 0;

  function getData() {
	  axios({
	  method:'get',
	  url:'http://localhost:8080',
	  responseType:'json'
	})
	  .then(function(response) {
	  	var array = response.data['data'];
	  	console.log (array);
	  	div.innerHTML +=
				  	`<table class="table table-hover">
					    <tr>
					      <th style="width: 7%" scope="col">Id</th>
					      <th style="width: 16.66%" scope="col">Name</th>
					      <th style="width: 27.66%" scope="col">Email</th>
					      <th style="width: 12.66%" scope="col">Funds</th>
					      <th style="width: 16.66%" scope="col">City</th>
					      <th style="width: 16.66%" scope="col">Phone</th>
					    </tr>
					 </table>`
	  	for (let index = 0; index < array.length; index++) {
	  	div.innerHTML += `
	  	<table class="table table-hover" id="table" class="col-sm-12">
		  <tbody>
		    <tr>
		      <th style="width: 7%" scope="row">${array[con].id}</th>
		      <td style="width: 16.66%" contenteditable id="${array[con].id}" abbr="name" onblur="editableValue(this)">${array[con].name} </td>
		      <td style="width: 27.66%" contenteditable id="${array[con].id}" abbr="email" onblur="editableValue(this)">${array[con].email}</td>
		      <td style="width: 12.66%" contenteditable id="${array[con].id}" abbr="funds" onblur="editableValue(this)">${array[con].funds}</td>
		      <td style="width: 16.66%" contenteditable id="${array[con].id}" abbr="city" onblur="editableValue(this)">${array[con].city}</td>
		      <td style="width: 16.66%" contenteditable id="${array[con].id}" abbr="phone" onblur="editableValue(this)">${array[con].phone}</td>
		    </tr>
		  </tbody>
		</table>
	  	`	
	  	con=con+1;
	  	}
	});
 }
   var arrayGetData = getData();
	console.log(arrayGetData); 

	  function editableValue(field) {
  	var idPerson = field.id;
  	var name = field.abbr;
  	var newValue = field.textContent; 
  	console.log(newValue);
  	changeData(idPerson, name, newValue);
  }

	function changeData(idPerson, name, newValue) {
		var url = `http://localhost:8080/update/${idPerson}`
		axios.put(url, {
			name: newValue,
		}).then(result => { 
		console.log(newValue);
		})
		.catch(err => { 
		console.log(err);
		});
	}
