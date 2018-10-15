<template>
  <div class="survey">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'survey-component'
  }
</script>

<style lang="sass">
  @import '../sass/colours'

  .survey
    padding: 0 1rem

    #inner
      p
        padding-bottom: 0
        border-bottom: 1px solid #fff
        transition: border-bottom-color .2s ease, padding-bottom .2s ease
        position: relative

        &:not(:last-child):before
          content: attr(data-section)
          position: absolute
          pointer-events: 0
          opacity: 0
          transition: opacity .2s ease
          top: 50%
          right: 110%
          transform: translateY(-50%)
          color: $green
          width: 150px

        &:not(:last-child):hover
          padding-bottom: 0.5rem
          border-bottom-color: $green

          &:before
            opacity: 1

      p:last-child
        margin-top: 1rem

    @media screen and (min-width: 992px)
      max-width: 50%
</style>
