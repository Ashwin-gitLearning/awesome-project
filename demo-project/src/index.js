import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var DisplayEmployeeInfo=(empInfo)=>{
return <div>
<h1>Employee Details...</h1>
<p>
<label>Employee Id : <b>{empInfo.Id}</b></label>
</p>
<p>
<label>Employee Name : <b>{empInfo.Name}</b></label>
</p>
<p>
<label>Employee Location : <b>{empInfo.Location}</b></label>
</p>
<p>
<label>Employee Salary : <b>{empInfo.Salary}</b></label>
</p>
<Department name={empInfo.deptName} head={empInfo.deptHead}></Department>
</div>
};

const Department=(deptInfo)=>{
return <div>
<p>
<label>Department Name is: <b>{deptInfo.name}</b></label>
</p>
<p>
<label>Department Head is : <b>{deptInfo.head}</b></label>
</p>
</div>
};

const element =<DisplayEmployeeInfo Id="1001" Name="Ashwini" Location="Delhi" Salary="47500" 
deptName="React UI" deptHead="Pragim"></DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById("root"));