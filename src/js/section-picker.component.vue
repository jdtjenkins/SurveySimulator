<template>
  <div id="section-picker">
    <div class="sections">
      <div
        class="section"
        v-for="section in sections"
        :class="{active: section.active}">
        <h3>Add <span v-html="section.title"></span></h3>
        <hr>
        <p>{{ section.description }}</p>
        <div class="buttons">
          <div class="random"
            @click="onClick(section.key)">
            <span>Random</span>
            <i class="fas fa-dice"></i>
          </div>
          <div class="remove"
            @click="onRemoveSection(section.key)">
            <span>Remove</span>
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'section-picker',
    props: ['sections'],
    methods: {
      onClick(section) {
        this.$emit('section-clicked', section);
      },
      onRemoveSection(section) {
        this.$emit('remove-section', section);
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../sass/colours'

  #section-picker
    .sections
      .section
        padding: 1rem
        padding-left: 2rem
        cursor: pointer
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none

        &.active
          border-left: 2px solid $green

        &:not(:last-child)
          border-bottom: 1px solid rgba(0,0,0,0.2)

        h3
          font-size: 1.4rem
          font-weight: 500
          font-family: 'Abril Fatface', cursive

        hr
          width: 25%
          margin: 1rem 0
          padding: 0

        p
          font-size: 1rem

        .buttons
          display: flex
          align-items: center
          justify-content: center
          font-size: 1.1rem
          height: 1.5rem

          .random, .remove
            flex-grow: 1
            position: relative
            height: 1.5rem

            span, svg
              position: absolute
              top: 50%
              transform: translateX(-50%) translateY(-50%)
              transition: opacity .2s, left .2s, top .2s

            span
              left: 25%
              opacity: 0

            svg
              left: 50%

          &:hover
            span
              left: 50%
              opacity: 1
            svg
              left: 10%

          .random
            color: $orange

          .remove
            color: $red
</style>
