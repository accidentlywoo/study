<template>
  <div v-if="data.length">
    <ul>
      <li v-for="item in data">
        <img v-bind:src="item.image"> {{item.name}}
      </li>
    </ul>
  </div>

  <div v-else>
    {{query}}검색어로 찾을 수 없습니다.
  </div>
</template>

<script>
export default {
  template:'#search-result',
  props:  ['data','query']
}
</script>

<style lang="css">
</style>
