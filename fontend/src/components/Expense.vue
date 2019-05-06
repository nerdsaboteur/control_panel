<template>
    <div class="expense-category-detail"
    v-bind:class="{ 'paid': exp.paid }">
            <div>
                <input type="text" name="title"
                v-model="exp.title" />
            </div>
            <div>
                <input type="text" name="duedate"
                v-model="exp.duedate" 
                 />
            </div>
            <div>
                 <input type="text" name="amount"
                  v-model="exp.amount" />
             </div>
             <div>
                 <i 
                 v-bind:class="{ 'far fa-check-square fa-lg': exp.paid, 'fas fa-exclamation fa-lg': !exp.paid }"
                 @click="exp.paid = !exp.paid"></i>
             </div>
    </div>
</template>

<script>
export default {
    name: "expense",
    props: ["exp"]
}
</script>

<style scoped>
.paid{
    background:#eee;
}
.paid > div > input[type='text']{
    background:#eee;
    padding:12px;
}
.far, .fas{
    margin:12px;
}
</style>


