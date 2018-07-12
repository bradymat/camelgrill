import { createStore } from 'redux'
import { update } from 'yo-yo'
import Router from 'sheet-router'

import reducer from './reducer'

import Home from './components'
import Menu from './components/menu'
import About from './components/about'
import Location from './components/location'
import Hours from './components/hours'
import Contact from './components/contact'
import CreateState from './initState'

const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = CreateState()


const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/info', (params) => Info],
  ['/menu', (params) => Menu],
  ['/about', (params) => About],
  ['/location', (params) => Location],
  ['/hours', (params) => Hours],
  ['/contact', (params) => Contact]
])

subscribe(() => {
  const state = getState()
  const newView = route(state.route)(state, dispatch)
  update(initView, newView)
})

dispatch({type: 'lemon'})
