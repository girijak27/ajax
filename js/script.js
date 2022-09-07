

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
        tbl += '<tr><td>'+ resp.data[i].id + '</td><td>'
         + resp.data[i].employee_name + '</td><td>' 
         + resp.data[i].employee_salary + '</td><td>'
          + resp.data[i].employee_age + '</td><td>' 
          + resp.data[i].profile_image + '</td></tr>';
    }

    document.getElementById("empTbl").innerHTML = tbl;



    },
    error: function(err){
        console.log(err)
    }
});


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










