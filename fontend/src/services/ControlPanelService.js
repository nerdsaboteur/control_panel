import axios from 'axios'

//baseURL: 'https://mp-personal-planner.herokuapp.com',
const ApiClient = axios.create({
  baseURL: 'http://localhost:8084',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTasks() {
    return ApiClient.get('/tasks')
  },
  getReminders() {
    return ApiClient.get('/tasks/reminders')
  },
  getPriorities() {
    return ApiClient.get('/tasks/priorities')
  },
  deleteTask(id) {
    return ApiClient.get('/tasks/delete/' + id)
  },
  addTask(newTask) {
    return ApiClient.post('/tasks/insert/', newTask)
  },
  updateTask(id, cTask) {
    return ApiClient.post('/tasks/update/' + id, cTask)
  },
  getIncomes() {
    return ApiClient.get('incomes')
  },
  getIncomesProjected() {
    return ApiClient.get('incomes/projected')
  },
  getIncomesActual() {
    return ApiClient.get('incomes/actual')
  },
  updateIncome(id, income) {
    return ApiClient.post('/income/update/' + id, income)
  },
  deleteIncome(id) {
    return ApiClient.get('/income/delete/' + id)
  },
  addIncome(income) {
    return ApiClient.post('/income/insert/', income)
  },
  getExpenseCategories() {
    return ApiClient.get('/categories')
  },
  getExpensesByCategory(cat) {
    return ApiClient.get('expenses/cat/' + cat)
  },
  updateExpenseInline(id, expense) {
    return ApiClient.post('/expense/update/inline/' + id, expense)
  },
  addExpense(expense) {
    return ApiClient.post('/expense/insert/', expense)
  },
  addExpenseCategory(category) {
    return ApiClient.post('/category/insert/', category)
  },
  // updateExpense(id, expense) {
  //   return ApiClient.post('/expense/update/' + id, expense)
  // },
  deleteExpense(id) {
    return ApiClient.get('/expense/delete/' + id)
  },
  deleteCategory(id) {
    return ApiClient.get('/category/delete/' + id)
  }
}
