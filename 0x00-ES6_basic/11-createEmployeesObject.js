function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
}
createEmployeesObject();
