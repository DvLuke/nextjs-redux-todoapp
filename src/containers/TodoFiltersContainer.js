import { connect } from 'react-redux'
import TodoFilters from '../components/TodoFilters'
import { setFilters } from '../store/actions'

const mapStateToProps = state => ({
  name: state.filters.filter,
  error: state.todos.error,
})

const mapDispatchToProps = dispatch => ({
  setFilters: name => dispatch(setFilters(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters)