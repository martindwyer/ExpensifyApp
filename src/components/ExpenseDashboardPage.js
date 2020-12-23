import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import { ExpensesSummary } from './ExpensesSummary'

class ExpenseDashboardPage extends React.Component {
  render () {
    return (
      <div>
        <p>Dashboard Page</p>
        <div>
          <ExpensesSummary />
          <ExpenseListFilters />
          <ExpenseList />
        </div>
      </div>
    )
  }
}

export default ExpenseDashboardPage
