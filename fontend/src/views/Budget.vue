<template>
  <div class="container">
    <!---income--->
    <div id="income">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col pr-2 pb-2">
              <i
                style="float:right"
                class="fas fa-plus-circle fa-lg"
                @click="showAddIncome = !showAddIncome"
              ></i>
            </div>
          </div>

          <div class="add_income" v-if="showAddIncome">
            <!---add income--->

            <div class="row box-block p-2 border border-outline-dark">
              <div class="col-3 p-0">
                <input type="text" placeholder="title" v-model="income_title" />
              </div>
              <div class="col-2 p-0">
                <input
                  type="text"
                  placeholder="duedate"
                  v-model="income_duedate"
                />
              </div>
              <div class="col-2 p-0">
                <input
                  type="text"
                  placeholder="nextdate"
                  v-model="income_nextdate"
                />
              </div>
              <div class="col-2 p-0">
                <input
                  type="text"
                  placeholder="amount"
                  v-model="income_amount"
                />
              </div>
              <div class="col-2 p-0">
                <input
                  type="text"
                  placeholder="recurance"
                  v-model="income_recurance"
                />
              </div>
              <div class="col-1">
                <i class="far fa-save fa-lg" @click="addIncome()"></i>
              </div>
            </div>

            <!---add income--->
          </div>

          <div class="title-block">
            <p>Income Projected</p>
          </div>
          <!---income instance--->
          <div
            class="row box-block border border-outline-dark"
            v-for="income in income_projected"
            :key="income"
          >
            <div class="col-4 p-0">
              <input type="text" name="title" v-model="income.title" />
            </div>
            <div class="col-2 p-0">
              <input type="text" name="duedate" v-model="income.duedate" />
            </div>
            <div class="col-2 p-0">
              <input type="text" name="nextdate" v-model="income.nextdate" />
            </div>
            <div class="col-2 p-0">
              <input type="text" name="amount" v-model="income.amount" />
            </div>
            <div class="col-1 p-0">
              <input type="text" name="recurance" v-model="income.recurance" />
            </div>
            <div class="col-1">
              <i
                class="far fa-save fa-lg"
                @click="
                  updateIncome(income._id, {
                    title: income.title,
                    duedate: income.duedate,
                    nextdate: income.nextdate,
                    recurrance: income.recurrance,
                    amount: income.amount,
                    type: 'projected'
                  })
                "
              ></i>
            </div>

            <!---income instance--->
          </div>
          <div class="title-block">
            <p>Income Actual</p>
          </div>
          <!---income instance--->
          <div
            class="row box-block border border-outline-dark"
            v-for="income in income_actual"
            :key="income"
          >
            <div class="col-4 p-0">
              <input type="text" name="title" v-model="income.title" />
            </div>
            <div class="col-2 p-0">
              <input type="text" name="duedate" v-model="income.duedate" />
            </div>
            <div class="col-2 p-0">
              <input type="text" name="nextdate" v-model="income.nextdate" />
            </div>
            <div class="col-2 p-0">
              <input type="text" name="amount" v-model="income.amount" />
            </div>
            <div class="col-1 p-0">
              <input type="text" name="recurance" v-model="income.recurance" />
            </div>
            <div class="col-1">
              <i
                class="far fa-save fa-lg"
                @click="
                  updateIncome(income._id, {
                    title: income.title,
                    duedate: income.duedate,
                    nextdate: income.nextdate,
                    recurrance: income.recurrance,
                    amount: income.amount,
                    type: 'actual'
                  })
                "
              ></i>
            </div>
          </div>
          <!---income instance--->
        </div>
      </div>
    </div>
    <!---income--->

    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col pr-2 pb-2">
            <i
              style="float:right"
              class="fas fa-plus-circle fa-lg"
              @click="showAddExpense = !showAddExpense"
            ></i>
          </div>
        </div>
        <!---add category--->
        <div class="row box-block p-2 mb-2" v-if="showAddExpense">
          <div class="col-11 p-0">
            <input
              type="text"
              placeholder="New Category"
              v-model="expense_category_new"
            />
          </div>
          <div class="col-1 p-0">
            <i
              class="far fa-save fa-lg"
              @click="addExpenseCategory({ category: expense_category_new })"
            ></i>
          </div>
        </div>
        <!---add category--->

        <!---add expense--->
        <div class="row box-block pt-2" v-if="showAddExpense">
          <div class="col-2 p-0 pl-2">
            <select v-model="expense_category">
              <option v-for="cat in expense_categories">{{ cat.label }}</option>
            </select>
          </div>
          <div class="col-3 p-0">
            <input type="text" placeholder="Label" v-model="expense_label" />
          </div>
          <div class="col-2 p-0">
            <input
              type="text"
              placeholder="Projected"
              v-model="expense_projected"
            />
          </div>
          <div class="col-2 p-0">
            <input type="text" placeholder="Actual" v-model="expense_actual" />
          </div>
          <div class="col-2 p-0">
            <input type="text" placeholder="Due" v-model="expense_duedate" />
          </div>
          <div class="col-1 p-0">
            <i
              class="far fa-save fa-lg"
              @click="
                addExpense({
                  category: expense_category,
                  label: expense_label,
                  projected: expense_projected,
                  actual: expense_actual,
                  duedate: expense_duedate,
                  notes: expense_notes
                })
              "
            ></i>
          </div>
          <div class="col-12 m-1 p-2">
            <textarea
              v-model="expense_notes"
              style="width:100%;height:100px"
            ></textarea>
          </div>
        </div>

        <!---add expense--->
      </div>
    </div>
    <!---expenses--->
    <div class="row">
      <div class="col-12" v-for="cat in expense_categories" :key="cat">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-11">
                <div class="title-block">
                  <p>{{ cat.label }}</p>
                </div>
              </div>
              <div class="col-1">
                <i
                  class="fas fa-ban fa-lg pt-4"
                  @click="deleteCategory(cat._id)"
                ></i>
              </div>
            </div>

            <ExpenseCategory :cat="cat" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanelService from '@/services/ControlPanelService.js'
