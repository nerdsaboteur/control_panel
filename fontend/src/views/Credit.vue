<template>
<div class='container'>
    <div class="finance-wrapper">
        <div class="title-block"><h2>Credit</h2></div>
        <div class="menu-block">
            <SubMenu />
        </div>
    </div>
    <div class="content-block">
        <div class="credit-summary">
             <CreditAdd />
            <div class="credit-item-header">
                <div><h4>Card Name</h4></div>
                <div><h4>Payment Date</h4></div>
                <div><h4>Credit Limit</h4></div>
                <div><h4>Payment Amt.</h4></div>
                <div><h4>Available</h4></div>
                <div></div>
            </div>
            
             <div v-bind:credit="credit">
                 <div  v-for="c in credit" v-bind:key="c.id">
                    <Credit v-bind:c = "c" />
                </div>
            </div>
           
            <div class="credit-item-footer">
                <div></div>
                <div></div>
                <div><h4>${{ available_total }}</h4></div>
                <div><h4>${{ payment_total }}</h4></div>
                <div><h4>${{ limit_total }}</h4></div>
                <div></div>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import SubMenu from '@/components/SubMenu.vue';
import Credit from '@/components/Credit.vue';
import CreditAdd from '@/components/CreditAdd.vue';

export default {
    name: "credit",
    components: {
        SubMenu,
        Credit,
        CreditAdd
    },
    data(){
        return {
            limit_total: 0,
            available_total: 0,
            payment_total: 0,
            credit: [
                {
                    id: 1,
                    title: 'credit 1',
                    duedate: '1/1/2019',
                    payment: 123,
                    available: 345,
                    limit: 567,
                    paid: true
                },
                {
                    id: 2,
                    title: 'credit 2',
                    duedate: '1/1/2019',
                    payment: 123,
                    available: 345,
                    limit: 567,
                    paid: false
                },
                {
                    id: 3,
                    title: 'credit 3',
                    duedate: '1/1/2019',
                    payment: 123,
                    available: 345,
                    limit: 567,
                    paid: true
                }
            ]
        }
    },
    created(){
        this.credit.forEach( item => {
            this.limit_total += item.limit
        });
        this.credit.forEach( item => {
            this.available_total += item.available
        });
         this.credit.forEach( item => {
            this.payment_total += item.payment
        });


    }
}
</script>

<style>
.credit-summary{
    margin-top:20px;
} 
.credit-add{
    display:grid;
    grid-template-columns: 20% 20% 15% 15% 15% 5%;
    grid-column-gap: 1em; 
}
.credit-item-header{
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1em;
    text-align:center;
    background:#ccc;
    padding:6px;
    margin-bottom:6px;
}

.credit-item-header > div:first-child{
    text-align: left;
}
.credit-item-header > div:nth-child(2){
    text-align: center;
}
.credit-item-footer{
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1em;
    background:#ccc;
    padding:6px;
    margin-top:6px;
}
.credit-item{
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1em;
}
.credit-item > div{
    text-align: center;
}

.credit-item input[type='text']{
    border:none;
    padding:8px;
    text-align: center
}
</style>