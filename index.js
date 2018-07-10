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

const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = {
  title: 'Camel Grill',
  route: '/',
  routeHistory: [],
  menu: [
    {route: '/menu', label: 'Menu'},
    {route: '/about', label: 'About'},
    {route: '/location', label: 'Location'},
    {route: '/hours', label: 'Hours'},
    {route: '/contact', label: 'Contact'}
  ]
}

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
