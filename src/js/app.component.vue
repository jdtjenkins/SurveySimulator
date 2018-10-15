<template>
  <div id="survey-simulator">
    <div class="header">
      <h1>Survey Simulator</h1>
    </div>
    <div id="mobile-message">
      <p>What? You expected a mobile version? Who do you think I am?</p>
      <small>Bloody lazy developers</small>
      <p>Go look on a computer fam... Or a really wide phone</p>
      <div class="lazy-dev">🛏️LazyDev<span>TM</span></div>
    </div>
    <div class="container">
      <div id="left">
        <survey-component>
          <div id="inner" v-html="surveyComputed"></div>
        </survey-component>
      </div>
      <div id="right">
        <section-picker
          :sections="sectionKeys"
          @section-clicked="toggleSection"
          @remove-section="removeSection"
          ></section-picker>
      </div>
    </div>
    <portal-target name="mobileSectionPicker" slim></portal-target>
  </div>
</template>

<script>
  import SectionPicker from './section-picker.component';
  import SurveyComponent from './survey.component';

  export default {
    name: 'app-component',
    components: {
      SectionPicker,
      SurveyComponent
    },
    data() {
      return {
        survey: {
          opener: {
            title: `an <span class="title">opener</span>`,
            description: `This is what kicks everything off. This is usually catchy and snappy. Or something, I dunno.`,
            value: '',
          },
          middle: {
            title: `a <span class="title">middle</span>`,
            description: 'You gotta have a middle bit. This adds more information to your survey answer, or at least it adds something.',
            value: '',
          },
          ending: {
            title: `an <span class="title">ending</span>`,
            description: 'An ending is like a nice bow, tying up your gift of an awesome survey answer.',
            value: '',
          },
          joke: {
            title: `a <span class="title">joke</span>`,
            description: 'A little joke to lighten the mood. Research shows jokes make a survey more likeable, and therefore more likely to get keys.',
            value: '',
          },
          coffeeStainRefence: {
            title: `a <span class="title">Coffee Stain reference</span>`,
            description: 'Just a quick little nod to the developers, let them know how much you enjoy their games with a very obscure reference that, probably only the devs would get.',
            value: '',
          },
          // Yeah not sure this section was really that good an idea
          // rambling: {
          //   title: `whaaaaaaa...?`,
          //   description: 'So I went to Morganville, which was what they called Shelbyville in those days. I tied an onion to my belt, which was the style at the time. Now today the ferry costs a nickel...',
          //   value: '',
          // },
        },
        wittyStuff: {
          opener: [
            `Hey, It's me, Jumper; your friendly neighbourhood LazyDev<sup>TM</sup>. I saw your alpha key survey and thought to myself "Hey. Why should I have to fill in a survey? Can't something else do it for me?". Turns out - yes it can!`,
            `To Whom it may concern,`,
            `Yo yo yo waddup it's lil J, heard a lil somethin bout some keys`,
            `To my dearest Jace`,
            `I'm not sure what this is, but hey since I'm here:`,
            `Dear Caterina Parks,`,
            `JAAAAA`,
          ],
          middle: [
            `I wrote this basically... I don't really know why anymore... But hey, it may be a good quick laugh for the Coffee Stain office? Click the buttons on the right, go crazy, pick your best paragraph and that is my answer to the survey.`,
            `I am a factory expert. I am a connoisseur of pipes and petroleum. I have built train netorks the likes of which... The world has never seen the likes of which!`,
            `Ima here to get crazy up in this. I see yo factory, yo bug dogs and ima sayin ima build this motha from the ground homie`,
            `Please oh please sir may I have an alpha key! It's my biggest wish ever! Ever since I found out I had to apply just yesterday.`,
            `Gimme the damn key, fool!`,
            `Keys and me... Me and keys... That's been quite the roller coaster hasn't it?`,
            `Jag talar inte svenska, men kanske några trevliga Google översatta svenska hjälper dig att bestämma om min ansökan.`,
            `... No seriously... Is this like a Minecraft thing or...?`,
            `Chop chop, dig dig. Chop chop, dig dig. Chop cop, dig dig.`,
            `Yeeeah if you could go ahead and get that key on my desk by 5, that'd be great.`,
            `I'm really only buying this game for lizard doggos...`,
            `CCCCCCCC`,
          ],
          ending: [
            `Yeah so to sum up, keep doing what you're doing. Stay cool, love ya lots, can't wait for Sanctumorio Simulator!`,
            `Not too sure how to end this... Not sure if this is the answer you were looking for... Welp, it's been fun... `,
            `Hejdå min älskling. Vi ses väldigt snart på fabriken. Du tar rören, jag tar med Köttbullar. Makes sense? Who knows... Google translate mate.`,
            `Yeah I just needed to bump the numbers of endings up... Kept getting the same ones over and over... Another great product from the LazyDev<sup>TM</sup>... Ya'll ever see that film the Martian? I hope we can grow potatoes in this game... Yep... Potatoes...`,
            `Thank you for checking out Survey Simulator, I hope it was at least marginally better than an answer full of obscure Factorio references. The hype for this game is 10/10 and I can't wait to get building.`,
            `This whole thing would've been done quicker, but I had to go back and play everything Coffee Stain again.`,
            `EEEEEEE!!!`
          ],
          coffeeStainRefence: [
            `Sup, I don't know if you'll even ever see this, but if you do tell Leonard they are awesome!`,
            `BLOOD FOR THE BLOOD GOAT!`,
            `Something something Skye Autumn something something.`,
            `Yeah I mean this game looks ok... But I think I'll wait for the Yogscast DLC though tbh.`,
            `Sanctum 3 when?`,
            `Jeez Coffee Stain and their simulators... Alien simulator, Goat simulator, Nephew simulator, Factory simulator`,
            `I mean this isn't really a reference... But hot damn that moment when you step out the cave with the one-eyed monster and see absolute scale of the other village... Damn`,
          ],
          joke: [
            `Hey so yeah let's get some jokes going, lighten the mood... What do you call a goat with one ear? Van Goat...`,
            `Oh jeez, is this section meant to be funny?`,
            `What do you call a goat at sea? Billy Ocean`,
            `What do you call a goat playing the piano? Billy Joel`,
            `Jeez these are terrible... They are terribly baaaad`,
            `I don't know... Something about how Goat Simulator is actually Kendrick Lamar simulator... But it'd be GOAT simulator... I don't know, it's late, I don't know why I'm stil making this...`,
            `I don't know if these translate well to Swedish... Let's try it: Vad kallar du en get som vet kampsport? Karate barn. Hahahaha omg amirite`,
            `Hey what's the capital of Sweden? <strong>Goat</strong>enberg...... It's... It's actually Stockholm. I've seen Eurovision.`,

          ],
          // rambling: [
          //   `I remember when `
          // ]
        }
      }
    },
    computed: {
      surveyComputed() {
        return `
          ${Object.keys(this.survey).map(key => {
            if (this.survey[key].value !== ''){
              return `<p data-section="The ${key}">${ this.survey[key].value }</p>`;
            }
          }).join(' ')}
          <p>Thanks,<br>Jumper</p>
        `;
      },
      sectionKeys() {
        return Object.keys(this.survey).map(key => {
          return {
            key,
            description: this.survey[key].description,
            active: !!this.survey[key].value.length,
            title: this.survey[key].title
          }
        });
      }
    },
    methods: {
      toggleSection(section){
        const newValue = this.wittyStuff[section][Math.floor(Math.random() * this.wittyStuff[section].length)];

        if (this.survey[section].value === newValue){
          this.toggleSection(section);
        }

        this.survey[section].value = newValue;
      },
      removeSection(section){
        this.survey[section].value = '';
      }
    },
    created() {
      this.survey.opener.value = this.wittyStuff.opener[0];
      this.survey.middle.value = this.wittyStuff.middle[0];
      this.survey.ending.value = this.wittyStuff.ending[0];
    }
  }
