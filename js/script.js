

// CURD Requests

// Restfull APIs 

$.ajax({
    url: 'https://dummy.restapiexample.com/api/v1/employees',
    method: 'GET',
    dataType: 'JSON',
    success: function(resp){
        console.log(resp);

    //    document.getElementById('empId1').innerHTML =  'Gov';

    var tbl = '';

    for(var i=0; i<resp.data.length; i++){
<<<<<<< HEAD
        tbl += '<tr><td>'+ resp.data[i].id + '</td><td>'
         + resp.data[i].employee_name + '</td><td>' 
         + resp.data[i].employee_salary + '</td><td>'
          + resp.data[i].employee_age + '</td><td>' 
          + resp.data[i].profile_image + '</td></tr>';
=======
        tbl += '<tr><td>'+ resp.data[i].id + '</td><td>' + resp.data[i].employee_name + '</td><td>' + resp.data[i].employee_salary + '</td><td>' + resp.data[i].employee_age + '</td><td>' + resp.data[i].profile_image + '<td><button onClick="editRecord('+ resp.data[i].id +')">Edit</button><button onClick="deleteRecord(' + resp.data[i].id + ')">Delete</button></td></td></tr>';
>>>>>>> 8c59bdc0bee8768e94813ed1e7a9822ec07e89f5
    }

    document.getElementById("empTbl").innerHTML = tbl;



    },
    error: function(err){
        console.log(err)
    }
});

function editRecord(id){

document.getElementById('editEmpForm').style.display = 'inline-block';
document.getElementById('overlay').style.display = 'inline-block';

$.ajax({
    url: 'https://dummy.restapiexample.com/api/v1/employees/' + id,
    method: 'GET',
    dataType: 'JSON',
    success: function(resp){
        console.log(resp);
    }
});


}

function closeEmpEditForm(){
    document.getElementById('editEmpForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function deleteRecord(id){
    alert(id);
}

function addEmp(){
    document.getElementById('empForm').setAttribute('class', 'showEmpForm');
}

function submitForm(){
$.ajax({
    url: 'https://dummy.restapiexample.com/api/v1/create',
    method: 'POST',
    dataType: 'JSON',
    data: {
        id: document.getElementById('empId').value,
        employee_name: document.getElementById('empName').value,
        employee_salary: document.getElementById('empSalary').value,
        employee_age: document.getElementById('empAge').value,
        profile_image: '',
    },
    success: function(resp){

        alert('Data is successfully added');
        window.location.reload();

    },
    error: function(err){
        alert("there is some error: " + err)
    }
});
}

function editform(){
    $.ajax({
        url:'https://dummy.restapiexample.com/api/v1/update',
        method: 'PUT',
        dataType: 'JSON',
        data: {
            id:document.getElementById('empId').value,
            employee_name: document.getElementById('empName').value,
            employee_salary: document.getElementById('empSalary').value,
            employee_age: document.getElementById('empAge').valus,
            profile_image:'',
            },
            success: function(resp){
                alert('data is edited');
                window.location.reload();
            },
            error: function(err){
                alert("there is some err:"+err)
            }
    });
}

function deleteform(){
    $.ajax({
        url:'https://dummy.restapiexample.com/api/v1/delete',
        method: 'DELETE',
        dataType: 'JSON',
        data: {
            id:document.getElementById('empId').value,
            employee_name: document.getElementById('empName').value,
            employee_salary: document.getElementById('empSalary').value,
            employee_age: document.getElementById('empAge').valus,
            profile_image:'',
            },
            success: function(resp){
                alert('data is deleted');
                window.location.reload();
            },
            error: function(err){
                alert("there is some err:"+err)
            }
    });
}










