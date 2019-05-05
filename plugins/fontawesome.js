import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faQuestionCircle,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
// Doc: https://github.com/FortAwesome/vue-fontawesome

// FontAwesome Core Icons
library.add(faHeart)
library.add(faQuestionCircle)
library.add(faSpinner)

// FontAwesome Brand Icons
library.add(faTwitter)
library.add(faGithub)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
