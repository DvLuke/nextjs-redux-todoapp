import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoFilters from '../components/TodoFilters'
import { setFilters } from '../store/actions'
import { errorCatcher } from '../store/actions/actionCreators'

const mapStateToProps = state => ({
  name: state.filters.filter,
  error: state.todos.error || '',
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilters: name => setFilters(name),
  errorCatcher: message => errorCatcher(message)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters)