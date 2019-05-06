<template>
    <div class='container'>
        <div class="finance-wrapper">
            <h2>Budget</h2>
        </div>
        <div class="content-block">
            <div class="income">
                <div class="title-block-inner">
                    <div><h2>Income</h2></div>
                </div>
                
                    <!---start income add--->

                <div class="income-add-section">
                    
                    <div class="income-add">
                        <div>
                            <select name="type">
                                <option>Type of Income</option>
                                <option value="projected">Projected</option>
                                <option value="actual">Actual</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" name="title"
                            placeholder="Title" />
                        </div>
                        <div>
                            <input type="text" name="duedate"
                            placeholder="Due Date" />
                        </div>
                        <div>
                            <input type="text" name="amount"
                            placeholder="Amount" />
                        </div>
                        <div>
          
                            <i class="fas fa-plus-circle fa-2x"
                            @click="$emit('add-income')"></i>
                        </div>
                    </div>
                </div>

                <!---end income add --->
                
                <!---start income items--->

                <div class="income-section">
                    <div class="income-projected">
                        <div><h2>projected</h2></div>
                        <div>
                            <div
                            v-for="inc of projected"
                            v-bind:key="inc._id">
                                <Income v-bind:inc = "inc"
                                v-on:edit-income="$emit('edit-income', inc._id)" />
                            </div>
                       </div>
                    </div>
                    <div class="income-actual">
                        <div><h2>actual</h2></div>
                        <div>
                            <div v-for="inc of actual"
                                v-bind:key="inc._id">
                                <Income v-bind:inc = "inc"
                                v-on:edit-income="$emit('edit-income', inc._id)" />
                            </div>
                        </div>
                    </div>
                </div>

                
                    <!---end income items--->
            </div>
            <div class="expense">
                <div class="title-block-inner">
                    <div><h2>Expense</h2></div>
                </div>

                <div class="expense-add-section">
                    <div class="expense-add">
                        <select name="category">
                            <option>Type of Expense</option>
                            <option v-for="cat in expensecategory"
                             v-bind:key="cat.id">
                                {{ cat.title }}
                            </option>
                        </select>
                        <div>
                            <input type="text" name="title"
                            placeholder="Title" />
                        </div>
                        <div>
                            <input type="text" name="duedate"
                            placeholder="Due Date" />
                        </div>
                        <div>
                            <input type="text" name="amount"
                            placeholder="Amount" />
                        </div>
                        <div>
                           
                             <i class="fas fa-plus-circle fa-2x"
                            @click="$emit('add-expense')"></i>
                        </div>
                    </div>
                </div>



                <div class="expense-section">

                    <!---start expense items--->

                    <div class="expense-category"
                         v-for="cat in expensecategory" 
                         v-bind:key="cat.id" >
                         <ExpenseCategory v-bind:cat="cat" />

                          <div v-for="exp in expense"
                              v-bind:key="exp.id">
                             <Expense v-bind:exp="exp" />
                         </div> 
                    </div>

                    <!---end expense items--->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Income from "@/components/Income.vue";
import Expense from "@/components/Expense.vue";
import ExpenseCategory from "@/components/ExpenseCategory.vue";
import axios from 'axios'

export default {
  name: "budget",
  props: ["expensecategory","expense", "projected", "actual" ],
  components: {
      Income, 
      Expense,
      ExpenseCategory
  }
}
</script>

<style>
.title-block-inner{
    display:grid;
    grid-template-columns: repeat(2, 90% 10%);
    grid-gap:1em;
    background: #eee;
    padding:20px;
    border: 1px solid #ccc;
}
.title-block-inner > div > a > .fa-plus{
    color:#333;
    text-decoration:none
}
.income-section{
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap:1em;
}
.income-add-section, .expense-add-section{
    padding:10px;
}
.income-add, .expense-add{
    display:grid;
    /* grid-template-columns: repeat(5, 1fr); */
    grid-template-columns: 20% 25% 25% 20% 5%;
    grid-gap:1em;
}
.income-add select,.expense-add select{
    padding:12px;
    margin-top: 6px;
    width:100%;
    max-height:42px
}

.expense-section{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:1em;
    margin-top:6px;
}
.income, .expense{
    margin:6px;
    padding:20px;
    border:1px solid #ccc
}
.income-projected, .income-actual{
    display:grid;
    grid-template-columns: 1fr;
}
.income-projected > div, .income-actual > div{
    border:1px solid grey;
    margin:6px;
    padding:20px;
}
.income-detail{
  display:grid;
  grid-template-columns: repeat(5, 20%);
}
.income-detail > div{
    padding:6px;
    border-bottom:1px solid #ccc
}
.income-detail > div:first-child{
    background:#eee;
}
.expense-category{
    border:1px solid #ccc;
    padding:4px;
}
.expense-category-header{
    display:grid;
    grid-template-columns: 70% 30%;
    border-bottom:1px solid #ccc;
}

.expense-category-header a{
    text-decoration:none;
    color:#333;
}
.expense-category-header > div > a > i{
    margin:4px;
}

.expense-category-detail{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
}
.expense-category-detail > div:first-child{
    background:#eee;
}
.expense-category-detail > div{
    padding:6px;
    border-bottom:1px solid #ccc
}
.expense-category-detail > div:first-child > input[type='text']{
    background:#eee
}
.expense-category-detail > div > input[type='text']{
    border:none;
    padding:6px
}
.fa-plus-circle{
    margin-top:12px;
}
</style>

