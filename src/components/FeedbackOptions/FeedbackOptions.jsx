
import PropTypes from 'prop-types';
import { ListButton, ItemButton, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({option, onLeaveFeedback}) => {
    return (
        <ListButton>
        {option.map(el => (
            <ItemButton key={el}>
                <Button type="button" onClick={() => onLeaveFeedback(el)}>{el}</Button>
            </ItemButton>
        ))}
        </ListButton>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;