</script>

<style lang="sass" scoped>
  @import '../sass/colours'

  #survey-simulator
    height: 100vh
    max-height: 100vh
    min-height: 100vh
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start
    position: relative

    .header
      width: 100%
      box-shadow: 3px 0 3px rgba(0,0,0,0.2)
      position: relative
      z-index: 3
      background: linear-gradient(30deg, darken($orange, 6%), $orange, darken($orange, 6%))

      h1
        font-size: 2rem
        text-align: center
        font-family: 'Abril Fatface', cursive
        font-weight: 500
        color: $dark

    #mobile-message
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      height: 100%
      width: 100%
      text-align: center
      padding: 2rem 1rem
      position: relative

      @media screen and (min-width: 992px)
        display: none

      .lazy-dev
        //margin-top: auto
        color: rgba(0, 0, 0, 0.3)
        vertical-align: middle
        position: absolute
        bottom: 1rem

        span
          vertical-align: super
          font-size: 0.6rem

    .container
      width: 100%
      height: 100%
      display: none
      align-items: center
      justify-content: center
      overflow: hidden

      @media screen and (min-width: 992px)
        display: flex

      #left, #right
        position: relative
        z-index: 2
        height: 100%

      #left
        flex-grow: 1
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        font-size: 1rem

        @media screen and (min-width: 992px)
          max-width: 75%


      #right
        flex-shrink: 1
        display: none
        box-shadow: -2px 0 10px rgba(0,0,0,0.2)
        align-items: center
        justify-content: center
        max-width: 25%
        overflow-y: auto

        @media screen and (min-width: 992px)
          display: block
</style>
