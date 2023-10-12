import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Switch,Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoute = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path='/marvel' component={ MarvelScreen } />
          <Route exact path='/hero/:heroeId' component={ HeroesScreen } />
          <Route exact path='/dc' component={ DcScreen } />
          <Route exact path='/heroFiltered' component={ SearchScreen } />

          <Redirect to='/marvel'/>
        </Switch>
      </div>
    </>
  )
}
