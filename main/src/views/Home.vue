<template>
  <div class='home'>
    <h1>{{ msg }}</h1>
    <img src='../assets/supreme_bear.png' alt='Supreme Bear' width='100'>
    <p>
      Welcome to Spicy Water. An online way to interact and play with
      friends online!
    </p>
    <p>
      Select what deck you want to play with!
    </p>
    <deck-selection></deck-selection>
  </div>
</template>

<script>
import DeckSelection from '../components/decks/DeckSelection.vue';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Spicy Water',
    };
  },
  components: {
    'deck-selection': DeckSelection,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
