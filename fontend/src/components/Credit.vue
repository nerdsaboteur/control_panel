<template>
    <div class="credit-item" v-bind:class="{ 'paid': c.paid }">
        <div>
            <input type="text" name="title"
            v-model="c.title" />
        </div>
        <div>
            <input type="text" name="duedate"
            v-model="c.duedate" />
        </div>
        <div>
            <input type="text" name="available"
            v-model="c.available" />
        </div>
        <div>
            <input type="text" name="payment"
            v-model="c.payment" />
        </div>
        <div>
            <input type="text" name="limit"
            v-model="c.limit" /></div>
        <div>
            <i 
                 v-bind:class="{ 'far fa-check-square fa-lg': c.paid, 'fas fa-exclamation fa-lg': !c.paid }"
                 @click="c.paid = !c.paid"></i>
        </div>
    </div>  
</template>

<script>

export default {
    name: "credit",
    props: ["c"]
}
</script>

<style scoped>
.paid{
    background:#eee;
}
.paid > div > input[type='text']{
    background:#eee;
}
.fas, .far{
    margin-top:12px;
    margin-right:18px;
}
</style>