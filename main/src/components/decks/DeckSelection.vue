<template>
  <div class='layout'>
    <div class='cards_container'
         v-for='card in all_decks'
         v-bind:key='card.id'>
      <div class='card'
        @click='selected_deck'>
        {{ card.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deck-selection',
  data() {
    return {
      all_decks: this.$store.state.decks_names,
    };
  },

  methods: {
    selected_deck(value) {
      this.$store.state.selected_deck = value.code;
      console.log(this.$store.state.selected_deck);
    },
  },
};
</script>

<style lang='scss'>
  .cards_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    flex: 0 1 24%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    margin: 1rem;
    padding: 3rem 5rem;
    font-weight: bold;
    cursor: pointer;
  }
  .card:hover {
    background-color: #E9897E;
    color: white;
  }
</style>
