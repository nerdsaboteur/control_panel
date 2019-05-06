<template>
  <div class="container">
    <NavBar />
    <div class="row">
      <div class="col-7">
        <!---breadcrumbs--->

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="background:#fff">
            <li class="breadcrumb-item">Finances</li>
            <li class="breadcrumb-item" v-if="this.showItem === 'summary'">
              Summary
            </li>
            <li class="breadcrumb-item" v-if="this.showItem === 'budget'">
              Budget
            </li>
            <li class="breadcrumb-item" v-if="this.showItem === 'credit'">
              Credit
            </li>
            <li class="breadcrumb-item" v-if="this.showItem === 'retirement'">
              Retirement
            </li>
          </ol>
        </nav>

        <!---breadcrumbs--->
      </div>
      <div class="col-5 pt-2">
        <!---submenu--->

        <div class="btn-group" role="group">
          <button
            @click="showItem = 'summary'"
            type="button"
            class="btn btn-info"
          >
            Summary
          </button>
          <button
            @click="showItem = 'budget'"
            type="button"
            class="btn btn-info"
          >
            Budget
          </button>
          <button
            @click="showItem = 'credit'"
            type="button"
            class="btn btn-info"
          >
            Credit
          </button>
          <button
            @click="showItem = 'retirement'"
            type="button"
            class="btn btn-info"
          >
            Retirement
          </button>
        </div>
        <!---submenu--->
      </div>
    </div>
    <div class="box-row border border-outline-dark">
      <Summary v-if="this.showItem === 'summary'" />
      <Budget v-if="this.showItem === 'budget'" />
      <Credit v-if="this.showItem === 'credit'" />
      <Retirement v-if="this.showItem === 'retirement'" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Summary from '@/components/Summary.vue'
import Budget from '@/views/Budget.vue'
import Credit from '@/components/Credit.vue'
import Retirement from '@/components/Retirement.vue'

export default {
  data() {
    return {
      showItem: ''
    }
  },
  components: {
    NavBar,
    Summary,
    Budget,
    Credit,
    Retirement
  },
  created() {
    this.showItem = 'summary'
  }
}
</script>

<style></style>
