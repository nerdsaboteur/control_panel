<template>
    <div>

          {{ priority.title }}
    </div>
</template>

<script>
export default {
    name: "priorityitem",
    props: ["priority"],
    methods: {
    }
}
</script>

<style>
.is-completed{
  text-decoration: line-through;
}
.del{
  font-size:.9em;
  float:right;
  border-radius:50%;
  box-shadow:none;
  border:none;
  padding:6px 12px;
}
</style>
