<template>
    <div class="income-detail">
        <div>
            <input type="text" name="title"
            v-model="inc.title" 
            @change="$emit('edit-income', inc._id)" />
        </div>
        <div>
            <input type="text" name="duedate"
            v-model="inc.duedate"
            @change="$emit('edit-income', inc._id)" />
        </div>
        <div>
            <input type="text" name="nextdate"
            v-model="inc.nextdate"
            @change="$emit('edit-income', inc._id)" />
        </div>
        <div>
            <input type="text" name="recurance"
            v-model="inc.recurance"
            @change="$emit('edit-income', inc._id)" />
        </div>
        <div>
            <input type="text" name="amount"
            v-model="inc.amount"
            @change="$emit('edit-income', inc._id)" />
        </div>
    </div>
</template>

<script>

export default {
    name: "income",
    props: ["inc"]
}
</script>

<style scoped>
.income-detail input[type='text']{
    padding:12px;
    border:0px;
    background:#fff
}
.income-detail > div:first-child > input[type='text']{
    padding:12px;
    border:0px;
    background:#eee
}
</style>
