import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
	faHeart as fasHeart,
	faShoppingCart,
	faCartPlus,
	faPlus,
	faMinus,
	faChevronLeft,
	faChevronDown,
	faTimesCircle,
	faUser
} from '@fortawesome/free-solid-svg-icons'

import {
	faHeart as farHeart
} from '@fortawesome/free-regular-svg-icons'

library.add(
	faPlus,
	faMinus,
	fasHeart,
	farHeart,
	faShoppingCart,
	faCartPlus,
	faChevronLeft,
	faChevronDown,
	faTimesCircle,
	faUser
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