import ExpenseCategory from '@/components/ExpenseCategory.vue'
// import Credit from "@/components/Credit.vue";
// import Retirement from "@/components/Retirement.vue";
// import axios from 'axios'

export default {
  components: {
    ExpenseCategory
  },
  data() {
    return {
      income_projected: {},
      income_actual: {},
      showAddIncome: false,
      income_title: '',
      income_duedate: '',
      income_nextdate: '',
      income_amount: '',
      income_recurance: '',
      expense_categories: {},
      showAddExpense: false,
      expense_label: '',
      expense_projected: '',
      expense_actual: '',
      expense_duedate: '',
      expense_notes: '',
      expense_category_new: ''
    }
  },
  methods: {
    getIncomes() {
      ControlPanelService.getIncomes()
        .then(res => {
          this.income_projected = res.data.filter(
            item => item.type === 'projected'
          )

          this.income_actual = res.data.filter(item => item.type === 'actual')
        })
        .catch(err => console.log(err))
    },
    updateIncome(id, income) {
      if (income.title != '') {
        ControlPanelService.updateIncome(id, income)
          .then(res => {
            this.income_projected = res.data.filter(
              item => item.type === 'projected'
            )

            this.income_actual = res.data.filter(item => item.type === 'actual')
          })
          .catch(err => console.log(err))
      } else {
        ControlPanelService.deleteIncome(id)
          .then(() => this.getIncomes())
          .catch(err => console.log(err))
      }
    },
    addIncome() {
      this.showAddIncome = false
      const income = {
        title: this.income_title,
        duedate: this.income_duedate,
        nextdate: this.income_nextdate,
        amount: this.income_amount,
        recurance: this.income_recurance
      }
      ControlPanelService.addIncome(income)
        .then(() => this.getIncomes())
        .catch(err => console.log(err))
    },
    getExpenseCategories() {
      ControlPanelService.getExpenseCategories()
        .then(res => (this.expense_categories = res.data))
        .catch(err => console.log(err))
    },
    addExpense(expense) {
      this.showAddExpense = false
      ControlPanelService.addExpense(expense)
        .then(() => this.getExpenseCategories())
        .catch(err => console.log(err))
    },
    addExpenseCategory(category) {
      this.showAddExpense = false
      ControlPanelService.addExpenseCategory(category)
        .then(() => this.getExpenseCategories())
        .catch(err => console.log(err))
    },
    deleteCategory(id) {
      ControlPanelService.deleteCategory(id)
        .then(() => this.getExpenseCategories())
        .catch(err => console.log(err))
    }
  },
  created() {
    this.getIncomes()
    this.getExpenseCategories()
  }
}
</script>

<style></style>
