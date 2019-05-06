<template>
  <div>
    <div class="row border border-outline-dark p-0">
      <div class="col-3"></div>
      <div class="col-2">
        <p class="pt-2 pb-0" style="text-align:center">Projected</p>
      </div>
      <div class="col-2">
        <p class="pt-2 pb-0" style="text-align:center">Actual</p>
      </div>
      <div class="col-2">
        <p class="pt-2 pb-0" style="text-align:center">Due</p>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row box-block p-0" v-for="expense in expenses" :key="expense">
      <div class="col-3 p-0">
        <input type="text" v-model="expense.label" />
      </div>
      <div class="col-2 p-0">
        <input type="text" v-model="expense.projected" />
      </div>
      <div class="col-2 p-0">
        <input type="text" v-model="expense.actual" />
      </div>
      <div class="col-2 p-0">
        <input type="text" v-model="expense.duedate" />
      </div>
      <div class="col-1 p-0">
        <i
          class="fas fa-check-square fa-lg pt-1"
          v-if="expense.paid === '1'"
          @click="expense.paid = '0'"
        ></i>
        <i
          class="far fa-sticky-note fa-lg"
          @click="expense.paid = '1'"
          v-else
        ></i>
      </div>
      <div class="col-1 p-0">
        <i class="fas fa-edit" @click="expense.notes = 'Add Note'"></i>
      </div>
      <div class="col-1 p-0">
        <i
          class="far fa-save fa-lg"
          @click="
            updateExpenseInline(expense._id, {
              label: expense.label,
              projected: expense.projected,
              actual: expense.actual,
              duedate: expense.duedate,
              notes: expense.notes,
              paid: expense.paid
            })
          "
        ></i>
      </div>
      <div class="col-12 p-0" v-if="expense.notes != ''">
        <textarea
          v-model="expense.notes"
          style="width:100%;height:60px;padding:10px"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanelService from '@/services/ControlPanelService.js'

export default {
  props: ['cat'],
  data() {
    return {
      expenses: '',
      expense: {
        label: '',
        projected: '',
        actual: '',
        duedate: '',
        paid: ''
      }
    }
  },
  methods: {
    getExpensesByCategory(cat) {
      ControlPanelService.getExpensesByCategory(cat)
        .then(res => (this.expenses = res.data))
        .catch(err => console.log(err))
    },
    updateExpenseInline(id, expense) {
      if (expense.label != '') {
        ControlPanelService.updateExpenseInline(id, expense)
          .then(() => {})
          .catch(err => console.log(err))
      } else {
        ControlPanelService.deleteExpense(id)
          .then(() => {})
          .catch(err => console.log(err))
      }
    }
  },
  created() {
    this.getExpensesByCategory(this.cat.label)
  }
}
</script>

<style></style>
