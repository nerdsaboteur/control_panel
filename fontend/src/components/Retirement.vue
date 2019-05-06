<template>
    <div class='container'>
        <div class="finance-wrapper">
            <div class="title-block"><h2>Retirement</h2></div>
            <div class="menu-block">
                <SubMenu />
            </div>
        </div>
        <div class="content-block">

        </div>
    </div>
</template>

<script>
import SubMenu from '@/components/SubMenu.vue';

export default {
    name: "retirement",
    components: {
        SubMenu
    }
}
</script>
