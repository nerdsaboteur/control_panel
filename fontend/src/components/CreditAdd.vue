<template>
    <div class="credit-add">
                <div>
                    <input type="text" name="title" placeholder="Title" />
                </div>
                <div>
                    <input type="text" name="duedate" placeholder="Due Date" />
                </div>
                <div>
                    <input type="text" name="payment" placeholder="Payment" />
                </div>
                <div>
                    <input type="text" name="available" placeholder="Available" />
                </div>
                <div>
                    <input type="text" name="limit" placeholder="Limit" />
                </div>
                <div>
                     <i class="fas fa-plus-circle fa-2x"
                            @click="$emit('add-credit')"></i>
                </div>
            </div>
</template>
