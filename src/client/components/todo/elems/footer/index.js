import Component from 'lib/component';
import TodoFooterModel from './model';
import styles from './styles.css';

export default class TodoFooter extends Component {
  /**
   * @override
   */
  constructor(props) {
    super(props);

    /**
     * @type {Object}
     */
    this.state = {
      uncompleted: 0,
      isHidden: true,
      hasCompleted: false
    };
  }

  /**
   * Handles clear button 'click' event
   * @protected
   */
  _handleClearButtonClick() {
    this._model.clearCompleted();
  }

  /**
   * @override
   */
  render() {
    let stls = this._styles;
    let state = this.state;
    let uncompleted = state.uncompleted;
    let todoFooterStyles;

    if (state.isHidden) {
      todoFooterStyles = stls.todoFooterIsHidden;
    } else if (state.hasCompleted) {
      todoFooterStyles = stls.todoFooterHasCompleted;
    } else {
      todoFooterStyles = stls.todoFooter;
    }

    return (
      <footer
        className={todoFooterStyles}>
        <span className={stls.counter}>{uncompleted} items left</span>
        <button
          className={stls.clearButton}
          onClick={this._handleClearButtonClick.bind(this)}>
          Clear completed
        </button>
      </footer>
    );
  }
}

TodoFooter.defaultProps = {
  styles,
  model: TodoFooterModel
};